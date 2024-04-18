'use client'

import Image from 'next/image'
import Link from 'next/link'
import { usePathname } from 'next/navigation'

import UserImage from '@/assets/images/300-1.jpg'
import Navbar from '@/components/common/Navbar'
import Sidebar from '@/components/common/Sidebar'

const SettingsLayout = ({
  children,
}: Readonly<{
  children: React.ReactNode
}>) => {
  const pathname = usePathname()

  const BuyPosPage = pathname === '/pos/buy-pos'

  return (
    <body
      className="app-default"
      id="kt_app_body"
      data-kt-app-sidebar-enabled="true"
      data-kt-app-sidebar-fixed="true"
      data-kt-app-sidebar-push-header="true"
      data-kt-app-sidebar-push-toolbar="true"
      data-kt-app-sidebar-push-footer="true"
      data-kt-app-toolbar-enabled="true"
    >
      <div className="d-flex flex-column flex-root app-root" id="kt_app_root">
        <div
          className="app-page flex-column flex-column-fluid"
          id="kt_app_page"
        >
          <Navbar />
          <div className="app-wrapper flex-column flex-row-fluid">
            <Sidebar />
            <div
              className="app-main flex-column flex-row-fluid"
              id="kt_app_main"
            >
              <div className="d-flex flex-column flex-column-fluid">
                <div
                  id="kt_app_toolbar"
                  className="app-toolbar !tw-h-16 py-3 py-lg-0"
                >
                  <div
                    id="kt_app_toolbar_container"
                    className="app-container container-xxl d-flex flex-stack"
                  >
                    <div className="page-title d-flex flex-column justify-content-center me-3">
                      <h1 className="page-heading d-flex text-gray-900 fw-bold fs-3 flex-column justify-content-center my-0">
                        POS
                      </h1>
                      <ul className="breadcrumb breadcrumb-separatorless fw-semibold fs-7 my-0 pt-1">
                        <li className="breadcrumb-item text-muted">
                          <Link
                            href="/dashboard"
                            replace
                            className="text-muted text-hover-primary"
                          >
                            Dashboard
                          </Link>
                        </li>
                        <li className="breadcrumb-item">
                          <span className="bullet bg-gray-500 w-5px h-2px"></span>
                        </li>
                        <li className="breadcrumb-item text-muted">POS</li>
                      </ul>
                    </div>
                    <div className="d-flex align-items-center gap-2 gap-lg-3">
                      {BuyPosPage ? (
                        <Link
                          href="/pos"
                          replace
                          className="btn btn-sm fw-bold btn-primary"
                        >
                          Pos Transactions
                        </Link>
                      ) : (
                        <Link
                          href="/pos/buy-pos"
                          replace
                          className="btn btn-sm fw-bold btn-primary"
                        >
                          Purchase a POS
                        </Link>
                      )}
                    </div>
                  </div>
                </div>
                {children}
              </div>
            </div>
          </div>
        </div>
      </div>
    </body>
  )
}

export default SettingsLayout
