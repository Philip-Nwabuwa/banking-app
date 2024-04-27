'use client'

import { usePathname } from 'next/navigation'
import { create } from 'zustand'

interface SidebarLinksState {
  showModal: string | null
}

interface SidebarLinksActions {
  setShowModal: (modal: string | null) => void
}

type SidebarLinksStore = SidebarLinksState & SidebarLinksActions

const useSidebarLinksStore = create<SidebarLinksStore>((set) => ({
  showModal: null,
  setShowModal: (modal) => set({ showModal: modal }),
}))

function useSidebarLinks() {
  const pathname = usePathname()
  const { showModal, setShowModal } = useSidebarLinksStore()

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

  let sidebarLinks

  if (pathname === '/dashboard') {
    sidebarLinks = [
      {
        name: 'Quick Links',
        links: [
          { href: '/payout', icon: 'ki-bank', label: 'Payout' },
          { href: '/bills', icon: 'ki-cheque', label: 'Bills' },
          { href: '/pos', icon: 'ki-shop', label: 'POS' },
        ],
      },
    ]
  } else if (isBillsPage) {
    sidebarLinks = [
      {
        name: 'Services',
        links: [
          {
            icon: 'ki-bank',
            label: 'Airtime',
            onClick: () => setShowModal('airtime'),
          },
          {
            icon: 'ki-cheque',
            label: 'Data',
            onClick: () => setShowModal('data'),
          },
          {
            icon: 'ki-shop',
            label: 'Television',
            onClick: () => setShowModal('television'),
          },
          {
            icon: 'ki-shop',
            label: 'Electricity',
            onClick: () => setShowModal('electricity'),
          },
          {
            icon: 'ki-shop',
            label: 'Betting',
            onClick: () => setShowModal('betting'),
          },
        ],
      },
    ]
  } else if (isPayoutPage) {
    sidebarLinks = [
      {
        name: 'Services',
        links: [
          {
            icon: 'ki-bank',
            label: `Bank Transfer`,
            onClick: () => setShowModal('bank-transfer'),
          },
          {
            icon: 'ki-cheque',
            label: 'Paytonic Transfer',
            onClick: () => setShowModal('paytonic-transfer'),
          },
        ],
      },
    ]
  } else {
    sidebarLinks = [
      {
        name: 'Quick Links',
        links: [
          { href: '/payout', icon: 'ki-bank', label: 'Payout' },
          { href: '/bills', icon: 'ki-cheque', label: 'Bills' },
          { href: '/pos', icon: 'ki-shop', label: 'POS' },
        ],
      },
    ]
  }

  return { sidebarLinks, showModal, setShowModal }
}

export default useSidebarLinks
