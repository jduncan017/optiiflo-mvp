import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { toast } from "react-hot-toast";
import { Button } from "~/components/ui/button";
import { signInAction } from "~/app/actions";
import { signinSchema, type SigninFormData } from "~/utils/validationSchemas";
import { useRouter } from "next/navigation";
import Link from "next/link";
import TextInput from "~/components/ui/TextInput";

export default function SigninForm() {
  const router = useRouter();
  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
  } = useForm<SigninFormData>({
    resolver: zodResolver(signinSchema),
  });

  const onSubmit = async (data: SigninFormData) => {
    try {
      // Convert form data to FormData
      const formData = new FormData();
      Object.entries(data).forEach(([key, value]) => {
        formData.append(key, value.toString());
      });

      const result = await signInAction(formData);
      if (result?.error) {
        toast.error(result.error);
        return;
      }
      if (result?.route) {
        router.push(result.route);
      }
    } catch (error) {
      toast.error(error instanceof Error ? error.message : "Failed to sign in");
    }
  };

  return (
    <form
      onSubmit={handleSubmit(onSubmit)}
      className="SigninForm flex flex-col gap-5"
    >
      <TextInput
        label="Email"
        type="email"
        placeholder="email@example.com"
        error={errors.email}
        {...register("email")}
      />

      <div className="PasswordSection flex flex-col gap-1">
        <TextInput
          label="Password"
          type="password"
          placeholder="********"
          error={errors.password}
          {...register("password")}
        />
        <Link
          href="/auth/forgot-password"
          className="ForgotPassword mt-1 text-G2 hover:text-P2"
        >
          Forgot password?
        </Link>
      </div>

      <Button
        className="mt-4 self-end"
        size="lg"
        type="submit"
        variant="secondary"
        disabled={isSubmitting}
      >
        {isSubmitting ? "Signing in..." : "Sign in"}
      </Button>
    </form>
  );
}
