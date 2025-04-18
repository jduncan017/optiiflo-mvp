"use client";

import { useSearchParams, useRouter } from "next/navigation";
import BoxWrapper from "~/components/ui/BoxWrapper";
import Link from "next/link";
import { Button } from "~/components/ui/button";
import { CheckCircle2, XCircle, Loader2 } from "lucide-react";
import { Suspense, useEffect } from "react";

function EmailConfirmContent() {
  const searchParams = useSearchParams();
  const router = useRouter();
  const message = searchParams.get("message");
  const error = searchParams.get("error");
  const isSuccess = message?.includes("verified");

  useEffect(() => {
    if (isSuccess) {
      const timer = setTimeout(() => {
        router.push("/protected/bridge");
      }, 3000);
      return () => clearTimeout(timer);
    }
  }, [isSuccess, router]);

  return (
    <div className="EmailConfirm flex h-full flex-col items-center justify-center bg-G2 text-white">
      <BoxWrapper
        padding="md"
        className="flex w-[500px] flex-col items-center gap-6"
      >
        {isSuccess ? (
          <>
            <CheckCircle2 className="h-16 w-16 text-green-500" />
            <h1 className="text-center text-3xl font-bold text-N1">
              Email Verified
            </h1>
          </>
        ) : (
          <>
            <XCircle className="h-16 w-16 text-red-500" />
            <h1 className="text-center text-3xl font-bold text-N1">
              Verification Failed
            </h1>
          </>
        )}
        <p className="text-center text-lg text-N2">
          {message ?? error ?? "Something went wrong during verification."}
        </p>
        {!isSuccess && (
          <div className="flex w-full max-w-[300px] flex-col gap-4">
            <Link href="/auth/signup" className="w-full">
              <Button variant="default" className="w-full">
                Try Again
              </Button>
            </Link>
            <Link href="/auth/signin" className="w-full">
              <Button variant="secondary" className="w-full">
                Sign In Instead
              </Button>
            </Link>
          </div>
        )}
      </BoxWrapper>
    </div>
  );
}

function LoadingState() {
  return (
    <BoxWrapper
      padding="md"
      className="LoadingWrapper flex w-[500px] flex-col items-center gap-6"
    >
      <Loader2 className="h-16 w-16 animate-spin text-N2" />
      <h1 className="text-center text-3xl font-bold text-N1">
        Verifying Email
      </h1>
    </BoxWrapper>
  );
}

export default function EmailConfirm() {
  return (
    <Suspense fallback={<LoadingState />}>
      <EmailConfirmContent />
    </Suspense>
  );
}
