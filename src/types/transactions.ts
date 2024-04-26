type TransactionStatus = 'Successful' | 'Pending' | 'Failed'
type TransactionType =
  | 'airtime'
  | 'transfer'
  | 'deposit'
  | 'received'
  | 'betting'
  | 'settlement'
  | 'television'
  | 'electricity'

interface Transaction {
  orderNo: string
  status: TransactionStatus
  type: TransactionType
  amount: string
  date: string
}

export const transactions: Transaction[] = [
  {
    orderNo: '#18321',
    status: 'Failed',
    type: 'deposit',
    amount: '₦4,000.00',
    date: '14 Apr 2024, 3:45 pm',
  },
  {
    orderNo: '#18456',
    status: 'Successful',
    type: 'received',
    amount: '₦1,500.00',
    date: '14 Apr 2024, 8:30 am',
  },
  {
    orderNo: '#18572',
    status: 'Successful',
    type: 'transfer',
    amount: '₦9,200.00',
    date: '15 Apr 2024, 12:15 pm',
  },
  {
    orderNo: '#18698',
    status: 'Failed',
    type: 'deposit',
    amount: '₦3,300.00',
    date: '15 Apr 2024, 6:20 pm',
  },
  {
    orderNo: '#18804',
    status: 'Pending',
    type: 'settlement',
    amount: '₦2,700.00',
    date: '16 Apr 2024, 10:40 am',
  },
  {
    orderNo: '#18926',
    status: 'Successful',
    type: 'received',
    amount: '₦4,800.00',
    date: '16 Apr 2024, 5:25 pm',
  },
  {
    orderNo: '#19033',
    status: 'Failed',
    type: 'television',
    amount: '₦6,700.00',
    date: '17 Apr 2024, 1:50 pm',
  },
  {
    orderNo: '#19150',
    status: 'Pending',
    type: 'deposit',
    amount: '₦2,000.00',
    date: '17 Apr 2024, 7:15 am',
  },
  {
    orderNo: '#19271',
    status: 'Successful',
    type: 'transfer',
    amount: '₦8,600.00',
    date: '18 Apr 2024, 4:30 pm',
  },
  {
    orderNo: '#19389',
    status: 'Pending',
    type: 'airtime',
    amount: '₦3,400.00',
    date: '18 Apr 2024, 9:00 am',
  },
  {
    orderNo: '#15317',
    status: 'Successful',
    type: 'received',
    amount: '₦1,200.00',
    date: '14 Apr 2024, 8:43 pm',
  },
  {
    orderNo: '#15998',
    status: 'Successful',
    type: 'transfer',
    amount: '₦7,900.00',
    date: '15 Apr 2024, 10:12 am',
  },
  {
    orderNo: '#15046',
    status: 'Successful',
    type: 'electricity',
    amount: '₦5,500.00',
    date: '16 Apr 2024, 2:01 pm',
  },
  {
    orderNo: '#15917',
    status: 'Pending',
    type: 'betting',
    amount: '₦880.00',
    date: '17 Apr 2024, 5:54 pm',
  },
  {
    orderNo: '#14404',
    status: 'Failed',
    type: 'transfer',
    amount: '₦7,650.00',
    date: '18 Apr 2024, 7:32 am',
  },
  {
    orderNo: '#16987',
    status: 'Successful',
    type: 'transfer',
    amount: '₦3,500.00',
    date: '14 Apr 2024, 1:20 pm',
  },
  {
    orderNo: '#17432',
    status: 'Pending',
    type: 'settlement',
    amount: '₦1,000.00',
    date: '15 Apr 2024, 4:55 pm',
  },
  {
    orderNo: '#17654',
    status: 'Failed',
    type: 'television',
    amount: '₦2,300.00',
    date: '16 Apr 2024, 11:45 am',
  },
  {
    orderNo: '#17999',
    status: 'Successful',
    type: 'airtime',
    amount: '₦6,200.00',
    date: '17 Apr 2024, 9:30 pm',
  },
  {
    orderNo: '#18247',
    status: 'Pending',
    type: 'airtime',
    amount: '₦4,500.00',
    date: '18 Apr 2024, 3:15 pm',
  },
]
