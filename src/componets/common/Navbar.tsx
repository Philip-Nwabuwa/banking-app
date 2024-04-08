import Link from "next/link";
import Image from "next/image";

import MinLogo from "@/assets/logos/main.png";

const Navbar = () => {
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
                  <span className="menu-title">Dashboards</span>
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

              <div
                data-kt-menu-trigger="{default: 'click', lg: 'hover'}"
                data-kt-menu-placement="bottom-start"
                className="menu-item menu-lg-down-accordion me-0 me-lg-2"
              >
                <span className="menu-link">
                  <span className="menu-title">Pages</span>
                  <span className="menu-arrow d-lg-none"></span>
                </span>

                <div className="menu-sub menu-sub-lg-down-accordion menu-sub-lg-dropdown p-0">
                  <div className="menu-active-bg px-4 px-lg-0">
                    <div className="d-flex w-100 overflow-auto">
                      <ul className="nav nav-stretch nav-line-tabs fw-bold fs-6 p-0 p-lg-10 flex-nowrap flex-grow-1">
                        <li className="nav-item mx-lg-1">
                          <a
                            className="nav-link py-3 py-lg-6 active text-active-primary"
                            href="#"
                            data-bs-toggle="tab"
                            data-bs-target="#kt_app_header_menu_pages_pages"
                          >
                            General
                          </a>
                        </li>

                        <li className="nav-item mx-lg-1">
                          <a
                            className="nav-link py-3 py-lg-6 text-active-primary"
                            href="#"
                            data-bs-toggle="tab"
                            data-bs-target="#kt_app_header_menu_pages_account"
                          >
                            Account
                          </a>
                        </li>

                        <li className="nav-item mx-lg-1">
                          <a
                            className="nav-link py-3 py-lg-6 text-active-primary"
                            href="#"
                            data-bs-toggle="tab"
                            data-bs-target="#kt_app_header_menu_pages_authentication"
                          >
                            Authentication
                          </a>
                        </li>

                        <li className="nav-item mx-lg-1">
                          <a
                            className="nav-link py-3 py-lg-6 text-active-primary"
                            href="#"
                            data-bs-toggle="tab"
                            data-bs-target="#kt_app_header_menu_pages_utilities"
                          >
                            Utilities
                          </a>
                        </li>

                        <li className="nav-item mx-lg-1">
                          <a
                            className="nav-link py-3 py-lg-6 text-active-primary"
                            href="#"
                            data-bs-toggle="tab"
                            data-bs-target="#kt_app_header_menu_pages_widgets"
                          >
                            Widgets
                          </a>
                        </li>
                      </ul>
                    </div>

                    <div className="tab-content py-4 py-lg-8 px-lg-7">
                      <div
                        className="tab-pane active w-lg-1000px"
                        id="kt_app_header_menu_pages_pages"
                      >
                        <div className="row">
                          <div className="col-lg-8">
                            <div className="row">
                              <div className="col-lg-3 mb-6 mb-lg-0">
                                <h4 className="fs-6 fs-lg-4 fw-bold mb-3 ms-4">
                                  User Profile
                                </h4>

                                <div className="menu-item p-0 m-0">
                                  <a
                                    href="pages/user-profile/overview.html"
                                    className="menu-link"
                                  >
                                    <span className="menu-title">Overview</span>
                                  </a>
                                </div>

                                <div className="menu-item p-0 m-0">
                                  <a
                                    href="pages/user-profile/projects.html"
                                    className="menu-link"
                                  >
                                    <span className="menu-title">Projects</span>
                                  </a>
                                </div>

                                <div className="menu-item p-0 m-0">
                                  <a
                                    href="pages/user-profile/campaigns.html"
                                    className="menu-link"
                                  >
                                    <span className="menu-title">
                                      Campaigns
                                    </span>
                                  </a>
                                </div>

                                <div className="menu-item p-0 m-0">
                                  <a
                                    href="pages/user-profile/documents.html"
                                    className="menu-link"
                                  >
                                    <span className="menu-title">
                                      Documents
                                    </span>
                                  </a>
                                </div>

                                <div className="menu-item p-0 m-0">
                                  <a
                                    href="pages/user-profile/followers.html"
                                    className="menu-link"
                                  >
                                    <span className="menu-title">
                                      Followers
                                    </span>
                                  </a>
                                </div>

                                <div className="menu-item p-0 m-0">
                                  <a
                                    href="pages/user-profile/activity.html"
                                    className="menu-link"
                                  >
                                    <span className="menu-title">Activity</span>
                                  </a>
                                </div>
                              </div>

                              <div className="col-lg-3 mb-6 mb-lg-0">
                                <div className="mb-6">
                                  <h4 className="fs-6 fs-lg-4 fw-bold mb-3 ms-4">
                                    Corporate
                                  </h4>

                                  <div className="menu-item p-0 m-0">
                                    <a
                                      href="pages/about.html"
                                      className="menu-link"
                                    >
                                      <span className="menu-title">About</span>
                                    </a>
                                  </div>

                                  <div className="menu-item p-0 m-0">
                                    <a
                                      href="pages/team.html"
                                      className="menu-link"
                                    >
                                      <span className="menu-title">
                                        Our Team
                                      </span>
                                    </a>
                                  </div>

                                  <div className="menu-item p-0 m-0">
                                    <a
                                      href="pages/contact.html"
                                      className="menu-link"
                                    >
                                      <span className="menu-title">
                                        Contact Us
                                      </span>
                                    </a>
                                  </div>

                                  <div className="menu-item p-0 m-0">
                                    <a
                                      href="pages/licenses.html"
                                      className="menu-link"
                                    >
                                      <span className="menu-title">
                                        Licenses
                                      </span>
                                    </a>
                                  </div>

                                  <div className="menu-item p-0 m-0">
                                    <a
                                      href="pages/sitemap.html"
                                      className="menu-link"
                                    >
                                      <span className="menu-title">
                                        Sitemap
                                      </span>
                                    </a>
                                  </div>
                                </div>

                                <div className="mb-0">
                                  <h4 className="fs-6 fs-lg-4 fw-bold mb-3 ms-4">
                                    Careers
                                  </h4>

                                  <div className="menu-item p-0 m-0">
                                    <a
                                      href="pages/careers/list.html"
                                      className="menu-link"
                                    >
                                      <span className="menu-title">
                                        Careers List
                                      </span>
                                    </a>
                                  </div>

                                  <div className="menu-item p-0 m-0">
                                    <a
                                      href="pages/careers/apply.html"
                                      className="menu-link"
                                    >
                                      <span className="menu-title">
                                        Careers Apply
                                      </span>
                                    </a>
                                  </div>
                                </div>
                              </div>

                              <div className="col-lg-3 mb-6 mb-lg-0">
                                <div className="mb-6">
                                  <h4 className="fs-6 fs-lg-4 fw-bold mb-3 ms-4">
                                    FAQ
                                  </h4>

                                  <div className="menu-item p-0 m-0">
                                    <a
                                      href="pages/faq/classNameic.html"
                                      className="menu-link"
                                    >
                                      <span className="menu-title">
                                        FAQ ClassNameic
                                      </span>
                                    </a>
                                  </div>

                                  <div className="menu-item p-0 m-0">
                                    <a
                                      href="pages/faq/extended.html"
                                      className="menu-link"
                                    >
                                      <span className="menu-title">
                                        FAQ Extended
                                      </span>
                                    </a>
                                  </div>
                                </div>

                                <div className="mb-6">
                                  <h4 className="fs-6 fs-lg-4 fw-bold mb-3 ms-4">
                                    Blog
                                  </h4>

                                  <div className="menu-item p-0 m-0">
                                    <a
                                      href="pages/blog/home.html"
                                      className="menu-link"
                                    >
                                      <span className="menu-title">
                                        Blog Home
                                      </span>
                                    </a>
                                  </div>

                                  <div className="menu-item p-0 m-0">
                                    <a
                                      href="pages/blog/post.html"
                                      className="menu-link"
                                    >
                                      <span className="menu-title">
                                        Blog Post
                                      </span>
                                    </a>
                                  </div>
                                </div>

                                <div className="mb-0">
                                  <h4 className="fs-6 fs-lg-4 fw-bold mb-3 ms-4">
                                    Pricing
                                  </h4>

                                  <div className="menu-item p-0 m-0">
                                    <a
                                      href="pages/pricing.html"
                                      className="menu-link"
                                    >
                                      <span className="menu-title">
                                        Column Pricing
                                      </span>
                                    </a>
                                  </div>

                                  <div className="menu-item p-0 m-0">
                                    <a
                                      href="pages/pricing/table.html"
                                      className="menu-link"
                                    >
                                      <span className="menu-title">
                                        Table Pricing
                                      </span>
                                    </a>
                                  </div>
                                </div>
                              </div>

                              <div className="col-lg-3 mb-6 mb-lg-0">
                                <div className="mb-0">
                                  <h4 className="fs-6 fs-lg-4 fw-bold mb-3 ms-4">
                                    Social
                                  </h4>

                                  <div className="menu-item p-0 m-0">
                                    <a
                                      href="pages/social/feeds.html"
                                      className="menu-link"
                                    >
                                      <span className="menu-title">Feeds</span>
                                    </a>
                                  </div>

                                  <div className="menu-item p-0 m-0">
                                    <a
                                      href="pages/social/activity.html"
                                      className="menu-link"
                                    >
                                      <span className="menu-title">
                                        Activty
                                      </span>
                                    </a>
                                  </div>

                                  <div className="menu-item p-0 m-0">
                                    <a
                                      href="pages/social/followers.html"
                                      className="menu-link"
                                    >
                                      <span className="menu-title">
                                        Followers
                                      </span>
                                    </a>
                                  </div>

                                  <div className="menu-item p-0 m-0">
                                    <a
                                      href="pages/social/settings.html"
                                      className="menu-link"
                                    >
                                      <span className="menu-title">
                                        Settings
                                      </span>
                                    </a>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>

                          <div className="col-lg-4">
                            <img
                              src="assets/media/stock/600x600/img-82.jpg"
                              className="rounded mw-100"
                              alt=""
                            />
                          </div>
                        </div>
                      </div>

                      <div
                        className="tab-pane w-lg-600px"
                        id="kt_app_header_menu_pages_account"
                      >
                        <div className="row">
                          <div className="col-lg-5 mb-6 mb-lg-0">
                            <div className="row">
                              <div className="col-lg-6">
                                <div className="menu-item p-0 m-0">
                                  <a
                                    href="account/overview.html"
                                    className="menu-link"
                                  >
                                    <span className="menu-title">Overview</span>
                                  </a>
                                </div>

                                <div className="menu-item p-0 m-0">
                                  <a
                                    href="account/settings.html"
                                    className="menu-link"
                                  >
                                    <span className="menu-title">Settings</span>
                                  </a>
                                </div>

                                <div className="menu-item p-0 m-0">
                                  <a
                                    href="account/security.html"
                                    className="menu-link"
                                  >
                                    <span className="menu-title">Security</span>
                                  </a>
                                </div>

                                <div className="menu-item p-0 m-0">
                                  <a
                                    href="account/activity.html"
                                    className="menu-link"
                                  >
                                    <span className="menu-title">Activity</span>
                                  </a>
                                </div>

                                <div className="menu-item p-0 m-0">
                                  <a
                                    href="account/billing.html"
                                    className="menu-link"
                                  >
                                    <span className="menu-title">Billing</span>
                                  </a>
                                </div>
                              </div>

                              <div className="col-lg-6">
                                <div className="menu-item p-0 m-0">
                                  <a
                                    href="account/statements.html"
                                    className="menu-link"
                                  >
                                    <span className="menu-title">
                                      Statements
                                    </span>
                                  </a>
                                </div>

                                <div className="menu-item p-0 m-0">
                                  <a
                                    href="account/referrals.html"
                                    className="menu-link"
                                  >
                                    <span className="menu-title">
                                      Referrals
                                    </span>
                                  </a>
                                </div>

                                <div className="menu-item p-0 m-0">
                                  <a
                                    href="account/api-keys.html"
                                    className="menu-link"
                                  >
                                    <span className="menu-title">API Keys</span>
                                  </a>
                                </div>

                                <div className="menu-item p-0 m-0">
                                  <a
                                    href="account/logs.html"
                                    className="menu-link"
                                  >
                                    <span className="menu-title">Logs</span>
                                  </a>
                                </div>
                              </div>
                            </div>
                          </div>

                          <div className="col-lg-7">
                            <img
                              src="assets/media/stock/900x600/46.jpg"
                              className="rounded mw-100"
                              alt=""
                            />
                          </div>
                        </div>
                      </div>

                      <div
                        className="tab-pane w-lg-1000px"
                        id="kt_app_header_menu_pages_authentication"
                      >
                        <div className="row">
                          <div className="col-lg-3 mb-6 mb-lg-0">
                            <div className="mb-6">
                              <h4 className="fs-6 fs-lg-4 fw-bold mb-3 ms-4">
                                Corporate Layout
                              </h4>

                              <div className="menu-item p-0 m-0">
                                <a
                                  href="authentication/layouts/corporate/sign-in.html"
                                  className="menu-link"
                                >
                                  <span className="menu-title">Sign-In</span>
                                </a>
                              </div>

                              <div className="menu-item p-0 m-0">
                                <a
                                  href="authentication/layouts/corporate/sign-up.html"
                                  className="menu-link"
                                >
                                  <span className="menu-title">Sign-Up</span>
                                </a>
                              </div>

                              <div className="menu-item p-0 m-0">
                                <a
                                  href="authentication/layouts/corporate/two-factor.html"
                                  className="menu-link"
                                >
                                  <span className="menu-title">Two-Factor</span>
                                </a>
                              </div>

                              <div className="menu-item p-0 m-0">
                                <a
                                  href="authentication/layouts/corporate/reset-password.html"
                                  className="menu-link"
                                >
                                  <span className="menu-title">
                                    Reset Password
                                  </span>
                                </a>
                              </div>

                              <div className="menu-item p-0 m-0">
                                <a
                                  href="authentication/layouts/corporate/new-password.html"
                                  className="menu-link"
                                >
                                  <span className="menu-title">
                                    New Password
                                  </span>
                                </a>
                              </div>
                            </div>

                            <div className="mb-0">
                              <h4 className="fs-6 fs-lg-4 fw-bold mb-3 ms-4">
                                Overlay Layout
                              </h4>

                              <div className="menu-item p-0 m-0">
                                <a
                                  href="authentication/layouts/overlay/sign-in.html"
                                  className="menu-link"
                                >
                                  <span className="menu-title">Sign-In</span>
                                </a>
                              </div>

                              <div className="menu-item p-0 m-0">
                                <a
                                  href="authentication/layouts/overlay/sign-up.html"
                                  className="menu-link"
                                >
                                  <span className="menu-title">Sign-Up</span>
                                </a>
                              </div>

                              <div className="menu-item p-0 m-0">
                                <a
                                  href="authentication/layouts/overlay/two-factor.html"
                                  className="menu-link"
                                >
                                  <span className="menu-title">Two-Factor</span>
                                </a>
                              </div>

                              <div className="menu-item p-0 m-0">
                                <a
                                  href="authentication/layouts/overlay/reset-password.html"
                                  className="menu-link"
                                >
                                  <span className="menu-title">
                                    Reset Password
                                  </span>
                                </a>
                              </div>

                              <div className="menu-item p-0 m-0">
                                <a
                                  href="authentication/layouts/overlay/new-password.html"
                                  className="menu-link"
                                >
                                  <span className="menu-title">
                                    New Password
                                  </span>
                                </a>
                              </div>
                            </div>
                          </div>

                          <div className="col-lg-3 mb-6 mb-lg-0">
                            <div className="mb-6">
                              <h4 className="fs-6 fs-lg-4 fw-bold mb-3 ms-4">
                                Creative Layout
                              </h4>

                              <div className="menu-item p-0 m-0">
                                <a
                                  href="authentication/layouts/creative/sign-in.html"
                                  className="menu-link"
                                >
                                  <span className="menu-title">Sign-in</span>
                                </a>
                              </div>

                              <div className="menu-item p-0 m-0">
                                <a
                                  href="authentication/layouts/creative/sign-up.html"
                                  className="menu-link"
                                >
                                  <span className="menu-title">Sign-up</span>
                                </a>
                              </div>

                              <div className="menu-item p-0 m-0">
                                <a
                                  href="authentication/layouts/creative/two-factor.html"
                                  className="menu-link"
                                >
                                  <span className="menu-title">Two-Factor</span>
                                </a>
                              </div>

                              <div className="menu-item p-0 m-0">
                                <a
                                  href="authentication/layouts/creative/reset-password.html"
                                  className="menu-link"
                                >
                                  <span className="menu-title">
                                    Reset Password
                                  </span>
                                </a>
                              </div>

                              <div className="menu-item p-0 m-0">
                                <a
                                  href="authentication/layouts/creative/new-password.html"
                                  className="menu-link"
                                >
                                  <span className="menu-title">
                                    New Password
                                  </span>
                                </a>
                              </div>
                            </div>

                            <div className="mb-6">
                              <h4 className="fs-6 fs-lg-4 fw-bold mb-3 ms-4">
                                Fancy Layout
                              </h4>

                              <div className="menu-item p-0 m-0">
                                <a
                                  href="authentication/layouts/fancy/sign-in.html"
                                  className="menu-link"
                                >
                                  <span className="menu-title">Sign-In</span>
                                </a>
                              </div>

                              <div className="menu-item p-0 m-0">
                                <a
                                  href="authentication/layouts/fancy/sign-up.html"
                                  className="menu-link"
                                >
                                  <span className="menu-title">Sign-Up</span>
                                </a>
                              </div>

                              <div className="menu-item p-0 m-0">
                                <a
                                  href="authentication/layouts/fancy/two-factor.html"
                                  className="menu-link"
                                >
                                  <span className="menu-title">Two-Factor</span>
                                </a>
                              </div>

                              <div className="menu-item p-0 m-0">
                                <a
                                  href="authentication/layouts/fancy/reset-password.html"
                                  className="menu-link"
                                >
                                  <span className="menu-title">
                                    Reset Password
                                  </span>
                                </a>
                              </div>

                              <div className="menu-item p-0 m-0">
                                <a
                                  href="authentication/layouts/fancy/new-password.html"
                                  className="menu-link"
                                >
                                  <span className="menu-title">
                                    New Password
                                  </span>
                                </a>
                              </div>
                            </div>
                          </div>

                          <div className="col-lg-3 mb-6 mb-lg-0">
                            <div className="mb-0">
                              <h4 className="fs-6 fs-lg-4 fw-bold mb-3 ms-4">
                                General
                              </h4>

                              <div className="menu-item p-0 m-0">
                                <a
                                  href="authentication/extended/multi-steps-sign-up.html"
                                  className="menu-link"
                                >
                                  <span className="menu-title">
                                    Multi-Steps Sign-Up
                                  </span>
                                </a>
                              </div>

                              <div className="menu-item p-0 m-0">
                                <a
                                  href="authentication/general/welcome.html"
                                  className="menu-link"
                                >
                                  <span className="menu-title">
                                    Welcome Message
                                  </span>
                                </a>
                              </div>

                              <div className="menu-item p-0 m-0">
                                <a
                                  href="authentication/general/verify-email.html"
                                  className="menu-link"
                                >
                                  <span className="menu-title">
                                    Verify Email
                                  </span>
                                </a>
                              </div>

                              <div className="menu-item p-0 m-0">
                                <a
                                  href="authentication/general/coming-soon.html"
                                  className="menu-link"
                                >
                                  <span className="menu-title">
                                    Coming Soon
                                  </span>
                                </a>
                              </div>

                              <div className="menu-item p-0 m-0">
                                <a
                                  href="authentication/general/password-confirmation.html"
                                  className="menu-link"
                                >
                                  <span className="menu-title">
                                    Password Confirmation
                                  </span>
                                </a>
                              </div>

                              <div className="menu-item p-0 m-0">
                                <a
                                  href="authentication/general/account-deactivated.html"
                                  className="menu-link"
                                >
                                  <span className="menu-title">
                                    Account Deactivation
                                  </span>
                                </a>
                              </div>

                              <div className="menu-item p-0 m-0">
                                <a
                                  href="authentication/general/error-404.html"
                                  className="menu-link"
                                >
                                  <span className="menu-title">Error 404</span>
                                </a>
                              </div>

                              <div className="menu-item p-0 m-0">
                                <a
                                  href="authentication/general/error-500.html"
                                  className="menu-link"
                                >
                                  <span className="menu-title">Error 500</span>
                                </a>
                              </div>
                            </div>
                          </div>

                          <div className="col-lg-3 mb-6 mb-lg-0">
                            <div className="mb-0">
                              <h4 className="fs-6 fs-lg-4 fw-bold mb-3 ms-4">
                                Email Templates
                              </h4>

                              <div className="menu-item p-0 m-0">
                                <a
                                  href="authentication/email/welcome-message.html"
                                  className="menu-link"
                                >
                                  <span className="menu-title">
                                    Welcome Message
                                  </span>
                                </a>
                              </div>

                              <div className="menu-item p-0 m-0">
                                <a
                                  href="authentication/email/reset-password.html"
                                  className="menu-link"
                                >
                                  <span className="menu-title">
                                    Reset Password
                                  </span>
                                </a>
                              </div>

                              <div className="menu-item p-0 m-0">
                                <a
                                  href="authentication/email/subscription-confirmed.html"
                                  className="menu-link"
                                >
                                  <span className="menu-title">
                                    Subscription Confirmed
                                  </span>
                                </a>
                              </div>

                              <div className="menu-item p-0 m-0">
                                <a
                                  href="authentication/email/card-declined.html"
                                  className="menu-link"
                                >
                                  <span className="menu-title">
                                    Credit Card Declined
                                  </span>
                                </a>
                              </div>

                              <div className="menu-item p-0 m-0">
                                <a
                                  href="authentication/email/promo-1.html"
                                  className="menu-link"
                                >
                                  <span className="menu-title">Promo 1</span>
                                </a>
                              </div>

                              <div className="menu-item p-0 m-0">
                                <a
                                  href="authentication/email/promo-2.html"
                                  className="menu-link"
                                >
                                  <span className="menu-title">Promo 2</span>
                                </a>
                              </div>

                              <div className="menu-item p-0 m-0">
                                <a
                                  href="authentication/email/promo-3.html"
                                  className="menu-link"
                                >
                                  <span className="menu-title">Promo 3</span>
                                </a>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>

                      <div
                        className="tab-pane w-lg-1000px"
                        id="kt_app_header_menu_pages_utilities"
                      >
                        <div className="row">
                          <div className="col-lg-7">
                            <div className="row">
                              <div className="col-lg-4 mb-6 mb-lg-0">
                                <div className="mb-0">
                                  <h4 className="fs-6 fs-lg-4 fw-bold mb-3 ms-4">
                                    General Modals
                                  </h4>

                                  <div className="menu-item p-0 m-0">
                                    <a
                                      href="utilities/modals/general/invite-friends.html"
                                      className="menu-link"
                                    >
                                      <span className="menu-title">
                                        Invite Friends
                                      </span>
                                    </a>
                                  </div>

                                  <div className="menu-item p-0 m-0">
                                    <a
                                      href="utilities/modals/general/view-users.html"
                                      className="menu-link"
                                    >
                                      <span className="menu-title">
                                        View Users
                                      </span>
                                    </a>
                                  </div>

                                  <div className="menu-item p-0 m-0">
                                    <a
                                      href="utilities/modals/general/select-users.html"
                                      className="menu-link"
                                    >
                                      <span className="menu-title">
                                        Select Users
                                      </span>
                                    </a>
                                  </div>

                                  <div className="menu-item p-0 m-0">
                                    <a
                                      href="utilities/modals/general/upgrade-plan.html"
                                      className="menu-link"
                                    >
                                      <span className="menu-title">
                                        Upgrade Plan
                                      </span>
                                    </a>
                                  </div>

                                  <div className="menu-item p-0 m-0">
                                    <a
                                      href="utilities/modals/general/share-earn.html"
                                      className="menu-link"
                                    >
                                      <span className="menu-title">
                                        Share & Earn
                                      </span>
                                    </a>
                                  </div>

                                  <div className="menu-item p-0 m-0">
                                    <a
                                      href="utilities/modals/forms/new-target.html"
                                      className="menu-link"
                                    >
                                      <span className="menu-title">
                                        New Target
                                      </span>
                                    </a>
                                  </div>

                                  <div className="menu-item p-0 m-0">
                                    <a
                                      href="utilities/modals/forms/new-card.html"
                                      className="menu-link"
                                    >
                                      <span className="menu-title">
                                        New Card
                                      </span>
                                    </a>
                                  </div>

                                  <div className="menu-item p-0 m-0">
                                    <a
                                      href="utilities/modals/forms/new-address.html"
                                      className="menu-link"
                                    >
                                      <span className="menu-title">
                                        New Address
                                      </span>
                                    </a>
                                  </div>

                                  <div className="menu-item p-0 m-0">
                                    <a
                                      href="utilities/modals/forms/create-api-key.html"
                                      className="menu-link"
                                    >
                                      <span className="menu-title">
                                        Create API Key
                                      </span>
                                    </a>
                                  </div>

                                  <div className="menu-item p-0 m-0">
                                    <a
                                      href="utilities/modals/forms/bidding.html"
                                      className="menu-link"
                                    >
                                      <span className="menu-title">
                                        Bidding
                                      </span>
                                    </a>
                                  </div>
                                </div>
                              </div>

                              <div className="col-lg-4 mb-6 mb-lg-0">
                                <div className="mb-6">
                                  <h4 className="fs-6 fs-lg-4 fw-bold mb-3 ms-4">
                                    Advanced Modals
                                  </h4>

                                  <div className="menu-item p-0 m-0">
                                    <a
                                      href="utilities/modals/wizards/create-app.html"
                                      className="menu-link"
                                    >
                                      <span className="menu-title">
                                        Create App
                                      </span>
                                    </a>
                                  </div>

                                  <div className="menu-item p-0 m-0">
                                    <a
                                      href="utilities/modals/wizards/create-campaign.html"
                                      className="menu-link"
                                    >
                                      <span className="menu-title">
                                        Create Campaign
                                      </span>
                                    </a>
                                  </div>

                                  <div className="menu-item p-0 m-0">
                                    <a
                                      href="utilities/modals/wizards/create-account.html"
                                      className="menu-link"
                                    >
                                      <span className="menu-title">
                                        Create Business Acc
                                      </span>
                                    </a>
                                  </div>

                                  <div className="menu-item p-0 m-0">
                                    <a
                                      href="utilities/modals/wizards/create-project.html"
                                      className="menu-link"
                                    >
                                      <span className="menu-title">
                                        Create Project
                                      </span>
                                    </a>
                                  </div>

                                  <div className="menu-item p-0 m-0">
                                    <a
                                      href="utilities/modals/wizards/top-up-wallet.html"
                                      className="menu-link"
                                    >
                                      <span className="menu-title">
                                        Top Up Wallet
                                      </span>
                                    </a>
                                  </div>

                                  <div className="menu-item p-0 m-0">
                                    <a
                                      href="utilities/modals/wizards/offer-a-deal.html"
                                      className="menu-link"
                                    >
                                      <span className="menu-title">
                                        Offer a Deal
                                      </span>
                                    </a>
                                  </div>

                                  <div className="menu-item p-0 m-0">
                                    <a
                                      href="utilities/modals/wizards/two-factor-authentication.html"
                                      className="menu-link"
                                    >
                                      <span className="menu-title">
                                        Two Factor Auth
                                      </span>
                                    </a>
                                  </div>
                                </div>

                                <div className="mb-0">
                                  <h4 className="fs-6 fs-lg-4 fw-bold mb-3 ms-4">
                                    Search
                                  </h4>

                                  <div className="menu-item p-0 m-0">
                                    <a
                                      href="utilities/search/horizontal.html"
                                      className="menu-link"
                                    >
                                      <span className="menu-title">
                                        Horizontal
                                      </span>
                                    </a>
                                  </div>

                                  <div className="menu-item p-0 m-0">
                                    <a
                                      href="utilities/search/vertical.html"
                                      className="menu-link"
                                    >
                                      <span className="menu-title">
                                        Vertical
                                      </span>
                                    </a>
                                  </div>

                                  <div className="menu-item p-0 m-0">
                                    <a
                                      href="utilities/modals/search/users.html"
                                      className="menu-link"
                                    >
                                      <span className="menu-title">Users</span>
                                    </a>
                                  </div>

                                  <div className="menu-item p-0 m-0">
                                    <a
                                      href="utilities/modals/search/select-location.html"
                                      className="menu-link"
                                    >
                                      <span className="menu-title">
                                        Select Location
                                      </span>
                                    </a>
                                  </div>
                                </div>
                              </div>

                              <div className="col-lg-4 mb-6 mb-lg-0">
                                <div className="mb-0">
                                  <h4 className="fs-6 fs-lg-4 fw-bold mb-3 ms-4">
                                    Wizards
                                  </h4>

                                  <div className="menu-item p-0 m-0">
                                    <a
                                      href="utilities/wizards/horizontal.html"
                                      className="menu-link"
                                    >
                                      <span className="menu-title">
                                        Horizontal
                                      </span>
                                    </a>
                                  </div>

                                  <div className="menu-item p-0 m-0">
                                    <a
                                      href="utilities/wizards/vertical.html"
                                      className="menu-link"
                                    >
                                      <span className="menu-title">
                                        Vertical
                                      </span>
                                    </a>
                                  </div>

                                  <div className="menu-item p-0 m-0">
                                    <a
                                      href="utilities/wizards/two-factor-authentication.html"
                                      className="menu-link"
                                    >
                                      <span className="menu-title">
                                        Two Factor Auth
                                      </span>
                                    </a>
                                  </div>

                                  <div className="menu-item p-0 m-0">
                                    <a
                                      href="utilities/wizards/create-app.html"
                                      className="menu-link"
                                    >
                                      <span className="menu-title">
                                        Create App
                                      </span>
                                    </a>
                                  </div>

                                  <div className="menu-item p-0 m-0">
                                    <a
                                      href="utilities/wizards/create-campaign.html"
                                      className="menu-link"
                                    >
                                      <span className="menu-title">
                                        Create Campaign
                                      </span>
                                    </a>
                                  </div>

                                  <div className="menu-item p-0 m-0">
                                    <a
                                      href="utilities/wizards/create-account.html"
                                      className="menu-link"
                                    >
                                      <span className="menu-title">
                                        Create Account
                                      </span>
                                    </a>
                                  </div>

                                  <div className="menu-item p-0 m-0">
                                    <a
                                      href="utilities/wizards/create-project.html"
                                      className="menu-link"
                                    >
                                      <span className="menu-title">
                                        Create Project
                                      </span>
                                    </a>
                                  </div>

                                  <div className="menu-item p-0 m-0">
                                    <a
                                      href="utilities/modals/wizards/top-up-wallet.html"
                                      className="menu-link"
                                    >
                                      <span className="menu-title">
                                        Top Up Wallet
                                      </span>
                                    </a>
                                  </div>

                                  <div className="menu-item p-0 m-0">
                                    <a
                                      href="utilities/wizards/offer-a-deal.html"
                                      className="menu-link"
                                    >
                                      <span className="menu-title">
                                        Offer a Deal
                                      </span>
                                    </a>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>

                          <div className="col-lg-5 pe-lg-5">
                            <img
                              src="assets/media/stock/600x600/img-84.jpg"
                              className="rounded mw-100"
                              alt=""
                            />
                          </div>
                        </div>
                      </div>

                      <div
                        className="tab-pane w-lg-500px"
                        id="kt_app_header_menu_pages_widgets"
                      >
                        <div className="row">
                          <div className="col-lg-4 mb-6 mb-lg-0">
                            <div className="menu-item p-0 m-0">
                              <a
                                href="widgets/lists.html"
                                className="menu-link"
                              >
                                <span className="menu-title">Lists</span>
                              </a>
                            </div>

                            <div className="menu-item p-0 m-0">
                              <a
                                href="widgets/statistics.html"
                                className="menu-link"
                              >
                                <span className="menu-title">Statistics</span>
                              </a>
                            </div>

                            <div className="menu-item p-0 m-0">
                              <a
                                href="widgets/charts.html"
                                className="menu-link"
                              >
                                <span className="menu-title">Charts</span>
                              </a>
                            </div>

                            <div className="menu-item p-0 m-0">
                              <a
                                href="widgets/mixed.html"
                                className="menu-link"
                              >
                                <span className="menu-title">Mixed</span>
                              </a>
                            </div>

                            <div className="menu-item p-0 m-0">
                              <a
                                href="widgets/tables.html"
                                className="menu-link"
                              >
                                <span className="menu-title">Tables</span>
                              </a>
                            </div>

                            <div className="menu-item p-0 m-0">
                              <a
                                href="widgets/feeds.html"
                                className="menu-link"
                              >
                                <span className="menu-title">Feeds</span>
                              </a>
                            </div>
                          </div>

                          <div className="col-lg-8">
                            <img
                              src="assets/media/stock/900x600/44.jpg"
                              className="rounded mw-100"
                              alt=""
                            />
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              <div
                data-kt-menu-trigger="{default: 'click', lg: 'hover'}"
                data-kt-menu-placement="bottom-start"
                className="menu-item here show menu-lg-down-accordion menu-sub-lg-down-indention me-0 me-lg-2"
              >
                <span className="menu-link">
                  <span className="menu-title">Apps</span>
                  <span className="menu-arrow d-lg-none"></span>
                </span>

                <div className="menu-sub menu-sub-lg-down-accordion menu-sub-lg-dropdown px-lg-2 py-lg-4 w-lg-250px">
                  <div
                    data-kt-menu-trigger="{default:'click', lg: 'hover'}"
                    data-kt-menu-placement="right-start"
                    className="menu-item menu-lg-down-accordion"
                  >
                    <span className="menu-link">
                      <span className="menu-icon">
                        <i className="ki-outline ki-rocket fs-2"></i>
                      </span>
                      <span className="menu-title">Projects</span>
                      <span className="menu-arrow"></span>
                    </span>

                    <div className="menu-sub menu-sub-lg-down-accordion menu-sub-lg-dropdown menu-active-bg px-lg-2 py-lg-4 w-lg-225px">
                      <div className="menu-item">
                        <a className="menu-link" href="apps/projects/list.html">
                          <span className="menu-bullet">
                            <span className="bullet bullet-dot"></span>
                          </span>
                          <span className="menu-title">My Projects</span>
                        </a>
                      </div>

                      <div className="menu-item">
                        <a
                          className="menu-link"
                          href="apps/projects/project.html"
                        >
                          <span className="menu-bullet">
                            <span className="bullet bullet-dot"></span>
                          </span>
                          <span className="menu-title">View Project</span>
                        </a>
                      </div>

                      <div className="menu-item">
                        <a
                          className="menu-link"
                          href="apps/projects/targets.html"
                        >
                          <span className="menu-bullet">
                            <span className="bullet bullet-dot"></span>
                          </span>
                          <span className="menu-title">Targets</span>
                        </a>
                      </div>

                      <div className="menu-item">
                        <a
                          className="menu-link"
                          href="apps/projects/budget.html"
                        >
                          <span className="menu-bullet">
                            <span className="bullet bullet-dot"></span>
                          </span>
                          <span className="menu-title">Budget</span>
                        </a>
                      </div>

                      <div className="menu-item">
                        <a
                          className="menu-link"
                          href="apps/projects/users.html"
                        >
                          <span className="menu-bullet">
                            <span className="bullet bullet-dot"></span>
                          </span>
                          <span className="menu-title">Users</span>
                        </a>
                      </div>

                      <div className="menu-item">
                        <a
                          className="menu-link"
                          href="apps/projects/files.html"
                        >
                          <span className="menu-bullet">
                            <span className="bullet bullet-dot"></span>
                          </span>
                          <span className="menu-title">Files</span>
                        </a>
                      </div>

                      <div className="menu-item">
                        <a
                          className="menu-link"
                          href="apps/projects/activity.html"
                        >
                          <span className="menu-bullet">
                            <span className="bullet bullet-dot"></span>
                          </span>
                          <span className="menu-title">Activity</span>
                        </a>
                      </div>

                      <div className="menu-item">
                        <a
                          className="menu-link"
                          href="apps/projects/settings.html"
                        >
                          <span className="menu-bullet">
                            <span className="bullet bullet-dot"></span>
                          </span>
                          <span className="menu-title">Settings</span>
                        </a>
                      </div>
                    </div>
                  </div>

                  <div
                    data-kt-menu-trigger="{default:'click', lg: 'hover'}"
                    data-kt-menu-placement="right-start"
                    className="menu-item menu-lg-down-accordion"
                  >
                    <span className="menu-link">
                      <span className="menu-icon">
                        <i className="ki-outline ki-handcart fs-2"></i>
                      </span>
                      <span className="menu-title">eCommerce</span>
                      <span className="menu-arrow"></span>
                    </span>

                    <div className="menu-sub menu-sub-lg-down-accordion menu-sub-lg-dropdown menu-active-bg px-lg-2 py-lg-4 w-lg-225px">
                      <div
                        data-kt-menu-trigger="{default:'click', lg: 'hover'}"
                        data-kt-menu-placement="right-start"
                        className="menu-item menu-lg-down-accordion"
                      >
                        <span className="menu-link">
                          <span className="menu-bullet">
                            <span className="bullet bullet-dot"></span>
                          </span>
                          <span className="menu-title">Catalog</span>
                          <span className="menu-arrow"></span>
                        </span>

                        <div className="menu-sub menu-sub-lg-down-accordion menu-sub-lg-dropdown menu-active-bg px-lg-2 py-lg-4 w-lg-225px">
                          <div className="menu-item">
                            <a
                              className="menu-link"
                              href="apps/ecommerce/catalog/products.html"
                            >
                              <span className="menu-bullet">
                                <span className="bullet bullet-dot"></span>
                              </span>
                              <span className="menu-title">Products</span>
                            </a>
                          </div>

                          <div className="menu-item">
                            <a
                              className="menu-link"
                              href="apps/ecommerce/catalog/categories.html"
                            >
                              <span className="menu-bullet">
                                <span className="bullet bullet-dot"></span>
                              </span>
                              <span className="menu-title">Categories</span>
                            </a>
                          </div>
                          <div className="menu-item">
                            <a
                              className="menu-link"
                              href="apps/ecommerce/catalog/add-product.html"
                            >
                              <span className="menu-bullet">
                                <span className="bullet bullet-dot"></span>
                              </span>
                              <span className="menu-title">Add Product</span>
                            </a>
                          </div>

                          <div className="menu-item">
                            <a
                              className="menu-link"
                              href="apps/ecommerce/catalog/edit-product.html"
                            >
                              <span className="menu-bullet">
                                <span className="bullet bullet-dot"></span>
                              </span>
                              <span className="menu-title">Edit Product</span>
                            </a>
                          </div>

                          <div className="menu-item">
                            <a
                              className="menu-link"
                              href="apps/ecommerce/catalog/add-category.html"
                            >
                              <span className="menu-bullet">
                                <span className="bullet bullet-dot"></span>
                              </span>
                              <span className="menu-title">Add Category</span>
                            </a>
                          </div>

                          <div className="menu-item">
                            <a
                              className="menu-link"
                              href="apps/ecommerce/catalog/edit-category.html"
                            >
                              <span className="menu-bullet">
                                <span className="bullet bullet-dot"></span>
                              </span>
                              <span className="menu-title">Edit Category</span>
                            </a>
                          </div>
                        </div>
                      </div>

                      <div
                        data-kt-menu-trigger="click"
                        className="menu-item menu-accordion menu-sub-indention"
                      >
                        <span className="menu-link">
                          <span className="menu-bullet">
                            <span className="bullet bullet-dot"></span>
                          </span>
                          <span className="menu-title">Sales</span>
                          <span className="menu-arrow"></span>
                        </span>

                        <div className="menu-sub menu-sub-accordion">
                          <div className="menu-item">
                            <a
                              className="menu-link"
                              href="apps/ecommerce/sales/listing.html"
                            >
                              <span className="menu-bullet">
                                <span className="bullet bullet-dot"></span>
                              </span>
                              <span className="menu-title">Orders Listing</span>
                            </a>
                          </div>

                          <div className="menu-item">
                            <a
                              className="menu-link"
                              href="apps/ecommerce/sales/details.html"
                            >
                              <span className="menu-bullet">
                                <span className="bullet bullet-dot"></span>
                              </span>
                              <span className="menu-title">Order Details</span>
                            </a>
                          </div>

                          <div className="menu-item">
                            <a
                              className="menu-link"
                              href="apps/ecommerce/sales/add-order.html"
                            >
                              <span className="menu-bullet">
                                <span className="bullet bullet-dot"></span>
                              </span>
                              <span className="menu-title">Add Order</span>
                            </a>
                          </div>

                          <div className="menu-item">
                            <a
                              className="menu-link"
                              href="apps/ecommerce/sales/edit-order.html"
                            >
                              <span className="menu-bullet">
                                <span className="bullet bullet-dot"></span>
                              </span>
                              <span className="menu-title">Edit Order</span>
                            </a>
                          </div>
                        </div>
                      </div>
                      <div
                        data-kt-menu-trigger="click"
                        className="menu-item menu-accordion menu-sub-indention"
                      >
                        <span className="menu-link">
                          <span className="menu-bullet">
                            <span className="bullet bullet-dot"></span>
                          </span>
                          <span className="menu-title">Customers</span>
                          <span className="menu-arrow"></span>
                        </span>
                        <div className="menu-sub menu-sub-accordion">
                          <div className="menu-item">
                            <a
                              className="menu-link"
                              href="apps/ecommerce/customers/listing.html"
                            >
                              <span className="menu-bullet">
                                <span className="bullet bullet-dot"></span>
                              </span>
                              <span className="menu-title">
                                Customers Listing
                              </span>
                            </a>
                          </div>

                          <div className="menu-item">
                            <a
                              className="menu-link"
                              href="apps/ecommerce/customers/details.html"
                            >
                              <span className="menu-bullet">
                                <span className="bullet bullet-dot"></span>
                              </span>
                              <span className="menu-title">
                                Customers Details
                              </span>
                            </a>
                          </div>
                        </div>
                      </div>

                      <div
                        data-kt-menu-trigger="click"
                        className="menu-item menu-accordion menu-sub-indention"
                      >
                        <span className="menu-link">
                          <span className="menu-bullet">
                            <span className="bullet bullet-dot"></span>
                          </span>
                          <span className="menu-title">Reports</span>
                          <span className="menu-arrow"></span>
                        </span>

                        <div className="menu-sub menu-sub-accordion">
                          <div className="menu-item">
                            <a
                              className="menu-link"
                              href="apps/ecommerce/reports/view.html"
                            >
                              <span className="menu-bullet">
                                <span className="bullet bullet-dot"></span>
                              </span>
                              <span className="menu-title">
                                Products Viewed
                              </span>
                            </a>
                          </div>

                          <div className="menu-item">
                            <a
                              className="menu-link"
                              href="apps/ecommerce/reports/sales.html"
                            >
                              <span className="menu-bullet">
                                <span className="bullet bullet-dot"></span>
                              </span>
                              <span className="menu-title">Sales</span>
                            </a>
                          </div>

                          <div className="menu-item">
                            <a
                              className="menu-link"
                              href="apps/ecommerce/reports/returns.html"
                            >
                              <span className="menu-bullet">
                                <span className="bullet bullet-dot"></span>
                              </span>
                              <span className="menu-title">Returns</span>
                            </a>
                          </div>

                          <div className="menu-item">
                            <a
                              className="menu-link"
                              href="apps/ecommerce/reports/customer-orders.html"
                            >
                              <span className="menu-bullet">
                                <span className="bullet bullet-dot"></span>
                              </span>
                              <span className="menu-title">
                                Customer Orders
                              </span>
                            </a>
                          </div>
                          <div className="menu-item">
                            <a
                              className="menu-link"
                              href="apps/ecommerce/reports/shipping.html"
                            >
                              <span className="menu-bullet">
                                <span className="bullet bullet-dot"></span>
                              </span>
                              <span className="menu-title">Shipping</span>
                            </a>
                          </div>
                        </div>
                      </div>

                      <div className="menu-item">
                        <a
                          className="menu-link"
                          href="apps/ecommerce/settings.html"
                        >
                          <span className="menu-bullet">
                            <span className="bullet bullet-dot"></span>
                          </span>
                          <span className="menu-title">Settings</span>
                        </a>
                      </div>
                    </div>
                  </div>

                  <div
                    data-kt-menu-trigger="{default:'click', lg: 'hover'}"
                    data-kt-menu-placement="right-start"
                    className="menu-item menu-lg-down-accordion"
                  >
                    <span className="menu-link">
                      <span className="menu-icon">
                        <i className="ki-outline ki-chart fs-2"></i>
                      </span>
                      <span className="menu-title">Support Center</span>
                      <span className="menu-arrow"></span>
                    </span>

                    <div className="menu-sub menu-sub-lg-down-accordion menu-sub-lg-dropdown menu-active-bg px-lg-2 py-lg-4 w-lg-225px">
                      <div className="menu-item">
                        <a
                          className="menu-link"
                          href="apps/support-center/overview.html"
                        >
                          <span className="menu-bullet">
                            <span className="bullet bullet-dot"></span>
                          </span>
                          <span className="menu-title">Overview</span>
                        </a>
                      </div>

                      <div
                        data-kt-menu-trigger="{default:'click', lg: 'hover'}"
                        data-kt-menu-placement="right-start"
                        className="menu-item menu-lg-down-accordion"
                      >
                        <span className="menu-link">
                          <span className="menu-bullet">
                            <span className="bullet bullet-dot"></span>
                          </span>
                          <span className="menu-title">Tickets</span>
                          <span className="menu-arrow"></span>
                        </span>

                        <div className="menu-sub menu-sub-lg-down-accordion menu-sub-lg-dropdown menu-active-bg px-lg-2 py-lg-4 w-lg-225px">
                          <div className="menu-item">
                            <a
                              className="menu-link"
                              href="apps/support-center/tickets/list.html"
                            >
                              <span className="menu-bullet">
                                <span className="bullet bullet-dot"></span>
                              </span>
                              <span className="menu-title">Ticket List</span>
                            </a>
                          </div>

                          <div className="menu-item">
                            <a
                              className="menu-link"
                              href="apps/support-center/tickets/view.html"
                            >
                              <span className="menu-bullet">
                                <span className="bullet bullet-dot"></span>
                              </span>
                              <span className="menu-title">Ticket View</span>
                            </a>
                          </div>
                        </div>
                      </div>

                      <div
                        data-kt-menu-trigger="{default:'click', lg: 'hover'}"
                        data-kt-menu-placement="right-start"
                        className="menu-item menu-lg-down-accordion"
                      >
                        <span className="menu-link">
                          <span className="menu-bullet">
                            <span className="bullet bullet-dot"></span>
                          </span>
                          <span className="menu-title">Tutorials</span>
                          <span className="menu-arrow"></span>
                        </span>

                        <div className="menu-sub menu-sub-lg-down-accordion menu-sub-lg-dropdown menu-active-bg px-lg-2 py-lg-4 w-lg-225px">
                          <div className="menu-item">
                            <a
                              className="menu-link"
                              href="apps/support-center/tutorials/list.html"
                            >
                              <span className="menu-bullet">
                                <span className="bullet bullet-dot"></span>
                              </span>
                              <span className="menu-title">Tutorials List</span>
                            </a>
                          </div>

                          <div className="menu-item">
                            <a
                              className="menu-link"
                              href="apps/support-center/tutorials/post.html"
                            >
                              <span className="menu-bullet">
                                <span className="bullet bullet-dot"></span>
                              </span>
                              <span className="menu-title">Tutorials Post</span>
                            </a>
                          </div>
                        </div>
                      </div>

                      <div className="menu-item">
                        <a
                          className="menu-link"
                          href="apps/support-center/faq.html"
                        >
                          <span className="menu-bullet">
                            <span className="bullet bullet-dot"></span>
                          </span>
                          <span className="menu-title">FAQ</span>
                        </a>
                      </div>

                      <div className="menu-item">
                        <a
                          className="menu-link"
                          href="apps/support-center/licenses.html"
                        >
                          <span className="menu-bullet">
                            <span className="bullet bullet-dot"></span>
                          </span>
                          <span className="menu-title">Licenses</span>
                        </a>
                      </div>

                      <div className="menu-item">
                        <a
                          className="menu-link"
                          href="apps/support-center/contact.html"
                        >
                          <span className="menu-bullet">
                            <span className="bullet bullet-dot"></span>
                          </span>
                          <span className="menu-title">Contact Us</span>
                        </a>
                      </div>
                    </div>
                  </div>

                  <div
                    data-kt-menu-trigger="{default:'click', lg: 'hover'}"
                    data-kt-menu-placement="right-start"
                    className="menu-item menu-lg-down-accordion"
                  >
                    <span className="menu-link">
                      <span className="menu-icon">
                        <i className="ki-outline ki-shield-tick fs-2"></i>
                      </span>
                      <span className="menu-title">User Management</span>
                      <span className="menu-arrow"></span>
                    </span>

                    <div className="menu-sub menu-sub-lg-down-accordion menu-sub-lg-dropdown menu-active-bg px-lg-2 py-lg-4 w-lg-225px">
                      <div
                        data-kt-menu-trigger="{default:'click', lg: 'hover'}"
                        data-kt-menu-placement="right-start"
                        className="menu-item menu-lg-down-accordion"
                      >
                        <span className="menu-link">
                          <span className="menu-bullet">
                            <span className="bullet bullet-dot"></span>
                          </span>
                          <span className="menu-title">Users</span>
                          <span className="menu-arrow"></span>
                        </span>

                        <div className="menu-sub menu-sub-lg-down-accordion menu-sub-lg-dropdown menu-active-bg px-lg-2 py-lg-4 w-lg-225px">
                          <div className="menu-item">
                            <a
                              className="menu-link"
                              href="apps/user-management/users/list.html"
                            >
                              <span className="menu-bullet">
                                <span className="bullet bullet-dot"></span>
                              </span>
                              <span className="menu-title">Users List</span>
                            </a>
                          </div>

                          <div className="menu-item">
                            <a
                              className="menu-link"
                              href="apps/user-management/users/view.html"
                            >
                              <span className="menu-bullet">
                                <span className="bullet bullet-dot"></span>
                              </span>
                              <span className="menu-title">View User</span>
                            </a>
                          </div>
                        </div>
                      </div>

                      <div
                        data-kt-menu-trigger="{default:'click', lg: 'hover'}"
                        data-kt-menu-placement="right-start"
                        className="menu-item menu-lg-down-accordion"
                      >
                        <span className="menu-link">
                          <span className="menu-bullet">
                            <span className="bullet bullet-dot"></span>
                          </span>
                          <span className="menu-title">Roles</span>
                          <span className="menu-arrow"></span>
                        </span>

                        <div className="menu-sub menu-sub-lg-down-accordion menu-sub-lg-dropdown menu-active-bg px-lg-2 py-lg-4 w-lg-225px">
                          <div className="menu-item">
                            <a
                              className="menu-link"
                              href="apps/user-management/roles/list.html"
                            >
                              <span className="menu-bullet">
                                <span className="bullet bullet-dot"></span>
                              </span>
                              <span className="menu-title">Roles List</span>
                            </a>
                          </div>

                          <div className="menu-item">
                            <a
                              className="menu-link"
                              href="apps/user-management/roles/view.html"
                            >
                              <span className="menu-bullet">
                                <span className="bullet bullet-dot"></span>
                              </span>
                              <span className="menu-title">View Roles</span>
                            </a>
                          </div>
                        </div>
                      </div>

                      <div className="menu-item">
                        <a
                          className="menu-link"
                          href="apps/user-management/permissions.html"
                        >
                          <span className="menu-bullet">
                            <span className="bullet bullet-dot"></span>
                          </span>
                          <span className="menu-title">Permissions</span>
                        </a>
                      </div>
                    </div>
                  </div>

                  <div
                    data-kt-menu-trigger="{default:'click', lg: 'hover'}"
                    data-kt-menu-placement="right-start"
                    className="menu-item menu-lg-down-accordion"
                  >
                    <span className="menu-link">
                      <span className="menu-icon">
                        <i className="ki-outline ki-phone fs-2"></i>
                      </span>
                      <span className="menu-title">Contacts</span>
                      <span className="menu-arrow"></span>
                    </span>

                    <div className="menu-sub menu-sub-lg-down-accordion menu-sub-lg-dropdown menu-active-bg px-lg-2 py-lg-4 w-lg-225px">
                      <div className="menu-item">
                        <a
                          className="menu-link"
                          href="apps/contacts/getting-started.html"
                        >
                          <span className="menu-bullet">
                            <span className="bullet bullet-dot"></span>
                          </span>
                          <span className="menu-title">Getting Started</span>
                        </a>
                      </div>

                      <div className="menu-item">
                        <a
                          className="menu-link"
                          href="apps/contacts/add-contact.html"
                        >
                          <span className="menu-bullet">
                            <span className="bullet bullet-dot"></span>
                          </span>
                          <span className="menu-title">Add Contact</span>
                        </a>
                      </div>

                      <div className="menu-item">
                        <a
                          className="menu-link"
                          href="apps/contacts/edit-contact.html"
                        >
                          <span className="menu-bullet">
                            <span className="bullet bullet-dot"></span>
                          </span>
                          <span className="menu-title">Edit Contact</span>
                        </a>
                      </div>

                      <div className="menu-item">
                        <a
                          className="menu-link"
                          href="apps/contacts/view-contact.html"
                        >
                          <span className="menu-bullet">
                            <span className="bullet bullet-dot"></span>
                          </span>
                          <span className="menu-title">View Contact</span>
                        </a>
                      </div>
                    </div>
                  </div>

                  <div
                    data-kt-menu-trigger="{default:'click', lg: 'hover'}"
                    data-kt-menu-placement="right-start"
                    className="menu-item here show menu-lg-down-accordion"
                  >
                    <span className="menu-link">
                      <span className="menu-icon">
                        <i className="ki-outline ki-basket fs-2"></i>
                      </span>
                      <span className="menu-title">Subscriptions</span>
                      <span className="menu-arrow"></span>
                    </span>

                    <div className="menu-sub menu-sub-lg-down-accordion menu-sub-lg-dropdown menu-active-bg px-lg-2 py-lg-4 w-lg-225px">
                      <div className="menu-item">
                        <a
                          className="menu-link active"
                          href="apps/subscriptions/getting-started.html"
                        >
                          <span className="menu-bullet">
                            <span className="bullet bullet-dot"></span>
                          </span>
                          <span className="menu-title">Getting Started</span>
                        </a>
                      </div>

                      <div className="menu-item">
                        <a
                          className="menu-link"
                          href="apps/subscriptions/list.html"
                        >
                          <span className="menu-bullet">
                            <span className="bullet bullet-dot"></span>
                          </span>
                          <span className="menu-title">Subscription List</span>
                        </a>
                      </div>

                      <div className="menu-item">
                        <a
                          className="menu-link"
                          href="apps/subscriptions/add.html"
                        >
                          <span className="menu-bullet">
                            <span className="bullet bullet-dot"></span>
                          </span>
                          <span className="menu-title">Add Subscription</span>
                        </a>
                      </div>

                      <div className="menu-item">
                        <a
                          className="menu-link"
                          href="apps/subscriptions/view.html"
                        >
                          <span className="menu-bullet">
                            <span className="bullet bullet-dot"></span>
                          </span>
                          <span className="menu-title">View Subscription</span>
                        </a>
                      </div>
                    </div>
                  </div>

                  <div
                    data-kt-menu-trigger="{default:'click', lg: 'hover'}"
                    data-kt-menu-placement="right-start"
                    className="menu-item menu-lg-down-accordion"
                  >
                    <span className="menu-link">
                      <span className="menu-icon">
                        <i className="ki-outline ki-briefcase fs-2"></i>
                      </span>
                      <span className="menu-title">Customers</span>
                      <span className="menu-arrow"></span>
                    </span>

                    <div className="menu-sub menu-sub-lg-down-accordion menu-sub-lg-dropdown menu-active-bg px-lg-2 py-lg-4 w-lg-225px">
                      <div className="menu-item">
                        <a
                          className="menu-link"
                          href="apps/customers/getting-started.html"
                        >
                          <span className="menu-bullet">
                            <span className="bullet bullet-dot"></span>
                          </span>
                          <span className="menu-title">Getting Started</span>
                        </a>
                      </div>

                      <div className="menu-item">
                        <a
                          className="menu-link"
                          href="apps/customers/list.html"
                        >
                          <span className="menu-bullet">
                            <span className="bullet bullet-dot"></span>
                          </span>
                          <span className="menu-title">Customer Listing</span>
                        </a>
                      </div>

                      <div className="menu-item">
                        <a
                          className="menu-link"
                          href="apps/customers/view.html"
                        >
                          <span className="menu-bullet">
                            <span className="bullet bullet-dot"></span>
                          </span>
                          <span className="menu-title">Customer Details</span>
                        </a>
                      </div>
                    </div>
                  </div>

                  <div
                    data-kt-menu-trigger="{default:'click', lg: 'hover'}"
                    data-kt-menu-placement="right-start"
                    className="menu-item menu-lg-down-accordion"
                  >
                    <span className="menu-link">
                      <span className="menu-icon">
                        <i className="ki-outline ki-credit-cart fs-2"></i>
                      </span>
                      <span className="menu-title">Invoice Management</span>
                      <span className="menu-arrow"></span>
                    </span>

                    <div className="menu-sub menu-sub-lg-down-accordion menu-sub-lg-dropdown menu-active-bg px-lg-2 py-lg-4 w-lg-225px">
                      <div
                        data-kt-menu-trigger="{default:'click', lg: 'hover'}"
                        data-kt-menu-placement="right-start"
                        className="menu-item menu-lg-down-accordion"
                      >
                        <span className="menu-link">
                          <span className="menu-bullet">
                            <span className="bullet bullet-dot"></span>
                          </span>
                          <span className="menu-title">Profile</span>
                          <span className="menu-arrow"></span>
                        </span>

                        <div className="menu-sub menu-sub-lg-down-accordion menu-sub-lg-dropdown menu-active-bg px-lg-2 py-lg-4 w-lg-225px">
                          <div className="menu-item">
                            <a
                              className="menu-link"
                              href="apps/invoices/view/invoice-1.html"
                            >
                              <span className="menu-bullet">
                                <span className="bullet bullet-dot"></span>
                              </span>
                              <span className="menu-title">Invoice 1</span>
                            </a>
                          </div>

                          <div className="menu-item">
                            <a
                              className="menu-link"
                              href="apps/invoices/view/invoice-2.html"
                            >
                              <span className="menu-bullet">
                                <span className="bullet bullet-dot"></span>
                              </span>
                              <span className="menu-title">Invoice 2</span>
                            </a>
                          </div>

                          <div className="menu-item">
                            <a
                              className="menu-link"
                              href="apps/invoices/view/invoice-3.html"
                            >
                              <span className="menu-bullet">
                                <span className="bullet bullet-dot"></span>
                              </span>
                              <span className="menu-title">Invoice 3</span>
                            </a>
                          </div>
                        </div>
                      </div>

                      <div className="menu-item">
                        <a
                          className="menu-link"
                          href="apps/invoices/create.html"
                        >
                          <span className="menu-bullet">
                            <span className="bullet bullet-dot"></span>
                          </span>
                          <span className="menu-title">Create Invoice</span>
                        </a>
                      </div>
                    </div>
                  </div>

                  <div
                    data-kt-menu-trigger="{default:'click', lg: 'hover'}"
                    data-kt-menu-placement="right-start"
                    className="menu-item menu-lg-down-accordion"
                  >
                    <span className="menu-link">
                      <span className="menu-icon">
                        <i className="ki-outline ki-file-added fs-2"></i>
                      </span>
                      <span className="menu-title">File Manager</span>
                      <span className="menu-arrow"></span>
                    </span>

                    <div className="menu-sub menu-sub-lg-down-accordion menu-sub-lg-dropdown menu-active-bg px-lg-2 py-lg-4 w-lg-225px">
                      <div className="menu-item">
                        <a
                          className="menu-link"
                          href="apps/file-manager/folders.html"
                        >
                          <span className="menu-bullet">
                            <span className="bullet bullet-dot"></span>
                          </span>
                          <span className="menu-title">Folders</span>
                        </a>
                      </div>

                      <div className="menu-item">
                        <a
                          className="menu-link"
                          href="apps/file-manager/files.html"
                        >
                          <span className="menu-bullet">
                            <span className="bullet bullet-dot"></span>
                          </span>
                          <span className="menu-title">Files</span>
                        </a>
                      </div>

                      <div className="menu-item">
                        <a
                          className="menu-link"
                          href="apps/file-manager/blank.html"
                        >
                          <span className="menu-bullet">
                            <span className="bullet bullet-dot"></span>
                          </span>
                          <span className="menu-title">Blank Directory</span>
                        </a>
                      </div>

                      <div className="menu-item">
                        <a
                          className="menu-link"
                          href="apps/file-manager/settings.html"
                        >
                          <span className="menu-bullet">
                            <span className="bullet bullet-dot"></span>
                          </span>
                          <span className="menu-title">Settings</span>
                        </a>
                      </div>
                    </div>
                  </div>

                  <div
                    data-kt-menu-trigger="{default:'click', lg: 'hover'}"
                    data-kt-menu-placement="right-start"
                    className="menu-item menu-lg-down-accordion"
                  >
                    <span className="menu-link">
                      <span className="menu-icon">
                        <i className="ki-outline ki-sms fs-2"></i>
                      </span>
                      <span className="menu-title">Inbox</span>
                      <span className="menu-arrow"></span>
                    </span>

                    <div className="menu-sub menu-sub-lg-down-accordion menu-sub-lg-dropdown menu-active-bg px-lg-2 py-lg-4 w-lg-225px">
                      <div className="menu-item">
                        <a className="menu-link" href="apps/inbox/listing.html">
                          <span className="menu-bullet">
                            <span className="bullet bullet-dot"></span>
                          </span>
                          <span className="menu-title">Messages</span>
                          <span className="menu-badge">
                            <span className="badge badge-light-success">3</span>
                          </span>
                        </a>
                      </div>

                      <div className="menu-item">
                        <a className="menu-link" href="apps/inbox/compose.html">
                          <span className="menu-bullet">
                            <span className="bullet bullet-dot"></span>
                          </span>
                          <span className="menu-title">Compose</span>
                        </a>
                      </div>

                      <div className="menu-item">
                        <a className="menu-link" href="apps/inbox/reply.html">
                          <span className="menu-bullet">
                            <span className="bullet bullet-dot"></span>
                          </span>
                          <span className="menu-title">View & Reply</span>
                        </a>
                      </div>
                    </div>
                  </div>

                  <div
                    data-kt-menu-trigger="{default:'click', lg: 'hover'}"
                    data-kt-menu-placement="right-start"
                    className="menu-item menu-lg-down-accordion"
                  >
                    <span className="menu-link">
                      <span className="menu-icon">
                        <i className="ki-outline ki-message-text-2 fs-2"></i>
                      </span>
                      <span className="menu-title">Chat</span>
                      <span className="menu-arrow"></span>
                    </span>

                    <div className="menu-sub menu-sub-lg-down-accordion menu-sub-lg-dropdown menu-active-bg px-lg-2 py-lg-4 w-lg-225px">
                      <div className="menu-item">
                        <a className="menu-link" href="apps/chat/private.html">
                          <span className="menu-bullet">
                            <span className="bullet bullet-dot"></span>
                          </span>
                          <span className="menu-title">Private Chat</span>
                        </a>
                      </div>

                      <div className="menu-item">
                        <a className="menu-link" href="apps/chat/group.html">
                          <span className="menu-bullet">
                            <span className="bullet bullet-dot"></span>
                          </span>
                          <span className="menu-title">Group Chat</span>
                        </a>
                      </div>

                      <div className="menu-item">
                        <a className="menu-link" href="apps/chat/drawer.html">
                          <span className="menu-bullet">
                            <span className="bullet bullet-dot"></span>
                          </span>
                          <span className="menu-title">Drawer Chat</span>
                        </a>
                      </div>
                    </div>
                  </div>

                  <div className="menu-item">
                    <a className="menu-link" href="apps/calendar.html">
                      <span className="menu-icon">
                        <i className="ki-outline ki-calendar-8 fs-2"></i>
                      </span>
                      <span className="menu-title">Calendar</span>
                    </a>
                  </div>
                </div>
              </div>

              <div
                data-kt-menu-trigger="{default: 'click', lg: 'hover'}"
                data-kt-menu-placement="bottom-start"
                className="menu-item menu-lg-down-accordion menu-sub-lg-down-indention me-0 me-lg-2"
              >
                <span className="menu-link">
                  <span className="menu-title">Help</span>
                  <span className="menu-arrow d-lg-none"></span>
                </span>

                <div className="menu-sub menu-sub-lg-down-accordion menu-sub-lg-dropdown px-lg-2 py-lg-4 w-lg-200px">
                  <div className="menu-item">
                    <a
                      className="menu-link"
                      href="https://preview.keenthemes.com/html/metronic/docs/base/utilities"
                      target="_blank"
                      title="Check out over 200 in-house components, plugins and ready for use solutions"
                      data-bs-toggle="tooltip"
                      data-bs-trigger="hover"
                      data-bs-dismiss="click"
                      data-bs-placement="right"
                    >
                      <span className="menu-icon">
                        <i className="ki-outline ki-rocket fs-2"></i>
                      </span>
                      <span className="menu-title">Components</span>
                    </a>
                  </div>

                  <div className="menu-item">
                    <a
                      className="menu-link"
                      href="https://preview.keenthemes.com/html/metronic/docs"
                      target="_blank"
                      title="Check out the complete documentation"
                      data-bs-toggle="tooltip"
                      data-bs-trigger="hover"
                      data-bs-dismiss="click"
                      data-bs-placement="right"
                    >
                      <span className="menu-icon">
                        <i className="ki-outline ki-abstract-26 fs-2"></i>
                      </span>
                      <span className="menu-title">Documentation</span>
                    </a>
                  </div>

                  <div className="menu-item">
                    <a
                      className="menu-link"
                      href="https://preview.keenthemes.com/metronic8/demo23/layout-builder.html"
                      title="Build your layout and export HTML for server side integration"
                      data-bs-toggle="tooltip"
                      data-bs-trigger="hover"
                      data-bs-dismiss="click"
                      data-bs-placement="right"
                    >
                      <span className="menu-icon">
                        <i className="ki-outline ki-switch fs-2"></i>
                      </span>
                      <span className="menu-title">Layout Builder</span>
                    </a>
                  </div>

                  <div className="menu-item">
                    <a
                      className="menu-link"
                      href="https://preview.keenthemes.com/html/metronic/docs/getting-started/changelog"
                      target="_blank"
                    >
                      <span className="menu-icon">
                        <i className="ki-outline ki-code fs-2"></i>
                      </span>
                      <span className="menu-title">Changelog v8.2.3</span>
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="d-flex align-items-center">
            {" "}
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
