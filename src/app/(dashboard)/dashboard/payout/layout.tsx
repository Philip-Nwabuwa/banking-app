'use client'

import Navigation from '@/components/common/Navigation'
import Link from 'next/link'
import { usePathname } from 'next/navigation'

const PayoutLayout = ({
  children,
}: Readonly<{
  children: React.ReactNode
}>) => {
  const pathname = usePathname()

  const navItems = [
    { label: 'Bank Transfer', path: '/dashboard/transfers/bank-transfer' },
    {
      label: 'Paytonic Transfer',
      path: '/dashboard/transfers/paytonic-transfer',
    },
  ]
  return (
    <div className="d-flex flex-column flex-column-fluid">
      <div id="kt_app_toolbar" className="app-toolbar py-3 py-lg-0">
        <div
          id="kt_app_toolbar_container"
          className="app-container container-xxl d-flex flex-stack"
        >
          <div className="page-title d-flex flex-column justify-content-center me-3">
            <h1 className="page-heading d-flex text-gray-900 fw-bold fs-3 flex-column justify-content-center my-0">
              Transfers
            </h1>
            <ul className="breadcrumb breadcrumb-separatorless fw-semibold fs-7 my-0 pt-1">
              <li className="breadcrumb-item text-muted">
                <Link
                  href="/dashboard"
                  className="text-muted text-hover-primary"
                >
                  Dashboard
                </Link>
              </li>
              <li className="breadcrumb-item">
                <span className="bullet bg-gray-500 w-5px h-2px"></span>
              </li>
              <li className="breadcrumb-item text-muted">transfers</li>
            </ul>
          </div>
        </div>
      </div>

      <div id="kt_app_content" className="app-content flex-column-fluid">
        <Navigation pathname={pathname} navItems={navItems} />
        {children}
      </div>
    </div>
  )
}

export default PayoutLayout