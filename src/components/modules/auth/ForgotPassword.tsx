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
import { forgotPasswordSchema, forgotPasswordType } from '@/lib/validation'
import { zodResolver } from '@hookform/resolvers/zod'
import { Controller, SubmitHandler, useForm } from 'react-hook-form'
import { usePasswordReset } from '@/services/auth'
import axios from 'axios'
import Button from '@/components/common/Button'

const ForgotPasswordMoules = () => {
  const router = useRouter()
  const { mutateAsync, isLoading } = usePasswordReset()
  const [currentStep, setCurrentStep] = useState<number>(1)
  const [passwordVisible, setPasswordVisible] = useState(false)
  const [confirmPassword, setConfirmPassword] = useState('')
  const [isChecked, setIsChecked] = useState(false)
  const [reference, setReference] = useState('')

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
  } = useForm<forgotPasswordType>({
    resolver: zodResolver(forgotPasswordSchema),
  })

  const handleResendOTP = (e: any) => {
    e.preventDefault()
    try {
      toast.success('OTP resent.')
    } catch (error) {
      toast.error('Failed to resend OTP.')
    }
  }

  const handlePrevious = (e: any) => {
    e.preventDefault()
    setCurrentStep((prevStep) => Math.max(prevStep - 1, 1))
  }

  const emailValue = watch('email_address')
  const password = watch('password')
  const otp = watch('auth_code')

  const passwordStrengthScore = getPasswordStrength(password || '')
  const isEmailValid = /[\w._%+-]+@[\w.-]+\.[a-zA-Z]{2,}/.test(emailValue)
  const isOtpValid = otp ? otp.length === 6 : false
  const isConfirmPasswordValid = confirmPassword && confirmPassword === password

  const handleChangePassword: SubmitHandler<forgotPasswordType> = async (
    data
  ) => {
    console.log(data)

    if (currentStep === 1) {
      try {
        const response = await mutateAsync(data)
        console.log(response)
        toast.success(response.data.message)
        setReference(response.data.data.referece)
        setTimeout(() => {
          setCurrentStep((prevStep) => prevStep + 1)
        }, 2000)
      } catch (error) {
        if (axios.isAxiosError(error)) {
          const serverError = error.response?.data
          if (serverError && serverError.details) {
            toast.error(serverError.details)
          } else {
            toast.error(serverError.message)
          }
        } else {
          toast.error('An error occurred')
        }
      }
    } else {
      try {
        const response = await mutateAsync({
          email_address: data.email_address,
          auth_code: data.auth_code,
          password: data.password,
          reference: reference,
        })
        console.log(response)
        toast.success(response.data.message)
        setTimeout(() => {
          router.replace('/login')
        }, 2000)
      } catch (error) {
        if (axios.isAxiosError(error)) {
          const serverError = error.response?.data
          if (serverError && serverError.details) {
            toast.error(serverError.details)
          } else {
            if (serverError.message === 'Invalid auth code') {
              setTimeout(() => {
                setCurrentStep((prevStep) => prevStep - 1)
              }, 1000)
            }
            toast.error(serverError.message)
          }
        } else {
          toast.error('An error occurred')
        }
      }
    }
  }
  return (
    <>
      <form
        onSubmit={handleSubmit(handleChangePassword)}
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
            {...register('email_address')}
            placeholder="Email"
            className="form-control bg-transparent"
          />
        </div>
        <div className="d-flex flex-wrap justify-content-center gap-10 pb-lg-0">
          <Link href="/login" className="btn btn-light">
            Back
          </Link>

          <SubmitButton
            disabled={!isEmailValid || isLoading}
            isSubmitting={isLoading}
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
              name="auth_code"
              control={control}
              render={({ field }) => (
                <OtpInput
                  inputStyle="inputStyleOTP"
                  value={field.value}
                  onChange={(auth_code) => {
                    field.onChange(auth_code)
                  }}
                  inputType="number"
                  numInputs={6}
                  renderInput={(props) => <input {...props} />}
                />
              )}
            />
          </div>
        </div>
        <div className="d-flex flex-wrap justify-content-center gap-10 pb-lg-0">
          <button onClick={handlePrevious} className="btn btn-light">
            Back
          </button>
          <Button
            disabled={!isOtpValid}
            onClick={() => {
              setCurrentStep(3)
            }}
            className="btn btn-primary"
            text="Next"
          />
        </div>
        <div className="text-center fw-semibold fs-5 tw-mt-10">
          <span className="text-muted me-1">Didn’t get the code?</span>
          <button onClick={handleResendOTP} className="link-primary fs-5">
            Resend
          </button>
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

        <SubmitButton
          disabled={
            passwordStrengthScore < 4 || !isConfirmPasswordValid || !isChecked
          }
          className="btn btn-primary d-grid mb-10"
          text={'Change Password'}
        />
      </form>
    </>
  )
}

export default ForgotPasswordMoules
