'use client'

import Swal from 'sweetalert2'
import Button from '@/components/common/Button'
import SubmitButton from '@/components/common/SubmitBtn'
import OtpInput from 'react-otp-input'
import { useState } from 'react'
import { toast } from 'sonner'

const PaytonicTransfer = () => {
  const [currentStep, setCurrentStep] = useState<number>(1)

  const [otpValue, setOtpValue] = useState('')

  const handleOtpChange = (otp: string) => {
    setOtpValue(otp)
  }

  const handlePrevious = () => {
    setCurrentStep((prevStep) => Math.max(prevStep - 1, 1))
  }

  const handleNext = () => {
    if (currentStep === 1) {
      setCurrentStep((prevStep) => prevStep + 1)
    }
  }

  const onSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    try {
      Swal.fire({
        text: 'Transaction Successful.',
        icon: 'success',
        buttonsStyling: !1,
        confirmButtonText: 'Ok, got it!',
        customClass: { confirmButton: 'btn btn-primary' },
      })
    } catch (error: unknown) {
      if (error instanceof Error) {
        console.error('Validation error:', error.message)
      } else {
        console.error('An unknown error occurred:', error)
        toast.error('Something went wrong, pls try again later.')
      }
    }
  }

  return (
    <div id="kt_app_content" className="app-content flex-column-fluid">
      <div
        id="kt_app_content_container"
        className="app-container container-xxl"
      >
        <div className="card !tw-rounded-se-none !tw-rounded-ss-none mb-5">
          <div
            className="card-header border-0 cursor-pointer"
            role="button"
            data-bs-toggle="collapse"
            data-bs-target="#kt_account_profile_details"
            aria-expanded="true"
            aria-controls="kt_account_profile_details"
          >
            <div className="card-title m-0">
              <h3 className="fw-bold m-0">Paytonic Wallet Transfer</h3>
            </div>
          </div>

          <div
            id="kt_account_settings_profile_details"
            className="collapse show"
          >
            <form
              onSubmit={onSubmit}
              id="kt_account_profile_details_form"
              className="form card-body border-top p-9"
            >
              <div
                className={`${currentStep === 1 ? 'tw-flex tw-flex-col' : 'tw-hidden'}`}
                data-kt-stepper-element="content"
              >
                <div className="row mb-6">
                  <label className="col-lg-4 col-form-label required fw-semibold fs-6">
                    Email
                  </label>

                  <div className="col-lg-8 fv-row">
                    <input
                      type="email"
                      className="form-control form-control-lg form-control-solid"
                      placeholder="Please provide the paytonic email"
                    />
                  </div>
                </div>
                <div className="row mb-6">
                  <label className="col-lg-4 col-form-label fw-semibold fs-6">
                    <span className="required">Amount</span>
                  </label>

                  <div className="col-lg-8 fv-row">
                    <input
                      type="number"
                      className="form-control form-control-lg form-control-solid"
                      placeholder="Amount to send"
                    />
                  </div>
                </div>
                <div className="row mb-6">
                  <label className="col-lg-4 col-form-label fw-semibold fs-6">
                    Narration
                  </label>

                  <div className="col-lg-8 fv-row">
                    <input
                      type="text"
                      className="form-control form-control-lg form-control-solid"
                      placeholder="Purpose of this transfer"
                    />
                  </div>
                </div>
              </div>
              <div
                className={`${currentStep === 2 ? 'tw-flex tw-flex-col' : 'tw-hidden'}`}
                data-kt-stepper-element="content"
              >
                <div className="tw-text-center tw-text-2xl tw-font-bold tw-capitalize">
                  Confirm the account before transfer.
                </div>
                <div className="tw-text-center tw-py-4 text-xl">
                  Amount(NGN):
                  <span className="tw-text-3xl tw-font-bold">10,000</span>
                </div>
                <div className="tw-flex tw-flex-col tw-gap-2 tw-text-xl">
                  <div className="tw-flex tw-justify-between tw-items-center">
                    <p>Reciever:</p>
                    <p className="tw-font-bold tw-truncate">John Doe</p>
                  </div>

                  <div className="tw-flex tw-justify-between tw-items-center">
                    <p>Email:</p>
                    <p className="tw-font-bold">johndoe@email.com</p>
                  </div>
                  <div className="tw-flex tw-justify-between tw-items-center">
                    <p>Description:</p>
                    <p className="tw-font-bold tw-truncate">
                      Payment for food.
                    </p>
                  </div>
                </div>
                <div className="tw-flex tw-flex-col tw-gap-2 tw-pt-8 tw-text-xl">
                  <div className="tw-flex tw-justify-between tw-items-center">
                    <p>Fee (NGN):</p>
                    <p className="tw-font-bold">free</p>
                  </div>
                  <div className="tw-flex tw-justify-between tw-items-center">
                    <p>Total (NGN):</p>
                    <p className="tw-font-bold"> 10,000</p>
                  </div>
                </div>

                <div className="tw-flex tw-flex-col tw-w-full tw-justify-center tw-items-center tw-gap-2 tw-mt-4 tw-mb-8">
                  <p className="tw-font-bold tw-text-xl">
                    Provide Pin to authorize payment.
                  </p>

                  <OtpInput
                    inputStyle="inputStyle"
                    value={otpValue}
                    onChange={handleOtpChange}
                    inputType="password"
                    numInputs={4}
                    renderInput={(props) => <input {...props} />}
                  />
                </div>
              </div>

              <div className="card-footer d-flex justify-content-end py-6 px-9">
                <div className="mr-2">
                  {currentStep === 2 && (
                    <button
                      onClick={handlePrevious}
                      type="reset"
                      className="btn btn-light btn-active-light-primary me-2"
                    >
                      Previous
                    </button>
                  )}
                </div>
                {currentStep === 1 && (
                  <button
                    type="reset"
                    className="btn btn-light btn-active-light-primary me-2"
                  >
                    Reset
                  </button>
                )}
                <div className="mr-2">
                  {currentStep === 1 && (
                    <Button
                      onClick={handleNext}
                      text="Continue"
                      iconClass="ki-arrow-right"
                      position="ms-1"
                    />
                  )}

                  {currentStep === 2 && <SubmitButton text="Transfer" />}
                </div>
              </div>
            </form>
            <div
              id="kt_scrolltop"
              className="scrolltop"
              data-kt-scrolltop="true"
            >
              <i className="ki-outline ki-arrow-up"></i>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default PaytonicTransfer
