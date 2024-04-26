interface StatementType {
  date: string
  type: string
  orderId: string
  status: string
  amount: string
}

interface AccountDataType {
  id: string
  accountName: string
  accountNumber: string
  account: string
}

interface SettlementsType {
  date: string
  account: string
  accountName: string
  accountNumber: string
  id: string
  status: string
  amount: string
}

export const StatementsData: StatementType[] = [
  {
    date: 'May 05 2024, 10:00',
    type: 'Airtime',
    orderId: 'SHP-0064704',
    status: 'Completed',
    amount: '₦338.00',
  },
  {
    date: 'Jun 24 2024, 20:00',
    type: 'Transfer',
    orderId: 'SHP-0031584',
    status: 'Completed',
    amount: '₦284.00',
  },
  {
    date: 'Apr 15 2024, 13:20',
    type: 'Deposit',
    orderId: 'SHP-0062618',
    status: 'Pending',
    amount: '₦391.00',
  },
  {
    date: 'Nov 10 2024, 14:20',
    type: 'Betting',
    orderId: 'SHP-0055066',
    status: 'Cancelled',
    amount: '₦496.00',
  },
  {
    date: 'Oct 25 2024, 12:00',
    type: 'Withdraw',
    orderId: 'SHP-0025132',
    status: 'Completed',
    amount: '₦421.00',
  },
  {
    date: 'Oct 25 2024, 09:10',
    type: 'Television',
    orderId: 'SHP-0028278',
    status: 'Completed',
    amount: '₦188.00',
  },
  {
    date: 'Jun 20 2024, 15:35',
    type: 'Deposit',
    orderId: 'SHP-0054110',
    status: 'Cancelled',
    amount: '₦210.00',
  },
]

export const SettlementsData: SettlementsType[] = []

export const AccountData: AccountDataType[] = []

// {
//   image: 'Logo',
//   account: 'Kuda Bank',
//   accountName: 'David Doe',
//   accountNumber: '9876543210',
//   id: '1',
// },
// {
//   image: 'Logo',
//   account: 'Zenith Bank',
//   accountName: 'John Doe',
//   accountNumber: '1234567890',
//   id: '2',
// },

// {
//   date: 'April 15 2024, 10:00:30',
//   account: 'Kuda Bank',
//   accountName: 'David Doe',
//   accountNumber: '9876543210',
//   id: '1',
//   status: 'Approved',
//   amount: '₦33000.00',
// },
// {
//   date: 'April 15 2024, 13:12:42',
//   account: 'Zenith Bank',
//   accountName: 'John Doe',
//   accountNumber: '1234567890',
//   id: '2',
//   status: 'Approved',
//   amount: '₦28400.00',
// },
