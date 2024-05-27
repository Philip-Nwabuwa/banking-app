'use client'

import React, { useState } from 'react'
import { toast } from 'sonner'
import Modal from './Modal'
import { useLogout } from '@/services/auth'
import axios from 'axios'
import { clearAllCookies } from '@/store/cookie'
import { triggerAuthRedirect } from '@/hooks/useAuthRedirect'
import useUserStore from '@/store/profile'

const Logout = () => {
  const { mutateAsync } = useLogout()
  const { clearUserData } = useUserStore()
  const [isModalOpen, setIsModalOpen] = useState(false)
  const openModal = () => setIsModalOpen(true)
  const closeModal = () => setIsModalOpen(false)

  const handleSubmitOrder = async () => {
    closeModal()
    try {
      const response = await mutateAsync()
      toast.success(response.data.message)
      clearAllCookies()
      clearUserData()
      setTimeout(() => {
        triggerAuthRedirect()
      }, 2000)
    } catch (error) {
      console.log(error)

      if (axios.isAxiosError(error)) {
        const serverError = error.response?.data
        if (serverError && serverError.details) {
          toast.error(serverError.details)
        } else {
          toast.error(serverError.message)
        }
      } else {
        toast.error('An error occurred:')
      }
    }
  }
  return (
    <>
      <button
        onClick={openModal}
        className="btn btn-light-danger !tw-py-2 !tw-px-5 fw-semibold tw-flex tw-items-center tw-justify-center tw-gap-2"
      >
        Log Out <i className="ki-solid ki-black-right-line fs-1"></i>
      </button>
      <Modal
        isOpen={isModalOpen}
        onClose={closeModal}
        title={''}
        buttonText={'Close'}
        onSubmit={handleSubmitOrder}
        submitText="Logout"
        submitStyle="btn btn-light-danger"
      >
        <div className="tw-text-center">
          <p className="tw-font-bold tw-text-2xl">
            Are you sure you want to logout?
          </p>
        </div>
      </Modal>
    </>
  )
}

export default Logout
