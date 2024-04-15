'use client'

import Image from 'next/image'
import { useState } from 'react'
import Link from 'next/link'
import { toast } from 'sonner'
import { zodResolver } from '@hookform/resolvers/zod'
import { useForm, SubmitHandler, FieldValues } from 'react-hook-form'

import Logo from '@/assets/logos/main.png'
import { LoginSchema } from '@/lib/validation'
import { useRouter } from 'next/navigation'
import SubmitButton from '@/components/common/SubmitBtn'

const LoginPage = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: zodResolver(LoginSchema),
  })
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [passwordVisible, setPasswordVisible] = useState(false)

  const togglePasswordVisibility = () => {
    setPasswordVisible(!passwordVisible)
  }
  const router = useRouter()

  const onSubmit: SubmitHandler<FieldValues> = async (data) => {
    setIsSubmitting(true)
    try {
      setIsSubmitting(false)
      toast.success('Login successful!')
      setTimeout(() => {
        router.replace('/dashboard')
      }, 2000)
    } catch (error) {
      setIsSubmitting(false)
      toast.error('An error occurred. Please try again later.')
    }
  }
  return (
    <body className="app-blank signupBg h-100">
      <div className="d-flex flex-column flex-root">
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
              <h2 className="text-white fw-normal m-0">
                A redefined payment service for your business
              </h2>
            </div>
          </div>

          <div className="d-flex flex-column-fluid flex-lg-row-auto justify-content-center justify-content-lg-end p-12 p-lg-20">
            <div className="bg-body d-flex flex-column align-items-stretch flex-center rounded-4 w-md-600px p-20">
              <div className="d-flex flex-center flex-column flex-column-fluid px-lg-10 pb-15 pb-lg-20">
                <form className="form w-100" onSubmit={handleSubmit(onSubmit)}>
                  <div className="text-center mb-11">
                    <h1 className="text-gray-900 fw-bolder mb-3">Log In</h1>
                    <div className="text-gray-500 fw-semibold fs-6">
                      Welcome back, please login to your account.
                    </div>
                  </div>

                  <div className="fv-row mb-8">
                    <input
                      type="email"
                      placeholder="Email"
                      className={`form-control bg-transparent ${
                        errors.password ? 'is-invalid' : ''
                      }`}
                      {...register('email')}
                    />
                  </div>
                  <div className="fv-row mb-3 position-relative">
                    <input
                      type={passwordVisible ? 'text' : 'password'}
                      placeholder="Password"
                      className={`form-control bg-transparent ${
                        errors.password ? 'is-invalid' : ''
                      }`}
                      {...register('password')}
                    />
                    <span
                      className="btn btn-sm btn-icon position-absolute translate-middle top-50 end-0 me-n2"
                      data-kt-password-meter-control="visibility"
                      onClick={togglePasswordVisibility}
                    >
                      {passwordVisible ? (
                        <i className="ki-outline ki-eye fs-2"></i>
                      ) : (
                        <i className="ki-outline ki-eye-slash fs-2"></i>
                      )}
                    </span>
                  </div>

                  <div className="d-flex flex-stack flex-wrap gap-3 fs-base fw-semibold mb-8">
                    <div></div>
                    <Link
                      href="/forgot-password"
                      replace
                      className="link-primary"
                    >
                      Forgot Password ?
                    </Link>
                  </div>

                  <div className="d-grid mb-10">
                    <SubmitButton
                      isSubmitting={isSubmitting}
                      disabled={isSubmitting}
                      text="Sign In"
                    />
                  </div>
                  <div className="text-gray-500 text-center fw-semibold fs-6">
                    Not a Member yet?{' '}
                    <Link href="/signup" replace className="link-primary">
                      Sign up
                    </Link>
                  </div>
                </form>
              </div>

              <div className="d-flex flex-stack px-lg-10">
                <div></div>
                <div className="d-flex fw-semibold text-primary fs-base gap-5">
                  <a href="#" target="_blank">
                    Terms
                  </a>
                  <a href="#" target="_blank">
                    Plans
                  </a>
                  <a href="#" target="_blank">
                    Contact Us
                  </a>
                </div>
                <div></div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </body>
  )
}

export default LoginPage
