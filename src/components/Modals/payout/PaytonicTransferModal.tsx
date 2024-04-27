'use client'

import Swal from 'sweetalert2'
import Button from '@/components/common/Button'
import SubmitButton from '@/components/common/SubmitBtn'
import OtpInput from 'react-otp-input'
import { useState } from 'react'
import { toast } from 'sonner'
import { SubmitHandler, useForm } from 'react-hook-form'
import { PaytonicTransferType, paytonicTransferSchema } from '@/lib/validation'
import { zodResolver } from '@hookform/resolvers/zod'
import { SubBalance } from '@/components/common/Balance'

const steps = [
  {
    id: 'Step 1',
    name: 'Fill in reciver details',
    fields: ['email', 'amount', 'narration'],
  },
  {
    id: 'Step 2',
    name: 'Verify and provide Auth Pin',
    fields: ['authPin'],
  },
]

const PaytonicTransferModal = ({ onClose }: { onClose: () => void }) => {
  const [previousStep, setPreviousStep] = useState(0)
  const [currentStep, setCurrentStep] = useState(0)
  const [open, setOpen] = useState(false)
  const [otpValue, setOtpValue] = useState('')

  const {
    register,
    handleSubmit,
    watch,
    reset,
    trigger,
    setValue,
    formState: { errors },
  } = useForm<PaytonicTransferType>({
    resolver: zodResolver(paytonicTransferSchema),
  })

  const EmailValue = watch('email')
  const amountValue = watch('amount')
  const narrationValue = watch('narration')

  const processForm: SubmitHandler<PaytonicTransferType> = (data) => {
    console.log(data)
    try {
      Swal.fire({
        text: 'Transaction Successful.',
        icon: 'success',
        buttonsStyling: !1,
        confirmButtonText: 'Ok, got it!',
        customClass: { confirmButton: 'btn btn-primary' },
      })
      onClose()
      reset()
    } catch (error: unknown) {
      if (error instanceof Error) {
        console.error('Validation error:', error.message)
      } else {
        console.error('An unknown error occurred:', error)
        toast.error('Something went wrong, pls try again later.')
      }
    }
  }

  type FieldName = keyof PaytonicTransferType

  const handleNext = async () => {
    const fields = steps[currentStep].fields
    const output = await trigger(fields as FieldName[], { shouldFocus: true })

    if (!output) return

    if (currentStep < steps.length - 1) {
      if (currentStep === steps.length - 2) {
        await handleSubmit(processForm)()
      }
      setPreviousStep(currentStep)
      setCurrentStep((step) => step + 1)
    }
  }

  const handlePrevious = () => {
    if (currentStep > 0) {
      setPreviousStep(currentStep)
      setCurrentStep((step) => step - 1)
    }
  }

  const handleOtpChange = (otp: string) => {
    setValue('authPin', otp)
    setOtpValue(otp)
  }

  return (
    <div className="modal-backdrop" style={{ display: 'block' }}>
      <form
        onSubmit={handleSubmit(processForm)}
        className="modal"
        tabIndex={-1}
        role="dialog"
        style={{ display: 'block' }}
      >
        <div className="modal-dialog modal-dialog-centered" role="document">
          <div className="modal-content">
            <div className="modal-header">
              <h5 className="modal-title">Airtime</h5>
              <button
                type="button"
                className="btn-close"
                aria-label="Close"
                onClick={onClose}
              ></button>
            </div>
            <div className="modal-body">
              {' '}
              <div
                className={`${currentStep === 0 ? 'tw-flex tw-flex-col' : 'tw-hidden'}`}
                data-kt-stepper-element="content"
              >
                <div className="row mb-6">
                  <label className="col-lg-4 col-form-label required fw-semibold fs-6">
                    Paytonic Email
                  </label>

                  <div className="col-lg-8 fv-row">
                    <input
                      {...register('email')}
                      type="email"
                      className="form-control form-control-lg form-control-solid"
                      placeholder="Please provide the Paytonic Email"
                    />
                    {errors.email?.message && (
                      <p className="tw-mt-2 tw-text-sm tw-text-red-400">
                        {errors.email.message}
                      </p>
                    )}
                  </div>
                </div>

                <div className="row mb-6">
                  <label className="col-lg-4 col-form-label fw-semibold fs-6">
                    <div className="tw-flex tw-items-start lg:tw-justify-start tw-justify-between">
                      <span className="required">Amount</span>
                      <div className="lg:tw-hidden tw-flex">
                        <SubBalance />
                      </div>
                    </div>
                  </label>

                  <div className="col-lg-8 fv-row">
                    <input
                      type="number"
                      {...register('amount', { valueAsNumber: true })}
                      className="form-control form-control-lg form-control-solid"
                      placeholder="Amount to send"
                      min="100"
                    />
                    {errors.amount?.message && (
                      <p className="tw-mt-2 tw-text-sm tw-text-red-400">
                        {errors.amount.message}
                      </p>
                    )}
                  </div>
                </div>

                <div className="row mb-6">
                  <label className="col-lg-4 col-form-label required fw-semibold fs-6">
                    Narration
                  </label>

                  <div className="col-lg-8 fv-row">
                    <input
                      {...register('narration')}
                      type="text"
                      className="form-control form-control-lg form-control-solid"
                      placeholder="Narration"
                    />
                    {errors.narration?.message && (
                      <p className="tw-mt-2 tw-text-sm tw-text-red-400">
                        {errors.narration.message}
                      </p>
                    )}
                  </div>
                </div>
              </div>
              <div
                className={`${currentStep === 1 ? 'tw-flex tw-flex-col' : 'tw-hidden'}`}
                data-kt-stepper-element="content"
              >
                <div className="tw-text-center tw-text-2xl tw-font-bold tw-capitalize">
                  Confirm the Paytonic Email before transfer.
                </div>
                <div className="tw-text-center tw-py-4 text-xl">
                  Amount:
                  <span className="tw-text-3xl tw-font-bold">
                    ₦{amountValue}
                  </span>
                </div>
                <div className="tw-flex tw-flex-col tw-gap-2 tw-text-xl">
                  <div className="tw-flex tw-justify-between tw-items-center">
                    <p>Paytonic Email:</p>
                    <p className="tw-font-bold tw-truncate">{EmailValue}</p>
                  </div>
                </div>
                <div className="tw-flex tw-flex-col tw-gap-2 tw-text-xl">
                  <div className="tw-flex tw-justify-between tw-items-center">
                    <p>Narration:</p>
                    <p className="tw-font-bold tw-truncate">{narrationValue}</p>
                  </div>
                </div>
                <div className="tw-flex tw-flex-col tw-gap-2 tw-pt-8 tw-text-xl">
                  <div className="tw-flex tw-justify-between tw-items-center">
                    <p>Fee (NGN):</p>
                    <p className="tw-font-bold">free</p>
                  </div>
                  <div className="tw-flex tw-justify-between tw-items-center">
                    <p>Total (NGN):</p>
                    <p className="tw-font-bold"> 1,000</p>
                  </div>
                </div>

                <div className="tw-flex tw-flex-col tw-w-full tw-justify-center tw-items-center tw-gap-2 tw-mt-4 tw-mb-8">
                  <p className="tw-font-bold tw-text-xl">
                    Provide Pin to authorize payment.
                  </p>

                  <OtpInput
                    inputStyle="inputStyle"
                    value={otpValue}
                    onChange={(otp) => {
                      setOtpValue(otp)
                      handleOtpChange(otp)
                    }}
                    inputType="password"
                    numInputs={4}
                    renderInput={(props) => <input {...props} />}
                  />
                  {errors.authPin?.message && (
                    <p className="tw-mt-2 tw-text-sm tw-text-red-400">
                      {errors.authPin.message}
                    </p>
                  )}
                </div>
              </div>
            </div>
            <div className="modal-footer">
              {currentStep === 1 && (
                <button
                  onClick={handlePrevious}
                  type="reset"
                  className="btn btn-light btn-active-light-primary me-2"
                >
                  Previous
                </button>
              )}
              {currentStep === 0 && (
                <button
                  onClick={onClose}
                  type="reset"
                  className="btn btn-light btn-active-light-primary me-2"
                >
                  Close
                </button>
              )}
              {currentStep === 0 && (
                <Button
                  onClick={handleNext}
                  text="Continue"
                  iconClass="ki-arrow-right"
                  position="ms-1"
                />
              )}

              {currentStep === 1 && <SubmitButton text="Transfer" />}
            </div>
          </div>
        </div>
      </form>
    </div>
  )
}

export default PaytonicTransferModal
