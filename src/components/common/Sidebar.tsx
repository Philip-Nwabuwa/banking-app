'use client'

import DarkLogo from '@/assets/logos/main-black.png'
import UserImage from '@/assets/images/300-1.jpg'
import Image from 'next/image'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import sidebarLinks from '@/types/sidebar-links'
import { Balance } from './Balance'
import SidebarLink from './SidebarLinks'
import Logout from './Logout'

const Sidebar = () => {
  const pathname = usePathname()
  const links = sidebarLinks()

  const isActiveLink = (href: string) => {
    return pathname.startsWith(href)
  }

  return (
    <div
      className="app-sidebar flex-column tw-justify-between table-responsive"
      data-kt-drawer="true"
      data-kt-drawer-name="app-sidebar"
      data-kt-drawer-activate="{default: true, lg: false}"
      data-kt-drawer-overlay="true"
      data-kt-drawer-width="275px"
      data-kt-drawer-direction="start"
      data-kt-drawer-toggle="#kt_app_sidebar_toggle"
    >
      <div
        className="d-flex flex-stack px-4 px-lg-6 py-3 pt-lg-8"
        id="kt_app_sidebar_logo"
      >
        <Link href="/dashboard" replace>
          <Image
            alt="Logo"
            src={DarkLogo}
            priority
            className="tw-w-[130px] tw-h-[30] theme-light-show"
            width={0}
            height={0}
          />

          {/* <img
              alt="LogoMe"
              src="assets/media/logos/demo23-dark.svg"
              className="h-20px h-lg-25px theme-dark-show"
            /> */}
        </Link>

        <div className="ms-3">
          <div
            className="cursor-pointer position-relative symbol symbol-circle symbol-40px"
            data-kt-menu-trigger="{default: 'click', lg: 'hover'}"
            data-kt-menu-attach="parent"
            data-kt-menu-placement="bottom-end"
          >
            <Link href={'/settings'} replace>
              <Image
                src={UserImage}
                width={100}
                height={100}
                alt="user"
                style={{
                  width: '45px',
                  height: '45px',
                  borderRadius: '100%',
                }}
              />
            </Link>
            <div
              className="position-absolute rounded-circle bg-success start-100 top-100 h-8px w-8px mt-n3"
              style={{
                marginLeft: '-0.8rem',
              }}
            ></div>
          </div>
        </div>
      </div>

      <div
        className="flex-column-fluid px-4 px-lg-8 py-4"
        id="kt_app_sidebar_nav"
      >
        <div
          id="kt_app_sidebar_nav_wrapper"
          className="d-flex flex-column hover-scroll-y pe-4 me-n4"
          data-kt-scroll="true"
          data-kt-scroll-activate="true"
          data-kt-scroll-height="auto"
          data-kt-scroll-dependencies="#kt_app_sidebar_logo, #kt_app_sidebar_footer"
          data-kt-scroll-wrappers="#kt_app_sidebar, #kt_app_sidebar_nav"
          data-kt-scroll-offset="5px"
        >
          <Balance />

          <div className="mb-6">
            <h3 className="text-gray-800 fw-bold mb-8">Services</h3>

            <div
              className="row row-cols-3"
              data-kt-buttons="true"
              data-kt-buttons-target="[data-kt-button]"
            >
              {links.map((link, index) => (
                <SidebarLink
                  key={index}
                  link={link}
                  isActiveLink={isActiveLink}
                />
              ))}
            </div>
          </div>
        </div>
      </div>
      <div className="-tw-mt-4">
        <div className="separator my-2"></div>

        <div className="tw-flex tw-justify-between tw-items-center tw-mx-4 tw-my-4">
          <Logout />
          <Link href={'/settings'}>
            <i className="ki-duotone ki-setting-2 fs-2x">
              <span className="path1"></span>
              <span className="path2"></span>
            </i>
          </Link>
        </div>
      </div>
    </div>
  )
}

export default Sidebar
