"use client";

import Image from "next/image";
import OtpInput from "react-otp-input";

import Logo from "@/assets/logos/main.png";
import WelcomeImage from "@/assets/images/welcome.png";
import Link from "next/link";
import { useState } from "react";

const WelcomePage = () => {
  const [emailOtp, setEmailOtp] = useState("");
  const [authorizationPin, setAuthorizationPin] = useState("");

  const [activeIndex, setActiveIndex] = useState<number | null>(null);
  console.log(activeIndex);

  const toggleAccordion = (index: number) => {
    setActiveIndex((prevIndex) => (prevIndex === index ? null : index));
  };
  return (
    <body className="welcomeBg app-blank bgi-size-cover bgi-position-center bgi-no-repeat">
      <div className="d-flex flex-column flex-root" id="kt_app_root">
        <div className="d-flex flex-column flex-center flex-column-fluid">
          <div className="d-flex flex-column flex-center text-center p-10">
            <div className="card card-flush w-md-650px py-5">
              <div className="card-body py-15 py-lg-20">
                <div className="mb-7">
                  <a href="/" className="">
                    <Image alt="Logo" src={Logo} width={226} height={42} />
                  </a>
                </div>

                <h1 className="fw-bolder text-gray-900 mb-5">
                  Welcome to Paytonic
                </h1>

                <div className="fw-semibold fs-6 text-gray-500 mb-7">
                  This is your opportunity to get creative and make a name
                  <br />
                  that gives readers an idea
                </div>

                <div className="mb-0">
                  <Image
                    src={WelcomeImage}
                    className="mw-200 mh-300px theme-light-show"
                    alt=""
                    width={300}
                    height={300}
                  />
                </div>

                <form
                  className="form w-100 accordion accordion-icon-toggle"
                  id="kt_accordion_2"
                >
                  <div className="mb-5">
                    <div
                      className={`accordion-header py-3 d-flex ${
                        activeIndex === 1 ? "show" : "collapsed"
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
                        activeIndex === 2 ? "show" : "collapsed"
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
                        activeIndex === 3 ? "show" : "collapsed"
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
                        activeIndex === 4 ? "show" : "collapsed"
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

                <div className="mb-0 mt-10">
                  <Link href="/dashboard" className="btn btn-sm btn-primary">
                    Proceed To Dashboard
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </body>
  );
};

export default WelcomePage;
