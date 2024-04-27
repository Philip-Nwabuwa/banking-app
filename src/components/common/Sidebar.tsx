'use client'

import DarkLogo from '@/assets/logos/main-black.png'
import UserImage from '@/assets/images/user.jpg'
import Image from 'next/image'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { Balance } from './Balance'
import SidebarLink from './SidebarLinks'
import Logout from './Logout'
import DepositSlider from './DepositSlider'
import useSidebarLinks from '@/types/sidebar-links'
import { Popover, PopoverContent, PopoverTrigger } from '../ui/popover'
import { Command, CommandGroup, CommandItem, CommandList } from '../ui/command'
import React, { useState } from 'react'
import CopyToClipboard from './CopyToClipboard'

const Sidebar = () => {
  const [open, setOpen] = useState(false)

  const pathname = usePathname()
  const { sidebarLinks } = useSidebarLinks()

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
      data-kt-drawer-width="285px"
      data-kt-drawer-direction="start"
    >
      <div>
        <div className="d-flex flex-stack px-4 px-lg-6 py-2 pt-lg-5">
          <Link href="/dashboard" replace>
            <Image
              alt="Logo"
              src={DarkLogo}
              priority
              className="tw-w-[130px] tw-h-[30] theme-light-show"
              width={0}
              height={0}
            />
          </Link>

          <div className="ms-3">
            <div className="cursor-pointer tw-relative symbol symbol-circle symbol-40px">
              <Popover open={open} onOpenChange={setOpen}>
                <PopoverTrigger asChild>
                  <Image
                    onClick={() => console.log(open)}
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
                </PopoverTrigger>
                <PopoverContent
                  className="tw-p-0 tw-z-[300] tw-relative -tw-top-[48px] tw-left-16"
                  align="start"
                >
                  <Command>
                    <CommandList>
                      <CommandGroup>
                        <CommandItem>
                          <div className="tw-flex tw-justify-between tw-font-bold tw-text-lg">
                            @JohnDoe74 <CopyToClipboard text="@JohnDoe74" />
                          </div>
                          <div className="tw-font-bold tw-text-lg">
                            John Doe
                          </div>
                          <div className="tw-font-bold tw-text-lg">
                            example@example.com
                          </div>
                        </CommandItem>
                      </CommandGroup>
                      <div className="separator my-2"></div>
                      <CommandGroup>
                        <CommandItem className="tw-cursor-pointer">
                          <div
                            onClick={() => setOpen(false)}
                            className="text-black"
                          >
                            Profile
                          </div>
                        </CommandItem>
                      </CommandGroup>
                      <div className="separator my-2"></div>

                      <CommandGroup>
                        <CommandItem className="tw-cursor-pointer">
                          <div
                            onClick={() => setOpen(false)}
                            className="text-black"
                          >
                            Security
                          </div>
                        </CommandItem>
                      </CommandGroup>
                      <div className="separator my-2"></div>

                      <CommandGroup>
                        <CommandItem className="tw-cursor-pointer">
                          <div
                            onClick={() => setOpen(false)}
                            className="text-black"
                          >
                            Withdrawal
                          </div>
                        </CommandItem>
                      </CommandGroup>
                      <div className="separator my-2"></div>

                      <CommandGroup>
                        <CommandItem className="tw-cursor-pointer">
                          Log Out
                        </CommandItem>
                      </CommandGroup>
                    </CommandList>
                  </Command>
                </PopoverContent>
              </Popover>
              <div
                className="position-absolute rounded-circle bg-success start-100 top-100 h-8px w-8px mt-n3"
                style={{
                  marginLeft: '-0.8rem',
                }}
              ></div>
            </div>
          </div>
        </div>

        <div className="flex-column-fluid px-4 px-lg-6 py-3">
          <div
            className="d-flex flex-column hover-scroll-y pe-4 me-n4"
            data-kt-scroll="true"
            data-kt-scroll-activate="true"
            data-kt-scroll-height="auto"
            data-kt-scroll-dependencies="#kt_app_sidebar_logo, #kt_app_sidebar_footer"
            data-kt-scroll-wrappers="#kt_app_sidebar, #kt_app_sidebar_nav"
            data-kt-scroll-offset="5px"
          >
            <Balance />
            <div className="tw-flex tw-justify-end">
              <Link
                className="text-primary tw-bg-blue-100 tw-px-3 tw-py-2 tw-rounded-xl fw-bold mb-4"
                href={'/transactions/withdraw'}
              >
                Withdraw Money
              </Link>
            </div>
            <DepositSlider />
            <div className="mb-6 mt-2">
              {sidebarLinks.map((section, index) => (
                <div key={index}>
                  {section.name && (
                    <h3 className="text-gray-800 fw-bold mb-6">
                      {section.name}
                    </h3>
                  )}
                  <div className="row row-cols-3">
                    {section.links &&
                      section.links.map((link, linkIndex) => (
                        <SidebarLink
                          key={linkIndex}
                          link={link}
                          isActiveLink={isActiveLink}
                        />
                      ))}
                  </div>
                </div>
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
