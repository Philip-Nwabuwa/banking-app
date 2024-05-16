export type BankListType = {
  bank_code: string
  bank_name: string
  bank_type: string
  bank_image: string
  ussd_code: string
  ussd_transfer_code: string
}

export type beneficiaryType = {
  name: string
  bankName: string
  accountNumber: number
}

export const Beneficiary: beneficiaryType[] = [
  { name: 'John Doe', bankName: 'Zenith Bank', accountNumber: 1234567890 },
  { name: 'david joe', bankName: 'Access Bank', accountNumber: 9087654321 },
]
