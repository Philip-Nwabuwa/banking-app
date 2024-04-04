"use client";

import Logo from "@/app/assets/logos/custom-1.png";
import Image from "next/image";
import { SetStateAction, useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import zxcvbn from "zxcvbn";

import { Check } from "lucide-react";
import Link from "next/link";
import { validationSchema } from "@/lib/validation";

const SignupPage = () => {
  const [currentStep, setCurrentStep] = useState<number>(1);
  const [passwordVisible, setPasswordVisible] = useState(false);
  const [password, setPassword] = useState("");

  const [accountType, setAccountType] = useState<"personal" | "corporate">(
    "personal"
  );

  const handleAccountTypeChange = (type: "personal" | "corporate") => {
    setAccountType(type);
  };
  const stepsData = [
    { title: "Account Type", desc: "Select your account type" },
    { title: "Email", desc: "Provide your email address" },
    { title: "Password", desc: "Choose a strong password" },
    { title: "Bussiness Info", desc: "Provide your bussiness info" },
    { title: "Completed", desc: "Your account is created" },
  ];

  const {
    register,
    handleSubmit,
    formState: { errors },
    watch,
    setValue,
  } = useForm({
    resolver: zodResolver(validationSchema),
  });

  const confirmPassword = watch("confirmPassword");
  const isPasswordMatch = password === confirmPassword;

  const handleConfirmPasswordChange = (
    e: React.ChangeEvent<HTMLInputElement>
  ) => {
    setValue("confirmPassword", e.target.value);
  };

  const getPasswordStrength = () => {
    const result = zxcvbn(password);
    return result.score;
  };

  const passwordStrengthScore = getPasswordStrength();

  const handlePasswordChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const newPassword = e.target.value;
    setPassword(newPassword);
    setValue("password", newPassword);
  };

  const togglePasswordVisibility = () => {
    setPasswordVisible((prevState) => !prevState);
  };

  const handlePrevious = () => {
    setCurrentStep((prevStep) => Math.max(prevStep - 1, 1));
  };

  const handleNext = () => {
    if (validateStep(currentStep)) {
      setCurrentStep((prevStep) => prevStep + 1);
    }
  };

  const handleFormSubmit = () => {
    if (validateFinalStep()) {
      console.log("Form submitted successfully");
    }
  };

  const validateStep = (step: number): boolean => {
    return true;
  };

  const validateFinalStep = (): boolean => {
    return true;
  };
  return (
    <body id="kt_body" className="app-blank">
      <div className="d-flex flex-column flex-root" id="kt_app_root">
        <div className="d-flex flex-column flex-lg-row flex-column-fluid stepper stepper-pills stepper-column stepper-multistep">
          <div className="d-flex flex-column flex-lg-row-auto w-lg-350px w-xl-500px">
            <div className="signupBg d-flex flex-column position-lg-fixed top-0 bottom-0 w-lg-350px w-xl-500px scroll-y bgi-size-cover bgi-position-center">
              <div className="d-flex flex-center py-10 py-lg-20 mt-lg-20">
                <Link href="/">
                  <Image
                    alt="Logo"
                    src={Logo}
                    className="h-70px w-100"
                    height={70}
                    width={70}
                  />
                </Link>
              </div>

              <div className="d-flex flex-row-fluid justify-content-center p-10">
                <div className="stepper-nav">
                  {stepsData.map((stepData, index) => (
                    <div
                      key={index + 1}
                      className={`stepper-item ${
                        currentStep === index + 1 ? "current" : ""
                      }`}
                      data-kt-stepper-element="nav"
                    >
                      <div className="stepper-wrapper">
                        <div className="stepper-icon rounded-3">
                          {currentStep > index + 1 ? (
                            <Check className="text-success" />
                          ) : (
                            <span className="stepper-number">{index + 1}</span>
                          )}
                        </div>

                        <div className="stepper-label">
                          <h3 className="stepper-title fs-2">
                            {stepData.title}
                          </h3>
                          <div className="stepper-desc fw-normal">
                            {stepData.desc}
                          </div>
                        </div>
                      </div>

                      {index < stepsData.length - 1 && (
                        <div className="stepper-line h-40px"></div>
                      )}
                    </div>
                  ))}
                </div>
              </div>
              <div className="d-flex flex-center flex-wrap px-5 py-10">
                <div className="d-flex fw-normal">
                  <a
                    href="https://keenthemes.com"
                    className="text-success px-5"
                    target="_blank"
                  >
                    Terms
                  </a>
                  <a
                    href="https://devs.keenthemes.com"
                    className="text-success px-5"
                    target="_blank"
                  >
                    Plans
                  </a>
                  <a
                    href="https://1.envato.market/EA4JP"
                    className="text-success px-5"
                    target="_blank"
                  >
                    Contact Us
                  </a>
                </div>
              </div>
            </div>
          </div>

          <div className="d-flex flex-column flex-lg-row-fluid py-10">
            <div className="d-flex flex-center flex-column flex-column-fluid">
              <div className="w-lg-650px w-xl-700px p-10 p-lg-15 mx-auto">
                <form className="my-auto pb-5" noValidate>
                  <div
                    className={`step-content ${
                      currentStep === 1 ? "current" : ""
                    }`}
                    data-kt-stepper-element="content"
                  >
                    <div className="w-100">
                      <div className="pb-10 pb-lg-15">
                        <h2 className="fw-bold d-flex align-items-center text-gray-900">
                          Choose Account Type
                          <span
                            className="ms-1"
                            data-bs-toggle="tooltip"
                            title="Billing is issued based on your selected account typ"
                          >
                            <i className="ki-outline ki-information-5 text-gray-500 fs-6"></i>
                          </span>
                        </h2>

                        <div className="text-muted fw-semibold fs-6">
                          If you need more info, please check out{" "}
                          <a href="#" className="link-primary fw-bold">
                            Help Page
                          </a>
                          .
                        </div>
                      </div>

                      <div className="fv-row">
                        <div className="row">
                          <div className="col-lg-6">
                            <input
                              type="radio"
                              className="btn-check"
                              checked={accountType === "personal"}
                              onChange={() =>
                                handleAccountTypeChange("personal")
                              }
                            />
                            <label className="btn btn-outline btn-outline-dashed btn-active-light-primary p-7 d-flex align-items-center mb-10">
                              <i className="ki-outline ki-badge fs-3x me-5"></i>
                              <span className="d-block fw-semibold text-start">
                                <span className="text-gray-900 fw-bold d-block fs-4 mb-2">
                                  Personal Account
                                </span>
                                <span className="text-muted fw-semibold fs-6">
                                  If you need more info, please check it out
                                </span>
                              </span>
                            </label>
                          </div>

                          <div className="col-lg-6">
                            <input
                              type="radio"
                              className="btn-check"
                              checked={accountType === "corporate"}
                              onChange={() =>
                                handleAccountTypeChange("corporate")
                              }
                            />
                            <label className="btn btn-outline btn-outline-dashed btn-active-light-primary p-7 d-flex align-items-center">
                              <i className="ki-outline ki-briefcase fs-3x me-5"></i>
                              <span className="d-block fw-semibold text-start">
                                <span className="text-gray-900 fw-bold d-block fs-4 mb-2">
                                  Corporate Account
                                </span>
                                <span className="text-muted fw-semibold fs-6">
                                  Create corporate account to manage users
                                </span>
                              </span>
                            </label>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>

                  <div
                    className={`step-content ${
                      currentStep === 2 ? "current" : ""
                    }`}
                    data-kt-stepper-element="content"
                  >
                    <div className="w-100">
                      <div className="pb-10 pb-lg-15">
                        <h2 className="fw-bold text-gray-900">Email Address</h2>

                        <div className="text-muted fw-semibold fs-6">
                          If you need more info, please check out{" "}
                          <Link href="/help" className="link-primary fw-bold">
                            Help Page
                          </Link>
                          .
                        </div>
                      </div>
                      <div className="mb-10 fv-row">
                        <div className="fv-row mb-0">
                          <label className="fs-6 fw-semibold form-label required">
                            Contact Email
                          </label>

                          <input
                            name="business_email"
                            className="form-control form-control-lg form-control-solid"
                          />
                        </div>
                      </div>
                    </div>
                  </div>

                  <div
                    className={`step-content ${
                      currentStep === 3 ? "current" : ""
                    }`}
                    data-kt-stepper-element="content"
                  >
                    <div className="w-100">
                      <div className="pb-10 pb-lg-15">
                        <h2 className="fw-bold text-gray-900">
                          Setup Password
                        </h2>

                        <div className="text-muted fw-semibold fs-6">
                          If you need more info, please check out{" "}
                          <Link href="/help" className="text-primary fw-bold">
                            Help Page
                          </Link>
                          .
                        </div>
                      </div>

                      <div className="d-flex flex-column mb-7 fv-row">
                        <form className="form w-100">
                          <div
                            className="fv-row mb-8"
                            data-kt-password-meter="true"
                          >
                            <div className="mb-1">
                              <div className="position-relative mb-3">
                                <input
                                  className="form-control bg-transparent"
                                  type={passwordVisible ? "text" : "password"}
                                  placeholder="Password"
                                  name="password"
                                  value={password}
                                  onChange={handlePasswordChange}
                                />
                                <span
                                  className="btn btn-sm btn-icon position-absolute translate-middle top-50 end-0 me-n2"
                                  data-kt-password-meter-control="visibility"
                                  onClick={togglePasswordVisibility}
                                >
                                  {passwordVisible ? (
                                    <i className="ki-outline ki-eye fs-2"></i>
                                  ) : (
                                    <i className="ki-outline ki-eye-slash fs-2"></i>
                                  )}
                                </span>
                              </div>
                              {password && (
                                <div
                                  className="d-flex align-items-center mb-3"
                                  data-kt-password-meter-control="highlight"
                                >
                                  <div
                                    className={`flex-grow-1 bg-secondary bg-active-success rounded h-5px me-2 ${
                                      passwordStrengthScore >= 1
                                        ? "bg-success"
                                        : ""
                                    }`}
                                  ></div>
                                  <div
                                    className={`flex-grow-1 bg-secondary bg-active-success rounded h-5px me-2 ${
                                      passwordStrengthScore >= 2
                                        ? "bg-success"
                                        : ""
                                    }`}
                                  ></div>
                                  <div
                                    className={`flex-grow-1 bg-secondary bg-active-success rounded h-5px me-2 ${
                                      passwordStrengthScore >= 3
                                        ? "bg-success"
                                        : ""
                                    }`}
                                  ></div>
                                  <div
                                    className={`flex-grow-1 bg-secondary bg-active-success rounded h-5px ${
                                      passwordStrengthScore === 4
                                        ? "bg-success"
                                        : ""
                                    }`}
                                  ></div>
                                </div>
                              )}
                            </div>

                            <div className="text-muted">
                              Use 8 or more characters with a mix of letters,
                              numbers & symbols.
                            </div>
                          </div>

                          <div className="fv-row mb-8">
                            <input
                              type={passwordVisible ? "text" : "password"}
                              placeholder="Confirm Password"
                              name="confirmPassword"
                              className="form-control bg-transparent"
                              value={confirmPassword}
                              onChange={handleConfirmPasswordChange}
                            />
                            {!isPasswordMatch && (
                              <div className="text-danger">
                                Passwords do not match
                              </div>
                            )}
                          </div>
                        </form>
                      </div>
                    </div>
                  </div>

                  <div
                    className={`step-content ${
                      currentStep === 4 ? "current" : ""
                    }`}
                    data-kt-stepper-element="content"
                  >
                    <div className="w-100">
                      <div className="pb-10 pb-lg-12">
                        <h2 className="fw-bold text-gray-900">
                          Business Details
                        </h2>

                        <div className="text-muted fw-semibold fs-6">
                          If you need more info, please check out
                          <a href="#" className="link-primary fw-bold">
                            Help Page
                          </a>
                          .
                        </div>
                      </div>

                      <div className="fv-row mb-10">
                        <label className="form-label required">
                          Business Name
                        </label>

                        <input
                          name="business_name"
                          className="form-control form-control-lg form-control-solid"
                        />
                      </div>

                      <div className="fv-row mb-10">
                        <label className="d-flex align-items-center form-label">
                          <span className="required">Shortened Descriptor</span>
                          <span
                            className="lh-1 ms-1"
                            data-bs-toggle="popover"
                            data-bs-trigger="hover"
                            data-bs-html="true"
                            data-bs-content='&lt;div className=&#039;p-4 rounded bg-light&#039;&gt; &lt;div className=&#039;d-flex flex-stack text-muted mb-4&#039;&gt; &lt;i className="ki-outline ki-bank fs-3 me-3"&gt;&lt;/i&gt; &lt;div className=&#039;fw-bold&#039;&gt;INCBANK **** 1245 STATEMENT&lt;/div&gt; &lt;/div&gt; &lt;div className=&#039;d-flex flex-stack fw-semibold text-gray-600&#039;&gt; &lt;div&gt;Amount&lt;/div&gt; &lt;div&gt;Transaction&lt;/div&gt; &lt;/div&gt; &lt;div className=&#039;separator separator-dashed my-2&#039;&gt;&lt;/div&gt; &lt;div className=&#039;d-flex flex-stack text-gray-900 fw-bold mb-2&#039;&gt; &lt;div&gt;USD345.00&lt;/div&gt; &lt;div&gt;KEENTHEMES*&lt;/div&gt; &lt;/div&gt; &lt;div className=&#039;d-flex flex-stack text-muted mb-2&#039;&gt; &lt;div&gt;USD75.00&lt;/div&gt; &lt;div&gt;Hosting fee&lt;/div&gt; &lt;/div&gt; &lt;div className=&#039;d-flex flex-stack text-muted&#039;&gt; &lt;div&gt;USD3,950.00&lt;/div&gt; &lt;div&gt;Payrol&lt;/div&gt; &lt;/div&gt; &lt;/div&gt;'
                          >
                            <i className="ki-outline ki-information-5 text-gray-500 fs-6"></i>
                          </span>
                        </label>

                        <input
                          name="business_descriptor"
                          className="form-control form-control-lg form-control-solid"
                        />

                        <div className="form-text">
                          Customers will see this shortened version of your
                          statement descriptor
                        </div>
                      </div>

                      <div className="fv-row mb-10">
                        <label className="form-label required">
                          Corporation Type
                        </label>

                        <select
                          name="business_type"
                          className="form-select form-select-lg form-select-solid"
                          data-control="select2"
                          data-placeholder="Select..."
                          data-allow-clear="true"
                          data-hide-search="true"
                        >
                          <option></option>
                          <option value="1">S Corporation</option>
                          <option value="1">C Corporation</option>
                          <option value="2">Sole Proprietorship</option>
                          <option value="3">Non-profit</option>
                          <option value="4">Limited Liability</option>
                          <option value="5">General Partnership</option>
                        </select>
                      </div>
                      <div className="fv-row mb-10">
                        <label className="form-label">
                          Business Description
                        </label>
                        <textarea
                          name="business_description"
                          className="form-control form-control-lg form-control-solid"
                        ></textarea>
                      </div>

                      <div className="fv-row mb-0">
                        <label className="fs-6 fw-semibold form-label required">
                          Business Email
                        </label>

                        <input
                          name="business_email"
                          className="form-control form-control-lg form-control-solid"
                        />
                      </div>
                    </div>
                  </div>

                  <div
                    className={`step-content ${
                      currentStep === 5 ? "current" : ""
                    }`}
                    data-kt-stepper-element="content"
                  >
                    <div className="w-100">
                      <div className="pb-8 pb-lg-10">
                        <h2 className="fw-bold text-gray-900">
                          Your Are Done!
                        </h2>

                        <div className="text-muted fw-semibold fs-6">
                          If you need more info, please
                          <a href="#" className="link-primary fw-bold">
                            Sign In
                          </a>
                          .
                        </div>
                      </div>

                      <div className="mb-0">
                        <div className="fs-6 text-gray-600 mb-5">
                          Writing headlines for blog posts is as much an art as
                          it is a science and probably warrants its own post,
                          but for all advise is with what works for your great &
                          amazing audience.
                        </div>

                        <div className="notice d-flex bg-light-warning rounded border-warning border border-dashed p-6">
                          <i className="ki-outline ki-information fs-2tx text-warning me-4"></i>

                          <div className="d-flex flex-stack flex-grow-1">
                            <div className="fw-semibold">
                              <h4 className="text-gray-900 fw-bold">
                                We need your attention!
                              </h4>
                              <div className="fs-6 text-gray-700">
                                To start using great tools, please,
                                <a
                                  href="utilities/wizards/vertical.html"
                                  className="fw-bold"
                                >
                                  Create Team Platform
                                </a>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>

                  <div className="d-flex flex-stack pt-15">
                    <div className="mr-2">
                      {currentStep !== 1 && (
                        <button
                          type="button"
                          className="btn btn-lg btn-light-primary me-3"
                          onClick={handlePrevious}
                        >
                          <i className="ki-outline ki-arrow-left fs-4 me-1"></i>
                          Previous
                        </button>
                      )}
                    </div>
                    <div>
                      {currentStep !== 4 ? (
                        <button
                          type="button"
                          className="btn btn-lg btn-primary"
                          onClick={handleNext}
                        >
                          Continue
                          <i className="ki-outline ki-arrow-right fs-4 ms-1"></i>
                        </button>
                      ) : (
                        <button
                          type="button"
                          className="btn btn-lg btn-primary"
                          onClick={handleFormSubmit}
                        >
                          <span className="indicator-label">
                            Submit
                            <i className="ki-outline ki-arrow-right fs-4 ms-2"></i>
                          </span>
                          <span className="indicator-progress">
                            Please wait...
                            <span className="spinner-border spinner-border-sm align-middle ms-2"></span>
                          </span>
                        </button>
                      )}
                    </div>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </body>
  );
};

export default SignupPage;
