import { useRouter } from 'next/navigation'
import React, { useState } from 'react'
import { toast } from 'sonner'
import Modal from './Modal'

const Logout = () => {
  const router = useRouter()
  const [isModalOpen, setIsModalOpen] = useState(false)
  const openModal = () => setIsModalOpen(true)
  const closeModal = () => setIsModalOpen(false)

  const handleSubmitOrder = () => {
    closeModal()
    try {
      toast.success('Logged out successfully')
      setTimeout(() => {
        router.replace('/login')
      }, 2000)
    } catch (error) {
      console.log(error)
      toast.error('An error occurred while logging out, please try again later')
    }
  }
  return (
    <>
      <button onClick={openModal} className="btn btn-danger fw-semibold tw-flex tw-items-center tw-gap-2">
        Log Out{' '}
        <i className="ki-solid ki-black-right-line fs-1"></i>
      </button>
      <Modal
        isOpen={isModalOpen}
        onClose={closeModal}
        title={''}
        buttonText={'Close'}
        onSubmit={handleSubmitOrder}
        submitText="continue"
        submitStyle="btn btn-danger"
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
