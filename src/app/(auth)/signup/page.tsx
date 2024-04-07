"use client";

import Logo from "@/assets/logos/main.png";
import Image from "next/image";
import { useState } from "react";
import { FieldValues, SubmitHandler, useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import zxcvbn from "zxcvbn";

import { Check } from "lucide-react";
import Link from "next/link";
import RadioButton from "@/componets/common/RadioButton";
import SubmitButton from "@/componets/common/SubmitBtn";
import Button from "@/componets/common/Button";
import { toast } from "sonner";
import { SignUpSchema } from "@/lib/validation";

const SignupPage = () => {
  const [currentStep, setCurrentStep] = useState<number>(1);
  const [passwordVisible, setPasswordVisible] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [accountType, setAccountType] = useState("personal");

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
    resolver: zodResolver(SignUpSchema),
  });

  console.log(errors);
    console.log("accountType", accountType);

  const handleRadioChange = (value: any) => {
    
    
    setAccountType(value);
    setValue('accountType', value);
  };

  const password = watch("password");

  const getPasswordStrength = () => {
    if (password) {
      const result = zxcvbn(password);
      return result.score;
    }
    return 0;
  };

  const passwordStrengthScore = password ? getPasswordStrength() : 0;

  const togglePasswordVisibility = () => {
    setPasswordVisible((prevState) => !prevState);
  };

  const handlePrevious = () => {
    setCurrentStep((prevStep) => Math.max(prevStep - 1, 1));
  };

  const handleNext = () => {
    setCurrentStep((prevStep) => prevStep + 1);
  };

  const onSubmit: SubmitHandler<FieldValues> = async (data) => {
    console.log("Form submitted with data:", data);
    setIsSubmitting(true);
    try {
      setIsSubmitting(false);
      toast.success("Account created successfully");
      console.log(data);
    } catch (error) {
      setIsSubmitting(false);
      console.error(error);
      toast.error("Failed to create account");
    }
  };

  return (
    <body className="app-blank">
      <div className="d-flex flex-column flex-root">
        <div className="d-flex flex-column flex-lg-row flex-column-fluid stepper stepper-pills stepper-column stepper-multistep">
          <div className="d-flex flex-column flex-lg-row-auto w-lg-350px w-xl-500px">
            <div className="signupBg d-flex flex-column position-lg-fixed top-0 bottom-0 w-lg-350px w-xl-500px scroll-y bgi-size-cover bgi-position-center">
              <div className="d-flex flex-center py-10 py-lg-20 mt-lg-20">
                <Link href="/">
                  <Image
                    alt="Logo"
                    src={Logo}
                    className="h-100 w-100"
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
                <form
                  className="my-auto pb-5"
                  onSubmit={handleSubmit(onSubmit)}
                  noValidate
                >
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
                          <RadioButton
                            id="badge"
                            value="personal"
                            checked={accountType === "personal"}
                            label="Personal Account"
                            description="If you need more info, please check it out"
                            onRadioButtonChange={() => handleRadioChange("personal")}
                          />
                          <RadioButton
                            id="briefcase"
                            value="corporate"
                            checked={accountType === "corporate"}
                            label="Corporate Account"
                            description="Create corporate account to manage users"
                            onRadioButtonChange={() => handleRadioChange("corporate")}
                          />
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
                            className="form-control form-control-lg form-control-solid"
                            type="email"
                            {...register("email")}
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
                          <div className="fv-row mb-8">
                            <div className="mb-1">
                              <div className="position-relative mb-3">
                                <input
                                  className="form-control bg-transparent"
                                  type={passwordVisible ? "text" : "password"}
                                  placeholder="Password"
                                  {...register("password")}
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
                              className="form-control bg-transparent"
                              {...register("confirmPassword")}
                            />
                            {/* {errors.confirmPassword && (
                              <div className="text-danger">
                                Passwords do not match
                              </div>
                            )} */}
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
                          className="form-control form-control-lg form-control-solid"
                          {...register("business_name")}
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
                          className="form-control form-control-lg form-control-solid"
                          {...register("business_descriptor")}
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
                          className="form-select form-select-lg form-select-solid"
                          data-control="select2"
                          data-placeholder="Select..."
                          data-allow-clear="true"
                          data-hide-search="true"
                          {...register("business_type")}
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
                          className="form-control form-control-lg form-control-solid"
                          {...register("business_description")}
                        ></textarea>
                      </div>

                      <div className="fv-row mb-0">
                        <label className="fs-6 fw-semibold form-label required">
                          Business Email
                        </label>

                        <input
                          className="form-control form-control-lg form-control-solid"
                          {...register("business_email")}
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
                      {currentStep !== 1 && currentStep !== 5 && (
                        <Button
                          onClick={handlePrevious}
                          text="Previous"
                          iconClass="ki-arrow-left"
                          position="me-1"
                        />
                      )}
                    </div>
                    <div>
                      {((accountType === "personal" && currentStep < 3) ||
                        (accountType === "corporate" && currentStep < 4)) && (
                        <Button
                          disabled={isSubmitting}
                          onClick={handleNext}
                          text="Continue"
                          iconClass="ki-arrow-right"
                          position="ms-1"
                        />
                      )}

                      {((accountType === "personal" && currentStep === 3) ||
                        (accountType === "corporate" && currentStep === 4)) && (
                        <SubmitButton
                          onClick={handleSubmit(onSubmit)}
                          isSubmitting={isSubmitting}
                          disabled={isSubmitting}
                          text="Sign In"
                        />
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
