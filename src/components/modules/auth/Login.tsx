'use client'

import { useState } from 'react'
import Link from 'next/link'
import { useRouter } from 'next/navigation'
import { SubmitHandler, useForm } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'
import { toast } from 'sonner'

import { LoginSchema, LoginType } from '@/lib/validation'
import SubmitButton from '@/components/common/SubmitBtn'

const LoginModule = () => {
  const router = useRouter()
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<LoginType>({
    resolver: zodResolver(LoginSchema),
  })
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [passwordVisible, setPasswordVisible] = useState(false)

  const togglePasswordVisibility = () => {
    setPasswordVisible(!passwordVisible)
  }

  const onSubmit: SubmitHandler<LoginType> = async (formData) => {
    setIsSubmitting(true)
    console.log(formData.email, formData.password)

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
          {...register('email')}
        />
        {errors.email && <p className="text-danger">{errors.email.message}</p>}
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
  )
}

export default LoginModule
