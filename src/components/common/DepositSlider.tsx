'use client'

import React, { useState } from 'react'
import Image from 'next/image'
import Logo from '@/assets/icon/first-bank-logo.svg'

type DataItem = {
  image?: any
  accountName?: string
  accountNumber?: string
  bankName?: string
  isButton: boolean
  buttonText: string
  onClick: () => void
}

const data: DataItem[] = [
  {
    image: Logo,
    accountName: 'PT-John Doe',
    accountNumber: '0988017113',
    bankName: 'First bank of Nigeria',
    isButton: false,
    buttonText: '',
    onClick: () => {},
  },
  {
    image: Logo,
    accountName: 'PT-Nicholas Yashim',
    accountNumber: '0988017113',
    bankName: 'First bank of Nigeria',
    isButton: false,
    buttonText: '',
    onClick: () => {},
  },
  {
    image: Logo,
    accountName: 'PT-Nicholas Yashim',
    accountNumber: '0988017113',
    bankName: 'Zenith',
    isButton: false,
    buttonText: '',
    onClick: () => {},
  },
]

const additionalItem: DataItem = {
  isButton: true,
  buttonText: 'Create Account',
  onClick: () => {
    console.log('Create Account clicked')
  },
}

const allItems = data.length > 0 ? [...data, additionalItem] : [additionalItem]

const DepositSlider = () => {
  const [currentIndex, setCurrentIndex] = useState(0)

  const goToNextSlide = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === allItems.length - 1 ? 0 : prevIndex + 1
    )
  }

  const goToPreviousSlide = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? allItems.length - 1 : prevIndex - 1
    )
  }

  return (
    <div className="tw-w-full tw-mb-4 tw-border-y border-gray-300 border-dashed w-100 py-2 px-4">
      <h3 className="tw-pt-2">Wallet Funding</h3>

      <div className="tw-overflow-hidden tw-w-full tw-py-3">
        <div
          className="tw-flex tw-transition-transform tw-duration-300"
          style={{ transform: `translateX(-${currentIndex * 100}%)` }}
        >
          {allItems.map((item, index) => (
            <div
              key={index}
              className="tw-w-full tw-flex-shrink-0 tw-flex tw-gap-3 tw-items-center"
            >
              {item.isButton ? (
                <div className="tw-flex tw-justify-center tw-items-center tw-w-full ">
                  <button
                    onClick={item.onClick}
                    className="btn btn-primary !tw-flex !tw-items-center !tw-gap-2"
                  >
                    <div>{item.buttonText}</div>
                    <i className="ki-duotone ki-plus-square fs-2">
                      <span className="path1"></span>
                      <span className="path2"></span>
                      <span className="path3"></span>
                    </i>
                  </button>
                </div>
              ) : (
                <>
                  <Image
                    src={item.image}
                    className="tw-rounded-full tw-w-[60px] tw-h-[60px]"
                    alt={'bank image'}
                    width={200}
                    height={200}
                  />
                  <div>
                    <div className="tw-font-bold tw-text-lg">
                      {item.accountName}
                    </div>
                    <div className="tw-text-gray-400">{item.accountNumber}</div>
                    <div className="tw-text-gray-400">{item.bankName}</div>
                  </div>
                </>
              )}
            </div>
          ))}
        </div>
      </div>
      <div
        className={`tw-flex tw-w-full tw-pb-2 tw-justify-between tw-items-center ${
          currentIndex === 0 ? '!tw-justify-end' : ''
        }`}
      >
        <button
          className={`tw-flex tw-items-center tw-justify-center tw-z-10 tw-bg-gray-200 tw-p-3 tw-rounded-full tw-opacity-50 ${
            currentIndex === 0 ? 'tw-hidden' : ''
          }`}
          onClick={goToPreviousSlide}
        >
          <i className="ki-duotone ki-left !tw-text-black tw-text-lg"></i>
        </button>
        <button
          className={`tw-flex tw-items-center tw-justify-center tw-z-10 tw-bg-gray-200 tw-p-3 tw-rounded-full tw-opacity-50 ${
            currentIndex === allItems.length - 1 ? 'tw-hidden' : ''
          }`}
          onClick={goToNextSlide}
        >
          <i className="ki-duotone ki-right !tw-text-black tw-text-lg"></i>
        </button>
      </div>
    </div>
  )
}

export default DepositSlider
