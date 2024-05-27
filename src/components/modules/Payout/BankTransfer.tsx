'use client'

import Swal from 'sweetalert2'
import Image from 'next/image'
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
import { BankListType } from '@/types/bank'
import { Controller, useForm } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'
import { SubBalance } from '@/components/common/Balance'
import {
  useBankList,
  useBankTransfer,
  useVerifyAccount,
} from '@/services/wallet'
import axios from 'axios'
import {
  BankTransferType,
  bankTransferSchema,
} from '@/lib/Validations/transfer'
import { useQueryClient } from '@tanstack/react-query'
import { generateUniqueKey } from '@/hooks/useGenerateRandomReference'

const steps = [
  {
    id: 1,
    label: 'Select and verify bank details',
    fields: ['bank_code', 'accountNumber', 'amount', 'narration'],
  },
  {
    id: 2,
    label: 'Confirm account details and verify payment via authPin',
    fields: ['authPin'],
  },
]

const BankTransferModule = () => {
  const queryClient = useQueryClient()

  const { isLoading: loadingDetails, mutateAsync } = useVerifyAccount()
  const { data: BankList, isLoading: loadingBankList } = useBankList()
  const { isLoading, mutateAsync: mutateBankTransfer } = useBankTransfer()

  const [currentStep, setCurrentStep] = useState<number>(1)
  const [open, setOpen] = useState(false)
  const [openBen, setOpenBen] = useState(false)
  const [selectedBank, setSelectedBank] = useState('')
  const [otpValue, setOtpValue] = useState<string>('')
  const [VerifiedName, setVerifiedName] = useState<string>('')
  const [uniqueKeys, setUniqueKeys] = useState<string>('')

  const bankList = BankList?.data.data
  const {
    register,
    handleSubmit,
    watch,
    trigger,
    reset,
    setValue,
    formState: { errors },
    control,
  } = useForm<BankTransferType>({
    resolver: zodResolver(bankTransferSchema),
  })

  const bankCode = watch('bank_code')
  const accountNumberValue = watch('account_number')
  const amountValue = watch('amount')
  const narrationValue = watch('narration')
  const authPinValue = watch('authorization.auth_pin')

  const handleOtpChange = (otp: string) => {
    setOtpValue(otp)
  }

  // const handleClick = (item: beneficiaryType) => {
  //   setValue('bankName', item.bankName)
  //   setSelectedBank(item.bankName)
  //   setValue('accountNumber', item.accountNumber)
  // }
  useEffect(() => {
    const key = generateUniqueKey()
    setUniqueKeys(key)
  }, [])

  useEffect(() => {
    const submitForm = async () => {
      if (authPinValue && authPinValue.length === 4) {
        const reference = uniqueKeys
        const data = {
          bank_code: bankCode,
          account_number: accountNumberValue,
          amount: amountValue,
          reference,
          narration: narrationValue,
          authorization: {
            auth_pin: authPinValue,
          },
        }
        try {
          const response = await mutateBankTransfer(data)
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
          setOtpValue('')
          setUniqueKeys('')
          setSelectedBank('')
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
              setOtpValue('')
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
    setOtpValue('')
    setValue('authorization.auth_pin', '')
  }

  useEffect(() => {
    const fetchData = async () => {
      if (bankCode && accountNumberValue.length === 10) {
        try {
          const data = {
            bank_code: bankCode,
            account_number: accountNumberValue,
          }
          const response = await mutateAsync(data)
          setVerifiedName(response.data.data.account_name)
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
      } else {
        setVerifiedName('')
      }
    }

    fetchData()
  }, [bankCode, accountNumberValue])

  type FieldName =
    | 'bank_code'
    | 'account_number'
    | 'amount'
    | 'narration'
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
    <div className="collapse show">
      <form className="form card-body border-top p-9">
        <div
          className={`${currentStep === 1 ? 'tw-flex tw-flex-col' : 'tw-hidden'}`}
        >
          <div className="row mb-6">
            <label className="col-lg-4 col-form-label required fw-semibold fs-6">
              Select bank
            </label>

            <div className="col-lg-8 fv-row">
              <Controller
                name="bank_code"
                control={control}
                defaultValue=""
                render={({ field }) => (
                  <Popover open={open} onOpenChange={setOpen}>
                    <PopoverTrigger asChild>
                      <button
                        aria-expanded={open}
                        className="!tw-flex tw-items-center tw-justify-between tw-gap-2 form-control bg-transparent"
                      >
                        {selectedBank
                          ? bankList.find(
                              (bank: BankListType) =>
                                bank.bank_name === selectedBank
                            )?.bank_name
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
                            {bankList &&
                              bankList.map((item: BankListType) => (
                                <CommandItem key={item.bank_code}>
                                  <p
                                    onClick={() => {
                                      setSelectedBank((prevSelectedBank) =>
                                        prevSelectedBank === item.bank_name
                                          ? ''
                                          : item.bank_name
                                      )
                                      setOpen(false)
                                      field.onChange(item.bank_code)
                                    }}
                                    className="tw-py-3 tw-px-3 tw-mb-0 tw-cursor-pointer tw-flex tw-items-center hover:tw-bg-slate-200"
                                  >
                                    <Image
                                      src={item.bank_image}
                                      alt={item.bank_name}
                                      width={30}
                                      height={30}
                                      className="tw-mr-3 tw-rounded-full tw-w-6 tw-h-6"
                                    />
                                    {item.bank_name}
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
              {errors.bank_code && (
                <span className="text-danger">{errors.bank_code.message}</span>
              )}
            </div>
          </div>
          <div className="row mb-6">
            <label className="col-lg-4 lg:tw-flex tw-justify-start tw-items-center tw-hidden col-form-label required fw-semibold fs-6">
              Account number
            </label>

            <div className="col-lg-8 fv-row">
              <div className="tw-flex tw-items-center tw-justify-between lg:tw-justify-end tw-pb-[10px]">
                <div className="lg:tw-hidden tw-flex">
                  <span className="required">Account number</span>
                </div>
              </div>
              <input
                type="text"
                {...register('account_number')}
                className="form-control bg-transparent tw-mb-2.5"
                placeholder="Please provide the account number"
              />
              {errors.account_number && (
                <span className="text-danger">
                  {errors.account_number.message}
                </span>
              )}
              <div className="tw-w-full tw-flex tw-justify-end">
                {loadingDetails && (
                  <i className="ki-solid ki-loading fs-2 tw-animate-spin"></i>
                )}
                {VerifiedName && (
                  <span className="tw-ml-2">{VerifiedName}</span>
                )}
              </div>
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
                <span className="text-danger">{errors.amount.message}</span>
              )}
            </div>
          </div>
          <div className="row mb-6">
            <label className="col-lg-4 col-form-label fw-semibold fs-6">
              <span className="required">Narration</span>
            </label>

            <div className="col-lg-8 fv-row">
              <input
                type="text"
                {...register('narration')}
                className="form-control bg-transparent"
                placeholder="Purpose of this transfer"
              />
              {errors.narration && (
                <span className="text-danger">{errors.narration.message}</span>
              )}
            </div>
          </div>
        </div>
        <div
          className={`${currentStep === 2 ? 'tw-flex tw-flex-col' : 'tw-hidden'}`}
        >
          <div className="tw-text-center tw-text-2xl tw-font-bold tw-capitalize">
            Confirm the account before transfer.
          </div>
          <div className="tw-text-center tw-py-4 text-xl">
            Amount(NGN):
            <span className="tw-text-3xl tw-font-bold">{amountValue}</span>
          </div>
          <div className="tw-flex tw-flex-col tw-gap-2 tw-text-xl">
            <div className="tw-flex tw-justify-between tw-items-center">
              <p>Reciever:</p>
              <p className="tw-font-bold tw-truncate">{VerifiedName}</p>
            </div>
            <div className="tw-flex tw-justify-between tw-items-center">
              <p>Bank:</p>
              <p className="tw-font-bold">{selectedBank}</p>
            </div>
            <div className="tw-flex tw-justify-between tw-items-center">
              <p>Account Number:</p>
              <p className="tw-font-bold">{accountNumberValue}</p>
            </div>
            <div className="tw-flex tw-justify-between tw-items-center">
              <p>Description:</p>
              <p className="tw-font-bold tw-truncate">{narrationValue}</p>
            </div>
          </div>
          <div className="tw-flex tw-flex-col tw-gap-2 tw-pt-8 tw-text-xl">
            <div className="tw-flex tw-justify-between tw-items-center">
              <p>Fee (NGN):</p>
              <p className="tw-font-bold">10</p>
            </div>
            <div className="tw-flex tw-justify-between tw-items-center">
              <p>Total (NGN):</p>
              <p className="tw-font-bold">{amountValue + 10}</p>
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
                  value={otpValue !== null ? otpValue.toString() : ''}
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
              onClick={() => setSelectedBank('')}
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
    </div>
  )
}

export default BankTransferModule
