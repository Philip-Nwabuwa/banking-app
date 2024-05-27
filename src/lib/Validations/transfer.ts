import { z } from 'zod'

export const bankTransferSchema = z.object({
  bank_code: z.string().min(1, 'Bank code is required'),
  account_number: z.string().min(10, 'Account number is required'),
  amount: z
    .number({ invalid_type_error: 'Amount is required' })
    .int()
    .positive()
    .min(100, 'Amount must be at least 100'),
  narration: z.string().min(1, 'Narration is required'),
  authorization: z.object({
    auth_pin: z.string().min(4, 'Auth pin must be 4 digits long'),
  }),
})

export type BankTransferType = z.infer<typeof bankTransferSchema>

export const verifyBankSchema = z.object({
  account_number: z.string().min(10, 'Account number is required'),
  bank_code: z.string().min(1, 'Bank code is required'),
})

export type VerifyBankType = z.infer<typeof verifyBankSchema>

export const paytonicTransferSchema = z.object({
  email: z.string().email('Invalid email address').min(1, 'Email is required'),
  amount: z
    .number({ invalid_type_error: 'Amount is required' })
    .int()
    .positive()
    .min(100, 'Amount must be at least 100'),
  narration: z.string().min(1, 'Narration is required'),
  authPin: z.string().min(4, 'Auth pin must be 4 digits long'),
})

export type PaytonicTransferType = z.infer<typeof paytonicTransferSchema>
