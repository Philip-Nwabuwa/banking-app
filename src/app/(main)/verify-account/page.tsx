'use client'

import OtpInput from 'react-otp-input'
import Link from 'next/link'
import { useState } from 'react'
import SubmitButton from '@/components/common/SubmitBtn'
import { useSetAuthPin, useSetBVN, useSetUsername } from '@/services/auth'
import axios from 'axios'
import { toast } from 'sonner'
import { Controller, SubmitHandler, useForm } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'
import {
  setBVNSchema,
  setBVNType,
  setUsernameSchema,
  setUsernameType,
} from '@/lib/Validations/kyc'
import { setAuthPinType, setAuthPinSchema } from '@/lib/Validations/pin'

const WelcomePage = () => {
  const { mutateAsync: mutateUsername, isLoading: updatingUsername } =
    useSetUsername()
  const { mutateAsync: mutateBVN, isLoading: updatingBVN } = useSetBVN()
  const { mutateAsync: mutateAuthPin, isLoading: updatingAuthPin } =
    useSetAuthPin()
  const [emailOtp, setEmailOtp] = useState('')
  const [authorizationPin, setAuthorizationPin] = useState('')

  const [activeIndex, setActiveIndex] = useState<number | null>(null)

  const toggleAccordion = (index: number) => {
    setActiveIndex((prevIndex) => (prevIndex === index ? null : index))
  }

  const handleAuthPinChange = (value: string) => {
    setAuthorizationPin(value)
  }

  const {
    register: registerUsername,
    handleSubmit: handleUsernameSubmit,
    formState: { errors: usernameErrors },
  } = useForm<setUsernameType>({
    resolver: zodResolver(setUsernameSchema),
  })

  const {
    register: registerBVN,
    handleSubmit: handleBVNSubmit,
    formState: { errors: BVNErrors },
  } = useForm<setBVNType>({
    resolver: zodResolver(setBVNSchema),
  })

  const {
    register: registerAuthPin,
    handleSubmit: handleAuthPinSubmit,
    formState: { errors: AuthPinErrors },
    control: authPinControl,
  } = useForm<setAuthPinType>({
    resolver: zodResolver(setAuthPinSchema),
  })

  const handleSetUsername: SubmitHandler<setUsernameType> = async (data) => {
    try {
      const response = await mutateUsername(data)
      toast.success(response.data.message)
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
  }
  const handleSetBVN: SubmitHandler<setBVNType> = async (data) => {
    try {
      const response = await mutateBVN(data)
      toast.success(response.data.message)
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
  }

  const handleSetAuthPin: SubmitHandler<setAuthPinType> = async (data) => {
    try {
      const response = await mutateAuthPin(data)
      toast.success(response.data.message)
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
  }
  return (
    <div className="app-main flex-column flex-row-fluid" id="kt_app_main">
      <div className="d-flex flex-column flex-column-fluid">
        <div id="kt_app_toolbar" className="app-toolbar !tw-h-16 py-3 py-lg-0">
          <div className="app-container container-xxl d-flex flex-stack">
            <div className="page-title d-flex flex-column justify-content-center me-3">
              <h1 className="page-heading d-flex text-gray-900 fw-bold fs-3 flex-column justify-content-center my-0">
                Upgrade Status
              </h1>
              <ul className="breadcrumb breadcrumb-separatorless fw-semibold fs-7 my-0 pt-1">
                <li className="breadcrumb-item text-muted">
                  <Link
                    href="/dashboard"
                    replace
                    className="text-muted text-hover-primary"
                  >
                    Dashboard
                  </Link>
                </li>
                <li className="breadcrumb-item">
                  <span className="bullet bg-gray-500 w-5px h-2px"></span>
                </li>
                <li className="breadcrumb-item text-muted">Welcome</li>
              </ul>
            </div>
          </div>
        </div>
        <div id="kt_app_content" className="app-content flex-column-fluid">
          <div
            id="kt_app_content_container"
            className="app-container container-xxl"
          >
            <div className="card">
              <div className="card-body">
                <div className="card-px text-center pt-15 pb-15">
                  <h2 className="fs-2x fw-bold mb-0">Welcome to Paytonic</h2>
                  <p className="text-gray-500 fs-4 fw-semibold py-7">
                    Fill in the details below to fully activate your account.
                  </p>
                </div>
                <form
                  className="form w-100 accordion accordion-icon-toggle"
                  id="kt_accordion_2"
                >
                  <div className="mb-5">
                    <div
                      className={`accordion-header py-3 d-flex tw-justify-between ${
                        activeIndex === 1 ? 'show' : 'collapsed'
                      }`}
                      onClick={() => toggleAccordion(1)}
                    >
                      <div className="tw-flex tw-items-center">
                        <span className="accordion-icon">
                          <i className="ki-duotone ki-arrow-right fs-4">
                            <span className="path1"></span>
                            <span className="path2"></span>
                          </i>
                        </span>
                        <h3 className="fs-4 fw-semibold mb-0 ms-4">
                          Email OTP
                        </h3>
                      </div>
                      <div>Get code</div>
                    </div>
                    {activeIndex === 1 && (
                      <div className="fs-6 collapse show ps-10">
                        <OtpInput
                          inputStyle="inputStyle"
                          value={emailOtp}
                          onChange={setEmailOtp}
                          numInputs={4}
                          renderInput={(props) => <input {...props} />}
                        />
                      </div>
                    )}
                  </div>
                  <div className="mb-5">
                    <div
                      className={`accordion-header py-3 d-flex ${
                        activeIndex === 2 ? 'show' : 'collapsed'
                      }`}
                      onClick={() => toggleAccordion(2)}
                    >
                      <span className="accordion-icon">
                        <i className="ki-duotone ki-arrow-right fs-4">
                          <span className="path1"></span>
                          <span className="path2"></span>
                        </i>
                      </span>
                      <h3 className="fs-4 fw-semibold mb-0 ms-4">
                        Identification of NIN or Passport
                      </h3>
                    </div>
                    {activeIndex === 2 && (
                      <div className="fs-6 collapse show ps-10">
                        <div className="card-body">
                          <div className="fv-row mb-2">
                            <div className="dropzone">
                              <div className="dz-message needsclick">
                                <i className="ki-outline ki-file-up text-primary fs-3x"></i>
                                <div className="ms-4">
                                  <h3 className="fs-5 fw-bold text-gray-900 mb-1">
                                    Drop file here or click to upload.
                                  </h3>
                                  <span className="fs-7 fw-semibold text-gray-500">
                                    Upload only 1 file at a time.
                                  </span>
                                </div>
                              </div>
                            </div>
                          </div>
                          <div className="text-muted fs-7">
                            image size must be 1000x1000 and format must be jpg
                            or png.
                          </div>
                        </div>
                      </div>
                    )}
                  </div>
                  <div className="mb-5">
                    <div
                      className={`accordion-header py-3 d-flex ${
                        activeIndex === 3 ? 'show' : 'collapsed'
                      }`}
                      onClick={() => toggleAccordion(3)}
                    >
                      <span className="accordion-icon">
                        <i className="ki-duotone ki-arrow-right fs-4">
                          <span className="path1"></span>
                          <span className="path2"></span>
                        </i>
                      </span>
                      <h3 className="fs-4 fw-semibold mb-0 ms-4">Username</h3>
                    </div>
                    {activeIndex === 3 && (
                      <div className="fs-6 collapse show ps-10">
                        <input
                          type="text"
                          {...registerUsername('username')}
                          placeholder="Username"
                          className={`form-control bg-transparent`}
                        />
                        <div className="tw-w-full tw-flex tw-justify-end mt-2">
                          <SubmitButton
                            isSubmitting={updatingUsername}
                            disabled={updatingUsername}
                            onClick={handleUsernameSubmit(handleSetUsername)}
                            text={'Update'}
                          />
                        </div>
                      </div>
                    )}
                  </div>
                  <div className="mb-5">
                    <div
                      className={`accordion-header py-3 d-flex ${
                        activeIndex === 4 ? 'show' : 'collapsed'
                      }`}
                      onClick={() => toggleAccordion(4)}
                    >
                      <span className="accordion-icon">
                        <i className="ki-duotone ki-arrow-right fs-4">
                          <span className="path1"></span>
                          <span className="path2"></span>
                        </i>
                      </span>
                      <h3 className="fs-4 fw-semibold mb-0 ms-4">
                        Update KYC (BVN)
                      </h3>
                    </div>
                    {activeIndex === 4 && (
                      <div
                        id="kt_accordion_2_item_2"
                        className="collapse fs-6 ps-10"
                        data-bs-parent="#kt_accordion_2"
                      >
                        <input
                          type="number"
                          {...registerBVN('bvn')}
                          placeholder="BVN"
                          className={`form-control bg-transparent `}
                        />
                        <div className="tw-w-full tw-flex tw-justify-end mt-2">
                          <SubmitButton
                            isSubmitting={updatingBVN}
                            disabled={updatingBVN}
                            onClick={handleBVNSubmit(handleSetBVN)}
                            text={'Update'}
                          />
                        </div>
                      </div>
                    )}
                  </div>
                  <div className="mb-5">
                    <div
                      className={`accordion-header py-3 d-flex ${
                        activeIndex === 5 ? 'show' : 'collapsed'
                      }`}
                      onClick={() => toggleAccordion(5)}
                    >
                      <span className="accordion-icon">
                        <i className="ki-duotone ki-arrow-right fs-4">
                          <span className="path1"></span>
                          <span className="path2"></span>
                        </i>
                      </span>
                      <h3 className="fs-4 fw-semibold mb-0 ms-4">
                        Authorization Pin
                      </h3>
                    </div>
                    {activeIndex === 5 && (
                      <div
                        id="kt_accordion_2_item_3"
                        className="collapse fs-6 ps-10"
                        data-bs-parent="#kt_accordion_2"
                      >
                        <Controller
                          name="auth_pin"
                          control={authPinControl}
                          render={({ field }) => (
                            <OtpInput
                              inputStyle="inputStyle"
                              value={
                                authorizationPin !== null
                                  ? authorizationPin.toString()
                                  : ''
                              }
                              onChange={(pin) => {
                                handleAuthPinChange(pin)
                                field.onChange(pin.toString())
                              }}
                              inputType="password"
                              numInputs={4}
                              renderInput={(props) => <input {...props} />}
                            />
                          )}
                        />
                        <div className="tw-w-full tw-flex tw-justify-end mt-2">
                          <SubmitButton
                            isSubmitting={updatingAuthPin}
                            disabled={updatingAuthPin}
                            onClick={handleAuthPinSubmit(handleSetAuthPin)}
                            text={'Update'}
                          />
                        </div>
                      </div>
                    )}
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default WelcomePage
