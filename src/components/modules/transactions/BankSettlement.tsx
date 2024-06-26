import React from 'react'

const BankSettlement = () => {
  return <div>BankSettlement</div>
}

export default BankSettlement

// 'use client'

// import Swal from 'sweetalert2'
// import Button from '@/components/common/Button'
// import SubmitButton from '@/components/common/SubmitBtn'
// import OtpInput from 'react-otp-input'
// import {
//   Command,
//   CommandEmpty,
//   CommandGroup,
//   CommandInput,
//   CommandItem,
//   CommandList,
// } from '@/components/ui/command'
// import {
//   Popover,
//   PopoverContent,
//   PopoverTrigger,
// } from '@/components/ui/popover'
// import { ChevronDownIcon } from 'lucide-react'
// import { useState } from 'react'
// import { toast } from 'sonner'
// import { Controller, SubmitHandler, useForm } from 'react-hook-form'
// import { zodResolver } from '@hookform/resolvers/zod'
// import { BankTransferType, bankTransferSchema } from '@/lib/Validations/transfer'

// const steps = [
//   {
//     id: 1,
//     label: 'Select and verify bank details',
//     fields: ['bankName', 'amount', 'narration'],
//   },
//   {
//     id: 2,
//     label: 'Confirm account details and verify payment via authPin',
//     fields: ['authPin'],
//   },
// ]

// const BankSettlementModule = () => {
//   const [currentStep, setCurrentStep] = useState<number>(1)
//   const [open, setOpen] = useState(false)

//   const {
//     register,
//     handleSubmit,
//     trigger,
//     reset,
//     formState: { errors },
//     control,
//   } = useForm<BankTransferType>({
//     resolver: zodResolver(bankTransferSchema),
//   })

//   const [selectedBank, setSelectedBank] = useState('')

//   const [otpValue, setOtpValue] = useState<number | null>(null)

//   const handleOtpChange = (otp: string) => {
//     const parsedOtp = parseInt(otp, 10)
//     if (!isNaN(parsedOtp)) {
//       setOtpValue(parsedOtp)
//     } else {
//       setOtpValue(null)
//     }
//   }

//   const onSubmit: SubmitHandler<BankTransferType> = async (formData) => {
//     try {
//       Swal.fire({
//         text: 'Transaction Successful.',
//         icon: 'success',
//         buttonsStyling: !1,
//         confirmButtonText: 'Ok, got it!',
//         customClass: { confirmButton: 'btn btn-primary' },
//       })
//       reset()
//       setOtpValue(null)
//       setSelectedBank('')
//       setCurrentStep(1)
//     } catch (error: unknown) {
//       if (error instanceof Error) {
//         console.error('Validation error:', error.message)
//       } else {
//         console.error('An unknown error occurred:', error)
//         toast.error('Something went wrong, pls try again later.')
//       }
//     }
//   }

//   const handlePrevious = () => {
//     setCurrentStep((prevStep) => Math.max(prevStep - 1, 1))
//   }

//   type FieldName =
//     | 'bank_code'
//     | 'amount'
//     | "account_number"
//     | 'narration'
//     | 'auth_pin'
//     | "authorization.auth_pin"

//   const handleNext = async () => {
//     const fields = steps[currentStep - 1].fields
//     const output = await trigger(fields as FieldName[], { shouldFocus: true })

//     if (!output) return

//     if (currentStep === 1) {
//       console.log('submit')
//     }
//     console.log(fields)
//     setCurrentStep(currentStep + 1)
//   }

//   return (
//     <div className="collapse show">
//       <form
//         onSubmit={handleSubmit(onSubmit)}
//         className="form card-body border-top p-9"
//       >
//         <div
//           className={`${currentStep === 1 ? 'tw-flex tw-flex-col' : 'tw-hidden'}`}
//         >
//           <div className="row mb-6">
//               <label className="col-lg-4 col-form-label required fw-semibold fs-6">
//                 Select Account
//               </label>

//             <div className="col-lg-8 fv-row">
//               <Controller
//                 name="bankName"
//                 control={control}
//                 defaultValue=""
//                 render={({ field }) => (
//                   <Popover open={open} onOpenChange={setOpen}>
//                     <PopoverTrigger asChild>
//                       <button
//                         aria-expanded={open}
//                         className="!tw-flex tw-items-center tw-justify-between tw-gap-2 form-control form-control-lg form-control-solid"
//                       >
//                         {selectedBank
//                           ? BankNames.find(
//                               (bankname) => bankname.name === selectedBank
//                             )?.name
//                           : 'Select...'}
//                         <ChevronDownIcon className="tw-ml-2 tw-h-4 tw-w-4 tw-text-muted-foreground" />
//                       </button>
//                     </PopoverTrigger>
//                     <PopoverContent className="tw-p-0" align="start">
//                       <Command>
//                         <CommandInput placeholder="Search..." />
//                         <CommandList>
//                           <CommandEmpty>No results found.</CommandEmpty>
//                           <CommandGroup>
//                             {BankNames.map((item) => (
//                               <CommandItem key={item.name}>
//                                 <p
//                                   onClick={() => {
//                                     setSelectedBank((prevSelectedBank) =>
//                                       prevSelectedBank === item.name
//                                         ? ''
//                                         : item.name
//                                     )
//                                     setOpen(false)
//                                     field.onChange(item.name)
//                                   }}
//                                   className="tw-py-3 tw-px-3 tw-mb-0 tw-cursor-pointer tw-flex hover:tw-bg-slate-200"
//                                 >
//                                   {item.name}
//                                 </p>
//                               </CommandItem>
//                             ))}
//                           </CommandGroup>
//                         </CommandList>
//                       </Command>
//                     </PopoverContent>
//                   </Popover>
//                 )}
//               />
//               {errors.bankName && (
//                 <span className="text-danger">{errors.bankName.message}</span>
//               )}
//             </div>
//           </div>
//           <div className="row mb-6">
//               <label className="col-lg-4 col-form-label fw-semibold fs-6">
//                 <span className="required">Amount</span>
//               </label>

//             <div className="col-lg-8 fv-row">
//               <input
//                 type="number"
//                 {...register('amount', { valueAsNumber: true })}
//                 className="form-control form-control-lg form-control-solid"
//                 placeholder="Amount to send"
//               />
//               {errors.amount && (
//                 <span className="text-danger">{errors.amount.message}</span>
//               )}
//             </div>
//           </div>
//           <div className="row mb-6">
//             <label className="col-lg-4 col-form-label fw-semibold fs-6">
//               <span className="required">Narration</span>
//             </label>

//             <div className="col-lg-8 fv-row">
//               <input
//                 type="text"
//                 {...register('narration')}
//                 className="form-control form-control-lg form-control-solid"
//                 placeholder="Purpose of this transfer"
//               />
//               {errors.narration && (
//                 <span className="text-danger">{errors.narration.message}</span>
//               )}
//             </div>
//           </div>
//         </div>
//         <div
//           className={`${currentStep === 2 ? 'tw-flex tw-flex-col' : 'tw-hidden'}`}
//         >
//           <div className="tw-text-center tw-text-2xl tw-font-bold tw-capitalize">
//             Confirm the account before transfer.
//           </div>
//           <div className="tw-text-center tw-py-4 text-xl">
//             Amount(NGN):
//             <span className="tw-text-3xl tw-font-bold">1,000</span>
//           </div>
//           <div className="tw-flex tw-flex-col tw-gap-2 tw-text-xl">
//             <div className="tw-flex tw-justify-between tw-items-center">
//               <p>Reciever:</p>
//               <p className="tw-font-bold tw-truncate">John Doe</p>
//             </div>
//             <div className="tw-flex tw-justify-between tw-items-center">
//               <p>Bank:</p>
//               <p className="tw-font-bold">Zenith</p>
//             </div>
//             <div className="tw-flex tw-justify-between tw-items-center">
//               <p>Account Number:</p>
//               <p className="tw-font-bold">123456789</p>
//             </div>
//             <div className="tw-flex tw-justify-between tw-items-center">
//               <p>Description:</p>
//               <p className="tw-font-bold tw-truncate">Payment for food.</p>
//             </div>
//           </div>
//           <div className="tw-flex tw-flex-col tw-gap-2 tw-pt-8 tw-text-xl">
//             <div className="tw-flex tw-justify-between tw-items-center">
//               <p>Fee (NGN):</p>
//               <p className="tw-font-bold">10</p>
//             </div>
//             <div className="tw-flex tw-justify-between tw-items-center">
//               <p>Total (NGN):</p>
//               <p className="tw-font-bold"> 1,010</p>
//             </div>
//           </div>

//           <div className="tw-flex tw-flex-col tw-w-full tw-justify-center tw-items-center tw-gap-2 tw-mt-4 tw-mb-8">
//             <p className="tw-font-bold tw-text-xl">
//               Provide Pin to authorize payment.
//             </p>
//             <Controller
//               name="authPin"
//               control={control}
//               render={({ field }) => (
//                 <OtpInput
//                   inputStyle="inputStyle"
//                   value={otpValue !== null ? otpValue.toString() : ''}
//                   onChange={(otp) => {
//                     handleOtpChange(otp)
//                     field.onChange(parseInt(otp, 10))
//                   }}
//                   inputType="password"
//                   numInputs={4}
//                   renderInput={(props) => <input {...props} />}
//                 />
//               )}
//             />
//           </div>
//         </div>

//         <div className="card-footer d-flex justify-content-end py-6 px-9">
//           <div className="mr-2">
//             {currentStep === 2 && (
//               <button
//                 onClick={handlePrevious}
//                 type="reset"
//                 className="btn btn-light btn-active-light-primary me-2"
//               >
//                 Previous
//               </button>
//             )}
//           </div>
//           {currentStep === 1 && (
//             <button
//               type="reset"
//               className="btn btn-light btn-active-light-primary me-2"
//             >
//               Reset
//             </button>
//           )}
//           <div className="mr-2">
//             {currentStep === 1 && (
//               <Button
//                 onClick={handleNext}
//                 text="Continue"
//                 iconClass="ki-arrow-right"
//                 position="ms-1"
//               />
//             )}

//             {currentStep === 2 && <SubmitButton text="Transfer" />}
//           </div>
//         </div>
//       </form>
//     </div>
//   )
// }

// export default BankSettlementModule
