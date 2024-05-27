import { z } from 'zod'

export const setAuthPinSchema = z.object({
  auth_pin: z.string().min(4, 'Auth Pin is required'),
})

export type setAuthPinType = z.infer<typeof setAuthPinSchema>

export const changeAuthPinSchema = z.object({
  auth_pin: z.string().min(4, 'Current auth pin is required'),
  new_auth_pin: z.string().min(4, 'New auth pin is required'),
})

export type changeAuthPinType = z.infer<typeof changeAuthPinSchema>

export const changeAuthPasswordSchema = z.object({
  password: z.string().min(8, 'Current password is required'),
  new_password: z.string().min(4, 'New Password Pin is required'),
})

export type changeAuthPasswordType = z.infer<typeof changeAuthPasswordSchema>

export const resetAuthPinSchema = z.object({
  password: z.string().min(1, 'Password is required'),
})

export type resetAuthPinType = z.infer<typeof resetAuthPinSchema>
