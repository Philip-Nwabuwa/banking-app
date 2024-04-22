'use client'

import Logo from '@/assets/logos/main.png'
import Image from 'next/image'
import { useState } from 'react'
import {
  FieldValues,
  SubmitHandler,
  useForm,
  Controller,
  FieldError,
} from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'

import { Check } from 'lucide-react'
import Link from 'next/link'
import RadioButton from '@/components/common/RadioButton'
import SubmitButton from '@/components/common/SubmitBtn'
import Button from '@/components/common/Button'
import { toast } from 'sonner'
import { SignUpSchema } from '@/lib/validation'
import { useRouter } from 'next/navigation'
import { getPasswordStrength } from '@/lib/utils'
import { countries } from '@/types/countries'

const SignupPage = () => {
  const router = useRouter()
  const [currentStep, setCurrentStep] = useState<number>(1)
  const [passwordVisible, setPasswordVisible] = useState(false)
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [accountType, setAccountType] = useState('personal')

  const stepsData = [
    { title: 'Account Type', desc: 'Select your account type' },
    { title: 'Login Credentials', desc: 'Provide your login credentials' },
    { title: 'Personal Info', desc: 'Provide your personal info' },
    { title: 'Bussiness Info', desc: 'Provide your bussiness info' },
    { title: 'Completed', desc: 'Your account is created' },
  ]

  const {
    register,
    handleSubmit,
    formState: { errors },
    watch,
    control,
  } = useForm({
    resolver: zodResolver(SignUpSchema),
  })

  const account = watch('accountType')
  const password = watch('password')

  const passwordStrengthScore = getPasswordStrength(password)

  const togglePasswordVisibility = () => {
    setPasswordVisible((prevState) => !prevState)
  }

  const handlePrevious = () => {
    setCurrentStep((prevStep) => Math.max(prevStep - 1, 1))
  }

  const handleNext = () => {
    if (currentStep === 1) {
      setCurrentStep((prevStep) => prevStep + 1)
    } else if (currentStep === 2) {
      const emailValue = watch('email')
      const isEmailValid = /[\w._%+-]+@[\w.-]+\.[a-zA-Z]{2,}/.test(emailValue)

      const passwordValue = watch('password')
      const passwordStrengthScore = getPasswordStrength(passwordValue)

      if (emailValue === '' && passwordValue === '') {
        toast.error('Email and password is empty.')
        return
      }

      if (!isEmailValid) {
        toast.error('Email format is incorrect.')
        return
      }

      if (passwordStrengthScore < 4) {
        toast.error('Password strength is not sufficient.')
        return
      }
      setCurrentStep(3)
    } else if (currentStep === 3) {
      // Proceed to Step 4
      setCurrentStep(4)
    } else if (currentStep === 4) {
      // Proceed to Step 5
      setCurrentStep(5)
    }
  }

  const minDate = new Date()
  minDate.setFullYear(minDate.getFullYear() - 18)
  const minDateStr = minDate.toISOString().split('T')[0]

  const filteredStepsData =
    account === 'personal'
      ? stepsData.filter((step, index) => index !== 3)
      : stepsData

  const onSubmit: SubmitHandler<FieldValues> = async (data) => {
    setIsSubmitting(true)
    try {
      setIsSubmitting(false)
      toast.success('Account created successfully')
      setTimeout(() => {
        setCurrentStep(5)
      }, 2000)
    } catch (error) {
      setIsSubmitting(false)
      console.error(error)
      toast.error('Failed to create account')
    }
  }

  return (
    <body className="app-blank">
      <div className="d-flex flex-column flex-root">
        <div className="d-flex flex-column flex-lg-row flex-column-fluid stepper stepper-pills stepper-column stepper-multistep">
          <div className="d-flex flex-column flex-lg-row-auto w-lg-350px w-xl-500px">
            <div className="signupBg d-flex flex-column position-lg-fixed top-0 bottom-0 w-lg-350px w-xl-500px scroll-y bgi-size-cover bgi-position-center">
              <div className="d-flex flex-center py-10 py-lg-20 mt-lg-20">
                <Link href="/">
                  <Image
                    alt="Logo"
                    src={Logo}
                    className="h-100 w-100"
                    width={166}
                    height={32}
                  />
                </Link>
              </div>

              <div className="d-flex flex-row-fluid justify-content-center p-10">
                <div className="stepper-nav">
                  {filteredStepsData.map((stepData, index) => (
                    <div
                      key={index + 1}
                      className={`stepper-item ${
                        currentStep === index + 1 ? 'current' : ''
                      }`}
                      data-kt-stepper-element="nav"
                    >
                      <div className="stepper-wrapper">
                        <div className="stepper-icon rounded-3">
                          {currentStep > index + 1 ? (
                            <Check className="text-success" />
                          ) : (
                            <span className="stepper-number">{index + 1}</span>
                          )}
                        </div>

                        <div className="stepper-label">
                          <h3 className="stepper-title fs-2">
                            {stepData.title}
                          </h3>
                          <div className="stepper-desc fw-normal">
                            {stepData.desc}
                          </div>
                        </div>
                      </div>

                      {index < filteredStepsData.length - 1 && (
                        <div className="stepper-line h-40px"></div>
                      )}
                    </div>
                  ))}
                </div>
              </div>
              <div className="d-flex flex-center flex-wrap px-5 py-10">
                <div className="d-flex fw-normal">
                  <Link
                    href="/terms"
                    className="text-success px-5"
                    target="_blank"
                  >
                    Terms
                  </Link>
                  <Link
                    href="/plans"
                    className="text-success px-5"
                    target="_blank"
                  >
                    Plans
                  </Link>
                  <Link
                    href="/contact"
                    className="text-success px-5"
                    target="_blank"
                  >
                    Contact Us
                  </Link>
                </div>
              </div>
            </div>
          </div>

          <div className="d-flex flex-column flex-lg-row-fluid py-10">
            <div className="d-flex flex-center flex-column flex-column-fluid">
              <div className="w-lg-650px w-xl-700px p-10 p-lg-15 mx-auto">
                <form
                  className="my-auto pb-5"
                  onSubmit={handleSubmit(onSubmit)}
                  noValidate
                >
                  <div
                    className={`step-content ${
                      currentStep === 1 ? 'current' : ''
                    }`}
                    data-kt-stepper-element="content"
                  >
                    <div className="w-100">
                      <div className="pb-10 pb-lg-15">
                        <h2 className="fw-bold d-flex align-items-center text-gray-900">
                          Choose Account Type
                          <span
                            className="ms-1"
                            data-bs-toggle="tooltip"
                            title="Billing is issued based on your selected account typ"
                          >
                            <i className="ki-outline ki-information-5 text-gray-500 fs-6"></i>
                          </span>
                        </h2>

                        <div className="text-muted fw-semibold fs-6">
                          If you need more info, please check out{' '}
                          <a href="#" className="link-primary fw-bold">
                            Help Page
                          </a>
                          .
                        </div>
                      </div>

                      <div className="fv-row">
                        <div className="row">
                          <Controller
                            name="accountType"
                            control={control}
                            defaultValue="personal"
                            render={({ field }) => (
                              <>
                                <RadioButton
                                  id="badge"
                                  value="personal"
                                  checked={field.value === 'personal'}
                                  label="Personal Account"
                                  description="If you need more info, please check it out"
                                  onRadioButtonChange={() =>
                                    field.onChange('personal')
                                  }
                                />
                                <RadioButton
                                  id="briefcase"
                                  value="corporate"
                                  checked={field.value === 'corporate'}
                                  label="Corporate Account"
                                  description="Create corporate account to manage users"
                                  onRadioButtonChange={() =>
                                    field.onChange('corporate')
                                  }
                                />
                              </>
                            )}
                          />
                        </div>
                      </div>
                    </div>
                  </div>

                  <div
                    className={`step-content ${
                      currentStep === 2 ? 'current' : ''
                    }`}
                    data-kt-stepper-element="content"
                  >
                    <div className="w-100">
                      <div className="pb-10 pb-lg-15">
                        <h2 className="fw-bold text-gray-900">
                          Login Credentials
                        </h2>

                        <div className="text-muted fw-semibold fs-6">
                          If you need more info, please check out{' '}
                          <Link href="/help" className="link-primary fw-bold">
                            Help Page
                          </Link>
                          .
                        </div>
                      </div>
                      <div className="mb-10 fv-row">
                        <div className="fv-row mb-10">
                          <input
                            className="form-control bg-transparent"
                            type="email"
                            {...register('email')}
                            placeholder="example@email.com"
                          />
                          {errors.email && typeof errors.email === 'object' && (
                            <p className="text-danger">
                              {(errors.email as FieldError).message}
                            </p>
                          )}
                        </div>
                        <div className="fv-row mb-8">
                          <div className="mb-1">
                            <div className="position-relative mb-3">
                              <input
                                className="form-control bg-transparent"
                                type={passwordVisible ? 'text' : 'password'}
                                placeholder="Password"
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
                                      passwordStrengthScore >= index + 1
                                        ? 'bg-success'
                                        : ''
                                    }`}
                                  ></div>
                                ))}
                              </div>
                            )}
                          </div>

                          <div className="text-muted">
                            Use 8 or more characters with a mix of letters,
                            numbers & symbols.
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>

                  <div
                    className={`step-content ${
                      currentStep === 3 ? 'current' : ''
                    }`}
                    data-kt-stepper-element="content"
                  >
                    <div className="w-100">
                      <div className="pb-10 pb-lg-12">
                        <h2 className="fw-bold text-gray-900">
                          Personal Details
                        </h2>

                        <div className="text-muted fw-semibold fs-6">
                          If you need more info, please check out{' '}
                          <Link href="#" className="link-primary fw-bold">
                            Help Page
                          </Link>
                          .
                        </div>
                      </div>

                      <div
                        className="mb-10"
                        style={{
                          display: 'flex',
                          flexDirection: 'row',
                          width: '100%',
                          justifyContent: 'space-between',
                          gap: '10px',
                        }}
                      >
                        <div
                          style={{
                            width: '100%',
                          }}
                        >
                          <label className="form-label required">
                            First Name
                          </label>

                          <input
                            className="form-control bg-transparent w-100"
                            {...register('business_name')}
                          />
                        </div>
                        <div
                          style={{
                            width: '100%',
                          }}
                        >
                          <label className="form-label required">
                            Last Name
                          </label>

                          <input
                            className="form-control bg-transparent"
                            {...register('business_name')}
                          />
                        </div>
                      </div>

                      <div className="fv-row mb-10">
                        <label className="form-label required">Gender</label>

                        <select
                          name="business_type"
                          className="form-select bg-transparent"
                          data-control="select2"
                          data-placeholder="Select..."
                          data-allow-clear="true"
                          data-hide-search="false"
                        >
                          <option></option>
                          <option value="1">Male</option>
                          <option value="1">Female</option>
                          <option value="2">Other</option>
                        </select>
                      </div>

                      <div className="mb-0">
                        <label className="form-label">D.O.B</label>
                        <input
                          className="form-control bg-transparent"
                          placeholder="Pick date rage"
                          type="date"
                          id="kt_daterangepicker_3"
                          min={minDateStr}
                        />
                      </div>

                      <div className="col-lg-8 fv-row mb-10 mt-10">
                        <label className="form-label required">Country</label>

                        <select
                          name="country"
                          aria-label="Select a Country"
                          data-control="select2"
                          data-placeholder="Select a country..."
                          className="form-select bg-transparent"
                        >
                          {countries.map((country, index) => (
                            <option key={index} value={country.value}>
                              {country.label}
                            </option>
                          ))}
                        </select>
                      </div>

                      <div className="fv-row mb-10 mt-10">
                        <label className="form-label required">
                          Phone Number
                        </label>

                        <input
                          className="form-control bg-transparent"
                          type="number"
                        />
                      </div>

                      <div className="fv-row mb-10 mt-10">
                        <label className="d-flex align-items-center form-label">
                          <span className="required">Occupation</span>
                          <span
                            className="lh-1 ms-1"
                            data-bs-toggle="popover"
                            data-bs-trigger="hover"
                            data-bs-html="true"
                            data-bs-content='&lt;div className=&#039;p-4 rounded bg-light&#039;&gt; &lt;div className=&#039;d-flex flex-stack text-muted mb-4&#039;&gt; &lt;i className="ki-outline ki-bank fs-3 me-3"&gt;&lt;/i&gt; &lt;div className=&#039;fw-bold&#039;&gt;INCBANK **** 1245 STATEMENT&lt;/div&gt; &lt;/div&gt; &lt;div className=&#039;d-flex flex-stack fw-semibold text-gray-600&#039;&gt; &lt;div&gt;Amount&lt;/div&gt; &lt;div&gt;Transaction&lt;/div&gt; &lt;/div&gt; &lt;div className=&#039;separator separator-dashed my-2&#039;&gt;&lt;/div&gt; &lt;div className=&#039;d-flex flex-stack text-gray-900 fw-bold mb-2&#039;&gt; &lt;div&gt;USD345.00&lt;/div&gt; &lt;div&gt;KEENTHEMES*&lt;/div&gt; &lt;/div&gt; &lt;div className=&#039;d-flex flex-stack text-muted mb-2&#039;&gt; &lt;div&gt;USD75.00&lt;/div&gt; &lt;div&gt;Hosting fee&lt;/div&gt; &lt;/div&gt; &lt;div className=&#039;d-flex flex-stack text-muted&#039;&gt; &lt;div&gt;USD3,950.00&lt;/div&gt; &lt;div&gt;Payrol&lt;/div&gt; &lt;/div&gt; &lt;/div&gt;'
                          >
                            <i className="ki-outline ki-information-5 text-gray-500 fs-6"></i>
                          </span>
                        </label>

                        <input
                          className="form-control bg-transparent"
                          {...register('business_descriptor')}
                        />

                        {/* <div className="form-text">
                          Customers will see this shortened version of your
                          statement descriptor
                        </div> */}
                      </div>
                    </div>
                  </div>
                  <div
                    className={`step-content ${
                      currentStep === 4 ? 'current' : ''
                    }`}
                    data-kt-stepper-element="content"
                  >
                    <div className="w-100">
                      <div className="pb-10 pb-lg-12">
                        <h2 className="fw-bold text-gray-900">
                          Business Details
                        </h2>

                        <div className="text-muted fw-semibold fs-6">
                          If you need more info, please check out
                          <a href="#" className="link-primary fw-bold">
                            Help Page
                          </a>
                          .
                        </div>
                      </div>

                      <div className="fv-row mb-10">
                        <label className="form-label required">
                          Business Name
                        </label>

                        <input
                          className="form-control bg-transparent"
                          {...register('business_name')}
                        />
                      </div>

                      <div className="fv-row mb-10">
                        <label className="d-flex align-items-center form-label">
                          <span className="required">Shortened Descriptor</span>
                          <span
                            className="lh-1 ms-1"
                            data-bs-toggle="popover"
                            data-bs-trigger="hover"
                            data-bs-html="true"
                            data-bs-content='&lt;div className=&#039;p-4 rounded bg-light&#039;&gt; &lt;div className=&#039;d-flex flex-stack text-muted mb-4&#039;&gt; &lt;i className="ki-outline ki-bank fs-3 me-3"&gt;&lt;/i&gt; &lt;div className=&#039;fw-bold&#039;&gt;INCBANK **** 1245 STATEMENT&lt;/div&gt; &lt;/div&gt; &lt;div className=&#039;d-flex flex-stack fw-semibold text-gray-600&#039;&gt; &lt;div&gt;Amount&lt;/div&gt; &lt;div&gt;Transaction&lt;/div&gt; &lt;/div&gt; &lt;div className=&#039;separator separator-dashed my-2&#039;&gt;&lt;/div&gt; &lt;div className=&#039;d-flex flex-stack text-gray-900 fw-bold mb-2&#039;&gt; &lt;div&gt;USD345.00&lt;/div&gt; &lt;div&gt;KEENTHEMES*&lt;/div&gt; &lt;/div&gt; &lt;div className=&#039;d-flex flex-stack text-muted mb-2&#039;&gt; &lt;div&gt;USD75.00&lt;/div&gt; &lt;div&gt;Hosting fee&lt;/div&gt; &lt;/div&gt; &lt;div className=&#039;d-flex flex-stack text-muted&#039;&gt; &lt;div&gt;USD3,950.00&lt;/div&gt; &lt;div&gt;Payrol&lt;/div&gt; &lt;/div&gt; &lt;/div&gt;'
                          >
                            <i className="ki-outline ki-information-5 text-gray-500 fs-6"></i>
                          </span>
                        </label>

                        <input
                          className="form-control bg-transparent"
                          {...register('business_descriptor')}
                        />

                        <div className="form-text">
                          Customers will see this shortened version of your
                          statement descriptor
                        </div>
                      </div>

                      <div className="fv-row mb-10">
                        <label className="form-label required">
                          Corporation Type
                        </label>

                        <select
                          className="form-select bg-transparent"
                          data-control="select2"
                          data-placeholder="Select..."
                          data-allow-clear="true"
                          data-hide-search="true"
                          {...register('business_type')}
                        >
                          <option></option>
                          <option value="1">S Corporation</option>
                          <option value="1">C Corporation</option>
                          <option value="2">Sole Proprietorship</option>
                          <option value="3">Non-profit</option>
                          <option value="4">Limited Liability</option>
                          <option value="5">General Partnership</option>
                        </select>
                      </div>
                      <div className="fv-row mb-10">
                        <label className="form-label">
                          Business Description
                        </label>
                        <textarea
                          className="form-control bg-transparent"
                          {...register('business_description')}
                        ></textarea>
                      </div>

                      <div className="fv-row mb-0">
                        <label className="fs-6 fw-semibold form-label required">
                          Business Email
                        </label>

                        <input
                          className="form-control bg-transparent"
                          {...register('business_email')}
                        />
                      </div>
                    </div>
                  </div>

                  <div
                    className={`step-content ${
                      currentStep === 5 ? 'current' : ''
                    }`}
                    data-kt-stepper-element="content"
                  >
                    <div className="w-100">
                      <div className="pb-8 pb-lg-10">
                        <h2 className="fw-bold text-gray-900">
                          Your Are Done!
                        </h2>

                        <div className="text-muted fw-semibold fs-6">
                          If you need more info, please
                          <a href="#" className="link-primary fw-bold">
                            Sign In
                          </a>
                          .
                        </div>
                      </div>

                      <div className="mb-0">
                        <div className="fs-6 text-gray-600 mb-5">
                          Writing headlines for blog posts is as much an art as
                          it is a science and probably warrants its own post,
                          but for all advise is with what works for your great &
                          amazing audience.
                        </div>

                        <div className="notice d-flex bg-light-warning rounded border-warning border border-dashed p-6">
                          <i className="ki-outline ki-information fs-2tx text-warning me-4"></i>

                          <div className="d-flex flex-stack flex-grow-1">
                            <div className="fw-semibold">
                              <h4 className="text-gray-900 fw-bold">
                                We need your attention!
                              </h4>
                              <div className="fs-6 text-gray-700">
                                To start using great tools, please,
                                <a
                                  href="utilities/wizards/vertical.html"
                                  className="fw-bold"
                                >
                                  Create Team Platform
                                </a>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>

                  <div className="d-flex flex-stack pt-15">
                    <div className="mr-2">
                      {currentStep !== 1 && currentStep !== 5 && (
                        <Button
                          onClick={handlePrevious}
                          text="Previous"
                          iconClass="ki-arrow-left"
                          position="me-1"
                        />
                      )}
                    </div>
                    <div>
                      {((account === 'personal' && currentStep < 3) ||
                        (account === 'corporate' && currentStep < 4)) && (
                        <Button
                          disabled={isSubmitting}
                          onClick={handleNext}
                          text="Continue"
                          iconClass="ki-arrow-right"
                          position="ms-1"
                        />
                      )}

                      {((account === 'personal' && currentStep === 3) ||
                        (account === 'corporate' && currentStep === 4)) && (
                        <SubmitButton
                          onClick={handleSubmit(onSubmit)}
                          isSubmitting={isSubmitting}
                          disabled={isSubmitting}
                          text="Sign In"
                        />
                      )}

                      {currentStep === 5 && (
                        <Button
                          onClick={() => router.push('/dashboard/welcome')}
                          text="Proceed to Dashboard"
                          iconClass="ki-arrow-right"
                          position="ms-1"
                        />
                      )}
                    </div>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </body>
  )
}

export default SignupPage
