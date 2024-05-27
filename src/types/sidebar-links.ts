'use client'

import { usePathname } from 'next/navigation'

interface SidebarLink {
  href: string
  icon: string
  label: string
}

const SidebarLinks = (): SidebarLink[] => {
  const pathname = usePathname()

  let sidebarLinks: SidebarLink[]

  const billsCategory = [
    'data',
    'airtime',
    'electricity',
    'betting',
    'television',
  ]

  const payoutCategory = ['bank-transfer', 'paytonic-transfer']

  const isBillsPage = billsCategory.some(
    (prefix) => pathname === prefix || pathname.startsWith(`/bills/${prefix}`)
  )

  const isPayoutPage = payoutCategory.some(
    (prefix) => pathname === prefix || pathname.startsWith(`/payout/${prefix}`)
  )

  if (isBillsPage) {
    sidebarLinks = [
      { href: '/dashboard', icon: 'ki-home', label: 'Dashboard' },
      { href: '/bills/airtime', icon: 'ki-cheque ', label: 'Airtime' },
      { href: '/bills/data', icon: 'ki-cheque ', label: 'Data' },
      { href: '/bills/betting', icon: 'ki-cheque ', label: 'Betting' },
      { href: '/bills/television', icon: 'ki-cheque ', label: 'Television' },
      { href: '/bills/electricity', icon: 'ki-cheque ', label: 'Electricity' },
    ]
  } else if (isPayoutPage) {
    sidebarLinks = [
      { href: '/dashboard', icon: 'ki-home', label: 'Dashboard' },
      {
        href: '/payout/bank-transfer',
        icon: 'ki-cheque ',
        label: 'Bank Transfer',
      },
      {
        href: '/payout/paytonic-transfer',
        icon: 'ki-cheque ',
        label: 'P2P Transfer',
      },
    ]
  } else {
    sidebarLinks = [
      { href: '/payout', icon: 'ki-bank ', label: 'Payout' },
      { href: '/bills', icon: 'ki-cheque ', label: 'Bills' },
      { href: '/pos', icon: 'ki-shop', label: 'POS' },
    ]
  }

  return sidebarLinks
}

export default SidebarLinks
