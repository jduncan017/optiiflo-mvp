import { NextResponse } from "next/server";
import { cookies } from "next/headers";
import { supabaseAdmin } from "~/lib/supabase/admin";
import { env } from "~/env";

export async function GET() {
  const cookieStore = cookies();
  const baseUrl = env.NEXT_PUBLIC_APP_URL;

  try {
    // Get the email from the cookie
    const verificationEmail = cookieStore.get("verification_email");
    if (!verificationEmail?.value) {
      return NextResponse.redirect(
        new URL(
          `/auth/email-confirm?error=${encodeURIComponent("No verification email found")}`,
          baseUrl,
        ),
      );
    }

    // Use admin client to get the user
    const {
      data: { users },
      error: adminError,
    } = await supabaseAdmin.auth.admin.listUsers();
    if (adminError) {
      console.error("Failed to get user via admin:", adminError);
      return NextResponse.redirect(
        new URL(
          `/auth/email-confirm?error=${encodeURIComponent("Failed to get user after verification")}`,
          baseUrl,
        ),
      );
    }

    const verifiedUser = users?.find(
      (u) => u.email === verificationEmail.value && u.email_confirmed_at,
    );
    if (!verifiedUser) {
      return NextResponse.redirect(
        new URL(
          `/auth/email-confirm?error=${encodeURIComponent("User not found or not verified")}`,
          baseUrl,
        ),
      );
    }

    // Create new membership record
    const membershipResponse = await supabaseAdmin
      .from("memberships")
      .insert({
        primary_member_id: verifiedUser.id,
        subscription_status: "expired",
      })
      .select()
      .single();

    const membershipError = membershipResponse.error;

    if (membershipError) {
      console.error(membershipError);
      return NextResponse.redirect(
        new URL(
          `/auth/email-confirm?error=${encodeURIComponent("Failed to create membership")}`,
          baseUrl,
        ),
      );
    }

    // Create new member record
    const { error: memberError } = await supabaseAdmin
      .from("members")
      .insert({
        user_id: verifiedUser.id,
        first_name: (verifiedUser.user_metadata.first_name as string) ?? "",
        last_name: (verifiedUser.user_metadata.last_name as string) ?? "",
        phone_number: "",
        address: "",
        city: "",
        state: (verifiedUser.user_metadata.state as string) ?? "",
        postal_code: "",
        country: "United States",
        is_primary_member: true,
        email: verifiedUser.email ?? "",
      })
      .select();

    if (memberError) {
      console.error("Failed to create member record:", memberError);
      return NextResponse.redirect(
        new URL(
          `/auth/email-confirm?error=${encodeURIComponent("Failed to create member profile")}`,
          baseUrl,
        ),
      );
    }

    // Clear the verification email cookie
    cookieStore.delete("verification_email");

    // Redirect to success page
    return NextResponse.redirect(
      new URL(
        `/auth/email-confirm?message=${encodeURIComponent("Email verified, you can now close this window and return to your previous session.")}`,
        baseUrl,
      ),
    );
  } catch (error) {
    console.error("Error in resend verification:", error);
    return NextResponse.redirect(
      new URL(
        `/auth/email-confirm?error=${encodeURIComponent("Failed to complete verification process")}`,
        baseUrl,
      ),
    );
  }
}
