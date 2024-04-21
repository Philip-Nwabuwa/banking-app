import { z } from 'zod'

export const LoginSchema = z.object({
  email: z.string().email(),
  password: z.string().min(8),
})

export type LoginType = z.infer<typeof LoginSchema>

export const SignUpSchema = z.object({
  email: z.string().email('Invalid email address').min(1, 'Email is required'),
  password: z.string().min(8, 'Password must be at least 8 characters long'),
  business_email: z.string().optional(),
  business_name: z.string().optional(),
  business_descriptor: z.string().optional(),
  business_type: z.string().optional(),
  business_description: z.string().optional(),
  accountType: z.enum(['personal', 'corporate']),
})

export type SignUpType = z.infer<typeof SignUpSchema>

export const bankTransferSchema = z.object({
  bankName: z.string().min(1, 'Bank name is required'),
  accountNumber: z.number().min(1, 'Account number is required'),
  amount: z.number().min(100, 'Amount must be at least 100'),
  narration: z.string().min(1, 'Narration is required'),
  authPin: z
    .number()
    .int()
    .transform((val) => String(val))
    .refine((val) => val.length === 4, {
      message: 'Auth pin must be 4 digits long',
    }),
})

export type BankTransferType = z.infer<typeof bankTransferSchema>
