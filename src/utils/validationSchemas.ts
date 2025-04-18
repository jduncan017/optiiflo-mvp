import { z } from "zod";
import { cleanPhoneNumber } from "~/utils/formatters";

/* --------------------------------------- */
/*                Base schemas             */
/* --------------------------------------- */
export const nameSchema = z.string().min(1, "Name is required");

export const emailSchema = z.string().email("Invalid email address");

export const passwordSchema = z
  .string()
  .min(8, "Password must be at least 8 characters")
  .regex(/[A-Z]/, "Password must contain at least one capital letter")
  .regex(/[0-9]/, "Password must contain at least one number")
  .regex(/[!@#$%^&*(),.?":{}|<>]/, "Password must contain at least one symbol");

export const phoneSchema = z
  .string()
  .min(1, "Phone number is required")
  .transform((val) => cleanPhoneNumber(val))
  .refine(
    (val) => val.length === 10,
    "Please enter a valid 10-digit phone number",
  );

export const postalCodeSchema = z
  .string()
  .regex(
    /^\d{5}(-\d{4})?$/,
    "Postal code must be in format 12345 or 12345-6789",
  );

export const addressSchema = z.string().min(1, "Address is required");

export const citySchema = z.string().min(1, "City is required");

export const countrySchema = z.literal("United States");

/* --------------------------------------- */
/*                Form schemas             */
/* --------------------------------------- */
export const signupSchema = z
  .object({
    firstName: nameSchema,
    lastName: nameSchema,
    email: emailSchema,
    password: passwordSchema,
    confirmPassword: z.string(),
    termsAccepted: z.boolean().refine((val) => val === true, {
      message: "You must accept the terms and conditions",
    }),
  })
  .refine((data) => data.password === data.confirmPassword, {
    message: "Passwords do not match",
    path: ["confirmPassword"],
  });

export const signinSchema = z.object({
  email: emailSchema,
  password: passwordSchema,
});

export const profileSchema = z.object({
  first_name: nameSchema,
  last_name: nameSchema,
  email: emailSchema,
  phone_number: phoneSchema,
  address: addressSchema,
  city: citySchema,
  postal_code: postalCodeSchema,
  country: countrySchema,
});

export const addMemberSchema = z.object({
  first_name: nameSchema,
  last_name: nameSchema,
  email: emailSchema,
  phone_number: phoneSchema,
  address: addressSchema,
  city: citySchema,
  postal_code: postalCodeSchema,
  country: countrySchema,
  is_primary_member: z.boolean(),
  membership_id: z.string(),
  updated_at: z.string().optional(),
});

/* --------------------------------------- */
/*                Infer types              */
/* --------------------------------------- */
export type SignupFormData = z.infer<typeof signupSchema>;
export type SigninFormData = z.infer<typeof signinSchema>;
export type ProfileFormData = z.infer<typeof profileSchema>;
export type AddMemberFormData = z.infer<typeof addMemberSchema>;
