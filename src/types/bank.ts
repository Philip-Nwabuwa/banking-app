export const BankNames = [
  { name: 'First Bank of Nigeria', label: 'fbn' },
  { name: 'Guaranty Trust Bank', label: 'gtb' },
  { name: 'Zenith Bank', label: 'zenith' },
  { name: 'Access Bank', label: 'access' },
  { name: 'United Bank for Africa (UBA)', label: 'uba' },
] as const

export type beneficiaryType = {
  name: string
  bankName: string
  accountNumber: number
}

export const Beneficiary: beneficiaryType[] = [
  { name: 'John Doe', bankName: 'Zenith Bank', accountNumber: 1234567890 },
  { name: 'david joe', bankName: 'Access Bank', accountNumber: 9087654321 },
]
