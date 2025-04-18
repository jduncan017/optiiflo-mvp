import AuthForm from "~/app/auth/components/authForm";

export default async function SignUp() {
  return (
    <div className="Signup flex h-full flex-col items-center justify-center bg-G2 text-white">
      <AuthForm form="signup" />
    </div>
  );
}
