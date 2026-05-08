import { z } from "zod";

export const formSchema = z
  .object({
    firstName: z
      .string()
      .min(
        2,
        "First name must be at least 2 characters"
      ),

    lastName: z
      .string()
      .min(
        2,
        "Last name must be at least 2 characters"
      ),

    dob: z
      .string()
      .min(
        1,
        "Date of birth is required"
      ),

    email: z
      .string()
      .email("Invalid email address"),

    password: z
      .string()
      .min(
        8,
        "Password must be at least 8 characters"
      ),

    confirmPassword: z.string(),
  })

  .refine(
    (data) =>
      data.password ===
      data.confirmPassword,
    {
      message:
        "Passwords do not match",

      path: ["confirmPassword"],
    }
  );