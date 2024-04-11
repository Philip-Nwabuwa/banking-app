'use client'

import Link from 'next/link'
import Image from 'next/image'
import { usePathname } from 'next/navigation'
import { useState } from 'react'

import MinLogo from '@/assets/logos/main.png'

const Navbar = () => {
  const [drawerOpen, setDrawerOpen] = useState(false)

  const toggleDrawer = () => {
    setDrawerOpen((prevState) => !prevState)
  }

  const pathname = usePathname()
  console.log(pathname);
  

  const menuItems = [
    { path: '/dashboard', title: 'Dashboard' },
    { path: '/dashboard/transfers', title: 'Transfers' },
    { path: '/dashboard/bills', title: 'Bills' },
    { path: '/dashboard/transactions', title: 'Transactions' },
  ]

  return (
    <div
      id="kt_app_header"
      className="app-header"
      data-kt-sticky="true"
      data-kt-sticky-activate-="true"
      data-kt-sticky-name="app-header-sticky"
      data-kt-sticky-offset="{default: '200px', lg: '300px'}"
    >
      <div
        className="app-container container-xxl d-flex align-items-stretch justify-content-between"
        id="kt_app_header_container"
      >
        <div
          className="app-header-wrapper d-flex flex-grow-1 align-items-stretch justify-content-between"
          id="kt_app_header_wrapper"
        >
          <div
            className="app-header-menu app-header-mobile-drawer align-items-start align-items-lg-center w-100"
            data-kt-drawer="true"
            data-kt-drawer-name="app-header-menu"
            data-kt-drawer-activate="{default: true, lg: false}"
            data-kt-drawer-overlay="true"
            data-kt-drawer-width="250px"
            data-kt-drawer-direction="end"
            data-kt-drawer-toggle="#kt_app_header_menu_toggle"
            data-kt-swapper="true"
            data-kt-swapper-mode="{default: 'append', lg: 'prepend'}"
            data-kt-swapper-parent="{default: '#kt_app_body', lg: '#kt_app_header_wrapper'}"
          >
            <div
              className="menu menu-rounded menu-column menu-lg-row menu-active-bg menu-state-primary menu-title-gray-700 menu-arrow-gray-500 menu-bullet-gray-500 my-5 my-lg-0 align-items-stretch fw-semibold px-2 px-lg-0"
              id="#kt_header_menu"
              data-kt-menu="true"
            >
              {menuItems.map((item, index) => (
                <div
                  key={index}
                  data-kt-menu-trigger="{default: 'click', lg: 'hover'}"
                  data-kt-menu-placement="bottom-start"
                  className={`menu-item menu-here-bg menu-lg-down-accordion me-0 me-lg-2 `}
                >
                  <span className="menu-link">
                    <Link href={item.path}>
                      <span
                        className={`menu-title ${
                          pathname === item.path ? 'text-active' : ''
                        }`}
                      >
                        {item.title}
                      </span>
                    </Link>
                    <span className="menu-arrow d-lg-none"></span>
                  </span>
                </div>
              ))}
            </div>
          </div>

          <div className="d-flex align-items-center">
            <div
              className="btn btn-icon btn-color-gray-600 btn-active-color-primary ms-n3 me-2 d-flex d-lg-none"
              id="kt_app_sidebar_toggle"
            >
              <i className="ki-outline ki-abstract-14 fs-2"></i>
            </div>
            <Link href="/dashboard" className="d-flex d-lg-none">
              <Image
                alt="Logo"
                src={MinLogo}
                className="h-25px h-lg-30px theme-light-show"
                width={226}
                height={60}
              />
            </Link>
          </div>

          <div className="app-navbar flex-shrink-0">
            <div className="app-navbar-item ms-1 ms-lg-3">
              <div
                className="btn btn-icon btn-circle btn-color-gray-500 btn-active-color-primary btn-custom shadow-xs bg-body"
                id="kt_drawer_chat_toggle"
              >
                <i className="ki-outline ki-message-notif fs-1"></i>
              </div>
            </div>
            <div
              className="app-navbar-item d-lg-none ms-2 me-n4"
              title="Show header menu"
            >
              <div
                className="btn btn-icon btn-color-gray-600 btn-active-color-primary"
                id="kt_app_header_menu_toggle"
              >
                <i className="ki-outline ki-text-align-left fs-2 fw-bold"></i>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Navbar
