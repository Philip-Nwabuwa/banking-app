import Image from 'next/image'
import Link from 'next/link'

import Logo from '@/assets/logos/main.png'
import LoginModule from '@/components/modules/auth/Login'

const LoginPage = () => {
  return (
    <div className="body app-blank signupBg !tw-h-screen">
      <div className="d-flex flex-column flex-root">
        <div className="d-flex flex-column flex-column-fluid flex-lg-row">
          <div className="d-flex flex-center w-lg-50 pt-15 pt-lg-0 px-10">
            <div className="d-flex flex-center flex-lg-start flex-column">
              <Link href="/" className="mb-7">
                <Image
                  alt="Logo"
                  src={Logo}
                  className="h-100 w-100"
                  priority
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
                <LoginModule />
              </div>

              <div className="d-flex flex-stack px-lg-10">
                <div></div>
                <div className="d-flex fw-semibold text-primary fs-base gap-5">
                  <Link href="#" target="_blank">
                    Terms
                  </Link>
                  <Link href="#" target="_blank">
                    Plans
                  </Link>
                  <Link href="#" target="_blank">
                    Contact Us
                  </Link>
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

export default LoginPage
