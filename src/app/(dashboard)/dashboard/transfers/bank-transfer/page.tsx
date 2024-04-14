'use client'

import Swal from 'sweetalert2'
import Button from '@/components/common/Button'
import SubmitButton from '@/components/common/SubmitBtn'
import OtpInput from 'react-otp-input'
import {
  Command,
  CommandEmpty,
  CommandGroup,
  CommandInput,
  CommandItem,
  CommandList,
} from '@/components/ui/command'
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from '@/components/ui/popover'
import { ArrowDown, CheckIcon, ChevronDownIcon } from 'lucide-react'
import { useState } from 'react'
import { toast } from 'sonner'
import { z } from 'zod'
import { Controller, SubmitHandler, useForm } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'

const BankNames = [
  { name: 'First Bank of Nigeria' },
  { name: 'Guaranty Trust Bank' },
  { name: 'Zenith Bank' },
  { name: 'Access Bank' },
  { name: 'United Bank for Africa (UBA)' },
  { name: 'Ecobank Nigeria' },
  { name: 'Fidelity Bank Nigeria' },
  { name: 'Union Bank of Nigeria' },
  { name: 'Stanbic IBTC Bank' },
  { name: 'Sterling Bank' },
] as const

const bankTransferSchema = z.object({
  bankName: z.string(),
  accountNumber: z.string(),
  amount: z.string(),
  narration: z.string(),
  authorizationPin: z.string(),
})

type FormFields = z.infer<typeof bankTransferSchema>

const BankTransfer = () => {
  const [currentStep, setCurrentStep] = useState<number>(1)
  const [selectedBank, setSelectedBank] = useState(
    'Please select a bank account'
  )

  const {
    register,
    handleSubmit,
    formState: { errors },
    watch,
    control,
  } = useForm({
    resolver: zodResolver(bankTransferSchema),
  })

  const handlePrevious = () => {
    setCurrentStep((prevStep) => Math.max(prevStep - 1, 1))
  }

  const handleNext = () => {
    if (currentStep === 1) {
      setCurrentStep((prevStep) => prevStep + 1)
    }
  }

  console.log(errors)

  const handleBankSelect = (bankName: string) => {
    console.log(selectedBank)

    setSelectedBank(bankName)
  }

  const onSubmit = (data: any) => {
    try {
      console.log('Form data:', data)
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
        <div className="card mb-5">
          <div
            className="card-header border-0 cursor-pointer"
            role="button"
            data-bs-toggle="collapse"
            data-bs-target="#kt_account_profile_details"
            aria-expanded="true"
            aria-controls="kt_account_profile_details"
          >
            <div className="card-title m-0">
              <h3 className="fw-bold m-0">Bank Transfer</h3>
            </div>
          </div>

          <div
            id="kt_account_settings_profile_details"
            className="collapse show"
          >
            <form
              onSubmit={handleSubmit(onSubmit)}
              id="kt_account_profile_details_form"
              className="form card-body border-top p-9"
            >
              <div
                className={`${currentStep === 1 ? 'tw-flex tw-flex-col' : 'tw-hidden'}`}
                data-kt-stepper-element="content"
              >
                <div className="row mb-6">
                  <label className="col-lg-4 col-form-label required fw-semibold fs-6">
                    Select bank
                  </label>

                  <div className="col-lg-8 fv-row">
                    <Popover>
                      <PopoverTrigger asChild>
                        <button className="!tw-flex tw-items-center tw-justify-between tw-gap-2 form-control form-control-lg form-control-solid">
                          {selectedBank}
                          <ChevronDownIcon className="tw-ml-2 tw-h-4 tw-w-4 tw-text-muted-foreground" />
                        </button>
                      </PopoverTrigger>
                      <PopoverContent className="tw-p-0" align="start">
                        <Command>
                          <CommandInput placeholder="Search..." />
                          <CommandList>
                            <CommandEmpty>No results found.</CommandEmpty>
                            <CommandGroup>
                              {BankNames.map((item) => (
                                <CommandItem key={item.name}>
                                  <p
                                    {...register('bankName')}
                                    onClick={() => handleBankSelect(item.name)}
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
                  </div>
                </div>
                <div className="row mb-6">
                  <label className="col-lg-4 col-form-label required fw-semibold fs-6">
                    Account number
                  </label>

                  <div className="col-lg-8 fv-row">
                    <input
                      type="number"
                      className="form-control form-control-lg form-control-solid"
                      placeholder="Please provide the account number"
                      {...register('accountNumber')}
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
                      {...register('amount')}
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
                      {...register('narration')}
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
                  <span className="tw-text-3xl tw-font-bold">1,000</span>
                </div>
                <div className="tw-flex tw-flex-col tw-gap-2 tw-text-xl">
                  <div className="tw-flex tw-justify-between tw-items-center">
                    <p>Reciever:</p>
                    <p className="tw-font-bold tw-truncate">Philip Nwabuwa</p>
                  </div>
                  <div className="tw-flex tw-justify-between tw-items-center">
                    <p>Bank:</p>
                    <p className="tw-font-bold">Zenith</p>
                  </div>
                  <div className="tw-flex tw-justify-between tw-items-center">
                    <p>Account Number:</p>
                    <p className="tw-font-bold">2216720747</p>
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
                    <p className="tw-font-bold">10</p>
                  </div>
                  <div className="tw-flex tw-justify-between tw-items-center">
                    <p>Total (NGN):</p>
                    <p className="tw-font-bold"> 1,010</p>
                  </div>
                </div>

                <div className="tw-flex tw-flex-col tw-w-full tw-justify-center tw-items-center tw-gap-2 tw-mt-4 tw-mb-8">
                  <p className="tw-font-bold tw-text-xl">
                    Provide Pin to authorize payment.
                  </p>
                  <Controller
                    name="authorizationPin"
                    control={control}
                    defaultValue=""
                    render={({ field }) => (
                      <OtpInput
                        inputStyle="inputStyle"
                        value={field.value}
                        onChange={(value) => field.onChange(value)}
                        inputType="password"
                        numInputs={4}
                        renderInput={(props) => <input {...props} />}
                      />
                    )}
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

export default BankTransfer
