'use client'

import Link from 'next/link'
import { usePathname } from 'next/navigation'

const Transactions = () => {
  const pathname = usePathname()

  const navItems = [
    { label: 'Bank Transfer', path: '/dashboard/transactions/bank-transfer' },
    {
      label: 'Paytonic Wallet',
      path: '/dashboard/transactions/paytonic-wallet',
    },
    { label: 'Withdraw', path: '/dashboard/transactions/withdraw' },
    { label: 'Deposit', path: '/dashboard/transactions/deposit' },
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
              Transactions
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
              <li className="breadcrumb-item text-muted">transactions</li>
            </ul>
          </div>
        </div>
      </div>

      <div id="kt_app_content" className="app-content flex-column-fluid">
        <div
          id="kt_app_content_container"
          className="app-container container-xxl"
        >
          <div className="card mb-5 mb-xl-10">
            <div className="card-body">
              <ul
                style={{
                  display: 'flex',
                  justifyContent: 'space-between',
                  alignItems: 'center',
                }}
                className="nav nav-stretch nav-line-tabs nav-line-tabs-2x border-transparent fs-5 fw-bold"
              >
                {navItems.map((item, index) => (
                  <li key={index} className="nav-item mt-2">
                    <Link
                      href={item.path}
                      className={`nav-link text-active-primary ms-0 me-10 ${
                        pathname === item.path ? 'active' : ''
                      }`}
                    >
                      {item.label}s
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Transactions
