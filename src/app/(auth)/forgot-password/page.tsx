import Link from 'next/link'
import Image from 'next/image'
import Logo from '@/assets/logos/main.png'
import SubmitButton from '@/components/common/SubmitBtn'

const ForgotPasswordPage = () => {
  return (
    <div className="app-blank signupBg h-100">
      <div
        className="d-flex flex-column flex-root tw-h-screen"
        id="kt_app_root"
      >
        <div className="d-flex flex-column flex-column-fluid flex-lg-row">
          <div className="d-flex flex-center w-lg-50 pt-15 pt-lg-0 px-10">
            <div className="d-flex flex-center flex-lg-start flex-column">
              <Link href="/" className="mb-7">
                <Image
                  alt="Logo"
                  src={Logo}
                  className="h-100 w-100 lg:tw-ml-[-15px]"
                  width={226}
                  height={42}
                />
              </Link>
              <h2 className="text-white fw-normal m-0 text-center">
                A redefined payment service for your business
              </h2>
            </div>
          </div>
          <div className="d-flex flex-column-fluid flex-lg-row-auto justify-content-center justify-content-lg-end p-12 p-lg-20">
            <div className="bg-body d-flex flex-column align-items-stretch flex-center rounded-4 w-md-500px p-10">
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
                      Forgot Password?
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
                  <div className="d-flex flex-wrap justify-content-center gap-10 pb-lg-0">
                    <SubmitButton text="Submit" />

                    <Link href="/login" className="btn btn-light">
                      Cancel
                    </Link>
                  </div>
                </form>
              </div>

              <div className="d-flex flex-stack px-lg-10">
                <div></div>

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
                <div></div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default ForgotPasswordPage
