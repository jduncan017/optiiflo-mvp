"use client";

import { useState, useEffect } from "react";
import { toast } from "react-hot-toast";
import { resendVerification } from "~/app/actions";

interface ResendButtonProps {
  email: string;
}

export function ResendButton({ email }: ResendButtonProps) {
  const [isResending, setIsResending] = useState(false);
  const [countdown, setCountdown] = useState(60);
  const [canResend, setCanResend] = useState(false);

  useEffect(() => {
    // Start countdown
    if (countdown > 0 && !canResend) {
      const timer = setTimeout(() => {
        setCountdown(countdown - 1);
      }, 1000);
      return () => clearTimeout(timer);
    } else if (countdown === 0 && !canResend) {
      setCanResend(true);
    }
  }, [countdown, canResend]);

  const handleResendVerification = async () => {
    setIsResending(true);
    try {
      await resendVerification(email);
      toast.success("Verification email sent successfully");
      // Reset countdown and disable resend
      setCountdown(60);
      setCanResend(false);
    } catch (error) {
      toast.error(
        error instanceof Error
          ? error.message
          : "Failed to resend verification email",
      );
    } finally {
      setIsResending(false);
    }
  };

  return (
    <button
      onClick={handleResendVerification}
      disabled={isResending || !canResend}
      className="disabled:text-N3 text-lg text-P1 hover:text-P2"
    >
      {isResending
        ? "Sending..."
        : canResend
          ? "Resend verification email"
          : `Resend available in ${countdown}s`}
    </button>
  );
}
