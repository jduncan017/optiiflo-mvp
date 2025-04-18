"use client";

import SigninForm from "../signin/signinForm";
import SignupForm from "../signup/signupForm";
import BoxWrapper from "~/components/ui/BoxWrapper";
import Link from "next/link";

type AuthFormProps = {
  form: "signin" | "signup";
};

export default function AuthForm({ form }: AuthFormProps) {
  return (
    <BoxWrapper
      variant="blur"
      className="AuthForm flex w-full max-w-[600px] flex-col gap-6"
    >
      {/* Header */}
      <h1 className="text-center text-3xl font-bold capitalize sm:text-3xl lg:text-4xl">
        {form === "signup" ? "Create an account" : "Sign in to your account"}
      </h1>

      {/* Form */}
      {form === "signup" ? <SignupForm /> : <SigninForm />}

      {/* Bottom Container */}
      <div className="BottomContainer border-N3 flex flex-col items-end gap-1 border-t pt-4">
        <p className="capitalize text-N2">
          {form === "signup"
            ? "Already have an account?"
            : "Don't have an account?"}
        </p>
        <Link
          className="capitalize text-N1 hover:text-P2 hover:underline"
          href={form === "signup" ? "/auth/signin" : "/auth/signup"}
        >
          Go to {form === "signup" ? "sign in" : "sign up"}
        </Link>
      </div>
    </BoxWrapper>
  );
}
