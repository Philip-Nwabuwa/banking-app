'use client'

import Swal from 'sweetalert2'
import Button from '@/components/common/Button'
import SubmitButton from '@/components/common/SubmitBtn'
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
import { useState } from 'react'
import { toast } from 'sonner'
import { BankListType, Beneficiary, beneficiaryType } from '@/types/bank'
import { Controller, SubmitHandler, useForm } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'
import { BankTransferType, bankTransferSchema } from '@/lib/validation'
import { SubBalance } from '@/components/common/Balance'
import { useBankList } from '@/services/wallet'

const steps = [
  {
    id: 1,
    label: 'Select and verify bank details',
    fields: ['bankName', 'accountNumber', 'amount', 'narration'],
  },
  {
    id: 2,
    label: 'Confirm account details and verify payment via authPin',
    fields: ['authPin'],
  },
]

const BankTransferModule = () => {
  const [currentStep, setCurrentStep] = useState<number>(1)
  const [open, setOpen] = useState(false)
  const [openBen, setOpenBen] = useState(false)
  const [selectedBank, setSelectedBank] = useState('')
  const [otpValue, setOtpValue] = useState<string>('')

  const { data, isLoading: loadingBankList, error, isError } = useBankList()

  let BankList: BankListType[] = []

  if (data) {
    BankList = data.data.data.map((item: BankListType) => ({
      bank_code: item.bank_code,
      bank_name: item.bank_name,
      bank_type: item.bank_type,
      bank_image: item.bank_image,
      ussd_code: item.ussd_code,
      ussd_transfer_code: item.ussd_transfer_code,
    }))
    console.log(BankList)
  }

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

  const bankValue = watch('bankName')
  const accountNumberValue = watch('accountNumber')
  const amountValue = watch('amount')
  const narrationValue = watch('narration')

  const beneficiary = Beneficiary.find(
    (beneficiary) => beneficiary.accountNumber === accountNumberValue
  )

  const handleOtpChange = (otp: string) => {
    setOtpValue(otp)
  }

  const handleClick = (item: beneficiaryType) => {
    setValue('bankName', item.bankName)
    setSelectedBank(item.bankName)
    setValue('accountNumber', item.accountNumber)
  }

  const onSubmit: SubmitHandler<BankTransferType> = async (formData) => {
    try {
      Swal.fire({
        text: 'Transaction Successful.',
        icon: 'success',
        buttonsStyling: !1,
        confirmButtonText: 'Ok, got it!',
        customClass: { confirmButton: 'btn btn-primary' },
      })
      reset()
      setOtpValue('')
      setSelectedBank('')
      setCurrentStep(1)
    } catch (error: unknown) {
      if (error instanceof Error) {
        console.error('Validation error:', error.message)
      } else {
        console.error('An unknown error occurred:', error)
        toast.error('Something went wrong, pls try again later.')
      }
    }
  }

  const handlePrevious = () => {
    setCurrentStep((prevStep) => Math.max(prevStep - 1, 1))
  }

  type FieldName =
    | 'bankName'
    | 'accountNumber'
    | 'amount'
    | 'narration'
    | 'authPin'

  const handleNext = async () => {
    const fields = steps[currentStep - 1].fields
    const output = await trigger(fields as FieldName[], { shouldFocus: true })

    if (!output) return
    console.log(fields)
    setCurrentStep(currentStep + 1)
  }

  return (
    <div className="collapse show">
      <form
        onSubmit={handleSubmit(onSubmit)}
        className="form card-body border-top p-9"
      >
        <div
          className={`${currentStep === 1 ? 'tw-flex tw-flex-col' : 'tw-hidden'}`}
        >
          <div className="row mb-6">
            <label className="col-lg-4 col-form-label required fw-semibold fs-6">
              Select bank
            </label>

            <div className="col-lg-8 fv-row">
              <Controller
                name="bankName"
                control={control}
                defaultValue=""
                render={({ field }) => (
                  <Popover open={open} onOpenChange={setOpen}>
                    <PopoverTrigger asChild>
                      <button
                        aria-expanded={open}
                        className="!tw-flex tw-items-center tw-justify-between tw-gap-2 form-control form-control-lg form-control-solid"
                      >
                        {selectedBank
                          ? BankList.find(
                              (bank) => bank.bank_name === selectedBank
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
                            {BankList.map((item) => (
                              <CommandItem key={item.bank_code}>
                                <p
                                  onClick={() => {
                                    setSelectedBank((prevSelectedBank) =>
                                      prevSelectedBank === item.bank_name
                                        ? ''
                                        : item.bank_name
                                    )
                                    setOpen(false)
                                    field.onChange(item)
                                  }}
                                  className="tw-py-3 tw-px-3 tw-mb-0 tw-cursor-pointer tw-flex hover:tw-bg-slate-200"
                                >
                                  <Image
                                    src={item.bank_image}
                                    alt={item.bank_name}
                                    width={30}
                                    height={30}
                                  />{' '}
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
              {errors.bankName && (
                <span className="text-danger">{errors.bankName.message}</span>
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
                <Popover open={openBen} onOpenChange={setOpenBen}>
                  <PopoverTrigger asChild>
                    <div className="text-primary tw-cursor-pointer">
                      Choose beneficiary
                    </div>
                  </PopoverTrigger>
                  <PopoverContent className="tw-p-0" align="end">
                    <Command>
                      <CommandInput placeholder="Search..." />
                      <CommandList>
                        <CommandEmpty>No beneficiary found.</CommandEmpty>
                        <CommandGroup>
                          {Beneficiary.map((item) => (
                            <CommandItem key={item.name}>
                              <p
                                onClick={() => {
                                  handleClick(item)
                                  setOpenBen(false)
                                }}
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
              <input
                type="number"
                {...register('accountNumber', { valueAsNumber: true })}
                className="form-control form-control-lg form-control-solid tw-mb-2.5"
                placeholder="Please provide the account number"
              />
              {beneficiary && (
                <span className="tw-ml-2">{beneficiary.name}</span>
              )}

              {errors.accountNumber && (
                <span className="text-danger">
                  {errors.accountNumber.message}
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
                className="form-control form-control-lg form-control-solid"
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
                className="form-control form-control-lg form-control-solid"
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
              <p className="tw-font-bold tw-truncate">John Doe</p>
            </div>
            <div className="tw-flex tw-justify-between tw-items-center">
              <p>Bank:</p>
              <p className="tw-font-bold">{bankValue}</p>
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
              name="authPin"
              control={control}
              render={({ field }) => (
                <OtpInput
                  inputStyle="inputStyle"
                  value={otpValue !== null ? otpValue.toString() : ''}
                  onChange={(otp) => {
                    handleOtpChange(otp)
                    field.onChange(parseInt(otp, 10))
                  }}
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
              onClick={() => setSelectedBank('')}
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
    </div>
  )
}

export default BankTransferModule
