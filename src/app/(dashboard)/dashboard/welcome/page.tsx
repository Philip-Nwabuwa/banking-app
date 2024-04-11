'use client'

import Image from 'next/image'
import OtpInput from 'react-otp-input'

import Logo from '@/assets/logos/main.png'
import WelcomeImage from '@/assets/images/welcome.png'
import Link from 'next/link'
import { useState } from 'react'

const WelcomePage = () => {
  const [emailOtp, setEmailOtp] = useState('')
  const [authorizationPin, setAuthorizationPin] = useState('')

  const [activeIndex, setActiveIndex] = useState<number | null>(null)
  console.log(activeIndex)

  const toggleAccordion = (index: number) => {
    setActiveIndex((prevIndex) => (prevIndex === index ? null : index))
  }
  return (
    <div className="app-main flex-column flex-row-fluid" id="kt_app_main">
      <div className="d-flex flex-column flex-column-fluid">
        <div id="kt_app_toolbar" className="app-toolbar py-3 py-lg-0">
          <div className="app-container container-xxl d-flex flex-stack">
            <div className="page-title d-flex flex-column justify-content-center me-3">
              <h1 className="page-heading d-flex text-gray-900 fw-bold fs-3 flex-column justify-content-center my-0">
                Upgrade Status
              </h1>
              <ul className="breadcrumb breadcrumb-separatorless fw-semibold fs-7 my-0 pt-1">
                <li className="breadcrumb-item text-muted">
                  <Link
                    href="index.html"
                    className="text-muted text-hover-primary"
                  >
                    Home
                  </Link>
                </li>
                <li className="breadcrumb-item">
                  <span className="bullet bg-gray-500 w-5px h-2px"></span>
                </li>
                <li className="breadcrumb-item text-muted">Welcome</li>
              </ul>
            </div>
          </div>
        </div>
        <div id="kt_app_content" className="app-content flex-column-fluid">
          <div
            id="kt_app_content_container"
            className="app-container container-xxl"
          >
            <div className="card">
              <div className="card-body">
                <div className="card-px text-center pt-15 pb-15">
                  <h2 className="fs-2x fw-bold mb-0">Welcome to Paytonic</h2>
                  <p className="text-gray-500 fs-4 fw-semibold py-7">
                    Fill in the details below to fully activate your account.
                  </p>
                </div>
                <form
                  className="form w-100 accordion accordion-icon-toggle"
                  id="kt_accordion_2"
                >
                  <div className="mb-5">
                    <div
                      className={`accordion-header py-3 d-flex ${
                        activeIndex === 1 ? 'show' : 'collapsed'
                      }`}
                      onClick={() => toggleAccordion(1)}
                    >
                      <span className="accordion-icon">
                        <i className="ki-duotone ki-arrow-right fs-4">
                          <span className="path1"></span>
                          <span className="path2"></span>
                        </i>
                      </span>
                      <h3 className="fs-4 fw-semibold mb-0 ms-4">Email OTP</h3>
                    </div>
                    {activeIndex === 1 && (
                      <div className="fs-6 collapse show ps-10">
                        <OtpInput
                          inputStyle="inputStyle"
                          value={emailOtp}
                          onChange={setEmailOtp}
                          numInputs={4}
                          renderSeparator={<span>-</span>}
                          renderInput={(props) => <input {...props} />}
                        />
                      </div>
                    )}
                  </div>
                  <div className="mb-5">
                    <div
                      className={`accordion-header py-3 d-flex ${
                        activeIndex === 2 ? 'show' : 'collapsed'
                      }`}
                      onClick={() => toggleAccordion(2)}
                    >
                      <span className="accordion-icon">
                        <i className="ki-duotone ki-arrow-right fs-4">
                          <span className="path1"></span>
                          <span className="path2"></span>
                        </i>
                      </span>
                      <h3 className="fs-4 fw-semibold mb-0 ms-4">Username</h3>
                    </div>
                    {activeIndex === 2 && (
                      <div className="fs-6 collapse show ps-10">
                        <input
                          type="text"
                          placeholder="Username"
                          className={`form-control bg-transparent`}
                        />
                      </div>
                    )}
                  </div>
                  <div className="mb-5">
                    <div
                      className={`accordion-header py-3 d-flex ${
                        activeIndex === 3 ? 'show' : 'collapsed'
                      }`}
                      onClick={() => toggleAccordion(3)}
                    >
                      <span className="accordion-icon">
                        <i className="ki-duotone ki-arrow-right fs-4">
                          <span className="path1"></span>
                          <span className="path2"></span>
                        </i>
                      </span>
                      <h3 className="fs-4 fw-semibold mb-0 ms-4">
                        Update KYC (BVN)
                      </h3>
                    </div>
                    {activeIndex === 3 && (
                      <div
                        id="kt_accordion_2_item_2"
                        className="collapse fs-6 ps-10"
                        data-bs-parent="#kt_accordion_2"
                      >
                        <input
                          type="number"
                          placeholder="BVN"
                          className={`form-control bg-transparent `}
                        />
                      </div>
                    )}
                  </div>
                  <div className="mb-5">
                    <div
                      className={`accordion-header py-3 d-flex ${
                        activeIndex === 4 ? 'show' : 'collapsed'
                      }`}
                      onClick={() => toggleAccordion(4)}
                    >
                      <span className="accordion-icon">
                        <i className="ki-duotone ki-arrow-right fs-4">
                          <span className="path1"></span>
                          <span className="path2"></span>
                        </i>
                      </span>
                      <h3 className="fs-4 fw-semibold mb-0 ms-4">
                        Authorization Pin
                      </h3>
                    </div>
                    {activeIndex === 4 && (
                      <div
                        id="kt_accordion_2_item_3"
                        className="collapse fs-6 ps-10"
                        data-bs-parent="#kt_accordion_2"
                      >
                        <OtpInput
                          inputStyle="inputStyle"
                          value={authorizationPin}
                          onChange={setAuthorizationPin}
                          numInputs={4}
                          renderSeparator={<span>-</span>}
                          renderInput={(props) => <input {...props} />}
                        />
                      </div>
                    )}
                  </div>
                </form>
                <Link
                  href="/dashboard"
                  className="btn btn-primary er fs-6 px-8 py-4"
                  data-bs-toggle="modal"
                  data-bs-target="#kt_modal_upgrade_plan"
                >
                  Submit
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default WelcomePage
