import { z } from 'zod'

export const LoginSchema = z.object({
  email_address: z.string().email(),
  password: z.string().min(8, 'Password must be at least 8 characters long'),
})

export type LoginType = z.infer<typeof LoginSchema>

export const AccountTypeSchema = z.object({
  email_address: z
    .string()
    .email('Invalid email address')
    .min(1, 'Email is required'),
  password: z.string().min(8, 'Password must be at least 8 characters long'),
  account_type: z.enum(['PERSONAL', 'BUSINESS']),
})

export type AccountType = z.infer<typeof AccountTypeSchema>

export const BusinessSchema = z.object({
  business_email: z.string(),
  business_name: z.string(),
  registrationNumber: z.string(),
  business_type: z.string(),
  business_description: z.string(),
})

export type BusinessType = z.infer<typeof BusinessSchema>

export const PersonalInfoSchema = z.object({
  firstName: z.string().min(3, 'First name must be at least 3 characters long'),
  lastName: z.string().min(3, 'Last name must be at least 3 characters long'),
  country: z.string().min(2, 'Country name must be at least 2 characters long'),
  occupation: z
    .string()
    .min(3, 'Occupation must be at least 3 characters long'),
  phoneNumber: z
    .string()
    .min(10, 'Phone number must be at least 10 characters long'),
})

export type PersonalInfoType = z.infer<typeof PersonalInfoSchema>

export const bankTransferSchema = z.object({
  bankName: z.string().min(1, 'Bank name is required'),
  accountNumber: z.number().min(10, 'Account number is required'),
  amount: z
    .number({ invalid_type_error: 'Amount is required' })
    .int()
    .positive()
    .min(100, 'Amount must be at least 100'),
  narration: z.string().min(1, 'Narration is required'),
  authPin: z.string().min(4, 'Auth pin must be 4 digits long'),
})

export type BankTransferType = z.infer<typeof bankTransferSchema>

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

export const airtimeTransferSchema = z.object({
  network: z.string().min(1, 'Network is required'),
  amount: z
    .number({ invalid_type_error: 'Amount is required' })
    .int()
    .positive()
    .min(50, 'Amount must be at least 50'),
  phoneNumber: z.string().min(10, 'Phone number is required'),
  authPin: z.string().min(4, 'Auth pin must be 4 digits long'),
})

export type AirtimeTransferType = z.infer<typeof airtimeTransferSchema>

export const dataTransferSchema = z.object({
  network: z.string().min(1, 'Network is required'),
  dataPlan: z.string().min(1, 'Data plan is required'),
  phoneNumber: z.string().min(10, 'Phone number is required'),
  authPin: z.string().min(4, 'Auth pin must be 4 digits long'),
})

export type DataTransferType = z.infer<typeof dataTransferSchema>

export const tvTransferSchema = z.object({
  provider: z.string().min(1, 'Provider is required'),
  tvPlan: z.string().min(1, 'Tv plan is required'),
  iucNumber: z.string().min(10, 'IUC number is required'),
  authPin: z.string().min(4, 'Auth pin must be 4 digits long'),
})

export type TvTransferType = z.infer<typeof tvTransferSchema>

export const electricityTransferSchema = z.object({
  provider: z.string().min(1, 'Provider is required'),
  meterType: z.string().min(1, 'Meter type is required'),
  meterNumber: z.string().min(1, 'Meter number is required'),
  phoneNumber: z.string().min(10, 'Phone number is required'),
  amount: z
    .number({ invalid_type_error: 'Amount is required' })
    .int()
    .positive()
    .min(50, 'Amount must be at least 50'),
  authPin: z.string().min(4, 'Auth pin must be 4 digits long'),
})

export type ElectricityTransferType = z.infer<typeof electricityTransferSchema>

export const bettingTransferSchema = z.object({
  provider: z.string().min(1, 'betting provider is required'),
  amount: z
    .number({ invalid_type_error: 'Amount is required' })
    .int()
    .positive()
    .min(100, 'amount must be at least 100'),
  userId: z.string().min(1, 'User ID is required'),
  authPin: z.string().min(4, 'Auth pin must be 4 digits long'),
})

export type BettingTransferType = z.infer<typeof bettingTransferSchema>

export const forgotPasswordSchema = z.object({
  email: z.string().email('Invalid email address').min(1, 'Email is required'),
  otp: z.string().min(6, 'OTP must be 6 digits long'),
  password: z.string().min(8, 'Password must be at least 8 characters long'),
})

export type forgotPasswordType = z.infer<typeof forgotPasswordSchema>
