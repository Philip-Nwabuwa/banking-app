import { z } from 'zod'

export const setUsernameSchema = z.object({
  username: z.string().min(3, 'Username is required'),
})

export type setUsernameType = z.infer<typeof setUsernameSchema>

export const setBVNSchema = z.object({
  bvn: z.string().min(3, 'Username is required'),
})

export type setBVNType = z.infer<typeof setBVNSchema>
