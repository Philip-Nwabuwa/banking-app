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

export const ProfileUpdateSchema = z.object({
  first_name: z
    .string()
    .min(3, 'First name must be at least 3 characters long'),
  middle_name: z
    .string()
    .min(3, 'Middle name must be at least 3 characters long')
    .optional(),
  surname: z.string().min(3, 'Surname must be at least 3 characters long'),
  date_of_birth: z
    .string()
    .min(3, 'Date of birth must be at least 3 characters long'),
  gender: z.enum(['male', 'female', 'other']),
  occupation: z
    .string()
    .min(3, 'Occupation must be at least 3 characters long'),
  contact: z.object({
    country: z
      .string()
      .min(2, 'Country name must be at least 2 characters long'),
    province: z
      .string()
      .min(2, 'Province name must be at least 2 characters long'),
    city: z.string().min(2, 'City name must be at least 2 characters long'),
    address: z.string().min(3, 'Address must be at least 3 characters long'),
    zipcode: z
      .string()
      .min(3, 'Zipcode must be at least 3 characters long')
      .optional(),
  }),
})

export type ProfileType = z.infer<typeof ProfileUpdateSchema>

export const BusinessSchema = z.object({
  name: z.string().min(3, 'Business name must be at least 3 characters long'),
  description: z
    .string()
    .min(3, 'Business description must be at least 3 characters long'),
  rc_number: z.string().min(3, 'RC number must be at least 3 characters long'),
  phone_number: z
    .string()
    .min(3, 'Phone number must be at least 3 characters long'),
  industry: z.string().min(3, 'Industry must be at least 3 characters long'),
  website: z.string().min(3, 'Website must be at least 3 characters long'),
  contact: z.object({
    country: z
      .string()
      .min(2, 'Country name must be at least 2 characters long'),
    province: z
      .string()
      .min(2, 'Province name must be at least 2 characters long'),
    city: z.string().min(2, 'City name must be at least 2 characters long'),
    address: z.string().min(3, 'Address must be at least 3 characters long'),
    zipcode: z
      .string()
      .min(3, 'Zipcode must be at least 3 characters long')
      .optional(),
  }),
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

export const forgotPasswordSchema = z.object({
  email_address: z
    .string()
    .email('Invalid email address')
    .min(1, 'Email is required'),
  auth_code: z.string().min(6, 'OTP must be 6 digits long').optional(),

  reference: z
    .string()
    .min(1, 'Password must be at least 1 characters long')
    .optional(),
  password: z.string().optional(),
})

export type forgotPasswordType = z.infer<typeof forgotPasswordSchema>
