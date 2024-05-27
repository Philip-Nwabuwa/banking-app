'use client'

import { useState } from 'react'
import Link from 'next/link'
import { SubmitHandler, useForm } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'
import { toast } from 'sonner'

import SubmitButton from '@/components/common/SubmitBtn'
import axios from 'axios'
import { useLogin } from '@/services/auth'
import { triggerAuthRedirect } from '@/hooks/useAuthRedirect'
import {
  setAccountKey,
  setProfileName,
  setReferenceKey,
  setSessionId,
  setUserKey,
} from '@/store/cookie'
import { useRouter } from 'next/navigation'
import { LoginSchema, LoginType } from '@/lib/Validations/auth'
import useUserStore from '@/store/profile'

const LoginModule = () => {
  const { mutateAsync, isLoading } = useLogin()
  const {
    setUserAccount,
    setUserConfig,
    setUserProfile,
    setUserKyc,
    setUserSetup,
  } = useUserStore()

  const {
    register,
    handleSubmit,
    formState: { errors },
    watch,
  } = useForm<LoginType>({
    resolver: zodResolver(LoginSchema),
  })

  const router = useRouter()
  const [passwordVisible, setPasswordVisible] = useState(false)

  const togglePasswordVisibility = () => {
    setPasswordVisible(!passwordVisible)
  }

  const password = watch('password')
  const isPasswordValid = password ? password.length >= 8 : false

  const onSubmit: SubmitHandler<LoginType> = async (formData) => {
    try {
      const response = await mutateAsync(formData)
      console.log(response)
      const accountType = response.data.data.account.type
      const profileName = response.data.data.profile.first_name
      if (profileName === null) {
        setProfileName('false')
        router.push(`/signup?setCurrentStep=3&type=${accountType}`)
        toast.success('Please complete your profile information.')
      } else {
        setProfileName('true')
        toast.success(response.data.message)
        setTimeout(() => {
          triggerAuthRedirect()
        }, 2000)
      }
      setAccountKey(response.data.data.account_key)
      setUserKey(response.data.data.user_key)
      setSessionId(response.data.data.session.id)
      setReferenceKey(response.data.data.wallet.reference)
      setUserAccount(response.data.data.account)
      setUserConfig(response.data.data.config)
      setUserProfile(response.data.data.profile)
      setUserKyc(response.data.data.kyc)
      setUserSetup(response.data.data.setup)
    } catch (error) {
      console.log(error)
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
  }
  return (
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
          className={`form-control bg-transparent`}
          {...register('email_address')}
        />
        {errors.email_address && (
          <p className="text-danger">{errors.email_address.message}</p>
        )}
      </div>
      <div className="fv-row mb-3">
        <div className="position-relative">
          <input
            type={passwordVisible ? 'text' : 'password'}
            placeholder="Password"
            className={`form-control bg-transparent`}
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
        {errors.password && (
          <p className="text-danger">{errors.password.message}</p>
        )}
      </div>

      <div className="d-flex flex-stack flex-wrap gap-3 fs-base fw-semibold mb-8">
        <div></div>
        <Link href="/forgot-password" replace className="link-primary">
          Forgot Password ?
        </Link>
      </div>

      <div className="d-grid mb-10">
        <SubmitButton
          isSubmitting={isLoading}
          disabled={
            isLoading || !isPasswordValid || !!errors.email_address?.message
          }
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
  )
}

export default LoginModule
