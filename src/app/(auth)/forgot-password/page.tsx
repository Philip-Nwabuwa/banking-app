import Link from "next/link";
import Image from "next/image";
import Logo from "@/app/assets/logos/custom-3.svg";

const page = () => {
  return (
    <div id="kt_body" className="app-blank signinImage h-100">
      <div className="d-flex flex-column flex-root" id="kt_app_root">
        <div className="d-flex flex-column flex-column-fluid flex-lg-row">
          <div className="d-flex flex-center w-lg-50 pt-15 pt-lg-0 px-10">
            <div className="d-flex flex-center flex-lg-start flex-column">
              <Link href="/" className="mb-7">
                <Image alt="Logo" src={Logo} width={226} height={42} />
              </Link>
              <h2 className="text-white fw-normal m-0">
                Branding tools designed for your business
              </h2>
            </div>
          </div>
          <div className="d-flex flex-column-fluid flex-lg-row-auto justify-content-center justify-content-lg-end p-12 p-lg-20">
            <div className="bg-body d-flex flex-column align-items-stretch flex-center rounded-4 w-md-600px p-20">
              <div className="d-flex flex-center flex-column flex-column-fluid px-lg-10 pb-15 pb-lg-20">
                <form
                  className="form w-100"
                  noValidate
                  id="kt_password_reset_form"
                  data-kt-redirect-url="authentication/layouts/creative/new-password.html"
                  action="#"
                >
                  <div className="text-center mb-10">
                    <h1 className="text-gray-900 fw-bolder mb-3">
                      Forgot Password ?
                    </h1>
                    <div className="text-gray-500 fw-semibold fs-6">
                      Enter your email to reset your password.
                    </div>
                  </div>

                  <div className="fv-row mb-8">
                    <input
                      type="text"
                      placeholder="Email"
                      name="email"
                      autoComplete="off"
                      className="form-control bg-transparent"
                    />
                  </div>
                  <div className="d-flex flex-wrap justify-content-center pb-lg-0">
                    <button
                      type="button"
                      id="kt_password_reset_submit"
                      className="btn btn-primary me-4"
                    >
                      <span className="indicator-label">Submit</span>
                      <span className="indicator-progress">
                        Please wait...
                        <span className="spinner-border spinner-border-sm align-middle ms-2"></span>
                      </span>
                    </button>
                    <Link href="/login" className="btn btn-light">
                      Cancel
                    </Link>
                  </div>
                </form>
              </div>

              <div className="d-flex flex-stack px-lg-10">
                <div className="me-0">
                  <button
                    className="btn btn-flex btn-link btn-color-gray-700 btn-active-color-primary rotate fs-base"
                    data-kt-menu-trigger="click"
                    data-kt-menu-placement="bottom-start"
                    data-kt-menu-offset="0px, 0px"
                  >
                    <img
                      data-kt-element="current-lang-flag"
                      className="w-20px h-20px rounded me-3"
                      src="assets/media/flags/united-states.svg"
                      alt=""
                    />
                    <span data-kt-element="current-lang-name" className="me-1">
                      English
                    </span>
                    <i className="ki-outline ki-down fs-5 text-muted rotate-180 m-0"></i>
                  </button>

                  <div
                    className="menu menu-sub menu-sub-dropdown menu-column menu-rounded menu-gray-800 menu-state-bg-light-primary fw-semibold w-200px py-4 fs-7"
                    data-kt-menu="true"
                    id="kt_auth_lang_menu"
                  >
                    <div className="menu-item px-3">
                      <a
                        href="#"
                        className="menu-link d-flex px-5"
                        data-kt-lang="English"
                      >
                        <span className="symbol symbol-20px me-4">
                          <img
                            data-kt-element="lang-flag"
                            className="rounded-1"
                            src="assets/media/flags/united-states.svg"
                            alt=""
                          />
                        </span>
                        <span data-kt-element="lang-name">English</span>
                      </a>
                    </div>

                    <div className="menu-item px-3">
                      <a
                        href="#"
                        className="menu-link d-flex px-5"
                        data-kt-lang="Spanish"
                      >
                        <span className="symbol symbol-20px me-4">
                          <img
                            data-kt-element="lang-flag"
                            className="rounded-1"
                            src="assets/media/flags/spain.svg"
                            alt=""
                          />
                        </span>
                        <span data-kt-element="lang-name">Spanish</span>
                      </a>
                    </div>

                    <div className="menu-item px-3">
                      <a
                        href="#"
                        className="menu-link d-flex px-5"
                        data-kt-lang="German"
                      >
                        <span className="symbol symbol-20px me-4">
                          <img
                            data-kt-element="lang-flag"
                            className="rounded-1"
                            src="assets/media/flags/germany.svg"
                            alt=""
                          />
                        </span>
                        <span data-kt-element="lang-name">German</span>
                      </a>
                    </div>

                    <div className="menu-item px-3">
                      <a
                        href="#"
                        className="menu-link d-flex px-5"
                        data-kt-lang="Japanese"
                      >
                        <span className="symbol symbol-20px me-4">
                          <img
                            data-kt-element="lang-flag"
                            className="rounded-1"
                            src="assets/media/flags/japan.svg"
                            alt=""
                          />
                        </span>
                        <span data-kt-element="lang-name">Japanese</span>
                      </a>
                    </div>

                    <div className="menu-item px-3">
                      <a
                        href="#"
                        className="menu-link d-flex px-5"
                        data-kt-lang="French"
                      >
                        <span className="symbol symbol-20px me-4">
                          <img
                            data-kt-element="lang-flag"
                            className="rounded-1"
                            src="assets/media/flags/france.svg"
                            alt=""
                          />
                        </span>
                        <span data-kt-element="lang-name">French</span>
                      </a>
                    </div>
                  </div>
                </div>

                <div className="d-flex fw-semibold text-primary fs-base gap-5">
                  <a href="pages/team.html" target="_blank">
                    Terms
                  </a>
                  <a href="pages/pricing/column.html" target="_blank">
                    Plans
                  </a>
                  <a href="pages/contact.html" target="_blank">
                    Contact Us
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default page;
