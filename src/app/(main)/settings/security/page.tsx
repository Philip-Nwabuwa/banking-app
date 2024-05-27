'use client'

import SubmitButton from '@/components/common/SubmitBtn'
import {
  changeAuthPasswordSchema,
  changeAuthPasswordType,
  changeAuthPinSchema,
  changeAuthPinType,
} from '@/lib/Validations/pin'
import { useChangeAuthPassword, useChangeAuthPin } from '@/services/auth'
import { zodResolver } from '@hookform/resolvers/zod'
import axios from 'axios'
import { useState } from 'react'
import { SubmitHandler, useForm } from 'react-hook-form'
import { toast } from 'sonner'
import Swal from 'sweetalert2'

const Security = () => {
  const { isLoading: loadingAuthPin, mutateAsync: mutateChangeAuthPin } =
    useChangeAuthPin()
  const {
    isLoading: loadingAuthPassword,
    mutateAsync: mutateChangeAuthPassword,
  } = useChangeAuthPassword()

  const [openChangePin, setOpenChangePin] = useState(false)
  const [openChangePassword, setOpenChangePassword] = useState(false)

  const {
    register: registerChangePin,
    handleSubmit: handleSubmitChangePin,
    formState: { errors: errorsChangePin },
    reset: resetChangePin,
  } = useForm<changeAuthPinType>({
    resolver: zodResolver(changeAuthPinSchema),
  })

  const {
    register: registerChangePassword,
    handleSubmit: handleSubmitChangePassword,
    formState: { errors: errorsChangePassword },
    reset: resetChangePassword,
  } = useForm<changeAuthPasswordType>({
    resolver: zodResolver(changeAuthPasswordSchema),
  })

  const onSubmitPinChange: SubmitHandler<changeAuthPinType> = async (
    formData
  ) => {
    try {
      const response = await mutateChangeAuthPin(formData)
      Swal.fire({
        text: response.data.message,
        icon: 'success',
        buttonsStyling: !1,
        confirmButtonText: 'Ok, got it!',
        customClass: { confirmButton: 'btn btn-primary' },
      })
      resetChangePin()
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

  const onSubmitPasswordChange: SubmitHandler<changeAuthPasswordType> = async (
    formData
  ) => {
    try {
      const response = await mutateChangeAuthPassword(formData)
      Swal.fire({
        text: response.data.message,
        icon: 'success',
        buttonsStyling: !1,
        confirmButtonText: 'Ok, got it!',
        customClass: { confirmButton: 'btn btn-primary' },
      })
      resetChangePassword()
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

  const ToggleChangePin = () => {
    setOpenChangePin(!openChangePin)
  }

  const ToggleChangePassword = () => {
    setOpenChangePassword(!openChangePassword)
  }
  return (
    <>
      <div className="card !tw-rounded-se-none !tw-rounded-ss-none mb-5 mb-xl-10">
        <div
          className="card-header border-0 cursor-pointer"
          role="button"
          data-bs-toggle="collapse"
          data-bs-target="#kt_account_signin_method"
        >
          <div className="card-title m-0">
            <h3 className="fw-bold m-0">Sign-in Method</h3>
          </div>
        </div>

        <div id="kt_account_settings_signin_method" className="collapse show">
          <div className="card-body border-top p-9">
            <div className="d-flex flex-wrap align-items-center">
              <div>
                <div className="fs-6 fw-bold mb-1">Email Address</div>
                <div className="fw-semibold text-gray-600">
                  support@keenthemes.com
                </div>
              </div>

              <div id="kt_signin_email_edit" className="flex-row-fluid d-none">
                <form id="kt_signin_change_email" className="form">
                  <div className="row mb-6">
                    <div className="col-lg-6 mb-4 mb-lg-0">
                      <div className="fv-row mb-0">
                        <label className="form-label fs-6 fw-bold mb-3">
                          Enter New Email Address
                        </label>
                        <input
                          type="email"
                          className="form-control bg-transparent"
                          id="emailaddress"
                          placeholder="Email Address"
                          name="emailaddress"
                          defaultValue="support@keenthemes.com"
                        />
                      </div>
                    </div>
                    <div className="col-lg-6">
                      <div className="fv-row mb-0">
                        <label className="form-label fs-6 fw-bold mb-3">
                          Confirm Password
                        </label>
                        <input
                          type="password"
                          className="form-control bg-transparent"
                          name="confirmemailpassword"
                          id="confirmemailpassword"
                        />
                      </div>
                    </div>
                  </div>
                  <div className="d-flex">
                    <button
                      id="kt_signin_submit"
                      type="button"
                      className="btn btn-primary me-2 px-6"
                    >
                      Update Email
                    </button>
                    <button
                      id="kt_signin_cancel"
                      type="button"
                      className="btn btn-color-gray-500 btn-active-light-primary px-6"
                    >
                      Cancel
                    </button>
                  </div>
                </form>
              </div>

              <div id="kt_signin_email_button" className="ms-auto">
                <button className="btn btn-light btn-active-light-primary">
                  Change Email
                </button>
              </div>
            </div>

            <div className="separator separator-dashed my-6"></div>

            <div className="tw-flex tw-justify-start tw-flex-col mb-10">
              <div className="tw-w-full tw-flex tw-justify-between tw-items-center">
                <div>
                  <div className="fs-6 fw-bold mb-1">
                    Change Authentication Password
                  </div>
                  <div className="fw-semibold text-gray-600">***********</div>
                </div>

                <button
                  onClick={ToggleChangePassword}
                  className="btn btn-light btn-active-light-primary"
                >
                  Change Pin
                </button>
              </div>

              <div
                className={`flex-row-fluid ${openChangePassword ? '' : 'd-none'}`}
              >
                <form
                  className="form"
                  onSubmit={handleSubmitChangePassword(onSubmitPasswordChange)}
                >
                  <div className="tw-flex tw-gap-4 mb-1">
                    <div className="col-lg-4">
                      <div className="fv-row mb-0">
                        <label className="form-label fs-6 fw-bold mb-3">
                          Current Password
                        </label>
                        <input
                          {...registerChangePassword('password')}
                          type="password"
                          className="form-control bg-transparent"
                        />
                        {errorsChangePassword.password && (
                          <span className="text-danger">
                            {errorsChangePassword.password.message}
                          </span>
                        )}
                      </div>
                    </div>
                    <div className="col-lg-4">
                      <div className="fv-row mb-0">
                        <label className="form-label fs-6 fw-bold mb-3">
                          New Password
                        </label>
                        <input
                          {...registerChangePassword('new_password')}
                          type="password"
                          className="form-control bg-transparent"
                        />
                        {errorsChangePassword.new_password && (
                          <span className="text-danger">
                            {errorsChangePassword.new_password.message}
                          </span>
                        )}
                      </div>
                    </div>
                  </div>
                  <div className="form-text mb-5">
                    Password must be 8 characters and contain numbers with
                    smybols.
                  </div>
                  <div className="d-flex tw-gap-4">
                    <SubmitButton
                      text="Change Password"
                      isSubmitting={loadingAuthPassword}
                      className="btn btn-primary me-2 px-6"
                    />

                    <button
                      onClick={() => {
                        resetChangePassword({ password: '', new_password: '' })
                      }}
                      className="btn btn-color-gray-500 btn-active-light-primary px-6"
                    >
                      Cancel
                    </button>
                  </div>
                </form>
              </div>
            </div>

            <div className="separator separator-dashed my-6"></div>

            <div className="tw-flex tw-justify-start tw-flex-col mb-10">
              <div className="tw-w-full tw-flex tw-justify-between tw-items-center">
                <div>
                  <div className="fs-6 fw-bold mb-1">
                    Change Authorization Pin
                  </div>
                  <div className="fw-semibold text-gray-600">****</div>
                </div>

                <button
                  onClick={ToggleChangePin}
                  className="btn btn-light btn-active-light-primary"
                >
                  Change Pin
                </button>
              </div>

              <div
                className={`flex-row-fluid ${openChangePin ? '' : 'd-none'}`}
              >
                <form
                  className="form"
                  onSubmit={handleSubmitChangePin(onSubmitPinChange)}
                >
                  <div className="tw-flex tw-gap-4 mb-1">
                    <div className="col-lg-4">
                      <div className="fv-row mb-0">
                        <label className="form-label fs-6 fw-bold mb-3">
                          Current Pin
                        </label>
                        <input
                          {...registerChangePin('auth_pin')}
                          type="password"
                          className="form-control bg-transparent"
                        />
                        {errorsChangePin.auth_pin && (
                          <span className="text-danger">
                            {errorsChangePin.auth_pin.message}
                          </span>
                        )}
                      </div>
                    </div>
                    <div className="col-lg-4">
                      <div className="fv-row mb-0">
                        <label className="form-label fs-6 fw-bold mb-3">
                          New Pin
                        </label>
                        <input
                          {...registerChangePin('new_auth_pin')}
                          type="password"
                          className="form-control bg-transparent"
                        />
                        {errorsChangePin.new_auth_pin && (
                          <span className="text-danger">
                            {errorsChangePin.new_auth_pin.message}
                          </span>
                        )}
                      </div>
                    </div>
                  </div>
                  <div className="form-text mb-5">
                    Password must be 4 characters and contain only numbers.
                  </div>
                  <div className="d-flex tw-gap-4">
                    <SubmitButton
                      text="Change Pin"
                      isSubmitting={loadingAuthPin}
                      className="btn btn-primary me-2 px-6"
                    />

                    <button
                      onClick={() => {
                        resetChangePin({ auth_pin: '', new_auth_pin: '' })
                      }}
                      className="btn btn-color-gray-500 btn-active-light-primary px-6"
                    >
                      Cancel
                    </button>
                  </div>
                </form>
              </div>
            </div>

            <div className="notice d-flex bg-light-primary rounded border-primary border border-dashed p-6">
              <i className="ki-outline ki-shield-tick fs-2tx text-primary me-4"></i>

              <div className="d-flex flex-stack flex-grow-1 flex-wrap flex-md-nowrap">
                <div className="mb-3 mb-md-0 fw-semibold">
                  <h4 className="text-gray-900 fw-bold">Secure Your Account</h4>
                  <div className="fs-6 text-gray-700 pe-7">
                    Two-factor authentication adds an extra layer of security to
                    your account. To log in, in addition you&aois;ll need to
                    provide a 6 digit code
                  </div>
                </div>

                <a
                  href="#"
                  className="btn btn-primary px-6 align-self-center text-nowrap"
                  data-bs-toggle="modal"
                  data-bs-target="#kt_modal_two_factor_authentication"
                >
                  Enable
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="card">
        <div
          className="card-header border-0 cursor-pointer"
          role="button"
          data-bs-toggle="collapse"
          data-bs-target="#kt_account_deactivate"
          aria-expanded="true"
          aria-controls="kt_account_deactivate"
        >
          <div className="card-title m-0">
            <h3 className="fw-bold m-0">Deactivate Account</h3>
          </div>
        </div>

        <div id="kt_account_settings_deactivate" className="collapse show">
          <form id="kt_account_deactivate_form" className="form">
            <div className="card-body border-top p-9">
              <div className="notice d-flex bg-light-warning rounded border-warning border border-dashed mb-9 p-6">
                <i className="ki-outline ki-information fs-2tx text-warning me-4"></i>

                <div className="d-flex flex-stack flex-grow-1">
                  <div className="fw-semibold">
                    <h4 className="text-gray-900 fw-bold">
                      You Are Deactivating Your Account
                    </h4>
                    <div className="fs-6 text-gray-700">
                      For extra security, this requires you to confirm your
                      email or phone number when you reset yousignr password.
                      <br />
                      <a className="fw-bold" href="#">
                        Learn more
                      </a>
                    </div>
                  </div>
                </div>
              </div>

              <div className="form-check form-check-solid fv-row">
                <input
                  name="deactivate"
                  className="form-check-input"
                  type="checkbox"
                  defaultValue=""
                  id="deactivate"
                />
                <label className="form-check-label fw-semibold ps-2 fs-6">
                  I confirm my account deactivation
                </label>
              </div>
            </div>

            <div className="card-footer d-flex justify-content-end py-6 px-9">
              <button
                id="kt_account_deactivate_account_submit"
                type="submit"
                className="btn btn-danger fw-semibold"
              >
                Deactivate Account
              </button>
            </div>
          </form>
        </div>
      </div>
    </>
  )
}

export default Security
