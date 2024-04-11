import { z } from 'zod'

export const LoginSchema = z.object({
  email: z.string().email(),
  password: z.string().min(6),
})

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
