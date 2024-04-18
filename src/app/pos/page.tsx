'use client'

import demoImg from '@/assets/images/POS/pos1.jpg'
import demoImg1 from '@/assets/images/POS/pos2.jpg'
import demoImg2 from '@/assets/images/POS/pos3.jpg'
import Modal from '@/components/common/Modal'
import Image, { StaticImageData } from 'next/image'
import { useState } from 'react'

import OtpInput from 'react-otp-input'
import { toast } from 'sonner'
import Swal from 'sweetalert2'

const items = [
  {
    name: 'Topwise T1',
    price: '₦120000',
    imageSrc: demoImg,
  },
  {
    name: 'Topwise MP35',
    price: '₦85000',
    imageSrc: demoImg1,
  },
  {
    name: 'PAX S90',
    price: '₦65000',
    imageSrc: demoImg2,
  },
]

interface Item {
  name: string
  price: string
  imageSrc: StaticImageData
  quantity: number
}

const POS = () => {
  const [orderItems, setOrderItems] = useState<Item[]>([])
  const [isModalOpen, setIsModalOpen] = useState(false)
  const [otpValue, setOtpValue] = useState('')

  const handleOtpChange = (otp: string) => {
    setOtpValue(otp)
  }
  const addToOrder = (item: {
    name: string
    price: string
    imageSrc: StaticImageData
  }) => {
    setOrderItems((prevOrderItems) => {
      // Find all items with the same name
      const existingItems = prevOrderItems.filter(
        (orderItem) => orderItem.name === item.name
      )
      // If there are no existing items, add a new item to the array
      if (existingItems.length === 0) {
        return [...prevOrderItems, { ...item, quantity: 1 }]
      }
      // If there are existing items, update their quantities
      return prevOrderItems.map((orderItem) => {
        if (orderItem.name === item.name) {
          // Increase quantity by 1 for the matching item
          return { ...orderItem, quantity: orderItem.quantity + 1 }
        }
        return orderItem
      })
    })
  }

  const removeOrderItem = (orderItemName: string) => {
    // Find the item in the orderItems array
    const item = orderItems.find(
      (orderItem) => orderItem.name === orderItemName
    )
    if (item) {
      item.quantity -= 1
      if (item.quantity > 0) {
        setOrderItems([...orderItems])
      } else {
        // Remove the item from the array if the quantity is 0 or less
        setOrderItems(
          orderItems.filter((orderItem) => orderItem.name !== orderItemName)
        )
      }
    }
  }

  const addOrderItem = (orderItemName: string) => {
    // Find the item in the orderItems array
    const item = orderItems.find(
      (orderItem) => orderItem.name === orderItemName
    )
    if (item) {
      item.quantity += 1
      setOrderItems([...orderItems])
    }
  }

  const clearAllOrders = () => {
    setOrderItems([])
  }

  const subTotal = orderItems.reduce((total, orderItem) => {
    // Calculate the total price for each item and add it to the running total
    return (
      total + parseFloat(orderItem.price.replace('₦', '')) * orderItem.quantity
    )
  }, 0)

  // Ensure grandTotal is a number
  const subTotalNumber = parseFloat(subTotal.toFixed(2))

  // Calculate the discount amount (2% of the grand total)
  const discount = (subTotalNumber * 0.02).toFixed(2)

  // Ensure discount is a number
  const discountNumber = parseFloat(discount)

  // Calculate the final total after discount
  const totalAfterDiscount = (subTotalNumber - discountNumber).toFixed(2)

  const openModal = () => {
    setIsModalOpen(true)
  }

  const closeModal = () => {
    setOtpValue("")
    setIsModalOpen(false)
  }

  const handleSubmitOrder = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    setIsModalOpen(false)
    try {
      clearAllOrders()
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
        <div className="d-flex flex-column flex-xl-row">
          <div className="tw-flex md:tw-flex-row tw-flex-col tw-gap-3 flex-row-fluid me-xl-9 mb-10 mb-xl-0">
            <div className="card card-flush card-p-0 bg-transparent border-0">
              <div className="card-body">
                <div className="tab-content">
                  <div
                    className="tab-pane fade show active"
                    id="kt_pos_food_content_1"
                  >
                    <div className="d-flex flex-wrap d-grid gap-5 gap-xxl-9">
                      {items.map((item, index) => (
                        <div
                          key={index}
                          className="card card-flush flex-row-fluid p-6 pb-5 mw-100"
                        >
                          <div className="card-body tw-flex tw-flex-col tw-items-center">
                            <Image
                              src={item.imageSrc}
                              className="rounded-3 mb-4 w-150px h-150px w-xxl-200px h-xxl-200px"
                              alt=""
                              width={200}
                              height={200}
                            />

                            <div className="tw-flex tw-items-center tw-gap-4">
                              <div className="mb-2">
                                <div>
                                  <span className="fw-bold text-gray-800 cursor-pointer text-hover-primary fs-3 fs-xl-1">
                                    {item.name}
                                  </span>
                                  {/* <span className="text-gray-500 fw-semibold d-block fs-6 mt-n1">
                                    {item.cookTime}
                                  </span> */}
                                </div>
                                <span className="text-success text-end fw-bold fs-1">
                                  {item.price}
                                </span>
                              </div>
                              <button
                                type="button"
                                className="btn btn-icon btn-sm btn-light btn-icon-gray-500"
                                data-kt-dialer-control="increase"
                                onClick={() => addToOrder(item)}
                              >
                                <i className="ki-outline ki-plus fs-3x"></i>
                              </button>
                            </div>
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </div>
            {orderItems.length > 0 && (
              <div className="flex-row-auto w-xl-450px">
                <div className="card card-flush bg-body" id="kt_pos_form">
                  <div className="card-header pt-5">
                    <h3 className="card-title fw-bold text-gray-800 fs-2qx">
                      Current Order
                    </h3>
                    <div className="card-toolbar">
                      <button
                        className="btn btn-light-primary fs-4 fw-bold py-4"
                        onClick={clearAllOrders}
                      >
                        Clear All
                      </button>
                    </div>
                  </div>
                  <div className="card-body pt-0">
                    <div className="table-responsive mb-8">
                      <table className="table align-middle gs-0 gy-4 my-0">
                        <thead>
                          <tr>
                            <th className="min-w-175px"></th>
                            <th className="w-125px"></th>
                            <th className="w-60px"></th>
                          </tr>
                        </thead>
                        <tbody>
                          {orderItems.map((orderItem, index) => (
                            <tr key={index}>
                              <td className="pe-0">
                                <div className="d-flex align-items-center">
                                  <Image
                                    src={orderItem.imageSrc}
                                    className="w-50px h-50px rounded-3 me-3"
                                    alt=""
                                    width={50}
                                    height={50}
                                  />
                                  <span className="fw-bold text-gray-800 cursor-pointer text-hover-primary fs-6 me-1">
                                    {orderItem.name}
                                  </span>
                                </div>
                              </td>
                              <td className="pe-0">
                                <div
                                  className="position-relative d-flex align-items-center"
                                  data-kt-dialer="true"
                                  data-kt-dialer-min="1"
                                  data-kt-dialer-max="10"
                                  data-kt-dialer-step="1"
                                  data-kt-dialer-decimals="0"
                                >
                                  <button
                                    type="button"
                                    className="btn btn-icon btn-sm btn-light btn-icon-gray-500"
                                    onClick={() =>
                                      removeOrderItem(orderItem.name)
                                    }
                                  >
                                    <i className="ki-outline ki-minus fs-3x"></i>
                                  </button>
                                  <input
                                    type="text"
                                    className="form-control border-0 text-center px-0 fs-3 fw-bold text-gray-800 w-30px"
                                    data-kt-dialer-control="input"
                                    placeholder="Amount"
                                    name="manageBudget"
                                    readOnly={true}
                                    value={orderItem.quantity}
                                  />
                                  <button
                                    type="button"
                                    className="btn btn-icon btn-sm btn-light btn-icon-gray-500"
                                    onClick={() => addOrderItem(orderItem.name)}
                                  >
                                    <i className="ki-outline ki-plus fs-3x"></i>
                                  </button>
                                </div>
                              </td>
                              <td className="text-end">
                                <span
                                  className="fw-bold text-primary fs-2"
                                  data-kt-pos-element="item-total"
                                >
                                  ₦
                                  {(
                                    parseFloat(
                                      orderItem.price.replace('₦', '')
                                    ) * orderItem.quantity
                                  ).toFixed(2)}
                                </span>
                              </td>
                            </tr>
                          ))}
                        </tbody>
                      </table>
                    </div>
                    <div className="d-flex flex-stack bg-success rounded-3 p-6 mb-11">
                      <div className="fs-6 fw-bold text-white">
                        <span className="d-block lh-1 mb-2">Subtotal</span>
                        <span className="d-block mb-2">Discounts(2%)</span>
                        <span className="d-block mb-9">Tax(0%)</span>
                        <span className="d-block fs-2qx lh-1">Total</span>
                      </div>
                      <div className="fs-6 fw-bold text-white text-end">
                        <span
                          className="d-block lh-1 mb-2"
                          data-kt-pos-element="total"
                        >
                          ₦{subTotal}
                        </span>
                        <span
                          className="d-block mb-2"
                          data-kt-pos-element="discount"
                        >
                          -₦{discountNumber}
                        </span>
                        <span
                          className="d-block mb-9"
                          data-kt-pos-element="tax"
                        >
                          ₦0.00
                        </span>
                        <span
                          className="d-block fs-2qx lh-1"
                          data-kt-pos-element="grant-total"
                        >
                          ₦{totalAfterDiscount}
                        </span>
                      </div>
                    </div>
                    <div className="mb-8">
                      <h3 className="fw-bold text-gray-800 mb-3">Address</h3>

                      <textarea
                        className="form-control form-control form-control-solid"
                        data-kt-autosize="true"
                      ></textarea>
                    </div>
                    <div className="mb-5">
                      <h3 className="fw-bold text-gray-800 mb-3">
                        Apply Discout Code
                      </h3>

                      <textarea
                        className="form-control form-control form-control-solid"
                        data-kt-autosize="true"
                      ></textarea>
                    </div>
                    <>
                      <button
                        className="btn btn-primary fs-1 w-100 py-4"
                        onClick={openModal}
                      >
                        Proceed to Checkout
                      </button>
                      <Modal
                        isOpen={isModalOpen}
                        onClose={closeModal}
                        title={'Provide Authorization PIN to proceed.'}
                        buttonText={'Close'}
                        onSubmit={handleSubmitOrder}
                        submitText='continue'
                        submitStyle='btn btn-primary'
                      >
                        <div className="tw-flex tw-items-center tw-justify-center">
                          <OtpInput
                            inputStyle="inputStyle"
                            value={otpValue}
                            onChange={handleOtpChange}
                            inputType="password"
                            numInputs={4}
                            renderInput={(props) => <input {...props} />}
                          />
                        </div>
                      </Modal>
                    </>
                  </div>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  )
}

export default POS
