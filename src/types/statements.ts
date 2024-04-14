export interface StatementType {
  date: string
  type: string
  orderId: string
  status: string
  amount: string
}

export const StatementsData = [
  {
    date: 'May 05, 2024',
    type: 'Airtime',
    orderId: '#SHP-0064704',
    status: 'Completed',
    quantity: 18,
    amount: '$338.00',
  },
  {
    date: 'Jun 24, 2024',
    type: 'Transfer',
    orderId: '#SHP-0031584',
    status: 'Completed',
    quantity: 19,
    amount: '$284.00',
  },
  {
    date: 'Apr 15, 2024',
    type: 'Deposit',
    orderId: '#SHP-0062618',
    status: 'Pending',
    quantity: 15,
    amount: '$391.00',
  },
  {
    date: 'Nov 10, 2024',
    type: 'Betting',
    orderId: '#SHP-0055066',
    status: 'Cancelled',
    quantity: 8,
    amount: '$496.00',
  },
  {
    date: 'Oct 25, 2024',
    type: 'Withdraw',
    orderId: '#SHP-0025132',
    status: 'Completed',
    quantity: 11,
    amount: '$421.00',
  },
  {
    date: 'Oct 25, 2024',
    type: 'Television',
    orderId: '#SHP-0028278',
    status: 'Completed',
    quantity: 14,
    amount: '$188.00',
  },
  {
    date: 'Jun 20, 2024',
    type: 'Deposit',
    orderId: '#SHP-0054110',
    status: 'Cancelled',
    quantity: 12,
    amount: '$210.00',
  },
]
