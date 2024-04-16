export interface StatementType {
  date: string
  type: string
  orderId: string
  status: string
  amount: string
}

export const StatementsData = [
  {
    date: 'May 05 2024, 10:00',
    type: 'Airtime',
    orderId: 'SHP-0064704',
    status: 'Completed',
    mobile: '1234567890',
    amount: '$338.00',
  },
  {
    date: 'Jun 24 2024, 20:00',
    type: 'Transfer',
    orderId: 'SHP-0031584',
    status: 'Completed',
    senderName: 'John Doe',
    description: 'Lorem ipsum dolor sit amet',
    amount: '$284.00',
  },
  {
    date: 'Apr 15 2024, 13:20',
    type: 'Deposit',
    orderId: 'SHP-0062618',
    status: 'Pending',
    description: 'Consectetur adipiscing elit',
    amount: '$391.00',
  },
  {
    date: 'Nov 10 2024, 14:20',
    type: 'Betting',
    orderId: 'SHP-0055066',
    status: 'Cancelled',
    userId: 'user123',
    amount: '$496.00',
  },
  {
    date: 'Oct 25 2024, 12:00',
    type: 'Withdraw',
    orderId: 'SHP-0025132',
    status: 'Completed',
    description:
      'Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua',
    amount: '$421.00',
  },
  {
    date: 'Oct 25 2024, 09:10',
    type: 'Television',
    orderId: 'SHP-0028278',
    status: 'Completed',
    userId: 'user456',
    amount: '$188.00',
  },
  {
    date: 'Jun 20 2024, 15:35',
    type: 'Deposit',
    orderId: 'SHP-0054110',
    status: 'Cancelled',
    description: 'Ut enim ad minim veniam',
    amount: '$210.00',
  },
]
