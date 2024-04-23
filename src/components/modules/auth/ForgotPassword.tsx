'use client'

import SubmitButton from '@/components/common/SubmitBtn'
import Link from 'next/link'
import { useState } from 'react'
import { toast } from 'sonner'
import OtpInput from 'react-otp-input'
import Image from 'next/image'
import { useRouter } from 'next/navigation'

import PhoneImg from '@/assets/images/smartphone-2.svg'
import { getPasswordStrength } from '@/lib/utils'
import { forgotPasswordSchema } from '@/lib/validation'
import { zodResolver } from '@hookform/resolvers/zod'
import {
  Controller,
  FieldValues,
  SubmitHandler,
  useForm,
} from 'react-hook-form'

const ForgotPasswordMoules = () => {
  const router = useRouter()
  const [currentStep, setCurrentStep] = useState<number>(1)
  const [passwordVisible, setPasswordVisible] = useState(false)
  const [confirmPassword, setConfirmPassword] = useState('')
  const [isChecked, setIsChecked] = useState(false)

  const handleCheckboxChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setIsChecked(e.target.checked)
  }

  const togglePasswordVisibility = () => {
    setPasswordVisible((prevState) => !prevState)
  }

  const {
    register,
    handleSubmit,
    formState: { errors },
    watch,
    control,
  } = useForm({
    resolver: zodResolver(forgotPasswordSchema),
  })

  console.log(errors);
  

  const handleResendOTP = (e: any) => {
    e.preventDefault()
    try {
      toast.success('OTP resent.')
    } catch (error) {
      toast.error('Failed to resend OTP.')
    }
  }

  const handlePrevious = () => {
    setCurrentStep((prevStep) => Math.max(prevStep - 1, 1))
  }

  const emailValue = watch('email')
  const password = watch('password')
  const otp = watch('otp');

  const passwordStrengthScore = getPasswordStrength(password)
  const isEmailValid = /[\w._%+-]+@[\w.-]+\.[a-zA-Z]{2,}/.test(emailValue)
  const isOtpValid = otp ? otp.length === 6 : false
  const isConfirmPasswordValid = confirmPassword && confirmPassword === password

  const handleSendOTP = (e: any) => {
    e.preventDefault()
    try {
      toast.success(`OTP sent to ${emailValue}`)
      setTimeout(() => {
        setCurrentStep(2)
      }, 1000)
    } catch (error) {
      toast.error('Failed to send OTP.')
    }
  }

  const verifyOTP = (e: any) => {
    e.preventDefault()
    try {
      toast.success('OTP verified successfully.')
      setTimeout(() => {
        setCurrentStep(3)
      }, 1000)
    } catch (error) {
      toast.error('Failed to verify OTP.')
    }
  }

  const handleChangePassword: SubmitHandler<FieldValues> = async (data) => {
    console.log(data)
    try {
      toast.success('Password changed successfully.')
      setTimeout(() => {
        router.replace('/login')
      }, 1000)
    } catch (error) {
      toast.error('Failed to change password.')
      console.error('Error:', error)
    }
  }
  return (
    <>
      <form
        className={`${currentStep === 1 ? 'tw-flex tw-flex-col form w-100' : 'tw-hidden'}`}
        noValidate
      >
        <div className="text-center mb-10">
          <h1 className="text-gray-900 fw-bolder mb-3">Forgot Password?</h1>
          <div className="text-gray-500 fw-semibold fs-6">
            Enter your email to reset your password.
          </div>
        </div>

        <div className="fv-row mb-8">
          <input
            type="email"
            {...register('email')}
            placeholder="Email"
            className="form-control bg-transparent"
          />
        </div>
        <div className="d-flex flex-wrap justify-content-center gap-10 pb-lg-0">
          <Link href="/login" className="btn btn-light">
            Back
          </Link>

          <SubmitButton
            disabled={!isEmailValid}
            onClick={handleSendOTP}
            text="Request OTP"
          />
        </div>
      </form>
      <form
        className={`${currentStep === 2 ? 'tw-flex tw-flex-col form w-100' : 'tw-hidden'}`}
        noValidate
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
          <div className="fw-bold text-gray-900 fs-3">{emailValue}</div>
        </div>
        <div className="mb-10">
          <div className="tw-flex tw-items-center tw-justify-center">
            <Controller
              name="otp"
              control={control}
              render={({ field }) => (
                <OtpInput
                  inputStyle="inputStyleOTP"
                  value={field.value}
                  onChange={(otp) => {
                    field.onChange(otp)
                  }}
                  inputType="password"
                  numInputs={6}
                  renderInput={(props) => (
                    <input {...props} />
                  )}
                />
              )}
            />
          </div>
        </div>
        <div className="d-flex flex-wrap justify-content-center gap-10 pb-lg-0">
          <button onClick={handlePrevious} className="btn btn-light">
            Back
          </button>
          <SubmitButton
            disabled={!isOtpValid}
            onClick={verifyOTP}
            text="Verify OTP"
          />
        </div>
        <div className="text-center fw-semibold fs-5 tw-mt-10">
          <span className="text-muted me-1">Didn’t get the code?</span>
          <button onClick={handleResendOTP} className="link-primary fs-5">
            Resend
          </button>{' '}
          <span className="text-muted me-1">or</span>
          <a href="#" className="link-primary fs-5">
            Call Us
          </a>
        </div>
      </form>
      <form
        onSubmit={handleSubmit(handleChangePassword)}
        className={`${currentStep === 3 ? 'tw-flex tw-flex-col form w-100' : 'tw-hidden'}`}
        noValidate
      >
        <div className="text-center mb-10">
          <h1 className="text-gray-900 fw-bolder mb-3">Setup New Password</h1>
          <div className="text-gray-500 fw-semibold fs-6">
            Have you already reset the password?{' '}
            <Link href="/login" className="link-primary fw-bold">
              Login
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
            onChange={(e) => setConfirmPassword(e.target.value)}
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
              onChange={handleCheckboxChange}
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

        <button
          type="submit"
          disabled={
            passwordStrengthScore < 4 || !isConfirmPasswordValid || !isChecked
          }
          className="btn btn-primary d-grid mb-10"
        >
          Change Password
        </button>
      </form>
    </>
  )
}

export default ForgotPasswordMoules
