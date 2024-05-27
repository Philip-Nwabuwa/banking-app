export type BankListType = {
  bank_code: string
  bank_name: string
  bank_type: string
  bank_image: string
  ussd_code: string
  ussd_transfer_code: string
}

export type BankTransactionType = {
  account_name: string
  account_number: string
  amount: number
  charge: number
  date_created: string
  narration: string
  reference: string
  status: string
  switch_session_id: string
  bank: {
    code: string
    logo: string
    name: string
  }
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
