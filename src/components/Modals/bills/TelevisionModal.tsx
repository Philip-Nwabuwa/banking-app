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
import { TvTransferType, tvTransferSchema } from '@/lib/validation'
import { zodResolver } from '@hookform/resolvers/zod'
import { SubmitHandler, useForm } from 'react-hook-form'

const ProviderNames = [{ name: 'Dstv' }, { name: 'Gotv' }] as const

const Plans = [
  {
    plans: [
      'DStv Access - ₦2,000/month',
      'DStv Family - ₦4,000/month',
      'DStv Compact - ₦7,000/month',
      'DStv Compact Plus - ₦12,000/month',
      'DStv Premium - ₦18,400/month',
    ],
  },
  {
    plans: [
      'GOtv Lite - ₦400/month',
      'GOtv Value - ₦1,250/month',
      'GOtv Plus - ₦1,900/month',
      'GOtv Max - ₦3,200/month',
    ],
  },
] as const

const steps = [
  {
    id: 'Step 1',
    name: 'Fill in reciver details',
    fields: ['provider', 'tvPlan', 'iucNumber'],
  },
  {
    id: 'Step 2',
    name: 'Verify and provide Auth Pin',
    fields: ['authPin'],
  },
]

const TelevisionModal = ({ onClose }: { onClose: () => void }) => {
  const [previousStep, setPreviousStep] = useState(0)
  const [currentStep, setCurrentStep] = useState(0)
  const [open, setOpen] = useState(false)
  const [openTvPlan, setTvPlanOpen] = useState(false)

  const {
    register,
    handleSubmit,
    watch,
    reset,
    trigger,
    setValue,
    formState: { errors },
  } = useForm<TvTransferType>({
    resolver: zodResolver(tvTransferSchema),
  })

  const providerValue = watch('provider')
  const tvPlanValue = watch('tvPlan')
  const iucNumberValue = watch('iucNumber')

  const [selectedTelevision, setSelectedTelevision] = useState(
    'Please select a tv provider'
  )
  const [selectedPlan, setSelectedPlan] = useState('Please select a Plan')

  const renderPlans = () => {
    switch (selectedTelevision) {
      case 'Dstv':
        return Plans[0].plans
      case 'Gotv':
        return Plans[1].plans
      default:
        return []
    }
  }

  const processForm: SubmitHandler<TvTransferType> = (data) => {
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

  type FieldName = keyof TvTransferType

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

  const [otpValue, setOtpValue] = useState('')

  const handleOtpChange = (otp: string) => {
    setValue('authPin', otp)
    setOtpValue(otp)
  }

  const handleNetworkSelect = (NetworkName: string) => {
    setValue('provider', NetworkName)
    setOpen(false)
    setSelectedTelevision(NetworkName)
  }

  const handlePlanSelect = (NetworkPlanName: string) => {
    setValue('tvPlan', NetworkPlanName)
    setTvPlanOpen(false)
    setSelectedPlan(NetworkPlanName)
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
              <h5 className="modal-title">Television</h5>
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
                    Select television provider
                  </label>

                  <div className="col-lg-8 fv-row">
                    <Popover open={open} onOpenChange={setOpen}>
                      <PopoverTrigger asChild>
                        <button className="!tw-flex tw-items-center tw-justify-between tw-gap-2 form-control form-control-lg form-control-solid">
                          {selectedTelevision}
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
                              {ProviderNames.map((item) => (
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
                  </div>
                </div>
                {selectedTelevision !== 'Please select a tv provider' && (
                  <div className="row mb-6">
                    <label className="col-lg-4 col-form-label required fw-semibold fs-6">
                      Select Plan
                    </label>

                    <div className="col-lg-8 fv-row">
                      <Popover open={openTvPlan} onOpenChange={setTvPlanOpen}>
                        <PopoverTrigger asChild>
                          <button className="!tw-flex tw-items-center tw-justify-between tw-gap-2 form-control form-control-lg form-control-solid">
                            {selectedPlan}
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
                                {renderPlans().map((item, index) => (
                                  <CommandItem key={index}>
                                    <p
                                      onClick={() => handlePlanSelect(item)}
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
                    </div>
                  </div>
                )}
                <div className="row mb-6">
                  <label className="col-lg-4 col-form-label required fw-semibold fs-6">
                    IUC Number
                  </label>

                  <div className="col-lg-8 fv-row">
                    <input
                      {...register('iucNumber')}
                      type="number"
                      pattern="[0-9]+"
                      min={0}
                      className="form-control form-control-lg form-control-solid"
                      placeholder="Please provide the phone number"
                    />
                    {errors.iucNumber?.message && (
                      <p className="tw-mt-2 tw-text-sm tw-text-red-400">
                        {errors.iucNumber.message}
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
                  Type:
                  <span className="tw-text-3xl tw-font-bold">
                    {tvPlanValue}
                  </span>
                </div>
                <div className="tw-flex tw-flex-col tw-gap-2 tw-text-xl">
                  <div className="tw-flex tw-justify-between tw-items-center">
                    <p>Provider:</p>
                    <p className="tw-font-bold tw-truncate">{providerValue}</p>
                  </div>
                </div>
                <div className="tw-flex tw-flex-col tw-gap-2 tw-text-xl">
                  <div className="tw-flex tw-justify-between tw-items-center">
                    <p>IUC Number:</p>
                    <p className="tw-font-bold tw-truncate">{iucNumberValue}</p>
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

export default TelevisionModal
