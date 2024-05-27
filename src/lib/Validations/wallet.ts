import { z } from 'zod'

export const createWalletSchema = z.object({
  currency_code: z.string().min(1, 'Currency code is required'),
})
export type createWalletType = z.infer<typeof createWalletSchema>

export const createSettlementSchema = z.object({
  account: z.object({
    account_number: z.string().min(10, 'Account number is required'),
    bank_code: z.string().min(1, 'Bank code is required'),
  }),
})
export type createSettlementType = z.infer<typeof createSettlementSchema>
