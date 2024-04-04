import { z } from "zod";

export const validationSchema = z.object({
  email: z.string().email(),
  business_email: z.string().email(),
  account_type: z
    .string()
    .min(1)
    .refine((value) => value === "personal" || value === "corporate"),
  password: z.string().min(8),
  confirmPassword: z.string(),
});
