import { cookies } from "next/headers";
import { redirect } from "next/navigation";
import VerifyEmailClient from "./VerifyEmailClient";

export default async function VerifyEmailPage() {
  const cookieStore = cookies();
  const email = cookieStore.get("verification_email")?.value;

  if (!email) {
    redirect("/auth/signup");
  }

  return (
    <div className="VerifyEmail flex h-full flex-col items-center justify-center bg-G2 text-white">
      <VerifyEmailClient email={email} />
    </div>
  );
}
