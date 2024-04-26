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
import { ChevronDownIcon } from 'lucide-react'
import { useState } from 'react'
import { toast } from 'sonner'

const ElectricityProduct = [
  { name: 'Abuja' },
  { name: 'Eko' },
  { name: 'Enugu' },
  { name: 'Jos' },
  { name: 'Ibadan' },
  { name: 'Ikeja' },
  { name: 'Kaduna' },
  { name: 'Kano' },
  { name: 'Port Harcourt' },
  { name: 'Benin' },
  { name: 'Yola' },
] as const

const MeterType = [{ name: 'Pre-paid' }, { name: 'Post-paid' }] as const

const ElectricityModal = ({ onClose }: { onClose: () => void }) => {
  const [currentStep, setCurrentStep] = useState<number>(1)
  const [selectedProduct, setSelectedProduct] = useState(
    'Please select an Electricity provider'
  )
  const [selectedMeter, setSelectedMeter] = useState(
    'Please select a meter type'
  )

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

  const handleProductSelect = (product: string) => {
    setSelectedProduct(product)
  }
  const handleMeterSelect = (metertype: string) => {
    setSelectedMeter(metertype)
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
            Select Provider
          </label>

          <div className="col-lg-8 fv-row">
            <Popover>
              <PopoverTrigger asChild>
                <button className="!tw-flex tw-items-center tw-justify-between tw-gap-2 form-control form-control-lg form-control-solid">
                  {selectedProduct}
                  <ChevronDownIcon className="tw-ml-2 tw-h-4 tw-w-4 tw-text-muted-foreground" />
                </button>
              </PopoverTrigger>
              <PopoverContent className="tw-p-0" align="start">
                <Command>
                  <CommandInput placeholder="Search..." />
                  <CommandList>
                    <CommandEmpty>No results found.</CommandEmpty>
                    <CommandGroup>
                      {ElectricityProduct.map((item) => (
                        <CommandItem key={item.name}>
                          <p
                            onClick={() => handleProductSelect(item.name)}
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
            Select Meter Type
          </label>

          <div className="col-lg-8 fv-row">
            <Popover>
              <PopoverTrigger asChild>
                <button className="!tw-flex tw-items-center tw-justify-between tw-gap-2 form-control form-control-lg form-control-solid">
                  {selectedMeter}
                  <ChevronDownIcon className="tw-ml-2 tw-h-4 tw-w-4 tw-text-muted-foreground" />
                </button>
              </PopoverTrigger>
              <PopoverContent className="tw-p-0" align="start">
                <Command>
                  <CommandList>
                    <CommandEmpty>No results found.</CommandEmpty>
                    <CommandGroup>
                      {MeterType.map((item) => (
                        <CommandItem key={item.name}>
                          <p
                            onClick={() => handleMeterSelect(item.name)}
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
            Meter number
          </label>

          <div className="col-lg-8 fv-row">
            <input
              type="number"
              className="form-control form-control-lg form-control-solid"
              placeholder="Please provide the metter number"
            />
          </div>
        </div>
        <div className="row mb-6">
          <label className="col-lg-4 col-form-label required fw-semibold fs-6">
            Phone Number
          </label>

          <div className="col-lg-8 fv-row">
            <input
              type="number"
              className="form-control form-control-lg form-control-solid"
              placeholder="Please provide the phone number"
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
      </div>
      <div
        className={`${currentStep === 2 ? 'tw-flex tw-flex-col' : 'tw-hidden'}`}
        data-kt-stepper-element="content"
      >
        <div className="tw-text-center tw-text-2xl tw-font-bold tw-capitalize">
          Confirm the Meter Number before transfer.
        </div>
        <div className="tw-text-center tw-py-4 text-xl">
          Amount(NGN):
          <span className="tw-text-3xl tw-font-bold">1,000</span>
        </div>
        <div className="tw-flex tw-flex-col tw-gap-2 tw-text-xl">
          <div className="tw-flex tw-justify-between tw-items-center">
            <p>Reciever:</p>
            <p className="tw-font-bold tw-truncate">John Doe</p>
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
  )
}

export default ElectricityModal
