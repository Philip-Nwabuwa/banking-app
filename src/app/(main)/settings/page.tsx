'use client'

import { useState } from 'react'
import Image from 'next/image'
import defaultAvatar from '@/assets/images/blank.svg'
import useUserStore from '@/store/profile'
import { ProfileType, ProfileUpdateSchema } from '@/lib/Validations/auth'
import { SubmitHandler, useForm } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'
import { useProfileUpdate } from '@/services/auth'
import axios from 'axios'
import { toast } from 'sonner'
import SubmitButton from '@/components/common/SubmitBtn'

const Settings = () => {
  const { isLoading: upadatingProfile, mutateAsync: mutatingProfile } =
    useProfileUpdate()
  const { userProfile } = useUserStore()
  const profileFirstName = userProfile?.first_name || ''
  const profileSurname = userProfile?.surname || ''
  const profileMiddleName = userProfile?.middle_name || ''
  // const profileAvatar = userProfile?.avatar || defaultAvatar
  // const profileEmail = userProfile?.email_address || ''
  const profileOccupation = userProfile?.occupation || ''
  // const profileAddress = userProfile?.contact.address || ''
  const [avatarImage, setAvatarImage] = useState<string>(defaultAvatar)

  const {
    register: registerProfile,
    handleSubmit: handleSubmitProfile,
    formState: { errors: errorsProfile },
    watch: watchProfile,
    control: controlProfile,
  } = useForm<ProfileType>({
    resolver: zodResolver(ProfileUpdateSchema),
  })

  const submitProfileSignup: SubmitHandler<ProfileType> = async (
    profileData
  ) => {
    console.log(profileData)
    try {
      const response = await mutatingProfile(profileData)
      console.log(response)
      toast.success(response.data.message)
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

  const handleImageChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0]
    if (file) {
      const reader = new FileReader()
      reader.onload = () => {
        const newImage = reader.result as string
        setAvatarImage(newImage)
      }
      reader.readAsDataURL(file)
    }
  }

  const handleRemoveAvatar = () => {
    console.log(defaultAvatar)
    setAvatarImage(defaultAvatar)
  }

  return (
    <div className="card !tw-rounded-se-none !tw-rounded-ss-none mb-5 mb-xl-10">
      <div className="card-header border-0 cursor-pointer">
        <div className="card-title m-0">
          <h3 className="fw-bold m-0">Profile Details</h3>
        </div>
      </div>

      <div className="collapse show">
        <div className="card-body border-top p-9">
          <div className="row mb-6">
            <label className="col-lg-4 col-form-label fw-semibold fs-6">
              Avatar
            </label>

            <div className="col-lg-8">
              <div
                className="image-input image-input-outline"
                data-kt-image-input="true"
              >
                <Image
                  className="image-input-wrapper w-125px h-125px"
                  width={125}
                  height={125}
                  src={avatarImage}
                  alt={'Default Avatar'}
                />

                <label
                  className="btn btn-icon btn-circle btn-active-color-primary w-25px h-25px bg-body shadow"
                  data-kt-image-input-action="change"
                  data-bs-toggle="tooltip"
                  title="Change avatar"
                >
                  <i className="ki-outline ki-pencil fs-7"></i>

                  <input
                    type="file"
                    name="avatar"
                    accept=".png, .jpg, .jpeg"
                    onChange={handleImageChange}
                  />
                </label>

                <span
                  className="btn btn-icon btn-circle btn-active-color-primary w-25px h-25px bg-body shadow"
                  data-kt-image-input-action="remove"
                  data-bs-toggle="tooltip"
                  title="Remove avatar"
                  onClick={handleRemoveAvatar}
                >
                  <i className="ki-outline ki-cross fs-2"></i>
                </span>
              </div>

              <div className="form-text">
                Allowed file types: png, jpg, jpeg.
              </div>
            </div>
          </div>
          <form className="form">
            <div className="row mb-6">
              <label className="col-lg-4 col-form-label required fw-semibold fs-6">
                Full Name
              </label>

              <div className="col-lg-8">
                <div className="row">
                  <div className="col-lg-6 fv-row">
                    <input
                      type="text"
                      defaultValue={profileFirstName}
                      className="form-control bg-transparent mb-3 mb-lg-0"
                      placeholder="First name"
                    />
                  </div>

                  <div className="col-lg-6 fv-row">
                    <input
                      type="text"
                      defaultValue={profileSurname}
                      name="lname"
                      className="form-control bg-transparent"
                      placeholder="Last name"
                    />
                  </div>

                  <div className="col-lg-6 fv-row tw-pt-4">
                    <input
                      type="text"
                      defaultValue={profileMiddleName}
                      name="middle name"
                      className="form-control bg-transparent"
                      placeholder="Middle name"
                    />
                  </div>
                </div>
              </div>
            </div>
            <div className="row mb-6">
              <label className="col-lg-4 col-form-label required fw-semibold fs-6">
                Company
              </label>

              <div className="col-lg-8 fv-row">
                <input
                  type="text"
                  name="company"
                  className="form-control bg-transparent"
                  placeholder="Company name"
                />
              </div>
            </div>
            <div className="row mb-6">
              <label className="col-lg-4 col-form-label fw-semibold fs-6">
                <span className="required">Contact Phone</span>
                <span
                  className="ms-1"
                  data-bs-toggle="tooltip"
                  title="Phone number must be active"
                >
                  <i className="ki-outline ki-information-5 text-gray-500 fs-6"></i>
                </span>
              </label>

              <div className="col-lg-8 fv-row">
                <input
                  type="tel"
                  name="phone"
                  className="form-control bg-transparent"
                  placeholder="Phone number"
                />
              </div>
            </div>
            <div className="row mb-6">
              <label className="col-lg-4 col-form-label fw-semibold fs-6">
                Occupation
              </label>

              <div className="col-lg-8 fv-row">
                <input
                  type="text"
                  defaultValue={profileOccupation}
                  name="occupation"
                  className="form-control bg-transparent"
                  placeholder="Occupation"
                />
              </div>
            </div>
          </form>
        </div>

        <div className="card-footer d-flex justify-content-end py-6 px-9">
          <button
            type="reset"
            className="btn btn-light btn-active-light-primary me-2"
          >
            Discard
          </button>
          <SubmitButton className="btn btn-primary" text="Save Changes" />
        </div>
      </div>
    </div>
  )
}

export default Settings
