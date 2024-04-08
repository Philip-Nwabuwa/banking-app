import Logo from "@/assets/logos/main.png";
import MinLogo from "@/assets/logos/simple.png";
import UserImage from "@/assets/images/user.jpg";
import Link from "next/link";
import Image from "next/image";

const Sidebar = () => {
  return (
    <div className="app-wrapper flex-column flex-row-fluid">
      <div
        id="kt_app_sidebar"
        className="app-sidebar flex-column"
        data-kt-drawer="true"
        data-kt-drawer-name="app-sidebar"
        data-kt-drawer-activate="{default: true, lg: false}"
        data-kt-drawer-overlay="true"
        data-kt-drawer-width="275px"
        data-kt-drawer-direction="start"
        data-kt-drawer-toggle="#kt_app_sidebar_toggle"
      >
        <div
          className="d-flex flex-stack px-4 px-lg-6 py-3 py-lg-8"
          id="kt_app_sidebar_logo"
        >
          <Link href="/">
            <Image
              alt="Logo"
              src={Logo}
              className="h-25px h-lg-30px theme-light-show"
              width={226}
              height={60}
            />

            <img
              alt="LogoMe"
              src="assets/media/logos/demo23-dark.svg"
              className="h-20px h-lg-25px theme-dark-show"
            />
          </Link>

          <div className="ms-3">
            <div
              className="cursor-pointer position-relative symbol symbol-circle symbol-40px"
              data-kt-menu-trigger="{default: 'click', lg: 'hover'}"
              data-kt-menu-attach="parent"
              data-kt-menu-placement="bottom-end"
            >
              <Image src={UserImage} width={100} height={100} alt="user" />
              <div className="position-absolute rounded-circle bg-success start-100 top-100 h-8px w-8px ms-n3 mt-n3"></div>
            </div>
            <div
              className="menu menu-sub menu-sub-dropdown menu-column menu-rounded menu-gray-800 menu-state-bg menu-state-color fw-semibold py-4 fs-6 w-275px"
              data-kt-menu="true"
            >
              <div className="menu-item px-3">
                <div className="menu-content d-flex align-items-center px-3">
                  <div className="symbol symbol-50px me-5">
                    <Image
                      alt="Logo"
                      src={MinLogo}
                      className="h-25px h-lg-30px theme-light-show"
                      width={226}
                      height={60}
                    />
                  </div>

                  <div className="d-flex flex-column">
                    <div className="fw-bold d-flex align-items-center fs-5">
                      Max Smith
                      <span className="badge badge-light-success fw-bold fs-8 px-2 py-1 ms-2">
                        Pro
                      </span>
                    </div>
                    <a
                      href="#"
                      className="fw-semibold text-muted text-hover-primary fs-7"
                    >
                      max@kt.com
                    </a>
                  </div>
                </div>
              </div>

              <div className="separator my-2"></div>

              <div className="menu-item px-5">
                <a href="account/overview.html" className="menu-link px-5">
                  My Profile
                </a>
              </div>

              <div className="menu-item px-5">
                <a href="apps/projects/list.html" className="menu-link px-5">
                  <span className="menu-text">My Projects</span>
                  <span className="menu-badge">
                    <span className="badge badge-light-danger badge-circle fw-bold fs-7">
                      3
                    </span>
                  </span>
                </a>
              </div>

              <div
                className="menu-item px-5"
                data-kt-menu-trigger="{default: 'click', lg: 'hover'}"
                data-kt-menu-placement="left-start"
                data-kt-menu-offset="-15px, 0"
              >
                <a href="#" className="menu-link px-5">
                  <span className="menu-title">My Subscription</span>
                  <span className="menu-arrow"></span>
                </a>
                <div className="menu-sub menu-sub-dropdown w-175px py-4">
                  <div className="menu-item px-3">
                    <a href="account/referrals.html" className="menu-link px-5">
                      Referrals
                    </a>
                  </div>

                  <div className="menu-item px-3">
                    <a href="account/billing.html" className="menu-link px-5">
                      Billing
                    </a>
                  </div>

                  <div className="menu-item px-3">
                    <a
                      href="account/statements.html"
                      className="menu-link px-5"
                    >
                      Payments
                    </a>
                  </div>

                  <div className="menu-item px-3">
                    <a
                      href="account/statements.html"
                      className="menu-link d-flex flex-stack px-5"
                    >
                      Statements
                      <span
                        className="ms-2 lh-0"
                        data-bs-toggle="tooltip"
                        title="View your statements"
                      >
                        <i className="ki-outline ki-information-5 fs-5"></i>{" "}
                      </span>
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
                        <span className="form-check-label text-muted fs-7">
                          Notifications
                        </span>
                      </label>
                    </div>
                  </div>
                </div>
              </div>
              <div className="menu-item px-5">
                <a href="account/statements.html" className="menu-link px-5">
                  My Statements
                </a>
              </div>

              <div className="separator my-2"></div>

              <div
                className="menu-item px-5"
                data-kt-menu-trigger="{default: 'click', lg: 'hover'}"
                data-kt-menu-placement="left-start"
                data-kt-menu-offset="-15px, 0"
              >
                <a href="#" className="menu-link px-5">
                  <span className="menu-title position-relative">
                    Mode
                    <span className="ms-5 position-absolute translate-middle-y top-50 end-0">
                      <i className="ki-outline ki-night-day theme-light-show fs-2"></i>
                      <i className="ki-outline ki-moon theme-dark-show fs-2"></i>{" "}
                    </span>
                  </span>
                </a>
                <div
                  className="menu menu-sub menu-sub-dropdown menu-column menu-rounded menu-title-gray-700 menu-icon-gray-500 menu-active-bg menu-state-color fw-semibold py-4 fs-base w-150px"
                  data-kt-menu="true"
                  data-kt-element="theme-mode-menu"
                >
                  <div className="menu-item px-3 my-0">
                    <a
                      href="#"
                      className="menu-link px-3 py-2"
                      data-kt-element="mode"
                      data-kt-value="light"
                    >
                      <span className="menu-icon" data-kt-element="icon">
                        <i className="ki-outline ki-night-day fs-2"></i>
                      </span>
                      <span className="menu-title">Light</span>
                    </a>
                  </div>

                  <div className="menu-item px-3 my-0">
                    <a
                      href="#"
                      className="menu-link px-3 py-2"
                      data-kt-element="mode"
                      data-kt-value="dark"
                    >
                      <span className="menu-icon" data-kt-element="icon">
                        <i className="ki-outline ki-moon fs-2"></i>
                      </span>
                      <span className="menu-title">Dark</span>
                    </a>
                  </div>

                  <div className="menu-item px-3 my-0">
                    <a
                      href="#"
                      className="menu-link px-3 py-2"
                      data-kt-element="mode"
                      data-kt-value="system"
                    >
                      <span className="menu-icon" data-kt-element="icon">
                        <i className="ki-outline ki-screen fs-2"></i>
                      </span>
                      <span className="menu-title">System</span>
                    </a>
                  </div>
                </div>
              </div>

              <div
                className="menu-item px-5"
                data-kt-menu-trigger="{default: 'click', lg: 'hover'}"
                data-kt-menu-placement="left-start"
                data-kt-menu-offset="-15px, 0"
              >
                <a href="#" className="menu-link px-5">
                  <span className="menu-title position-relative">
                    Language
                    <span className="fs-8 rounded bg-light px-3 py-2 position-absolute translate-middle-y top-50 end-0">
                      English
                      <img
                        className="w-15px h-15px rounded-1 ms-2"
                        src="assets/media/flags/united-states.svg"
                        alt=""
                      />
                    </span>
                  </span>
                </a>
                <div className="menu-sub menu-sub-dropdown w-175px py-4">
                  <div className="menu-item px-3">
                    <a
                      href="account/settings.html"
                      className="menu-link d-flex px-5 active"
                    >
                      <span className="symbol symbol-20px me-4">
                        <img
                          className="rounded-1"
                          src="assets/media/flags/united-states.svg"
                          alt=""
                        />{" "}
                      </span>
                      English
                    </a>
                  </div>

                  <div className="menu-item px-3">
                    <a
                      href="account/settings.html"
                      className="menu-link d-flex px-5"
                    >
                      <span className="symbol symbol-20px me-4">
                        <img
                          className="rounded-1"
                          src="assets/media/flags/spain.svg"
                          alt=""
                        />{" "}
                      </span>
                      Spanish
                    </a>
                  </div>

                  <div className="menu-item px-3">
                    <a
                      href="account/settings.html"
                      className="menu-link d-flex px-5"
                    >
                      <span className="symbol symbol-20px me-4">
                        <img
                          className="rounded-1"
                          src="assets/media/flags/germany.svg"
                          alt=""
                        />{" "}
                      </span>
                      German
                    </a>
                  </div>

                  <div className="menu-item px-3">
                    <a
                      href="account/settings.html"
                      className="menu-link d-flex px-5"
                    >
                      <span className="symbol symbol-20px me-4">
                        <img
                          className="rounded-1"
                          src="assets/media/flags/japan.svg"
                          alt=""
                        />{" "}
                      </span>
                      Japanese
                    </a>
                  </div>

                  <div className="menu-item px-3">
                    <a
                      href="account/settings.html"
                      className="menu-link d-flex px-5"
                    >
                      <span className="symbol symbol-20px me-4">
                        <img
                          className="rounded-1"
                          src="assets/media/flags/france.svg"
                          alt=""
                        />{" "}
                      </span>
                      French
                    </a>
                  </div>
                </div>
              </div>

              <div className="menu-item px-5 my-1">
                <a href="account/settings.html" className="menu-link px-5">
                  Account Settings
                </a>
              </div>
              <div className="menu-item px-5">
                <a
                  href="authentication/layouts/corporate/sign-in.html"
                  className="menu-link px-5"
                >
                  Sign Out
                </a>
              </div>
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
            <div className="d-flex align-items-center flex-column w-100 mb-6">
              <div className="d-flex justify-content-between fw-bolder fs-6 text-gray-800 w-100 mt-auto mb-3">
                <span>Your Goal</span>
              </div>
              <div
                className="w-100 bg-light-primary rounded mb-2"
                style={{ height: "24px" }}
              >
                <div
                  className="bg-primary rounded"
                  role="progressbar"
                  style={{ height: "24px", width: "37%" }}
                  aria-valuenow={50}
                  aria-valuemin={0}
                  aria-valuemax={100}
                ></div>
              </div>
              <div className="fw-semibold fs-7 text-primary w-100 mt-auto">
                <span>reached 37% of your target</span>
              </div>
            </div>

            <div className="d-flex mb-3 mb-lg-6">
              <div className="border border-gray-300 border-dashed rounded min-w-100px w-100 py-2 px-4 me-6">
                <span className="fs-6 text-gray-500 fw-bold">Budget</span>

                <div className="fs-2 fw-bold text-success">$14,350</div>
              </div>

              <div className="border border-gray-300 border-dashed rounded min-w-100px w-100 py-2 px-4">
                <span className="fs-6 text-gray-500 fw-bold">Spent</span>

                <div className="fs-2 fw-bold text-danger">$8,029</div>
              </div>
            </div>
            <div className="mb-6">
              <h3 className="text-gray-800 fw-bold mb-8">Services</h3>

              <div
                className="row row-cols-3"
                data-kt-buttons="true"
                data-kt-buttons-target="[data-kt-button]"
              >
                <div className="col mb-4">
                  <a
                    href="apps/calendar.html"
                    className="btn btn-icon btn-outline btn-bg-light btn-active-light-primary btn-flex flex-column flex-center w-lg-90px h-lg-90px w-70px h-70px border-gray-200"
                    data-kt-button="true"
                  >
                    <span className="mb-2">
                      <i className="ki-outline ki-calendar fs-1"></i>
                    </span>
                    <span className="fs-7 fw-bold">Events</span>
                  </a>
                </div>

                <div className="col mb-4">
                  <a
                    href="apps/support-center/licenses.html"
                    className="btn btn-icon btn-outline btn-bg-light btn-active-light-primary btn-flex flex-column flex-center w-lg-90px h-lg-90px w-70px h-70px border-gray-200"
                    data-kt-button="true"
                  >
                    <span className="mb-2">
                      <i className="ki-outline ki-security-check fs-1"></i>
                    </span>

                    <span className="fs-7 fw-bold">Insurance</span>
                  </a>
                </div>

                <div className="col mb-4">
                  <a
                    href="apps/support-center/overview.html"
                    className="btn btn-icon btn-outline btn-bg-light btn-active-light-primary btn-flex flex-column flex-center w-lg-90px h-lg-90px w-70px h-70px border-gray-200"
                    data-kt-button="true"
                  >
                    <span className="mb-2">
                      <i className="ki-outline ki-wifi-square fs-1"></i>
                    </span>

                    <span className="fs-7 fw-bold">Network</span>
                  </a>
                </div>

                <div className="col mb-4">
                  <a
                    href="apps/projects/budget.html"
                    className="btn btn-icon btn-outline btn-bg-light btn-active-light-primary btn-flex flex-column flex-center w-lg-90px h-lg-90px w-70px h-70px border-gray-200"
                    data-kt-button="true"
                  >
                    <span className="mb-2">
                      <i className="ki-outline ki-chart-line-up-2 fs-1"></i>
                    </span>

                    <span className="fs-7 fw-bold">Financial</span>
                  </a>
                </div>

                <div className="col mb-4">
                  <a
                    href="apps/subscriptions/getting-started.html"
                    className="btn btn-icon btn-outline btn-bg-light btn-active-light-primary btn-flex flex-column flex-center w-lg-90px h-lg-90px w-70px h-70px border-gray-200"
                    data-kt-button="true"
                  >
                    <span className="mb-2">
                      <i className="ki-outline ki-shield-tick fs-1"></i>
                    </span>

                    <span className="fs-7 fw-bold">Technical</span>
                  </a>
                </div>

                <div className="col mb-4">
                  <a
                    href="apps/contacts/getting-started.html"
                    className="btn btn-icon btn-outline btn-bg-light btn-active-light-primary btn-flex flex-column flex-center w-lg-90px h-lg-90px w-70px h-70px border-gray-200"
                    data-kt-button="true"
                  >
                    <span className="mb-2">
                      <i className="ki-outline ki-rocket fs-1"></i>
                    </span>

                    <span className="fs-7 fw-bold">CareCal</span>
                  </a>
                </div>

                <div className="col mb-4">
                  <a
                    href="apps/projects/list.html"
                    className="btn btn-icon btn-outline btn-bg-light btn-active-light-primary btn-flex flex-column flex-center w-lg-90px h-lg-90px w-70px h-70px border-gray-200"
                    data-kt-button="true"
                  >
                    <span className="mb-2">
                      <i className="ki-outline ki-geolocation fs-1"></i>
                    </span>

                    <span className="fs-7 fw-bold">Hospitality</span>
                  </a>
                </div>

                <div className="col mb-4">
                  <a
                    href="apps/file-manager/folders.html"
                    className="btn btn-icon btn-outline btn-bg-light btn-active-light-primary btn-flex flex-column flex-center w-lg-90px h-lg-90px w-70px h-70px border-gray-200"
                    data-kt-button="true"
                  >
                    <span className="mb-2">
                      <i className="ki-outline ki-abstract-28 fs-1"></i>
                    </span>

                    <span className="fs-7 fw-bold">Utilities</span>
                  </a>
                </div>

                <div className="col mb-4">
                  <a
                    href="apps/contacts/add-contact.html"
                    className="btn btn-icon btn-outline btn-bg-light btn-active-light-primary btn-flex flex-column flex-center w-lg-90px h-lg-90px w-70px h-70px active border-primary border-dashed"
                    data-kt-button="true"
                  >
                    <span className="mb-2">
                      <i className="ki-outline ki-plus fs-1"></i>
                    </span>

                    <span className="fs-7 fw-bold">Add New</span>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div
          className="flex-column-auto d-flex flex-center px-4 px-lg-8 py-3 py-lg-8"
          id="kt_app_sidebar_footer"
        >
          <div className="app-footer-item me-6">
            <div
              className="btn btn-icon btn-custom btn-icon-muted btn-active-light btn-active-color-primary w-35px h-35px w-md-40px h-md-40px"
              data-kt-menu-trigger="{default: 'click', lg: 'hover'}"
              data-kt-menu-attach="parent"
              data-kt-menu-placement="bottom-start"
            >
              <i className="ki-outline ki-abstract-26 fs-2"></i>
            </div>
            <div
              className="menu menu-sub menu-sub-dropdown menu-column w-100 w-sm-350px"
              data-kt-menu="true"
            >
              <div className="card">
                <div className="card-header">
                  <div className="card-title">My Apps</div>
                  <div className="card-toolbar">
                    <button
                      type="button"
                      className="btn btn-sm btn-icon btn-active-light-primary me-n3"
                      data-kt-menu-trigger="{default: 'click', lg: 'hover'}"
                      data-kt-menu-placement="bottom-end"
                    >
                      <i className="ki-outline ki-setting-3 fs-2"></i>
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
                        <a href="#" className="menu-link flex-stack px-3">
                          Create Payment
                          <span
                            className="ms-2"
                            data-bs-toggle="tooltip"
                            title="Specify a target name for future usage and reference"
                          >
                            <i className="ki-outline ki-information fs-6"></i>{" "}
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
                          <span className="menu-title">Subscription</span>
                          <span className="menu-arrow"></span>
                        </a>
                        <div className="menu-sub menu-sub-dropdown w-175px py-4">
                          <div className="menu-item px-3">
                            <a href="#" className="menu-link px-3">
                              Plans
                            </a>
                          </div>
                          <div className="menu-item px-3">
                            <a href="#" className="menu-link px-3">
                              Billing
                            </a>
                          </div>
                          <div className="menu-item px-3">
                            <a href="#" className="menu-link px-3">
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
                <div className="card-body py-5">
                  <div className="mh-450px scroll-y me-n5 pe-5">
                    <div className="row g-2">
                      <div className="col-4">
                        <a
                          href="#"
                          className="d-flex flex-column flex-center text-center text-gray-800 text-hover-primary bg-hover-light rounded py-4 px-3 mb-3"
                        >
                          <img
                            src="assets/media/svg/brand-logos/amazon.svg"
                            className="w-25px h-25px mb-2"
                            alt=""
                          />
                          <span className="fw-semibold">AWS</span>
                        </a>
                      </div>

                      <div className="col-4">
                        <a
                          href="#"
                          className="d-flex flex-column flex-center text-center text-gray-800 text-hover-primary bg-hover-light rounded py-4 px-3 mb-3"
                        >
                          <img
                            src="assets/media/svg/brand-logos/angular-icon-1.svg"
                            className="w-25px h-25px mb-2"
                            alt=""
                          />
                          <span className="fw-semibold">AngularJS</span>
                        </a>
                      </div>

                      <div className="col-4">
                        <a
                          href="#"
                          className="d-flex flex-column flex-center text-center text-gray-800 text-hover-primary bg-hover-light rounded py-4 px-3 mb-3"
                        >
                          <img
                            src="assets/media/svg/brand-logos/atica.svg"
                            className="w-25px h-25px mb-2"
                            alt=""
                          />
                          <span className="fw-semibold">Atica</span>
                        </a>
                      </div>

                      <div className="col-4">
                        <a
                          href="#"
                          className="d-flex flex-column flex-center text-center text-gray-800 text-hover-primary bg-hover-light rounded py-4 px-3 mb-3"
                        >
                          <img
                            src="assets/media/svg/brand-logos/beats-electronics.svg"
                            className="w-25px h-25px mb-2"
                            alt=""
                          />
                          <span className="fw-semibold">Music</span>
                        </a>
                      </div>

                      <div className="col-4">
                        <a
                          href="#"
                          className="d-flex flex-column flex-center text-center text-gray-800 text-hover-primary bg-hover-light rounded py-4 px-3 mb-3"
                        >
                          <img
                            src="assets/media/svg/brand-logos/codeigniter.svg"
                            className="w-25px h-25px mb-2"
                            alt=""
                          />
                          <span className="fw-semibold">Codeigniter</span>
                        </a>
                      </div>

                      <div className="col-4">
                        <a
                          href="#"
                          className="d-flex flex-column flex-center text-center text-gray-800 text-hover-primary bg-hover-light rounded py-4 px-3 mb-3"
                        >
                          <img
                            src="assets/media/svg/brand-logos/bootstrap-4.svg"
                            className="w-25px h-25px mb-2"
                            alt=""
                          />
                          <span className="fw-semibold">Bootstrap</span>
                        </a>
                      </div>

                      <div className="col-4">
                        <a
                          href="#"
                          className="d-flex flex-column flex-center text-center text-gray-800 text-hover-primary bg-hover-light rounded py-4 px-3 mb-3"
                        >
                          <img
                            src="assets/media/svg/brand-logos/google-tag-manager.svg"
                            className="w-25px h-25px mb-2"
                            alt=""
                          />
                          <span className="fw-semibold">GTM</span>
                        </a>
                      </div>

                      <div className="col-4">
                        <a
                          href="#"
                          className="d-flex flex-column flex-center text-center text-gray-800 text-hover-primary bg-hover-light rounded py-4 px-3 mb-3"
                        >
                          <img
                            src="assets/media/svg/brand-logos/disqus.svg"
                            className="w-25px h-25px mb-2"
                            alt=""
                          />
                          <span className="fw-semibold">Disqus</span>
                        </a>
                      </div>

                      <div className="col-4">
                        <a
                          href="#"
                          className="d-flex flex-column flex-center text-center text-gray-800 text-hover-primary bg-hover-light rounded py-4 px-3 mb-3"
                        >
                          <img
                            src="assets/media/svg/brand-logos/dribbble-icon-1.svg"
                            className="w-25px h-25px mb-2"
                            alt=""
                          />
                          <span className="fw-semibold">Dribble</span>
                        </a>
                      </div>

                      <div className="col-4">
                        <a
                          href="#"
                          className="d-flex flex-column flex-center text-center text-gray-800 text-hover-primary bg-hover-light rounded py-4 px-3 mb-3"
                        >
                          <img
                            src="assets/media/svg/brand-logos/google-play-store.svg"
                            className="w-25px h-25px mb-2"
                            alt=""
                          />
                          <span className="fw-semibold">Play Store</span>
                        </a>
                      </div>

                      <div className="col-4">
                        <a
                          href="#"
                          className="d-flex flex-column flex-center text-center text-gray-800 text-hover-primary bg-hover-light rounded py-4 px-3 mb-3"
                        >
                          <img
                            src="assets/media/svg/brand-logos/google-podcasts.svg"
                            className="w-25px h-25px mb-2"
                            alt=""
                          />
                          <span className="fw-semibold">Podcasts</span>
                        </a>
                      </div>

                      <div className="col-4">
                        <a
                          href="#"
                          className="d-flex flex-column flex-center text-center text-gray-800 text-hover-primary bg-hover-light rounded py-4 px-3 mb-3"
                        >
                          <img
                            src="assets/media/svg/brand-logos/figma-1.svg"
                            className="w-25px h-25px mb-2"
                            alt=""
                          />
                          <span className="fw-semibold">Figma</span>
                        </a>
                      </div>

                      <div className="col-4">
                        <a
                          href="#"
                          className="d-flex flex-column flex-center text-center text-gray-800 text-hover-primary bg-hover-light rounded py-4 px-3 mb-3"
                        >
                          <img
                            src="assets/media/svg/brand-logos/github.svg"
                            className="w-25px h-25px mb-2"
                            alt=""
                          />
                          <span className="fw-semibold">Github</span>
                        </a>
                      </div>

                      <div className="col-4">
                        <a
                          href="#"
                          className="d-flex flex-column flex-center text-center text-gray-800 text-hover-primary bg-hover-light rounded py-4 px-3 mb-3"
                        >
                          <img
                            src="assets/media/svg/brand-logos/gitlab.svg"
                            className="w-25px h-25px mb-2"
                            alt=""
                          />
                          <span className="fw-semibold">Gitlab</span>
                        </a>
                      </div>

                      <div className="col-4">
                        <a
                          href="#"
                          className="d-flex flex-column flex-center text-center text-gray-800 text-hover-primary bg-hover-light rounded py-4 px-3 mb-3"
                        >
                          <img
                            src="assets/media/svg/brand-logos/instagram-2-1.svg"
                            className="w-25px h-25px mb-2"
                            alt=""
                          />
                          <span className="fw-semibold">Instagram</span>
                        </a>
                      </div>

                      <div className="col-4">
                        <a
                          href="#"
                          className="d-flex flex-column flex-center text-center text-gray-800 text-hover-primary bg-hover-light rounded py-4 px-3 mb-3"
                        >
                          <img
                            src="assets/media/svg/brand-logos/pinterest-p.svg"
                            className="w-25px h-25px mb-2"
                            alt=""
                          />
                          <span className="fw-semibold">Pinterest</span>
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="app-footer-item me-6">
            <div
              className="btn btn-icon btn-custom btn-icon-muted btn-active-light btn-active-color-primary w-35px h-35px w-md-40px h-md-40px"
              data-kt-menu-trigger="{default: 'click', lg: 'hover'}"
              data-kt-menu-attach="parent"
              data-kt-menu-placement="bottom-start"
            >
              <i className="ki-outline ki-notification-status fs-2"></i>
            </div>
            <div
              className="menu menu-sub menu-sub-dropdown menu-column w-250px w-lg-325px"
              data-kt-menu="true"
            >
              <div
                className="d-flex flex-column flex-center bgi-no-repeat rounded-top px-9 py-10"
                style={{
                  backgroundImage:
                    "url('assets/media/misc/menu-header-bg.jpg')",
                }}
              >
                <h3 className="text-white fw-semibold mb-3">Quick Links</h3>
                <span className="badge bg-primary text-inverse-primary py-2 px-3">
                  25 pending tasks
                </span>
              </div>
              <div className="row g-0">
                <div className="col-6">
                  <a
                    href="apps/projects/budget.html"
                    className="d-flex flex-column flex-center h-100 p-6 bg-hover-light border-end border-bottom"
                  >
                    <i className="ki-outline ki-dollar fs-3x text-primary mb-2"></i>
                    <span className="fs-5 fw-semibold text-gray-800 mb-0">
                      Accounting
                    </span>

                    <span className="fs-7 text-gray-500">eCommerce</span>
                  </a>
                </div>

                <div className="col-6">
                  <a
                    href="apps/projects/settings.html"
                    className="d-flex flex-column flex-center h-100 p-6 bg-hover-light border-bottom"
                  >
                    <i className="ki-outline ki-sms fs-3x text-primary mb-2"></i>
                    <span className="fs-5 fw-semibold text-gray-800 mb-0">
                      Administration
                    </span>
                    <span className="fs-7 text-gray-500">Console</span>
                  </a>
                </div>

                <div className="col-6">
                  <a
                    href="apps/projects/list.html"
                    className="d-flex flex-column flex-center h-100 p-6 bg-hover-light border-end"
                  >
                    <i className="ki-outline ki-abstract-41 fs-3x text-primary mb-2"></i>
                    <span className="fs-5 fw-semibold text-gray-800 mb-0">
                      Projects
                    </span>
                    <span className="fs-7 text-gray-500">Pending Tasks</span>
                  </a>
                </div>

                <div className="col-6">
                  <a
                    href="apps/projects/users.html"
                    className="d-flex flex-column flex-center h-100 p-6 bg-hover-light"
                  >
                    <i className="ki-outline ki-briefcase fs-3x text-primary mb-2"></i>
                    <span className="fs-5 fw-semibold text-gray-800 mb-0">
                      Customers
                    </span>
                    <span className="fs-7 text-gray-500">Latest cases</span>
                  </a>
                </div>
              </div>

              <div className="py-2 text-center border-top">
                <a
                  href="pages/user-profile/activity.html"
                  className="btn btn-color-gray-600 btn-active-color-primary"
                >
                  View All <i className="ki-outline ki-arrow-right fs-5"></i>
                </a>
              </div>
            </div>
          </div>

          <div className="app-footer-item">
            <a
              href="account/settings.html"
              className="btn btn-icon btn-custom btn-icon-muted btn-active-light btn-active-color-primary w-35px h-35px w-md-40px h-md-40px"
            >
              <i className="ki-outline ki-setting-2 fs-2"></i>
            </a>
          </div>
        </div>
      </div>
      <div className="app-main flex-column flex-row-fluid" id="kt_app_main">
        <div className="d-flex flex-column flex-column-fluid">
          <div id="kt_app_toolbar" className="app-toolbar py-3 py-lg-0">
            <div
              id="kt_app_toolbar_container"
              className="app-container container-xxl d-flex flex-stack"
            >
              <div className="page-title d-flex flex-column justify-content-center me-3">
                <h1 className="page-heading d-flex text-gray-900 fw-bold fs-3 flex-column justify-content-center my-0">
                  Getting Started
                </h1>

                <ul className="breadcrumb breadcrumb-separatorless fw-semibold fs-7 my-0 pt-1">
                  <li className="breadcrumb-item text-muted">
                    <a
                      href="index.html"
                      className="text-muted text-hover-primary"
                    >
                      Home
                    </a>
                  </li>
                  <li className="breadcrumb-item">
                    <span className="bullet bg-gray-500 w-5px h-2px"></span>
                  </li>
                  <li className="breadcrumb-item text-muted">Subscription</li>
                </ul>
              </div>
              <div className="d-flex align-items-center gap-2 gap-lg-3">
                <div className="m-0">
                  <a
                    href="#"
                    className="btn btn-sm btn-flex btn-secondary fw-bold"
                    data-kt-menu-trigger="click"
                    data-kt-menu-placement="bottom-end"
                  >
                    <i className="ki-outline ki-filter fs-6 text-muted me-1"></i>
                    Filter
                  </a>
                  <div
                    className="menu menu-sub menu-sub-dropdown w-250px w-md-300px"
                    data-kt-menu="true"
                    id="kt_menu_65a10d99c96cf"
                  >
                    <div className="px-7 py-5">
                      <div className="fs-5 text-gray-900 fw-bold">
                        Filter Options
                      </div>
                    </div>

                    <div className="separator border-gray-200"></div>

                    <div className="px-7 py-5">
                      <div className="mb-10">
                        <label className="form-label fw-semibold">
                          Status:
                        </label>

                        <div>
                          <select
                            className="form-select form-select-solid"
                            data-kt-select2="true"
                            data-close-on-select="false"
                            data-placeholder="Select option"
                            data-dropdown-parent="#kt_menu_65a10d99c96cf"
                            data-allow-clear="true"
                          >
                            <option></option>
                            <option value="1">Approved</option>
                            <option value="2">Pending</option>
                            <option value="2">In Process</option>
                            <option value="2">Rejected</option>
                          </select>
                        </div>
                      </div>
                      <div className="mb-10">
                        <label className="form-label fw-semibold">
                          Member Type:
                        </label>

                        <div className="d-flex">
                          <label className="form-check form-check-sm form-check-custom form-check-solid me-5">
                            <input
                              className="form-check-input"
                              type="checkbox"
                              value="1"
                            />
                            <span className="form-check-label">Author</span>
                          </label>
                          <label className="form-check form-check-sm form-check-custom form-check-solid">
                            <input
                              className="form-check-input"
                              type="checkbox"
                              value="2"
                            />
                            <span className="form-check-label">Customer</span>
                          </label>
                        </div>
                      </div>
                      <div className="mb-10">
                        <label className="form-label fw-semibold">
                          Notifications:
                        </label>

                        <div className="form-check form-switch form-switch-sm form-check-custom form-check-solid">
                          <input
                            className="form-check-input"
                            type="checkbox"
                            value=""
                            name="notifications"
                          />
                          <label className="form-check-label">Enabled</label>
                        </div>
                      </div>
                      <div className="d-flex justify-content-end">
                        <button
                          type="reset"
                          className="btn btn-sm btn-light btn-active-light-primary me-2"
                          data-kt-menu-dismiss="true"
                        >
                          Reset
                        </button>
                        <button
                          type="submit"
                          className="btn btn-sm btn-primary"
                          data-kt-menu-dismiss="true"
                        >
                          Apply
                        </button>
                      </div>
                    </div>
                  </div>
                </div>

                <a
                  href="#"
                  className="btn btn-sm fw-bold btn-primary"
                  data-bs-toggle="modal"
                  data-bs-target="#kt_modal_create_app"
                >
                  Create
                </a>
              </div>
            </div>
          </div>
          <div id="kt_app_content" className="app-content flex-column-fluid">
            <div
              id="kt_app_content_container"
              className="app-container container-xxl"
            >
              <div className="card">
                <div className="card-body p-0">
                  <div className="card-px text-center py-20 my-10">
                    <h2 className="fs-2x fw-bold mb-10">
                      Welcome to Subscriptions App
                    </h2>

                    <p className="text-gray-500 fs-4 fw-semibold mb-10">
                      There are no subscriptions added yet. <br />
                      Kickstart your business by adding a your first
                      subscription
                    </p>

                    <a
                      href="apps/subscriptions/add.html"
                      className="btn btn-primary"
                    >
                      Add Subscription
                    </a>
                  </div>

                  <div className="text-center px-4">
                    <img
                      className="mw-100 mh-300px"
                      alt=""
                      src="assets/media/illustrations/sketchy-1/5.png"
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div id="kt_app_footer" className="app-footer">
          <div className="app-container container-xxl d-flex flex-column flex-md-row flex-center flex-md-stack py-3">
            <div className="text-gray-900 order-2 order-md-1">
              <span className="text-muted fw-semibold me-1">2024&copy;</span>
              <a
                href="https://keenthemes.com"
                target="_blank"
                className="text-gray-800 text-hover-primary"
              >
                Keenthemes
              </a>
            </div>

            <ul className="menu menu-gray-600 menu-hover-primary fw-semibold order-1">
              <li className="menu-item">
                <a
                  href="https://keenthemes.com"
                  target="_blank"
                  className="menu-link px-2"
                >
                  About
                </a>
              </li>
              <li className="menu-item">
                <a
                  href="https://devs.keenthemes.com"
                  target="_blank"
                  className="menu-link px-2"
                >
                  Support
                </a>
              </li>
              <li className="menu-item">
                <a
                  href="https://1.envato.market/EA4JP"
                  target="_blank"
                  className="menu-link px-2"
                >
                  Purchase
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
