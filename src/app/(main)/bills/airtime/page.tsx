'use client'

import Image from 'next/image'
import Swal from 'sweetalert2'
import Button from '@/components/common/Button'
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
import { useEffect, useState } from 'react'
import { toast } from 'sonner'
import { useAirtimeTransfer, useGetBillsProvider } from '@/services/bills'
import { billsProviderType } from '@/types/bills'
import {
  AirtimeTransferType,
  airtimeTransferSchema,
} from '@/lib/Validations/bills'
import { zodResolver } from '@hookform/resolvers/zod'
import { Controller, useForm } from 'react-hook-form'
import { generateUniqueKey } from '@/hooks/useGenerateRandomReference'
import axios from 'axios'
import { useQueryClient } from '@tanstack/react-query'
import { SubBalance } from '@/components/common/Balance'

const steps = [
  {
    id: 1,
    label: 'Select and verify VTU Airtime details',
    fields: ['product', 'phone_number', 'amount'],
  },
  {
    id: 2,
    label: 'Confirm account details and verify payment via authPin',
    fields: ['authPin'],
  },
]

const Airtime = () => {
  const queryClient = useQueryClient()

  const { data: providerList, isLoading: gettingBills } = useGetBillsProvider()
  const { isLoading, mutateAsync } = useAirtimeTransfer()

  const [currentStep, setCurrentStep] = useState<number>(1)
  const [uniqueKeys, setUniqueKeys] = useState<string>('')
  const [pinValue, setPinValue] = useState('')
  const [openProduct, setOpenProduct] = useState<boolean>(false)
  const [selectedNetwork, setSelectedNetwork] = useState('')

  const AirtimeNames =
    providerList?.data?.data?.filter(
      (provider: billsProviderType) => provider.service === 'MOBILE_AIRTIME_VTU'
    ) || []

  const handleOtpChange = (otp: string) => {
    setPinValue(otp)
  }

  const {
    register,
    watch,
    trigger,
    reset,
    setValue,
    formState: { errors },
    control,
  } = useForm<AirtimeTransferType>({
    resolver: zodResolver(airtimeTransferSchema),
  })

  const authPinValue = watch('authorization.auth_pin')
  const amountValue = watch('amount')
  const phoneNumberValue = watch('phone_number')
  const productValue = watch('product')

  useEffect(() => {
    const key = generateUniqueKey()
    setUniqueKeys(key)
  }, [])

  useEffect(() => {
    const submitForm = async () => {
      if (authPinValue && authPinValue.length === 4) {
        const reference = uniqueKeys
        const data = {
          amount: amountValue,
          product: productValue,
          phone_number: phoneNumberValue,
          reference,
          authorization: {
            auth_pin: authPinValue,
          },
        }
        try {
          const response = await mutateAsync(data)
          queryClient.invalidateQueries({
            queryKey: ['balance'],
          })
          Swal.fire({
            text: response.data.message,
            icon: 'success',
            buttonsStyling: !1,
            confirmButtonText: 'Ok, got it!',
            customClass: { confirmButton: 'btn btn-primary' },
          })
          reset()
          setPinValue('')
          setUniqueKeys('')
          setSelectedNetwork('')
          setCurrentStep(1)
        } catch (error) {
          if (axios.isAxiosError(error)) {
            const serverError = error.response?.data
            if (serverError && serverError.details) {
              toast.error(serverError.details)
            } else {
              Swal.fire({
                text: serverError.message,
                icon: 'error',
                buttonsStyling: !1,
                confirmButtonText: 'Ok, got it!',
                customClass: { confirmButton: 'btn btn-primary' },
              })
              setPinValue('')
              setValue('authorization.auth_pin', '')
            }
          } else {
            toast.error('An error occurred')
          }
        }
      }
    }

    submitForm()
  }, [authPinValue, setValue])

  const handlePrevious = () => {
    setCurrentStep((prevStep) => Math.max(prevStep - 1, 1))
    setPinValue('')
    setValue('authorization.auth_pin', '')
  }

  type FieldName =
    | 'product'
    | 'phone_number'
    | 'amount'
    | 'authorization'
    | 'authorization.auth_pin'

  const handleNext = async (event: React.MouseEvent<HTMLButtonElement>) => {
    event.preventDefault()

    const fields = steps[currentStep - 1].fields
    const output = await trigger(fields as FieldName[], { shouldFocus: true })

    if (!output) return
    console.log(fields)
    setCurrentStep(currentStep + 1)
  }

  console.log(errors)

  return (
    <div className="app-content flex-column-fluid">
      <div className="app-container container-xxl">
        <div className="card !tw-rounded-se-none !tw-rounded-ss-none mb-5">
          <div className="collapse show">
            <form className="form card-body border-top p-9">
              <div
                className={`${currentStep === 1 ? 'tw-flex tw-flex-col' : 'tw-hidden'}`}
                data-kt-stepper-element="content"
              >
                <div className="row mb-6">
                  <label className="col-lg-4 col-form-label required fw-semibold fs-6">
                    Select Network
                  </label>

                  <div className="col-lg-8 fv-row">
                    <Controller
                      name="product"
                      control={control}
                      defaultValue=""
                      render={({ field }) => (
                        <Popover
                          open={openProduct}
                          onOpenChange={setOpenProduct}
                        >
                          <PopoverTrigger asChild>
                            <button
                              aria-expanded={openProduct}
                              className="!tw-flex tw-items-center tw-justify-between tw-gap-2 form-control bg-transparent"
                            >
                              {selectedNetwork
                                ? AirtimeNames.find(
                                    (product: billsProviderType) =>
                                      product.product === selectedNetwork
                                  )?.product
                                : 'Select...'}
                              <ChevronDownIcon className="tw-ml-2 tw-h-4 tw-w-4 tw-text-muted-foreground" />
                            </button>
                          </PopoverTrigger>
                          <PopoverContent className="tw-p-0" align="start">
                            <Command>
                              <CommandInput placeholder="Search..." />
                              <CommandList>
                                <CommandEmpty>No results found.</CommandEmpty>
                                <CommandGroup>
                                  {AirtimeNames &&
                                    AirtimeNames.map(
                                      (item: billsProviderType) => (
                                        <CommandItem key={item.code}>
                                          <p
                                            onClick={() => {
                                              setSelectedNetwork(
                                                (prevSelectedProduct) =>
                                                  prevSelectedProduct ===
                                                  item.product
                                                    ? ''
                                                    : item.product
                                              )
                                              setOpenProduct(false)
                                              field.onChange(item.product)
                                            }}
                                            className="tw-py-3 tw-px-3 tw-mb-0 tw-cursor-pointer tw-flex tw-items-center hover:tw-bg-slate-200"
                                          >
                                            <Image
                                              src={item.image}
                                              alt={item.code}
                                              width={30}
                                              height={30}
                                              className="tw-mr-3 tw-rounded-full tw-w-6 tw-h-6"
                                            />
                                            {item.name}
                                          </p>
                                        </CommandItem>
                                      )
                                    )}
                                </CommandGroup>
                              </CommandList>
                            </Command>
                          </PopoverContent>
                        </Popover>
                      )}
                    />
                    {errors.product && (
                      <span className="text-danger">
                        {errors.product.message}
                      </span>
                    )}
                  </div>
                </div>
                <div className="row mb-6">
                  <label className="col-lg-4 col-form-label required fw-semibold fs-6">
                    Phone Number
                  </label>

                  <div className="col-lg-8 fv-row">
                    <input
                      type="number"
                      {...register('phone_number')}
                      className="form-control bg-transparent"
                      placeholder="Please provide the phone number"
                    />
                    {errors.phone_number && (
                      <span className="text-danger">
                        {errors.phone_number.message}
                      </span>
                    )}
                  </div>
                </div>
                <div className="row mb-6">
                  <label className="col-lg-4 lg:tw-flex tw-justify-start tw-items-center tw-hidden col-form-label fw-semibold fs-6">
                    <span className="required">Amount</span>
                  </label>

                  <div className="col-lg-8 fv-row">
                    <div className="tw-flex tw-items-center tw-justify-between lg:tw-justify-end tw-pb-[10px]">
                      <div className="lg:tw-hidden tw-flex">
                        <span className="required">Amount</span>
                      </div>
                      <SubBalance />
                    </div>
                    <input
                      type="number"
                      {...register('amount', { valueAsNumber: true })}
                      className="form-control bg-transparent"
                      placeholder="Amount to send"
                    />
                    {errors.amount && (
                      <span className="text-danger">
                        {errors.amount.message}
                      </span>
                    )}
                  </div>
                </div>
              </div>
              <div
                className={`${currentStep === 2 ? 'tw-flex tw-flex-col' : 'tw-hidden'}`}
                data-kt-stepper-element="content"
              >
                <div className="tw-text-center tw-text-2xl tw-font-bold tw-capitalize">
                  Confirm the Phone Number before transfer.
                </div>
                <div className="tw-text-center tw-py-4 text-xl">
                  Amount(NGN):
                  <span className="tw-text-3xl tw-font-bold">
                    {amountValue}
                  </span>
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
                    <p className="tw-font-bold">{amountValue}</p>
                  </div>
                </div>

                <div className="tw-flex tw-flex-col tw-w-full tw-justify-center tw-items-center tw-gap-2 tw-mt-4 tw-mb-8">
                  <p className="tw-font-bold tw-text-xl">
                    Provide Pin to authorize payment.
                  </p>

                  <Controller
                    name="authorization.auth_pin"
                    control={control}
                    render={({ field }) => (
                      <OtpInput
                        inputStyle="inputStyle"
                        value={pinValue !== null ? pinValue.toString() : ''}
                        onChange={(otp) => {
                          handleOtpChange(otp)
                          field.onChange(otp.toString())
                        }}
                        inputType="password"
                        numInputs={4}
                        renderInput={(props) => <input {...props} />}
                      />
                    )}
                  />
                </div>
              </div>

              <div className="card-footer d-flex justify-content-end py-6 !tw-px-0">
                <div>
                  {currentStep === 2 && (
                    <button
                      onClick={handlePrevious}
                      type="reset"
                      className="btn btn-light btn-active-light-primary"
                    >
                      Previous
                    </button>
                  )}
                </div>
                {currentStep === 1 && (
                  <button
                    type="reset"
                    onClick={() => setSelectedNetwork('')}
                    className="btn btn-light btn-active-light-primary me-2"
                  >
                    Reset
                  </button>
                )}
                <div>
                  {currentStep === 1 && (
                    <button className="btn btn-primary" onClick={handleNext}>
                      Continue
                    </button>
                  )}
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

export default Airtime
