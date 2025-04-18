import AuthForm from "~/app/auth/components/authForm";

export default async function SignIn() {
  return (
    <div className="Signin flex h-full flex-col items-center justify-center bg-G2 text-white">
      <AuthForm form="signin" />
    </div>
  );
}
