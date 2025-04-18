"use server";
import { env } from "~/env";
import { createClient } from "~/lib/supabase/server";
import { cookies } from "next/headers";
import { revalidatePath } from "next/cache";
// import { redirect } from "next/navigation";
// import type { MemberDTO } from "~/types/domain/member.types";
// import type { Database } from "~/database.types";
import { supabaseAdmin } from "~/lib/supabase/admin";
// import { sendPasswordUpdateEmail } from "~/lib/email/passwordUpdateEmail";

/* --------------------------------------- */
/*          Sign Up With Password          */
/* --------------------------------------- */
export async function signUpAction(formData: FormData) {
  const supabase = await createClient();
  const email = formData.get("email") as string;
  const password = formData.get("password") as string;

  // First check if user exists and is unverified
  const {
    data: { users },
  } = await supabaseAdmin.auth.admin.listUsers();
  const existingUser = users?.find((user) => user.email === email);

  if (existingUser) {
    // User exists and is verified, return error
    if (existingUser.email_confirmed_at) {
      return { error: "This email is already registered" };
    }

    // User exists but is unverified, resend verification
    const { error } = await supabase.auth.resend({
      type: "signup",
      email: email,
      options: {
        emailRedirectTo: `${env.NEXT_PUBLIC_APP_URL}/auth/callback?requestType=signup`,
      },
    });

    if (error) {
      return { error: error.message };
    }

    const cookieStore = cookies();
    cookieStore.set("verification_email", email);
    return { route: "/auth/verify-email" };
  }

  // Proceed with normal signup for new users
  const { error } = await supabase.auth.signUp({
    email,
    password,
    options: {
      emailRedirectTo: `${env.NEXT_PUBLIC_APP_URL}/auth/callback?requestType=signup`,
      data: {
        first_name: formData.get("firstName") as string,
        last_name: formData.get("lastName") as string,
        state: formData.get("state") as string,
        marketing_consent: formData.get("marketingConsent") as string,
      },
    },
  });

  const cookieStore = cookies();
  cookieStore.set("verification_email", email);

  if (error) {
    throw error;
  }

  return { route: "/auth/verify-email" };
}

/* --------------------------------------- */
/*          Sign In With Password          */
/* --------------------------------------- */
export async function signInAction(formData: FormData) {
  const email = formData.get("email") as string;
  const password = formData.get("password") as string;
  const supabase = await createClient();

  const { error } = await supabase.auth.signInWithPassword({
    email,
    password,
  });

  if (error) {
    return { error: error.message };
  }
  revalidatePath("/");
  return { route: "/protected/dashboard" };
}

/* --------------------------------------- */
/*          Resend Verification            */
/* --------------------------------------- */
export async function resendVerification(email: string) {
  const supabase = await createClient();

  try {
    const { error } = await supabase.auth.resend({
      type: "signup",
      email: email,
      options: {
        emailRedirectTo: `${env.NEXT_PUBLIC_APP_URL}/auth/callback?requestType=signup`,
      },
    });

    if (error) throw error;
    return { success: true };
  } catch (error) {
    throw error;
  }
}

// /* --------------------------------------- */
// /*               Sign Out                  */
// /* --------------------------------------- */
// export async function signOutAction() {
//   const supabase = await createClient();
//   await supabase.auth.signOut();
//   redirect("/auth/signin");
// }

/* --------------------------------------- */
/*          Forgot Password Action         */
/* --------------------------------------- */
export const forgotPasswordAction = async (formData: FormData) => {
  const email = formData.get("email") as string;
  const supabase = await createClient();
  const baseUrl = env.NEXT_PUBLIC_APP_URL;
  const callbackUrl = formData.get("callbackUrl") as string;

  if (!email) {
    return { error: "Email is required" };
  }

  const { error } = await supabase.auth.resetPasswordForEmail(email, {
    redirectTo: `${baseUrl}/auth/callback?requestType=passwordReset`,
  });

  if (error) {
    console.error(error.message);
    return { error: error.message };
  }

  if (callbackUrl) {
    return { route: callbackUrl };
  }

  return { success: true };
};

// /* --------------------------------------- */
// /*          Reset Password Action          */
// /* --------------------------------------- */

// export const resetPasswordAction = async (formData: FormData) => {
//   const supabase = await createClient();
//   const {
//     data: { user },
//   } = await supabase.auth.getUser();

//   if (!user) {
//     return { error: "User not found" };
//   }

//   const member = await supabase
//     .from("members")
//     .select("first_name")
//     .eq("user_id", user?.id)
//     .single();

//   if (!member) {
//     return { error: "Member not found" };
//   }

//   const password = formData.get("password") as string;
//   const confirmPassword = formData.get("confirmPassword") as string;

//   // validation
//   if (!password || !confirmPassword) {
//     return { error: "Password and confirm password are required" };
//   }

//   if (password !== confirmPassword) {
//     return { error: "Passwords do not match" };
//   }

//   // update password
//   const { error } = await supabase.auth.updateUser({ password: password });

//   if (error) {
//     return { error: "Password update failed" };
//   }

//   await sendPasswordUpdateEmail({
//     email: user.email!,
//     firstName: member.data!.first_name,
//   });

//   // error handling
//   if (error) {
//     return { error: "Password update failed" };
//   }

//   return { success: true };
// };

// /* --------------------------------------- */
// /*          Update Profile Action          */
// /* --------------------------------------- */
// export async function updateProfileAction(
//   formData: FormData,
//   memberId: string,
// ) {
//   const supabase = await createClient();

//   const {
//     data: { user },
//     error: userError,
//   } = await supabase.auth.getUser();
//   if (userError || !user) {
//     return { error: "Not authenticated" };
//   }

//   const profile = {
//     first_name: formData.get("first_name") as string,
//     last_name: formData.get("last_name") as string,
//     phone_number: formData.get("phone_number") as string,
//     address: formData.get("address") as string,
//     city: formData.get("city") as string,
//     state: formData.get("state") as string,
//     postal_code: formData.get("postal_code") as string,
//     country: formData.get("country") as string,
//     updated_at: new Date().toISOString(),
//   };

//   const { error } = await supabase
//     .from("members")
//     .update(profile)
//     .eq("member_id", memberId);

//   if (error) {
//     return { error: error.message };
//   }

//   revalidatePath("/protected/");
//   return { success: true };
// }

// /* --------------------------------------- */
// /*          Add Member Action            */
// /* --------------------------------------- */
// export async function addMemberAction(formData: FormData) {
//   const supabase = await createClient();

//   const member = {
//     first_name: formData.get("first_name") as string,
//     last_name: formData.get("last_name") as string,
//     email: formData.get("email") as string,
//     phone_number: formData.get("phone_number") as string,
//     address: formData.get("address") as string,
//     city: formData.get("city") as string,
//     state: formData.get("state") as string,
//     postal_code: formData.get("postal_code") as string,
//     country: formData.get("country") as string,
//     is_primary_member: false,
//     membership_id: formData.get("membership_id") as string,
//     updated_at: new Date().toISOString(),
//   } as MemberDTO;

//   const { error } = await supabase
//     .from("members")
//     .insert(member as Database["public"]["Tables"]["members"]["Insert"]);

//   if (error) {
//     return { error: error.message };
//   }

//   return { success: true };
// }

// /* --------------------------------------- */
// /*          Update Email Action          */
// /* --------------------------------------- */
// export const updateEmailAction = async (formData: FormData) => {
//   const supabase = await createClient();
//   const newEmail = formData.get("email") as string;

//   if (!newEmail) {
//     return { error: "Email is required" };
//   }

//   const { error } = await supabase.auth.updateUser({ email: newEmail });

//   if (error) {
//     console.error(error.message);
//     return { error: error.message };
//   }

//   return { success: true, message: "Verification email sent" };
// };

// /* --------------------------------------- */
// /*     Check Duplicate Member Details      */
// /* --------------------------------------- */
// export async function checkDuplicateMemberDetails(
//   email: string,
//   excludeMemberId?: string,
// ) {
//   try {
//     const supabase = supabaseAdmin;
//     let query = supabase.from("members").select("email").eq("email", email);

//     if (excludeMemberId) {
//       query = query.neq("member_id", excludeMemberId);
//     }

//     const { data, error } = await query;

//     if (error) throw error;

//     return {
//       isEmailTaken: data?.some((row) => row.email === email) ?? false,
//     };
//   } catch (error) {
//     console.error("Error checking duplicate member details:", error);
//     throw new Error("Failed to check for duplicate member details");
//   }
// }
