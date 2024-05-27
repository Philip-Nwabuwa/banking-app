'use client'

import { useEffect, useState } from 'react'
import Image from 'next/image'
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
import {
  createSettlementSchema,
  createSettlementType,
} from '@/lib/Validations/wallet'
import { zodResolver } from '@hookform/resolvers/zod'
import { Controller, SubmitHandler, useForm } from 'react-hook-form'
import {
  useBankList,
  useCreateSettellmentAccount,
  useVerifyAccount,
} from '@/services/wallet'
import { BankListType } from '@/types/bank'
import { ChevronDownIcon } from 'lucide-react'
import SubmitButton from '@/components/common/SubmitBtn'
import { toast } from 'sonner'
import axios from 'axios'
import Swal from 'sweetalert2'

const CreateSettlement = () => {
  const { data: BankList, isLoading: loadingBankList } = useBankList()
  const { isLoading: loadingDetails, mutateAsync: mutateVerifyAccount } =
    useVerifyAccount()
  const { isLoading, mutateAsync } = useCreateSettellmentAccount()

  const [open, setOpen] = useState(false)
  const [selectedBank, setSelectedBank] = useState<string>('')
  const [VerifiedName, setVerifiedName] = useState<string>('')

  const bankList = BankList?.data.data

  console.log(VerifiedName)

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
    control,
    watch,
  } = useForm<createSettlementType>({
    resolver: zodResolver(createSettlementSchema),
  })

  const bankCode = watch('account.bank_code')
  const accountNumberValue = watch('account.account_number')

  useEffect(() => {
    const fetchData = async () => {
      if (bankCode && accountNumberValue.length === 10) {
        try {
          const data = {
            account_number: accountNumberValue,
            bank_code: bankCode,
          }
          const response = await mutateVerifyAccount(data)
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

  const onSubmit: SubmitHandler<createSettlementType> = async (formData) => {
    try {
      const response = await mutateAsync(formData)
      Swal.fire({
        text: response.data.message,
        icon: 'success',
        buttonsStyling: !1,
        confirmButtonText: 'Ok, got it!',
        customClass: { confirmButton: 'btn btn-primary' },
      })
      reset()
      setSelectedBank('')
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
  return (
    <div className="card !tw-rounded-se-none !tw-rounded-ss-none mb-5 mb-xl-10">
      <div className="card-header border-0">
        <div className="card-title m-0">
          <h3 className="fw-bold m-0">Create Bank Settlement</h3>
        </div>
      </div>

      <div className="collapse show">
        <form onSubmit={handleSubmit(onSubmit)} className="form">
          <div className="card-body border-top p-9">
            <div className="row mb-6">
              <label className="col-lg-4 col-form-label required fw-semibold fs-6">
                Select bank
              </label>

              <div className="col-lg-8 fv-row">
                <Controller
                  name="account.bank_code"
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
                {errors.account?.bank_code && (
                  <span className="text-danger">
                    {errors.account?.bank_code.message}
                  </span>
                )}
              </div>
            </div>
            <div className="row mb-6">
              <label className="col-lg-4 col-form-label required fw-semibold fs-6">
                Account Number
              </label>

              <div className="col-lg-8 fv-row">
                <input
                  type="text"
                  {...register('account.account_number')}
                  className="form-control bg-transparent"
                  placeholder="Account number"
                />
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
          </div>

          <div className="card-footer d-flex justify-content-end py-6 px-9">
            <button
              type="reset"
              onClick={() => {
                setSelectedBank('')
              }}
              className="btn btn-light btn-active-light-primary me-2"
            >
              Discard
            </button>
            <SubmitButton
              isSubmitting={isLoading || loadingBankList}
              disabled={isLoading || loadingBankList || VerifiedName === ''}
              text={'Submit'}
            />
          </div>
        </form>
        <div id="kt_scrolltop" className="scrolltop" data-kt-scrolltop="true">
          <i className="ki-outline ki-arrow-up"></i>
        </div>
      </div>
    </div>
  )
}

export default CreateSettlement
