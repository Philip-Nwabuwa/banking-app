'use client'

import Logo from '@/assets/logos/main.png'
import Image from 'next/image'
import { useEffect, useState } from 'react'
import { useForm, Controller, FieldError, SubmitHandler } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'

import { Check, ChevronDownIcon, Router } from 'lucide-react'
import Link from 'next/link'
import RadioButton from '@/components/common/RadioButton'
import SubmitButton from '@/components/common/SubmitBtn'
import Button from '@/components/common/Button'
import { toast } from 'sonner'
import { getPasswordStrength } from '@/lib/utils'
import { countries } from '@/types/countries'
import {
  AccountType,
  AccountTypeSchema,
  ProfileType,
  ProfileUpdateSchema,
} from '@/lib/validation'
import { useProfileUpdate, useSignUpAccountType } from '@/services/auth'
import axios from 'axios'
import { useRouter } from 'next/navigation'
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from '@/components/ui/popover'
import {
  Command,
  CommandEmpty,
  CommandGroup,
  CommandInput,
  CommandItem,
  CommandList,
} from '@/components/ui/command'
import {
  setAccountKey,
  setProfileName,
  setSessionId,
  setUserKey,
} from '@/store/cookie'

const Signup = () => {
  const router = useRouter()
  const [currentStep, setCurrentStep] = useState<number>(1)

  const [passwordVisible, setPasswordVisible] = useState(false)

  const { isLoading, mutateAsync } = useSignUpAccountType()
  const { isLoading: upadatingProfile, mutateAsync: mutatingProfile } =
    useProfileUpdate()

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
    setValue,
  } = useForm<AccountType>({
    resolver: zodResolver(AccountTypeSchema),
  })

  const {
    register: registerProfile,
    handleSubmit: handleSubmitProfile,
    formState: { errors: errorsProfile },
    watch: watchProfile,
    control: controlProfile,
  } = useForm<ProfileType>({
    resolver: zodResolver(ProfileUpdateSchema),
  })

  const account = watch('account_type')
  const password = watch('password')
  const emailValue = watch('email_address')

  useEffect(() => {
    const urlParams = new URLSearchParams(window.location.search)
    const setCurrentStepParam = urlParams.get('setCurrentStep')
    const typeParam = urlParams.get('type')

    if (
      setCurrentStepParam &&
      setCurrentStepParam === '3' &&
      typeParam === 'PERSONAL'
    ) {
      setCurrentStep(3)
      setValue('account_type', 'PERSONAL')
    } else if (
      setCurrentStepParam &&
      setCurrentStepParam === '3' &&
      typeParam === 'BUSINESS'
    ) {
      setCurrentStep(3)
      setValue('account_type', 'BUSINESS')
    } else if (setCurrentStepParam && setCurrentStepParam === '4') {
      setCurrentStep(4)
    }
  }, [setCurrentStep, setValue])

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
      setCurrentStep(3)
    } else if (currentStep === 3 && account === 'BUSINESS') {
      setCurrentStep(4)
    } else if (currentStep === 3 && account === 'PERSONAL') {
      setCurrentStep(5)
    } else if (currentStep === 4) {
      setCurrentStep(5)
    }
  }

  const minDate = new Date()
  minDate.setFullYear(minDate.getFullYear() - 18)
  const minDateStr = minDate.toISOString().split('T')[0]

  const filteredStepsData =
    account === 'PERSONAL'
      ? stepsData.filter((step, index) => index !== 3)
      : stepsData

  const submitAccountSignup: SubmitHandler<AccountType> = async (formData) => {
    console.log(formData)
    try {
      const response = await mutateAsync(formData)
      console.log(response)
      toast.success(response.data.message)
      setAccountKey(response.data.data.account_key)
      setUserKey(response.data.data.user_key)
      setSessionId(response.data.data.session.id)
      setTimeout(() => setCurrentStep((prevStep) => prevStep + 1), 1000)
    } catch (error) {
      if (axios.isAxiosError(error)) {
        const serverError = error.response?.data
        if (serverError && serverError.details) {
          toast.error(serverError.details)
        } else {
          toast.error('Email already registered, procced to login.')
          setTimeout(() => router.push('/login'), 1000)
        }
      } else {
        toast.error('An error occurred')
      }
    }
  }

  const submitProfileSignup: SubmitHandler<ProfileType> = async (
    profileData
  ) => {
    console.log(profileData)
    try {
      const response = await mutatingProfile(profileData)
      console.log(response)
      toast.success(response.data.message)
      setProfileName('true')
      setTimeout(() => setCurrentStep((prevStep) => prevStep + 1), 1000)
    } catch (error) {
      if (axios.isAxiosError(error)) {
        const serverError = error.response?.data
        if (serverError && serverError.details) {
          toast.error(serverError.details)
        } else {
          toast.error('Email already registered, procced to login.')
          setTimeout(() => router.push('/login'), 1000)
        }
      } else {
        toast.error('An error occurred')
      }
    }
  }

  const GenderType = [
    { name: 'Female', label: 'female' },
    { name: 'Male', label: 'male' },
    { name: 'Other', label: 'other' },
  ] as const

  const [openGender, setOpenGender] = useState(false)
  const [openCountry, setOpenCountry] = useState(false)
  const [selectedGender, setSelectedGender] = useState<string>('')
  const [selectedCountry, setSelectedCountry] = useState<string>('')

  console.log(errorsProfile)

  return (
    <div className="body app-blank !tw-h-screen">
      <div className="d-flex flex-column flex-root">
        <div className="d-flex flex-column flex-lg-row flex-column-fluid stepper stepper-pills stepper-column stepper-multistep">
          <div className="d-flex flex-column flex-lg-row-auto w-lg-350px w-xl-500px">
            <div className="signupBg d-flex flex-column position-lg-fixed top-0 bottom-0 w-lg-350px w-xl-500px scroll-y bgi-size-cover bgi-position-center">
              <div className="d-flex flex-center py-10 py-lg-20">
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
                    className="tw-text-white px-5"
                    target="_blank"
                  >
                    Terms
                  </Link>
                  <Link
                    href="/plans"
                    className="tw-text-white px-5"
                    target="_blank"
                  >
                    Plans
                  </Link>
                  <Link
                    href="/contact"
                    className="tw-text-white px-5"
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
                <form className="my-auto pb-5">
                  <div
                    className={`step-content ${
                      currentStep === 1 ? 'current tw-flex-col' : ''
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
                          Already created an account, please{' '}
                          <Link
                            replace
                            href="/login"
                            className="link-primary fw-bold"
                          >
                            Login
                          </Link>
                          .
                        </div>
                      </div>

                      <div className="fv-row">
                        <div className="row">
                          <Controller
                            name="account_type"
                            control={control}
                            render={({ field }) => (
                              <>
                                <RadioButton
                                  id="badge"
                                  value="PERSONAL"
                                  checked={field.value === 'PERSONAL'}
                                  label="Personal Account"
                                  description="If you need more info, please check it out"
                                  onRadioButtonChange={() =>
                                    field.onChange('PERSONAL')
                                  }
                                />
                                <RadioButton
                                  id="briefcase"
                                  value="BUSINESS"
                                  checked={field.value === 'BUSINESS'}
                                  label="Business Account"
                                  description="Create Business account to manage users"
                                  onRadioButtonChange={() =>
                                    field.onChange('BUSINESS')
                                  }
                                />
                              </>
                            )}
                          />
                        </div>
                      </div>
                    </div>
                    <div className="tw-w-full tw-flex tw-justify-end pt-15">
                      <Button
                        disabled={account === undefined}
                        onClick={handleNext}
                        text="Continue"
                        iconClass="ki-arrow-right"
                        position="ms-1"
                        className="btn btn-primary"
                      />
                    </div>
                  </div>

                  <div
                    className={`step-content ${
                      currentStep === 2 ? 'current tw-flex-col' : ''
                    }`}
                    data-kt-stepper-element="content"
                  >
                    <div className="w-100">
                      <div className="pb-10 pb-lg-15">
                        <h2 className="fw-bold text-gray-900">
                          Login Credentials
                        </h2>

                        <div className="text-muted fw-semibold fs-6">
                          Already created an account, please{' '}
                          <Link
                            replace
                            href="/login"
                            className="link-primary fw-bold"
                          >
                            Login
                          </Link>
                          .
                        </div>
                      </div>
                      <div className="mb-10 fv-row">
                        <div className="fv-row mb-10">
                          <input
                            className="form-control bg-transparent"
                            type="email"
                            {...register('email_address')}
                            placeholder="example@email.com"
                          />
                          {errors.email_address &&
                            typeof errors.email_address === 'object' && (
                              <p className="text-danger">
                                {(errors.email_address as FieldError).message}
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
                                  <i className="ki-outline ki-eye-slash fs-2"></i>
                                ) : (
                                  <i className="ki-outline ki-eye fs-2"></i>
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
                    <div className="tw-w-full tw-flex tw-justify-between pt-15">
                      <Button
                        onClick={handlePrevious}
                        text="Previous"
                        iconClass="ki-arrow-left"
                        position="me-1"
                      />
                      <SubmitButton
                        disabled={isLoading || passwordStrengthScore < 3}
                        onClick={handleSubmit(submitAccountSignup)}
                        isSubmitting={isLoading}
                        text="Sign up"
                      />
                    </div>
                  </div>
                </form>

                <form
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
                          {...registerProfile('first_name')}
                          className="form-control bg-transparent w-100"
                        />
                      </div>
                      <div
                        style={{
                          width: '100%',
                        }}
                      >
                        <label className="form-label required">Last Name</label>

                        <input
                          {...registerProfile('surname')}
                          className="form-control bg-transparent"
                        />
                      </div>
                    </div>

                    <div className="fv-row mb-10">
                      <label className="form-label required">Gender</label>

                      <Controller
                        name="gender"
                        control={controlProfile}
                        render={({ field }) => (
                          <Popover
                            open={openGender}
                            onOpenChange={setOpenGender}
                          >
                            <PopoverTrigger asChild>
                              <button
                                aria-expanded={openGender}
                                className="!tw-flex tw-items-center tw-justify-between tw-gap-2 form-control form-select bg-transparent"
                              >
                                {selectedGender
                                  ? GenderType.find(
                                      (gender) => gender.name === selectedGender
                                    )?.name
                                  : 'Select...'}
                              </button>
                            </PopoverTrigger>
                            <PopoverContent className="tw-p-8" align="start">
                              <Command>
                                <CommandList>
                                  <CommandGroup>
                                    {GenderType.map((item) => (
                                      <CommandItem key={item.name}>
                                        <p
                                          onClick={() => {
                                            setSelectedGender(
                                              (prevSelectedGender) =>
                                                prevSelectedGender === item.name
                                                  ? ''
                                                  : item.name
                                            )
                                            setOpenGender(false)
                                            field.onChange(item.label)
                                          }}
                                          className="tw-py-3 tw-px-3 tw-mb-0 tw-cursor-pointer tw-flex hover:tw-bg-slate-200"
                                        >
                                          {item.name}
                                        </p>
                                      </CommandItem>
                                    ))}
                                  </CommandGroup>
                                </CommandList>
                              </Command>
                            </PopoverContent>
                          </Popover>
                        )}
                      />
                    </div>

                    <div className="mb-0">
                      <label className="form-label">D.O.B</label>
                      <input
                        className="form-control bg-transparent"
                        placeholder="Pick date rage"
                        type="date"
                        id="kt_daterangepicker_3"
                        {...registerProfile('date_of_birth')}
                      />
                    </div>

                    <div className="fv-row mb-10 mt-10">
                      <label className="form-label required">
                        Address Line 1
                      </label>

                      <input
                        className="form-control bg-transparent"
                        type="text"
                        {...registerProfile('address')}
                      />
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
                        <label className="form-label required">City</label>

                        <input
                          {...registerProfile('city')}
                          className="form-control bg-transparent w-100"
                        />
                      </div>
                      <div
                        style={{
                          width: '100%',
                        }}
                      >
                        <label className="form-label required">Province</label>

                        <input
                          {...registerProfile('province')}
                          className="form-control bg-transparent"
                        />
                      </div>
                    </div>

                    <div className="fv-row mb-10 mt-10">
                      <label className="form-label required">Country</label>

                      <Controller
                        name="country"
                        control={controlProfile}
                        render={({ field }) => (
                          <Popover
                            open={openCountry}
                            onOpenChange={setOpenCountry}
                          >
                            <PopoverTrigger asChild>
                              <button
                                aria-expanded={openCountry}
                                className="!tw-flex tw-items-center tw-justify-between tw-gap-2 form-control form-select bg-transparent"
                              >
                                {selectedCountry
                                  ? countries.find(
                                      (country) =>
                                        country.label === selectedCountry
                                    )?.label
                                  : 'Select...'}
                              </button>
                            </PopoverTrigger>
                            <PopoverContent className="tw-p-0" align="start">
                              <Command>
                                <CommandInput placeholder="Search..." />
                                <CommandList>
                                  <CommandEmpty>No results found.</CommandEmpty>
                                  <CommandGroup>
                                    {countries.map((item) => (
                                      <CommandItem key={item.label}>
                                        <p
                                          onClick={() => {
                                            setSelectedCountry(
                                              (prevSelectedCountry) =>
                                                prevSelectedCountry ===
                                                item.label
                                                  ? ''
                                                  : item.label
                                            )
                                            setOpenCountry(false)
                                            field.onChange(item.label)
                                          }}
                                          className="tw-py-3 tw-px-3 tw-mb-0 tw-cursor-pointer tw-flex hover:tw-bg-slate-200"
                                        >
                                          {item.label}
                                        </p>
                                      </CommandItem>
                                    ))}
                                  </CommandGroup>
                                </CommandList>
                              </Command>
                            </PopoverContent>
                          </Popover>
                        )}
                      />
                    </div>

                    <div className="fv-row mb-10 mt-10">
                      <label className="d-flex align-items-center form-label">
                        <span className="required">Occupation</span>
                        <span className="lh-1 ms-1">
                          <i className="ki-outline ki-information-5 text-gray-500 fs-6"></i>
                        </span>
                      </label>

                      <input
                        {...registerProfile('occupation')}
                        className="form-control bg-transparent"
                      />
                    </div>

                    <div className="tw-w-full tw-flex tw-justify-between pt-15">
                      <Button
                        onClick={handlePrevious}
                        text="Previous"
                        iconClass="ki-arrow-left"
                        position="me-1"
                      />
                      <SubmitButton
                        disabled={upadatingProfile}
                        onClick={handleSubmitProfile(submitProfileSignup)}
                        isSubmitting={upadatingProfile}
                        text="Sign up"
                      />
                    </div>
                  </div>
                </form>

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

                      <input className="form-control bg-transparent" />
                    </div>

                    <div className="fv-row mb-10">
                      <label className="d-flex align-items-center form-label">
                        <span className="required">RC or VC number.</span>
                        <span className="lh-1 ms-1">
                          <i className="ki-outline ki-information-5 text-gray-500 fs-6"></i>
                        </span>
                      </label>

                      <input className="form-control bg-transparent" />
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
                      <label className="form-label">Business Description</label>
                      <textarea className="form-control bg-transparent"></textarea>

                      <div className="form-text">
                        Customers will see this shortened version of your
                        statement description.
                      </div>
                    </div>

                    <div className="fv-row mb-0">
                      <label className="fs-6 fw-semibold form-label required">
                        Business Email
                      </label>

                      <input className="form-control bg-transparent" />
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
                      <h2 className="fw-bold text-gray-900">Your Are Done!</h2>

                      <div className="text-muted fw-semibold fs-6">
                        If you need more info, please{' '}
                        <Link href="#" className="link-primary fw-bold">
                          Sign In
                        </Link>
                        .
                      </div>
                    </div>

                    <div className="mb-0">
                      <div className="fs-6 text-gray-600 mb-5">
                        Writing headlines for blog posts is as much an art as it
                        is a science and probably warrants its own post, but for
                        all advise is with what works for your great & amazing
                        audience.
                      </div>

                      <div className="notice d-flex bg-light-warning rounded border-warning border border-dashed p-6">
                        <i className="ki-outline ki-information fs-2tx text-warning me-4"></i>

                        <div className="d-flex flex-stack flex-grow-1">
                          <div className="fw-semibold">
                            <h4 className="text-gray-900 fw-bold">
                              We need your attention!
                            </h4>
                            <div className="fs-6 text-gray-700">
                              To start using great tools, please{' '}
                              <Link href="#" className="fw-bold">
                                Create Team Platform.
                              </Link>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                {/* <div className="d-flex flex-stack pt-15">
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
                        onClick={() => router.replace('/verify-account')}
                        text="Proceed to Dashboard"
                        iconClass="ki-arrow-right"
                        position="ms-1"
                      />
                    )}
                  </div>
                </div> */}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Signup
