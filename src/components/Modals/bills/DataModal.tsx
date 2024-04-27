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
import { SubmitHandler, useForm } from 'react-hook-form'
import { DataTransferType, dataTransferSchema } from '@/lib/validation'
import { zodResolver } from '@hookform/resolvers/zod'

const AirtimeNames = [
  { name: 'Airtel' },
  { name: 'Mtn' },
  { name: 'Glo' },
  { name: '9mobile' },
] as const
const DataPlans = [
  {
    plans: [
      'Daily 50MB for ₦100',
      'Weekly 1.5GB for ₦300',
      'Monthly 6GB for ₦1,500',
      'Monthly 16GB for ₦3,000',
    ],
  },
  {
    plans: [
      'Daily 50MB for ₦100',
      'Weekly 1GB for ₦500',
      'Monthly 2GB for ₦1,000',
      'Monthly 6GB for ₦2,000',
    ],
  },
  {
    plans: [
      'Daily 50MB for ₦50',
      'Weekly 1.6GB for ₦500',
      'Monthly 7GB for ₦1,500',
      'Monthly 12.5GB for ₦2,500',
    ],
  },
  {
    plans: [
      'Daily 50MB for ₦100',
      'Weekly 500MB for ₦500',
      'Monthly 1GB for ₦1,000',
      'Monthly 4.5GB for ₦2,000',
    ],
  },
] as const
const steps = [
  {
    id: 'Step 1',
    name: 'Fill in reciver details',
    fields: ['network', 'dataPlan', 'phoneNumber'],
  },
  {
    id: 'Step 2',
    name: 'Verify and provide Auth Pin',
    fields: ['authPin'],
  },
]
const DataModal = ({ onClose }: { onClose: () => void }) => {
  const [previousStep, setPreviousStep] = useState(0)
  const [currentStep, setCurrentStep] = useState(0)
  const [open, setOpen] = useState(false)
  const [openDataPlan, setOpenDataPlan] = useState(false)
  const [selectedNetwork, setSelectedNetwork] = useState(
    'Please select a network provider'
  )
  const [selectedDataPlan, setSelectedDataPlan] = useState(
    'Please select a Plan'
  )

  const {
    register,
    handleSubmit,
    watch,
    reset,
    trigger,
    setValue,
    formState: { errors },
  } = useForm<DataTransferType>({
    resolver: zodResolver(dataTransferSchema),
  })

  const networkValue = watch('network')
  const phoneNumberValue = watch('phoneNumber')
  const dataPlanValue = watch('dataPlan')

  const renderDataPlans = () => {
    switch (selectedNetwork) {
      case 'Airtel':
        return DataPlans[0].plans
      case 'Mtn':
        return DataPlans[1].plans
      case 'Glo':
        return DataPlans[2].plans
      case '9mobile':
        return DataPlans[3].plans
      default:
        return []
    }
  }

  const processForm: SubmitHandler<DataTransferType> = (data) => {
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

  const [otpValue, setOtpValue] = useState('')

  const handleOtpChange = (otp: string) => {
    setValue('authPin', otp)
    setOtpValue(otp)
  }

  type FieldName = keyof DataTransferType

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

  const handleNetworkSelect = (NetworkName: string) => {
    setValue('network', NetworkName)
    setOpen(false)
    setSelectedNetwork(NetworkName)
  }

  const handleDataPlanSelect = (NetworkPlanName: string) => {
    setOpenDataPlan(false)
    setValue('dataPlan', NetworkPlanName)
    setSelectedDataPlan(NetworkPlanName)
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
              <h5 className="modal-title">Data</h5>
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
                    Select Network
                  </label>

                  <div className="col-lg-8 fv-row">
                    <Popover open={open} onOpenChange={setOpen}>
                      <PopoverTrigger asChild>
                        <button className="!tw-flex tw-items-center tw-justify-between tw-gap-2 form-control form-control-lg form-control-solid">
                          {selectedNetwork}
                          <ChevronDownIcon className="tw-ml-2 tw-h-4 tw-w-4 tw-text-muted-foreground" />
                        </button>
                      </PopoverTrigger>
                      <PopoverContent
                        className="tw-p-0 tw-z-[1000]"
                        align="start"
                      >
                        <Command>
                          <CommandInput placeholder="Search..." />
                          <CommandList>
                            <CommandEmpty>No results found.</CommandEmpty>
                            <CommandGroup>
                              {AirtimeNames.map((item) => (
                                <CommandItem key={item.name}>
                                  <p
                                    onClick={() =>
                                      handleNetworkSelect(item.name)
                                    }
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
                    {errors.network?.message && (
                      <p className="tw-mt-2 tw-text-sm tw-text-red-400">
                        {errors.network.message}
                      </p>
                    )}
                  </div>
                </div>
                {selectedNetwork !== 'Please select a network provider' && (
                  <div className="row mb-6">
                    <label className="col-lg-4 col-form-label required fw-semibold fs-6">
                      Data Plan
                    </label>

                    <div className="col-lg-8 fv-row">
                      <Popover
                        open={openDataPlan}
                        onOpenChange={setOpenDataPlan}
                      >
                        <PopoverTrigger asChild>
                          <button className="!tw-flex tw-items-center tw-justify-between tw-gap-2 form-control form-control-lg form-control-solid">
                            {selectedDataPlan}
                            <ChevronDownIcon className="tw-ml-2 tw-h-4 tw-w-4 tw-text-muted-foreground" />
                          </button>
                        </PopoverTrigger>
                        <PopoverContent
                          className="tw-p-0 tw-z-[1000]"
                          align="start"
                        >
                          <Command>
                            <CommandInput placeholder="Search..." />
                            <CommandList>
                              <CommandEmpty>No results found.</CommandEmpty>
                              <CommandGroup>
                                {renderDataPlans().map((item, index) => (
                                  <CommandItem key={index}>
                                    <p
                                      onClick={() => handleDataPlanSelect(item)}
                                      className="tw-py-3 tw-px-3 tw-mb-0 tw-cursor-pointer tw-flex hover:tw-bg-slate-200"
                                    >
                                      {item}
                                    </p>
                                  </CommandItem>
                                ))}
                              </CommandGroup>
                            </CommandList>
                          </Command>
                        </PopoverContent>
                      </Popover>
                      {errors.dataPlan?.message && (
                        <p className="tw-mt-2 tw-text-sm tw-text-red-400">
                          {errors.dataPlan.message}
                        </p>
                      )}
                    </div>
                  </div>
                )}
                <div className="row mb-6">
                  <label className="col-lg-4 col-form-label required fw-semibold fs-6">
                    Phone Number
                  </label>

                  <div className="col-lg-8 fv-row">
                    <input
                      {...register('phoneNumber')}
                      type="tel"
                      className="form-control form-control-lg form-control-solid"
                      placeholder="Please provide the phone number"
                    />
                    {errors.phoneNumber?.message && (
                      <p className="tw-mt-2 tw-text-sm tw-text-red-400">
                        {errors.phoneNumber.message}
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
                  Confirm the Phone Number before transfer.
                </div>
                <div className="tw-text-center tw-py-4 text-xl">
                  Plan:
                  <span className="tw-text-3xl tw-font-bold">
                    {dataPlanValue}
                  </span>
                </div>
                <div className="tw-flex tw-flex-col tw-gap-2 tw-text-xl">
                  <div className="tw-flex tw-justify-between tw-items-center">
                    <p>Provider:</p>
                    <p className="tw-font-bold tw-truncate">{networkValue}</p>
                  </div>
                </div>
                <div className="tw-flex tw-flex-col tw-gap-2 tw-text-xl">
                  <div className="tw-flex tw-justify-between tw-items-center">
                    <p>Reciever:</p>
                    <p className="tw-font-bold tw-truncate">
                      {phoneNumberValue}
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

export default DataModal
