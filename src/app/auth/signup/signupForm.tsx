import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import toast from "react-hot-toast";
import { Button } from "~/components/ui/button";
import FormInput from "~/components/ui/TextInput";
import Checkbox from "~/components/ui/CheckboxInput";
import Link from "next/link";
import { signUpAction } from "~/app/actions";
import { signupSchema, type SignupFormData } from "~/utils/validationSchemas";
import { useRouter } from "next/navigation";

export default function SignupForm() {
  const router = useRouter();
  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
  } = useForm<SignupFormData>({
    resolver: zodResolver(signupSchema),
    defaultValues: {
      termsAccepted: false,
    },
  });

  const onSubmit = async (data: SignupFormData) => {
    const formData = new FormData();
    Object.entries(data).forEach(([key, value]) => {
      formData.append(key, value.toString());
    });

    const result = await signUpAction(formData);
    if (result?.route) {
      router.push(result.route);
    } else if (result?.error) {
      toast.error(result.error);
    }
  };

  return (
    <div className="SignupForm flex w-full max-w-[600px] flex-col">
      <form
        onSubmit={handleSubmit(onSubmit)}
        className="SignupFormForm grid w-full grid-cols-2 gap-4"
      >
        <FormInput
          label="First Name*"
          placeholder="First Name"
          error={errors.firstName}
          {...register("firstName")}
        />

        <FormInput
          label="Last Name*"
          placeholder="Last Name"
          error={errors.lastName}
          {...register("lastName")}
        />

        <div className="col-span-2">
          <FormInput
            label="Email*"
            type="email"
            placeholder="email@example.com"
            error={errors.email}
            {...register("email")}
          />
        </div>

        <FormInput
          label="Password*"
          type="password"
          placeholder="********"
          error={errors.password}
          {...register("password")}
        />

        <FormInput
          label="Confirm Password*"
          type="password"
          placeholder="********"
          error={errors.confirmPassword}
          {...register("confirmPassword")}
        />

        <div className="col-span-2">
          <Checkbox
            label={
              <p>
                By checking this box, you agree to our{" "}
                <Link
                  href="/terms-and-conditions"
                  target="_blank"
                  className="text-P1 underline hover:text-P2"
                >
                  Terms and Conditions
                </Link>
              </p>
            }
            error={errors.termsAccepted}
            {...register("termsAccepted")}
          />
        </div>

        <Button
          className="col-span-2 ml-auto"
          type="submit"
          variant="secondary"
          size="lg"
          disabled={isSubmitting}
        >
          {isSubmitting ? "Signing up..." : "Sign up"}
        </Button>
      </form>
    </div>
  );
}
