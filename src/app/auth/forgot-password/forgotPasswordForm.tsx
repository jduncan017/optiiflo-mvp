"use client";

import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { toast } from "react-hot-toast";
import { Button } from "~/components/ui/button";
import FormInput from "~/components/ui/TextInput";
import { z } from "zod";
import { forgotPasswordAction } from "~/app/actions";
import { emailSchema } from "~/utils/validationSchemas";

const forgotPasswordSchema = z.object({
  email: emailSchema,
});

type ForgotPasswordFormData = z.infer<typeof forgotPasswordSchema>;

export default function ForgotPasswordForm() {
  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
  } = useForm<ForgotPasswordFormData>({
    resolver: zodResolver(forgotPasswordSchema),
  });

  const onSubmit = async (data: ForgotPasswordFormData) => {
    const formData = new FormData();
    formData.append("email", data.email);
    const result = await forgotPasswordAction(formData);
    if (result?.error) {
      return toast.error(result.error);
    }
    toast.success("Reset instructions sent to email");
  };

  return (
    <form
      onSubmit={handleSubmit(onSubmit)}
      className="ForgotPasswordForm flex flex-col gap-5"
    >
      <FormInput
        label="Email*"
        type="email"
        placeholder="email@example.com"
        error={errors.email}
        {...register("email")}
      />

      <Button
        className="mt-4 self-end"
        size="lg"
        type="submit"
        variant="secondary"
        disabled={isSubmitting}
      >
        {isSubmitting ? "Sending..." : "Send Reset Instructions"}
      </Button>
    </form>
  );
}
