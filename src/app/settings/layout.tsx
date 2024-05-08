'use client'

import Image from 'next/image'
import Link from 'next/link'
import { usePathname } from 'next/navigation'

import UserImage from '@/assets/images/300-1.jpg'
import Navbar from '@/components/common/Navbar'
import Sidebar from '@/components/common/Sidebar'
import ScrollToTop from '@/components/common/ScrollToTop'

const SettingsLayout = ({
  children,
}: Readonly<{
  children: React.ReactNode
}>) => {
  const pathname = usePathname()

  const navItems = [
    { label: 'Profile', path: '/settings' },
    { label: 'Privacy & Security', path: '/settings/security' },
    { label: 'Settlement Accounts', path: '/settings/create-settlement' },
  ]

  return (
    <div
      className="body app-default tw-min-h-screen"
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
                    <div className="card !tw-rounded-es-none !tw-rounded-ee-none">
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
                                  <div className="text-gray-900 text-hover-primary fs-2 fw-bold me-1">
                                    Max Smith
                                  </div>
                                  <div>
                                    <i className="ki-outline ki-verify fs-1 text-primary"></i>
                                  </div>
                                </div>

                                <div className="d-flex flex-wrap fw-semibold fs-6 mb-4 pe-2">
                                  <div className="d-flex align-items-center text-gray-500 text-hover-primary me-5 mb-2">
                                    <i className="ki-outline ki-profile-circle fs-4 me-1"></i>
                                    Developer
                                  </div>
                                  <div className="d-flex align-items-center text-gray-500 text-hover-primary me-5 mb-2">
                                    <i className="ki-outline ki-geolocation fs-4 me-1"></i>
                                    SF, Bay Area
                                  </div>
                                  <div className="d-flex align-items-center text-gray-500 text-hover-primary mb-2">
                                    <i className="ki-outline ki-sms fs-4"></i>
                                    max@kt.com
                                  </div>
                                </div>
                              </div>

                              <div className="tw-flex my-4 tw-itmes-center tw-justify-center tw-gap-4">
                                <div>
                                  <button
                                    className="btn btn-icon btn-bg-light btn-active-color-primary"
                                    data-kt-menu-trigger="click"
                                    data-kt-menu-placement="bottom-end"
                                  >
                                    <i className="ki-solid ki-dots-horizontal fs-2x"></i>
                                  </button>
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
                                className={`nav-link text-active-primary ms-0 me-10 ${pathname === item.path ? 'active' : ''}`}
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
        <ScrollToTop />
      </div>
    </div>
  )
}

export default SettingsLayout
