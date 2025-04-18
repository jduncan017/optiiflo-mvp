import { createClient } from "~/lib/supabase/server";
import { supabaseAdmin } from "~/lib/supabase/admin";
import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";
import { cookies } from "next/headers";

type RedirectType = "signin" | "signup" | "passwordReset" | "updateEmail";

export async function GET(request: NextRequest) {
  const requestUrl = new URL(request.url);
  const baseUrl = process.env.NEXT_PUBLIC_APP_URL;
  const code = requestUrl.searchParams.get("code");
  const requestType = requestUrl.searchParams.get(
    "requestType",
  ) as RedirectType;

  // Handle error cases first
  const errorDescription = requestUrl.searchParams.get("error_description");
  if (errorDescription) {
    return NextResponse.redirect(
      new URL(
        `/auth/email-confirm?error=${encodeURIComponent(errorDescription)}`,
        baseUrl,
      ),
    );
  }

  const cookieStore = cookies();
  const supabase = await createClient();

  // Set error redirect function
  function setErrorRedirect(error: Error) {
    return new URL(
      `/auth/email-confirm?error=${encodeURIComponent(error.message)}`,
      baseUrl,
    );
  }

  /* --------------------------------------- */
  /*          Sign Up Redirect               */
  /* --------------------------------------- */
  if (requestType === "signup") {
    if (!code) {
      // This is a resend verification, redirect to the resend handler
      return NextResponse.redirect(
        new URL("/auth/callback/resend-verify", baseUrl),
      );
    }

    // Initial verification flow
    const { error: sessionError } =
      await supabase.auth.exchangeCodeForSession(code);
    cookieStore.delete("verification_email");

    if (sessionError) {
      console.error(sessionError);
      return NextResponse.redirect(setErrorRedirect(sessionError));
    }

    // Wait a moment for the session to be properly set up
    await new Promise((resolve) => setTimeout(resolve, 1000));

    // retrieve the user to create new member record
    const {
      data: { user },
      error: userError,
    } = await supabase.auth.getUser();

    if (userError || !user?.id) {
      console.error("Failed to get user:", userError);
      return NextResponse.redirect(
        setErrorRedirect(new Error("Failed to get user after verification")),
      );
    }

    try {
      // Create new user profile
      const { error: profileError } = await supabaseAdmin
        .from("profiles")
        .insert({
          id: user.id,
          role: "owner",
          email: user.email,
          first_name: user.user_metadata.first_name as string,
          last_name: user.user_metadata.last_name as string,
          is_owner: true,
        })
        .select();

      if (profileError) {
        console.error("Failed to create user profile:", profileError);
        return NextResponse.redirect(
          setErrorRedirect(new Error("Failed to create user profile")),
        );
      }

      // URL to redirect to after sign in process completes
      return NextResponse.redirect(
        new URL(
          `/auth/email-confirm?message=${encodeURIComponent(
            "Email verified, you will be directed to the dashboard shortly.",
          )}`,
          baseUrl,
        ),
      );
    } catch (error) {
      console.error("Error in user profile creation:", error);
      return NextResponse.redirect(
        setErrorRedirect(new Error("Failed to complete signup process")),
      );
    }
  }

  /* --------------------------------------- */
  /*          Password Reset Redirect        */
  /* --------------------------------------- */
  if (requestType === "passwordReset") {
    return NextResponse.redirect(
      `${baseUrl}/protected/account-settings/reset-password`,
    );
  }

  /* --------------------------------------- */
  /*          Email Update Redirect          */
  /* --------------------------------------- */
  if (requestType === "updateEmail") {
    // Get the user to update their member record
    const {
      data: { user },
    } = await supabase.auth.getUser();

    if (!user?.id || !user.email) {
      return NextResponse.redirect(
        setErrorRedirect(new Error("Failed to get user details")),
      );
    }

    // Update the email in the members table
    const { error: memberError } = await supabaseAdmin
      .from("members")
      .update({ email: user.email })
      .eq("user_id", user.id);

    if (memberError) {
      console.error("Failed to update member email:", memberError);
      // Continue anyway since auth email is updated
    }

    return NextResponse.redirect(
      `${baseUrl}/protected/dashboard?message=Email updated successfully`,
    );
  }
}
