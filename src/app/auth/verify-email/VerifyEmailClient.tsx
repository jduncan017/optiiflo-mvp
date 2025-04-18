"use client";
import { useEffect } from "react";
import { useRouter } from "next/navigation";
import BoxWrapper from "~/components/ui/BoxWrapper";
import { ResendButton } from "../components/resendButton";

interface VerifyEmailClientProps {
  email: string;
}

// Define the message type for type safety
interface AuthMessage {
  type: "EMAIL_VERIFIED";
}

export default function VerifyEmailClient({ email }: VerifyEmailClientProps) {
  const router = useRouter();

  useEffect(() => {
    const channel = new BroadcastChannel("auth_channel");

    channel.onmessage = (event: MessageEvent<AuthMessage>) => {
      if (event.data.type === "EMAIL_VERIFIED") {
        router.push("/protected/onboarding?step=update-profile");
      }
    };

    return () => channel.close();
  }, [router]);

  return (
    <>
      <BoxWrapper
        padding="md"
        className="VerifyEmailWrapper flex w-[500px] flex-col items-center gap-6"
      >
        <h1 className="text-center text-3xl font-bold text-N1">
          Check your email
        </h1>
        <p className="text-center text-lg text-N2">
          We sent a verification link to{" "}
          <span className="font-bold">{email}</span>
        </p>
        <p className="text-N3 text-center text-sm">
          If you don&apos;t see the email, check your spam folder. The
          verification link will expire in 24 hours.
        </p>
        <ResendButton email={email} />
      </BoxWrapper>
    </>
  );
}
