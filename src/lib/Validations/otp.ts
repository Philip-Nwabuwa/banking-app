import { z } from 'zod'

export const verifyOtpSchema = z.object({
  auth_code: z.string().min(6, 'OTP must be 6 digits long'),
  reference: z
    .string()
    .min(1, 'Password must be at least 1 characters long')
    .optional(),
  service: z
    .string()
    .min(1, 'Service must be at least 1 characters long')
    .optional(),
})

export type VerifyOtpType = z.infer<typeof verifyOtpSchema>
