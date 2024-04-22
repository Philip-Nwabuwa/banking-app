'use client'

import SubmitButton from '@/components/common/SubmitBtn'
import Link from 'next/link'
import { useState } from 'react'
import { toast } from 'sonner'
import OtpInput from 'react-otp-input'

import PhoneImg from '@/assets/images/smartphone-2.svg'
import Image from 'next/image'
import { useRouter } from 'next/navigation'
import { getPasswordStrength } from '@/lib/utils'

const ForgotPasswordMoules = () => {
  const router = useRouter()
  const [currentStep, setCurrentStep] = useState<number>(1)
  const [otpValue, setOtpValue] = useState<number | null>(null)
  const [passwordVisible, setPasswordVisible] = useState(false)
  const [password, setPassword] = useState('')

  const passwordStrengthScore = getPasswordStrength(password)

  const togglePasswordVisibility = () => {
    setPasswordVisible((prevState) => !prevState)
  }

  const handleOtpChange = (otp: string) => {
    const parsedOtp = parseInt(otp, 10)
    if (!isNaN(parsedOtp)) {
      setOtpValue(parsedOtp)
    } else {
      setOtpValue(null)
    }
  }

  const handleSubmit = (e: any) => {
    e.preventDefault()
    try {
      toast.success('OTP sent to johndoe@email.com')
      setTimeout(() => {
        setCurrentStep(2)
      }, 1000)
    } catch (error) {}
  }

  const verifyOTP = (e: any) => {
    e.preventDefault()
    if (otpValue === null) {
      toast.error('Please enter a valid OTP')
      return
    }
    try {
      toast.success('OTP verified successfully.')
      setTimeout(() => {
        setCurrentStep(3)
      }, 1000)
    } catch (error) {}
  }

  const handleChangePassword = (e:any) => {
    e.preventDefault()
    try {
      toast.success('Password changed successfully.')
      setTimeout(() => {
        router.replace('/login')
      }, 1000)
    } catch (error) {}
  }
  return (
    <form className="form w-100" noValidate>
      <div
        className={`${currentStep === 1 ? 'tw-flex tw-flex-col' : 'tw-hidden'}`}
      >
        <div className="text-center mb-10">
          <h1 className="text-gray-900 fw-bolder mb-3">Forgot Password?</h1>
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
          <SubmitButton onClick={handleSubmit} text="Submit" />

          <Link href="/login" className="btn btn-light">
            Cancel
          </Link>
        </div>
      </div>

      <div
        className={`${currentStep === 2 ? 'tw-flex tw-flex-col' : 'tw-hidden'}`}
      >
        <div className="tw-flex tw-justify-center tw-items-center mb-10">
          <Image
            alt="Logo"
            className="mh-125px"
            src={PhoneImg}
            width={125}
            height={125}
          />
        </div>
        <div className="text-center mb-10">
          <h1 className="text-gray-900 mb-3">Two-Factor Verification</h1>
          <div className="text-muted fw-semibold fs-5 mb-5">
            Enter the verification code we sent to
          </div>
          <div className="fw-bold text-gray-900 fs-3">johndoe@email.com</div>
        </div>
        <div className="mb-10">
          <div className="tw-flex tw-items-center tw-justify-center">
            <OtpInput
              inputStyle="inputStyle"
              value={otpValue !== null ? otpValue.toString() : ''}
              onChange={(otp) => {
                handleOtpChange(otp)
              }}
              inputType="password"
              numInputs={4}
              renderInput={(props) => <input {...props} />}
            />
          </div>
        </div>
        <div className="d-flex flex-center">
          <button
            type="button"
            onClick={verifyOTP}
            className="btn btn-lg btn-primary fw-bold"
          >
            <span className="indicator-label">Submit</span>
          </button>
        </div>
        <div className="text-center fw-semibold fs-5 tw-mt-10">
          <span className="text-muted me-1">Didn’t get the code ?</span>
          <a href="#" className="link-primary fs-5 me-1">
            Resend
          </a>
          <span className="text-muted me-1">or</span>
          <a href="#" className="link-primary fs-5">
            Call Us
          </a>
        </div>
      </div>

      <div
        className={`${currentStep === 3 ? 'tw-flex tw-flex-col' : 'tw-hidden'}`}
      >
        <div className="text-center mb-10">
          <h1 className="text-gray-900 fw-bolder mb-3">Setup New Password</h1>
          <div className="text-gray-500 fw-semibold fs-6">
            Have you already reset the password ?
            <Link
              href="/login"
              className="link-primary fw-bold"
            >
              Login in
            </Link>
          </div>
        </div>

        <div className="fv-row mb-8">
          <div className="mb-1">
            <div className="position-relative mb-3">
              <input
                className="form-control bg-transparent"
                type={passwordVisible ? 'text' : 'password'}
                placeholder="Password"
                autoComplete="off"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
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
            {password && (
              <div
                className="d-flex align-items-center mb-3"
                data-kt-password-meter-control="highlight"
              >
                {[...Array(4)].map((_, index) => (
                  <div
                    key={index}
                    className={`flex-grow-1 bg-secondary bg-active-success rounded h-5px me-2 ${
                      passwordStrengthScore >= index + 1 ? 'bg-success' : ''
                    }`}
                  ></div>
                ))}
              </div>
            )}
          </div>

          <div className="text-muted">
            Use 8 or more characters with a mix of letters, numbers & symbols.
          </div>
        </div>

        <div className="fv-row mb-8">
          <input
            type="password"
            placeholder="Repeat Password"
            name="confirm-password"
            autoComplete="off"
            className="form-control bg-transparent"
          />
        </div>

        <div className="fv-row mb-8">
          <label className="form-check form-check-inline">
            <input
              className="form-check-input"
              type="checkbox"
              name="toc"
              value="1"
            />
            <span className="form-check-label fw-semibold text-gray-700 fs-6 ms-1">
              I Agree &{' '}
              <a href="#" className="ms-1 link-primary">
                Terms and conditions
              </a>
              .
            </span>
          </label>
        </div>

        <div className="d-grid mb-10">
          <SubmitButton
            className="btn btn-primary"
            onClick={handleChangePassword}
            text='Change Password'
          />
        </div>
      </div>
    </form>
  )
}

export default ForgotPasswordMoules
