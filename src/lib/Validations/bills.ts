import { z } from 'zod'

export const airtimeTransferSchema = z.object({
  product: z.string().min(1, 'Product name is required'),
  amount: z
    .number({ invalid_type_error: 'Amount is required' })
    .int()
    .positive()
    .min(50, 'Amount must be at least 50'),
  phone_number: z.string().min(10, 'Phone number is required'),
  authorization: z.object({
    auth_pin: z.string().min(4, 'Auth pin must be 4 digits long'),
  }),
})

export type AirtimeTransferType = z.infer<typeof airtimeTransferSchema>

export const dataTransferSchema = z.object({
  product: z.string().min(1, 'Product is required'),
  code: z.string().min(1, 'Data plan is required'),
  phone_number: z.string().min(10, 'Phone number is required'),
  authorization: z.object({
    auth_pin: z.string().min(4, 'Auth pin must be 4 digits long'),
  }),
})

export type DataTransferType = z.infer<typeof dataTransferSchema>

export const tvTransferSchema = z.object({
  product: z.string().min(1, 'Cable provider is required'),
  code: z.string().min(1, 'Tv plan is required'),
  device_number: z.string().min(10, 'IUC number is required'),
  authorization: z.object({
    auth_pin: z.string().min(4, 'Auth pin must be 4 digits long'),
  }),
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
  authorization: z.object({
    auth_pin: z.string().min(4, 'Auth pin must be 4 digits long'),
  }),
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
  authorization: z.object({
    auth_pin: z.string().min(4, 'Auth pin must be 4 digits long'),
  }),
})

export type BettingTransferType = z.infer<typeof bettingTransferSchema>
