'use client'

import Image from 'next/image'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { useState } from 'react'

import Logo from '@/assets/logos/main.png'
import DarkLogo from '@/assets/logos/main-black.png'
import UserImage from '@/assets/images/user.jpg'
import { sidebarLinks } from '@/types/sidebar-links'
import SidebarLink from './SidebarLinks'

const Navbar = () => {
  const [sidebarVisible, setSidebarVisible] = useState(false)

  const toggleSidebar = () => {
    setSidebarVisible(!sidebarVisible)
  }

  const pathname = usePathname()

  const menuItems = [
    { path: '/dashboard', title: 'Dashboard' },
    { path: '/payout', title: 'Payout' },
    { path: '/bills', title: 'Bills' },
    { path: '/transactions', title: 'Transactions' },
  ]

  const isActiveLink = (href: string) => {
    return pathname === href
  }

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
              onClick={toggleSidebar}
            >
              <i className="ki-outline ki-abstract-14 fs-2"></i>
            </div>
            {sidebarVisible && (
              <div
                onClick={toggleSidebar}
                className="drawer-overlay lg:tw-hidden"
              ></div>
            )}
            <div
              className={`${sidebarVisible ? 'sm-tw-w-[275px] tw-w-[300px] lg:tw-hidden tw-fixed tw-flex tw-flex-col tw-top-0 tw-bottom-0 tw-left-0  tw-bg-white tw-h-screen tw-z-[200] .flex-column tw-transition tw-ease-in-out' : 'tw-transition tw-ease-in-out tw-hidden'}`}
            >
              <div>
                <div
                  className="d-flex flex-stack px-4 px-lg-6 py-3 py-lg-8"
                  id="kt_app_sidebar_logo"
                >
                  <Link href="/dashboard" replace>
                    <Image
                      alt="Logo"
                      src={DarkLogo}
                      className="h-25px h-lg-30px theme-light-show"
                      width={150}
                      height={50}
                    />
                  </Link>

                  <div className="ms-3">
                    <div
                      className="cursor-pointer position-relative symbol symbol-circle symbol-40px"
                      data-kt-menu-trigger="{default: 'click', lg: 'hover'}"
                      data-kt-menu-attach="parent"
                      data-kt-menu-placement="bottom-end"
                    >
                      <Link
                        href={'/dashboard/settings'}
                        onClick={toggleSidebar}
                      >
                        <Image
                          src={UserImage}
                          width={100}
                          height={100}
                          alt="user"
                          style={{
                            width: '40px',
                            height: '40px',
                            borderRadius: '100%',
                          }}
                        />
                      </Link>
                      <div className="position-absolute rounded-circle bg-success start-100 top-100 h-8px w-8px ms-n3 mt-n3"></div>
                    </div>
                  </div>
                </div>

                <div
                  className="flex-column-fluid px-5 px-lg-8 py-4"
                  id="kt_app_sidebar_nav"
                >
                  <div
                    id="kt_app_sidebar_nav_wrapper"
                    className="d-flex flex-column !tw-justify-between hover-scroll-y pe-4 me-n4"
                    data-kt-scroll="true"
                    data-kt-scroll-activate="true"
                    data-kt-scroll-height="auto"
                    data-kt-scroll-dependencies="#kt_app_sidebar_logo, #kt_app_sidebar_footer"
                    data-kt-scroll-wrappers="#kt_app_sidebar, #kt_app_sidebar_nav"
                    data-kt-scroll-offset="5px"
                  >
                    <div className="mb-6 mt-6">
                      <h3 className="text-gray-800 fw-bold mb-8">Services</h3>

                      <div
                        className="row row-cols-3"
                        data-kt-buttons="true"
                        data-kt-buttons-target="[data-kt-button]"
                      >
                        {sidebarLinks.map((link, index) => (
                          <SidebarLink
                            key={index}
                            link={link}
                            isActiveLink={isActiveLink}
                            toggleSidebar={toggleSidebar}
                          />
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <Link href="/dashboard" className="d-flex d-lg-none">
              <Image
                alt="Logo"
                src={DarkLogo}
                className="h-25px h-lg-30px theme-light-show"
                width={150}
                height={50}
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
