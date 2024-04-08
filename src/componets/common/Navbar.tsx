"use client"

import Link from "next/link";
import Image from "next/image";

import MinLogo from "@/assets/logos/main.png";
import { useState } from "react";

const Navbar = () => {
  const [drawerOpen, setDrawerOpen] = useState(false);

  const toggleDrawer = () => {
    setDrawerOpen(prevState => !prevState);
  };
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
              <div
                data-kt-menu-trigger="{default: 'click', lg: 'hover'}"
                data-kt-menu-placement="bottom-start"
                className="menu-item menu-here-bg menu-lg-down-accordion me-0 me-lg-2"
              >
                <span className="menu-link">
                  <span className="menu-title">Dashboard</span>
                  <span className="menu-arrow d-lg-none"></span>
                </span>
                <div className="menu-sub menu-sub-lg-down-accordion menu-sub-lg-dropdown p-0 w-100 w-lg-850px">
                  <div
                    className="menu-state-bg menu-extended overflow-hidden overflow-lg-visible"
                    data-kt-menu-dismiss="true"
                  >
                    <div className="row">
                      <div className="col-lg-8 mb-3 mb-lg-0 py-3 px-3 py-lg-6 px-lg-6">
                        <div className="row">
                          <div className="col-lg-6 mb-3">
                            <div className="menu-item p-0 m-0">
                              <a href="index.html" className="menu-link">
                                <span className="menu-custom-icon d-flex flex-center flex-shrink-0 rounded w-40px h-40px me-3">
                                  <i className="ki-outline ki-element-11 text-primary fs-1"></i>
                                </span>
                                <span className="d-flex flex-column">
                                  <span className="fs-6 fw-bold text-gray-800">
                                    Default
                                  </span>
                                  <span className="fs-7 fw-semibold text-muted">
                                    Reports & statistics
                                  </span>
                                </span>
                              </a>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="menu-more bg-light col-lg-4 py-3 px-3 py-lg-6 px-lg-6 rounded-end">
                        <h4 className="fs-6 fs-lg-4 text-gray-800 fw-bold mt-3 mb-3 ms-4">
                          More Dashboards
                        </h4>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
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
              <img
                alt="Logo"
                src="assets/media/logos/demo23-dark.svg"
                className="h-20px theme-dark-show"
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
  );
};

export default Navbar;
