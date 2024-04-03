import Logo from "@/assets/icon/custom-3.svg"

const page = () => {
  return (
    <body
      id="kt_body"
      className="app-blank bgi-size-cover bgi-attachment-fixed bgi-position-center bgi-no-repeat"
    >
      
      {/* Root */}
      <div className="d-flex flex-column flex-root" id="kt_app_root">
       
        {/* Authentication - Sign-in */}
        <div className="d-flex flex-column flex-column-fluid flex-lg-row">
          {/* Aside */}
          <div className="d-flex flex-center w-lg-50 pt-15 pt-lg-0 px-10">
            {/* Aside */}
            <div className="d-flex flex-center flex-lg-start flex-column">
              {/* Logo */}
              <a href="index.html" className="mb-7">
                <img alt="Logo" src={Logo} />
              </a>
              {/* Title */}
              <h2 className="text-white fw-normal m-0">
                Branding tools designed for your business
              </h2>
            </div>
          </div>
          {/* Body */}
          <div className="d-flex flex-column-fluid flex-lg-row-auto justify-content-center justify-content-lg-end p-12 p-lg-20">
            {/* Card */}
            <div className="bg-body d-flex flex-column align-items-stretch flex-center rounded-4 w-md-600px p-20">
              {/* Wrapper */}
              <div className="d-flex flex-center flex-column flex-column-fluid px-lg-10 pb-15 pb-lg-20">
                {/* Form */}
                <form
                  className="form w-100"
                  noValidate={true}
                  id="kt_sign_in_form"
                  data-kt-redirect-url="index.html"
                  action="#"
                >
                  {/* Heading */}
                  <div className="text-center mb-11">
                    {/* Title */}
                    <h1 className="text-gray-900 fw-bolder mb-3">Sign In</h1>
                    {/* Subtitle */}
                    <div className="text-gray-500 fw-semibold fs-6">
                      Your Social Campaigns
                    </div>
                  </div>
                  {/* Login options */}
                  <div className="row g-3 mb-9">
                    {/* Col */}
                    <div className="col-md-6">
                      {/* Google link */}
                      <a
                        href="#"
                        className="btn btn-flex btn-outline btn-text-gray-700 btn-active-color-primary bg-state-light flex-center text-nowrap w-100"
                      >
                        <img
                          alt="Logo"
                          src="assets/media/svg/brand-logos/google-icon.svg"
                          className="h-15px me-3"
                        />
                        Sign in with Google
                      </a>
                    </div>
                    {/* Col */}
                    <div className="col-md-6">
                      {/* Google link */}
                      <a
                        href="#"
                        className="btn btn-flex btn-outline btn-text-gray-700 btn-active-color-primary bg-state-light flex-center text-nowrap w-100"
                      >
                        <img
                          alt="Logo"
                          src="assets/media/svg/brand-logos/apple-black.svg"
                          className="theme-light-show h-15px me-3"
                        />
                        <img
                          alt="Logo"
                          src="assets/media/svg/brand-logos/apple-black-dark.svg"
                          className="theme-dark-show h-15px me-3"
                        />
                        Sign in with Apple
                      </a>
                    </div>
                  </div>
                  {/* Separator */}
                  <div className="separator separator-content my-14">
                    <span className="w-125px text-gray-500 fw-semibold fs-7">
                      Or with email
                    </span>
                  </div>
                  {/* Input group */}
                  <div className="fv-row mb-8">
                    {/* Email */}
                    <input
                      type="text"
                      placeholder="Email"
                      name="email"
                      autoComplete="off"
                      className="form-control bg-transparent"
                    />
                  </div>
                  {/* Input group */}
                  <div className="fv-row mb-3">
                    {/* Password */}
                    <input
                      type="password"
                      placeholder="Password"
                      name="password"
                      autoComplete="off"
                      className="form-control bg-transparent"
                    />
                  </div>
                  {/* Wrapper */}
                  <div className="d-flex flex-stack flex-wrap gap-3 fs-base fw-semibold mb-8">
                    <div></div>
                    {/* Link */}
                    <a
                      href="authentication/layouts/creative/reset-password.html"
                      className="link-primary"
                    >
                      Forgot Password ?
                    </a>
                  </div>
                  {/* Submit button */}
                  <div className="d-grid mb-10">
                    <button
                      type="submit"
                      id="kt_sign_in_submit"
                      className="btn btn-primary"
                    >
                      <span className="indicator-label">Sign In</span>
                      <span className="indicator-progress">
                        Please wait...
                        <span className="spinner-border spinner-border-sm align-middle ms-2"></span>
                      </span>
                    </button>
                  </div>
                  {/* Sign up */}
                  <div className="text-gray-500 text-center fw-semibold fs-6">
                    Not a Member yet?
                    <a
                      href="authentication/layouts/creative/sign-up.html"
                      className="link-primary"
                    >
                      Sign up
                    </a>
                  </div>
                </form>
              </div>
              {/* Footer */}
              <div className="d-flex flex-stack px-lg-10">
                {/* Languages */}
                <div className="me-0">
                  {/* Toggle */}
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
                  {/* Menu */}
                  <div
                    className="menu menu-sub menu-sub-dropdown menu-column menu-rounded menu-gray-800 menu-state-bg-light-primary fw-semibold w-200px py-4 fs-7"
                    data-kt-menu="true"
                    id="kt_auth_lang_menu"
                  >
                    {/* Menu item */}
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
                    {/* Menu item */}
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
                    {/* Menu item */}
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
                    {/* Menu item */}
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
                    {/* Menu item */}
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
                {/* Links */}
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
    </body>
  );
};

export default page;
