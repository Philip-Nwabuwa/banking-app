import { StaticImageData } from 'next/image'

import demoImg from '@/assets/images/POS/pos1.jpg'
import demoImg1 from '@/assets/images/POS/pos2.jpg'
import demoImg2 from '@/assets/images/POS/pos3.jpg'

export const items = [
  {
    name: 'Topwise T1',
    price: '₦120000',
    imageSrc: demoImg,
  },
  {
    name: 'Topwise MP35',
    price: '₦85000',
    imageSrc: demoImg1,
  },
  {
    name: 'PAX S90',
    price: '₦65000',
    imageSrc: demoImg2,
  },
]

export interface Item {
  name: string
  price: string
  imageSrc: StaticImageData
  quantity: number
}

export interface addToOrderProps {
  name: string
  price: string
  imageSrc: StaticImageData
}

export interface PosType {
  ID: string
  status: string
  terminal: string
  amount: string
  date: string
}

export const PosData: PosType[] = [
  {
    ID: '#18321',
    status: 'Failed',
    terminal: 'Topwise T1',
    amount: '₦4,000.00',
    date: '14 Apr 2024, 3:45 pm',
  },
  {
    ID: '#18456',
    status: 'Successful',
    terminal: 'PAX S90',
    amount: '₦1,500.00',
    date: '14 Apr 2024, 8:30 am',
  },
  {
    ID: '#18572',
    status: 'Successful',
    terminal: 'Topwise MP35',
    amount: '₦9,200.00',
    date: '15 Apr 2024, 12:15 pm',
  },
  {
    ID: '#18698',
    status: 'Failed',
    terminal: 'Topwise T1',
    amount: '₦3,300.00',
    date: '15 Apr 2024, 6:20 pm',
  },
  {
    ID: '#18804',
    status: 'Successful',
    terminal: 'PAX S90',
    amount: '₦2,700.00',
    date: '16 Apr 2024, 10:40 am',
  },
  {
    ID: '#18926',
    status: 'Successful',
    terminal: 'PAX S90',
    amount: '₦4,800.00',
    date: '16 Apr 2024, 5:25 pm',
  },
  {
    ID: '#19033',
    status: 'Failed',
    terminal: 'PAX S90',
    amount: '₦6,700.00',
    date: '17 Apr 2024, 1:50 pm',
  },
  {
    ID: '#19150',
    status: 'Successful',
    terminal: 'Topwise T1',
    amount: '₦2,000.00',
    date: '17 Apr 2024, 7:15 am',
  },
  {
    ID: '#19271',
    status: 'Successful',
    terminal: 'Topwise MP35',
    amount: '₦8,600.00',
    date: '18 Apr 2024, 4:30 pm',
  },
  {
    ID: '#19389',
    status: 'Successful',
    terminal: 'PAX S90',
    amount: '₦3,400.00',
    date: '18 Apr 2024, 9:00 am',
  },
  {
    ID: '#15317',
    status: 'Successful',
    terminal: 'PAX S90',
    amount: '₦1,200.00',
    date: '14 Apr 2024, 8:43 pm',
  },
  {
    ID: '#15998',
    status: 'Successful',
    terminal: 'Topwise MP35',
    amount: '₦7,900.00',
    date: '15 Apr 2024, 10:12 am',
  },
  {
    ID: '#15046',
    status: 'Successful',
    terminal: 'PAX S90',
    amount: '₦5,500.00',
    date: '16 Apr 2024, 2:01 pm',
  },
  {
    ID: '#15917',
    status: 'Pending',
    terminal: 'PAX S90',
    amount: '₦880.00',
    date: '17 Apr 2024, 5:54 pm',
  },
  {
    ID: '#14404',
    status: 'Failed',
    terminal: 'Topwise MP35',
    amount: '₦7,650.00',
    date: '18 Apr 2024, 7:32 am',
  },
  {
    ID: '#16987',
    status: 'Successful',
    terminal: 'Topwise MP35',
    amount: '₦3,500.00',
    date: '14 Apr 2024, 1:20 pm',
  },
  {
    ID: '#17432',
    status: 'Pending',
    terminal: 'PAX S90',
    amount: '₦1,000.00',
    date: '15 Apr 2024, 4:55 pm',
  },
  {
    ID: '#17654',
    status: 'Failed',
    terminal: 'PAX S90',
    amount: '₦2,300.00',
    date: '16 Apr 2024, 11:45 am',
  },
]
