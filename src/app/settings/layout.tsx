'use client'

import Image from 'next/image'
import Link from 'next/link'
import { usePathname } from 'next/navigation'

import UserImage from '@/assets/images/300-1.jpg'
import Navbar from '@/components/common/Navbar'
import Sidebar from '@/components/common/Sidebar'

const Layout = ({
  children,
}: Readonly<{
  children: React.ReactNode
}>) => {
  const pathname = usePathname()

  const navItems = [
    { label: 'Settings', path: '/dashboard/settings' },
    { label: 'Security', path: '/dashboard/settings/security' },
    { label: 'API Keys', path: '#' },
  ]

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
                <div id="kt_app_toolbar" className="app-toolbar py-3 py-lg-0">
                  <div
                    id="kt_app_toolbar_container"
                    className="app-container container-xxl d-flex flex-stack"
                  >
                    <div className="page-title d-flex flex-column justify-content-center me-3">
                      <h1 className="page-heading d-flex text-gray-900 fw-bold fs-3 flex-column justify-content-center my-0">
                        Account Settings
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
                        <li className="breadcrumb-item text-muted">Account</li>
                      </ul>
                    </div>
                  </div>
                </div>

                <div
                  id="kt_app_content"
                  className="app-content flex-column-fluid"
                >
                  <div
                    id="kt_app_content_container"
                    className="app-container container-xxl"
                  >
                    <div className="card mb-5 mb-xl-10">
                      <div className="card-body pt-9 pb-0">
                        <div className="d-flex flex-wrap flex-sm-nowrap">
                          <div className="me-7 mb-4">
                            <div className="symbol symbol-100px symbol-lg-160px symbol-fixed position-relative">
                              <Image
                                className="w-160px h-160px"
                                src={UserImage}
                                width={160}
                                height={160}
                                alt="image"
                              />
                              <div className="position-absolute translate-middle bottom-0 start-100 mb-6 bg-success rounded-circle border border-4 border-body h-20px w-20px"></div>
                            </div>
                          </div>

                          <div className="flex-grow-1">
                            <div className="d-flex justify-content-between align-items-start flex-wrap mb-2">
                              <div className="d-flex flex-column">
                                <div className="d-flex align-items-center mb-2">
                                  <a
                                    href="#"
                                    className="text-gray-900 text-hover-primary fs-2 fw-bold me-1"
                                  >
                                    Max Smith
                                  </a>
                                  <a href="#">
                                    <i className="ki-outline ki-verify fs-1 text-primary"></i>
                                  </a>
                                </div>

                                <div className="d-flex flex-wrap fw-semibold fs-6 mb-4 pe-2">
                                  <a
                                    href="#"
                                    className="d-flex align-items-center text-gray-500 text-hover-primary me-5 mb-2"
                                  >
                                    <i className="ki-outline ki-profile-circle fs-4 me-1"></i>
                                    Developer
                                  </a>
                                  <a
                                    href="#"
                                    className="d-flex align-items-center text-gray-500 text-hover-primary me-5 mb-2"
                                  >
                                    <i className="ki-outline ki-geolocation fs-4 me-1"></i>
                                    SF, Bay Area
                                  </a>
                                  <a
                                    href="#"
                                    className="d-flex align-items-center text-gray-500 text-hover-primary mb-2"
                                  >
                                    <i className="ki-outline ki-sms fs-4"></i>
                                    max@kt.com
                                  </a>
                                </div>
                              </div>

                              <div className="d-flex my-4">
                                {/* <a
                        href="#"
                        className="btn btn-sm btn-primary me-3"
                        data-bs-toggle="modal"
                        data-bs-target="#kt_modal_offer_a_deal"
                      >
                        Hire Me
                      </a> */}

                                <div className="me-0">
                                  <button
                                    className="btn btn-sm btn-icon btn-bg-light btn-active-color-primary"
                                    data-kt-menu-trigger="click"
                                    data-kt-menu-placement="bottom-end"
                                  >
                                    <i className="ki-solid ki-dots-horizontal fs-2x"></i>
                                  </button>

                                  <div
                                    className="menu menu-sub menu-sub-dropdown menu-column menu-rounded menu-gray-800 menu-state-bg-light-primary fw-semibold w-200px py-3"
                                    data-kt-menu="true"
                                  >
                                    <div className="menu-item px-3">
                                      <div className="menu-content text-muted pb-2 px-3 fs-7 text-uppercase">
                                        Payments
                                      </div>
                                    </div>

                                    <div className="menu-item px-3">
                                      <a href="#" className="menu-link px-3">
                                        Create Invoice
                                      </a>
                                    </div>

                                    <div className="menu-item px-3">
                                      <a
                                        href="#"
                                        className="menu-link flex-stack px-3"
                                      >
                                        Create Payment
                                        <span
                                          className="ms-2"
                                          data-bs-toggle="tooltip"
                                          title="Specify a target name for future usage and reference"
                                        >
                                          <i className="ki-outline ki-information fs-6"></i>
                                        </span>
                                      </a>
                                    </div>

                                    <div className="menu-item px-3">
                                      <a href="#" className="menu-link px-3">
                                        Generate Bill
                                      </a>
                                    </div>

                                    <div
                                      className="menu-item px-3"
                                      data-kt-menu-trigger="hover"
                                      data-kt-menu-placement="right-end"
                                    >
                                      <a href="#" className="menu-link px-3">
                                        <span className="menu-title">
                                          Subscription
                                        </span>
                                        <span className="menu-arrow"></span>
                                      </a>

                                      <div className="menu-sub menu-sub-dropdown w-175px py-4">
                                        <div className="menu-item px-3">
                                          <a
                                            href="#"
                                            className="menu-link px-3"
                                          >
                                            Plans
                                          </a>
                                        </div>

                                        <div className="menu-item px-3">
                                          <a
                                            href="#"
                                            className="menu-link px-3"
                                          >
                                            Billing
                                          </a>
                                        </div>

                                        <div className="menu-item px-3">
                                          <a
                                            href="#"
                                            className="menu-link px-3"
                                          >
                                            Statements
                                          </a>
                                        </div>

                                        <div className="separator my-2"></div>

                                        <div className="menu-item px-3">
                                          <div className="menu-content px-3">
                                            <label className="form-check form-switch form-check-custom form-check-solid">
                                              <input
                                                className="form-check-input w-30px h-20px"
                                                type="checkbox"
                                                value="1"
                                                name="notifications"
                                              />
                                              <span className="form-check-label text-muted fs-6">
                                                Recuring
                                              </span>
                                            </label>
                                          </div>
                                        </div>
                                      </div>
                                    </div>

                                    <div className="menu-item px-3 my-1">
                                      <a href="#" className="menu-link px-3">
                                        Settings
                                      </a>
                                    </div>
                                  </div>
                                </div>
                              </div>
                            </div>

                            <div className="d-flex flex-wrap flex-stack">
                              <div className="d-flex align-items-center w-200px w-sm-300px flex-column mt-3">
                                <div className="d-flex justify-content-between w-100 mt-auto mb-2">
                                  <span className="fw-semibold fs-6 text-gray-500">
                                    Profile Compleation
                                  </span>
                                  <span className="fw-bold fs-6">50%</span>
                                </div>
                                <div className="h-5px mx-3 w-100 bg-light mb-3">
                                  <div
                                    className="bg-success rounded h-5px"
                                    role="progressbar"
                                    style={{ width: '50%' }}
                                    aria-valuenow={50}
                                    aria-valuemin={0}
                                    aria-valuemax={100}
                                  ></div>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>

                        <ul className="nav nav-stretch nav-line-tabs nav-line-tabs-2x border-transparent fs-5 fw-bold">
                          {navItems.map((item, index) => (
                            <li key={index} className="nav-item mt-2">
                              <Link
                                href={item.path}
                                replace
                                className={`nav-link text-active-primary ms-0 me-10 py-5 ${pathname === item.path ? 'active' : ''}`}
                              >
                                {item.label}
                              </Link>
                            </li>
                          ))}
                        </ul>
                      </div>
                    </div>

                    {children}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </body>
  )
}

export default Layout
