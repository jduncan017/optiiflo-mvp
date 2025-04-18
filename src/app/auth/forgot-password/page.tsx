import BoxWrapper from "~/components/ui/BoxWrapper";
import ForgotPasswordForm from "./forgotPasswordForm";
import NavButton from "~/components/ui/NavButton";
export default function ForgotPassword() {
  return (
    <div className="ForgotPassword flex h-full flex-col items-center justify-center bg-G2 text-white">
      <BoxWrapper className="FormContainer w-full max-w-md space-y-4">
        <div className="Header">
          <div className="flex items-center justify-between">
            <h1 className="text-3xl font-semibold text-N1">Reset Password</h1>
            <NavButton href="/protected/account-settings">Back</NavButton>
          </div>
          <p className="mt-2 max-w-sm text-N2">
            {`Enter your email address and we'll send you a link to reset your
            password.`}
          </p>
        </div>
        <ForgotPasswordForm />
      </BoxWrapper>
    </div>
  );
}
