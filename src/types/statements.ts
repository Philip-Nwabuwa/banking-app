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
    orderId: 'SHP-0064704',
    status: 'Completed',
    mobile: '1234567890',
    time: '10:00',
    amount: '$338.00',
  },
  {
    date: 'Jun 24, 2024',
    type: 'Transfer',
    orderId: 'SHP-0031584',
    status: 'Completed',
    senderName: 'John Doe',
    description: 'Lorem ipsum dolor sit amet',
    time: '10:00',
    amount: '$284.00',
  },
  {
    date: 'Apr 15, 2024',
    type: 'Deposit',
    orderId: 'SHP-0062618',
    status: 'Pending',
    description: 'Consectetur adipiscing elit',
    time: '10:00',
    amount: '$391.00',
  },
  {
    date: 'Nov 10, 2024',
    type: 'Betting',
    orderId: 'SHP-0055066',
    status: 'Cancelled',
    userId: 'user123',
    time: '10:00',
    amount: '$496.00',
  },
  {
    date: 'Oct 25, 2024',
    type: 'Withdraw',
    orderId: 'SHP-0025132',
    status: 'Completed',
    description:
      'Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua',
    time: '10:00',
    amount: '$421.00',
  },
  {
    date: 'Oct 25, 2024',
    type: 'Television',
    orderId: 'SHP-0028278',
    status: 'Completed',
    userId: 'user456',
    time: '10:00',
    amount: '$188.00',
  },
  {
    date: 'Jun 20, 2024',
    type: 'Deposit',
    orderId: 'SHP-0054110',
    status: 'Cancelled',
    description: 'Ut enim ad minim veniam',
    time: '10:00',
    amount: '$210.00',
  },
]
