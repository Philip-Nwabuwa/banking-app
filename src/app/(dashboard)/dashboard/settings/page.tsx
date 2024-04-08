import Image from "next/image";

import UserImage from "@/assets/images/300-1.jpg"

const page = () => {
  return (
    <div className="d-flex flex-column flex-column-fluid">
      <div id="kt_app_toolbar" className="app-toolbar py-3 py-lg-0">
        <div
          id="kt_app_toolbar_container"
          className="app-container container-xxl d-flex flex-stack"
        >
          <div className="page-title d-flex flex-column justify-content-center me-3">
            <h1 className="page-heading d-flex text-gray-900 fw-bold fs-3 flex-column justify-content-center my-0">
              Account Settings
            </h1>
            <ul className="breadcrumb breadcrumb-separatorless fw-semibold fs-7 my-0 pt-1">
              <li className="breadcrumb-item text-muted">
                <a href="index.html" className="text-muted text-hover-primary">
                  Home
                </a>
              </li>
              <li className="breadcrumb-item">
                <span className="bullet bg-gray-500 w-5px h-2px"></span>
              </li>
              <li className="breadcrumb-item text-muted">Account</li>
            </ul>
          </div>
          <div className="d-flex align-items-center gap-2 gap-lg-3">
            <div className="m-0">
              <a
                href="#"
                className="btn btn-sm btn-flex btn-secondary fw-bold"
                data-kt-menu-trigger="click"
                data-kt-menu-placement="bottom-end"
              >
                <i className="ki-outline ki-filter fs-6 text-muted me-1"></i>
                Filter
              </a>
              <div
                className="menu menu-sub menu-sub-dropdown w-250px w-md-300px"
                data-kt-menu="true"
                id="kt_menu_65a10da34adcb"
              >
                <div className="px-7 py-5">
                  <div className="fs-5 text-gray-900 fw-bold">
                    Filter Options
                  </div>
                </div>
                <div className="separator border-gray-200"></div>
                <div className="px-7 py-5">
                  <div className="mb-10">
                    <label className="form-label fw-semibold">Status:</label>
                    <div>
                      <select
                        className="form-select form-select-solid"
                        // multiple="multiple"
                        data-kt-select2="true"
                        data-close-on-select="false"
                        data-placeholder="Select option"
                        data-dropdown-parent="#kt_menu_65a10da34adcb"
                        data-allow-clear="true"
                      >
                        <option></option>
                        <option value="1">Approved</option>
                        <option value="2">Pending</option>
                        <option value="2">In Process</option>
                        <option value="2">Rejected</option>
                      </select>
                    </div>
                  </div>
                  <div className="mb-10">
                    <label className="form-label fw-semibold">
                      Member Type:
                    </label>
                    <div className="d-flex">
                      <label className="form-check form-check-sm form-check-custom form-check-solid me-5">
                        <input
                          className="form-check-input"
                          type="checkbox"
                          value="1"
                        />
                        <span className="form-check-label">Author</span>
                      </label>
                      <label className="form-check form-check-sm form-check-custom form-check-solid">
                        <input
                          className="form-check-input"
                          type="checkbox"
                          value="2"
                        />
                        <span className="form-check-label">Customer</span>
                      </label>
                    </div>
                  </div>
                  <div className="mb-10">
                    <label className="form-label fw-semibold">
                      Notifications:
                    </label>

                    <div className="form-check form-switch form-switch-sm form-check-custom form-check-solid">
                      <input
                        className="form-check-input"
                        type="checkbox"
                        value=""
                        name="notifications"
                      />
                      <label className="form-check-label">Enabled</label>
                    </div>
                  </div>
                  <div className="d-flex justify-content-end">
                    <button
                      type="reset"
                      className="btn btn-sm btn-light btn-active-light-primary me-2"
                      data-kt-menu-dismiss="true"
                    >
                      Reset
                    </button>
                    <button
                      type="submit"
                      className="btn btn-sm btn-primary"
                      data-kt-menu-dismiss="true"
                    >
                      Apply
                    </button>
                  </div>
                </div>
              </div>
            </div>

            <a
              href="#"
              className="btn btn-sm fw-bold btn-primary"
              data-bs-toggle="modal"
              data-bs-target="#kt_modal_create_app"
            >
              Create
            </a>
          </div>
        </div>
      </div>

      <div id="kt_app_content" className="app-content flex-column-fluid">
        <div
          id="kt_app_content_container"
          className="app-container container-xxl"
        >
          <div className="card mb-5 mb-xl-10">
            <div className="card-body pt-9 pb-0">
              <div className="d-flex flex-wrap flex-sm-nowrap">
                <div className="me-7 mb-4">
                  <div className="symbol symbol-100px symbol-lg-160px symbol-fixed position-relative">
                    <Image className="w-160px h-160px" src={UserImage} width={160} height={160} alt="image" />
                    <div className="position-absolute translate-middle bottom-0 start-100 mb-6 bg-success rounded-circle border border-4 border-body h-20px w-20px"></div>
                  </div>
                </div>

                <div className="flex-grow-1">
                  <div className="d-flex justify-content-between align-items-start flex-wrap mb-2">
                    <div className="d-flex flex-column">
                      <div className="d-flex align-items-center mb-2">
                        <a
                          href="#"
                          className="text-gray-900 text-hover-primary fs-2 fw-bold me-1"
                        >
                          Max Smith
                        </a>
                        <a href="#">
                          <i className="ki-outline ki-verify fs-1 text-primary"></i>
                        </a>
                      </div>

                      <div className="d-flex flex-wrap fw-semibold fs-6 mb-4 pe-2">
                        <a
                          href="#"
                          className="d-flex align-items-center text-gray-500 text-hover-primary me-5 mb-2"
                        >
                          <i className="ki-outline ki-profile-circle fs-4 me-1"></i>
                          Developer
                        </a>
                        <a
                          href="#"
                          className="d-flex align-items-center text-gray-500 text-hover-primary me-5 mb-2"
                        >
                          <i className="ki-outline ki-geolocation fs-4 me-1"></i>
                          SF, Bay Area
                        </a>
                        <a
                          href="#"
                          className="d-flex align-items-center text-gray-500 text-hover-primary mb-2"
                        >
                          <i className="ki-outline ki-sms fs-4"></i>max@kt.com
                        </a>
                      </div>
                    </div>

                    <div className="d-flex my-4">
                      
                      <a
                        href="#"
                        className="btn btn-sm btn-primary me-3"
                        data-bs-toggle="modal"
                        data-bs-target="#kt_modal_offer_a_deal"
                      >
                        Hire Me
                      </a>

                      <div className="me-0">
                        <button
                          className="btn btn-sm btn-icon btn-bg-light btn-active-color-primary"
                          data-kt-menu-trigger="click"
                          data-kt-menu-placement="bottom-end"
                        >
                          <i className="ki-solid ki-dots-horizontal fs-2x"></i>
                        </button>

                        <div
                          className="menu menu-sub menu-sub-dropdown menu-column menu-rounded menu-gray-800 menu-state-bg-light-primary fw-semibold w-200px py-3"
                          data-kt-menu="true"
                        >
                          <div className="menu-item px-3">
                            <div className="menu-content text-muted pb-2 px-3 fs-7 text-uppercase">
                              Payments
                            </div>
                          </div>

                          <div className="menu-item px-3">
                            <a href="#" className="menu-link px-3">
                              Create Invoice
                            </a>
                          </div>

                          <div className="menu-item px-3">
                            <a href="#" className="menu-link flex-stack px-3">
                              Create Payment
                              <span
                                className="ms-2"
                                data-bs-toggle="tooltip"
                                title="Specify a target name for future usage and reference"
                              >
                                <i className="ki-outline ki-information fs-6"></i>
                              </span>
                            </a>
                          </div>

                          <div className="menu-item px-3">
                            <a href="#" className="menu-link px-3">
                              Generate Bill
                            </a>
                          </div>

                          <div
                            className="menu-item px-3"
                            data-kt-menu-trigger="hover"
                            data-kt-menu-placement="right-end"
                          >
                            <a href="#" className="menu-link px-3">
                              <span className="menu-title">Subscription</span>
                              <span className="menu-arrow"></span>
                            </a>

                            <div className="menu-sub menu-sub-dropdown w-175px py-4">
                              <div className="menu-item px-3">
                                <a href="#" className="menu-link px-3">
                                  Plans
                                </a>
                              </div>

                              <div className="menu-item px-3">
                                <a href="#" className="menu-link px-3">
                                  Billing
                                </a>
                              </div>

                              <div className="menu-item px-3">
                                <a href="#" className="menu-link px-3">
                                  Statements
                                </a>
                              </div>

                              <div className="separator my-2"></div>

                              <div className="menu-item px-3">
                                <div className="menu-content px-3">
                                  <label className="form-check form-switch form-check-custom form-check-solid">
                                    <input
                                      className="form-check-input w-30px h-20px"
                                      type="checkbox"
                                      value="1"
                                      name="notifications"
                                    />
                                    <span className="form-check-label text-muted fs-6">
                                      Recuring
                                    </span>
                                  </label>
                                </div>
                              </div>
                            </div>
                          </div>

                          <div className="menu-item px-3 my-1">
                            <a href="#" className="menu-link px-3">
                              Settings
                            </a>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>

                  <div className="d-flex flex-wrap flex-stack">
                    <div className="d-flex flex-column flex-grow-1 pe-8">
                      <div className="d-flex flex-wrap">
                        <div className="border border-gray-300 border-dashed rounded min-w-125px py-3 px-4 me-6 mb-3">
                          <div className="d-flex align-items-center">
                            <i className="ki-outline ki-arrow-up fs-3 text-success me-2"></i>
                            <div
                              className="fs-2 fw-bold"
                              data-kt-countup="true"
                              data-kt-countup-value="4500"
                              data-kt-countup-prefix="$"
                            >
                              0
                            </div>
                          </div>

                          <div className="fw-semibold fs-6 text-gray-500">
                            Earnings
                          </div>
                        </div>

                        <div className="border border-gray-300 border-dashed rounded min-w-125px py-3 px-4 me-6 mb-3">
                          <div className="d-flex align-items-center">
                            <i className="ki-outline ki-arrow-down fs-3 text-danger me-2"></i>
                            <div
                              className="fs-2 fw-bold"
                              data-kt-countup="true"
                              data-kt-countup-value="80"
                            >
                              0
                            </div>
                          </div>

                          <div className="fw-semibold fs-6 text-gray-500">
                            Projects
                          </div>
                        </div>

                        <div className="border border-gray-300 border-dashed rounded min-w-125px py-3 px-4 me-6 mb-3">
                          <div className="d-flex align-items-center">
                            <i className="ki-outline ki-arrow-up fs-3 text-success me-2"></i>
                            <div
                              className="fs-2 fw-bold"
                              data-kt-countup="true"
                              data-kt-countup-value="60"
                              data-kt-countup-prefix="%"
                            >
                              0
                            </div>
                          </div>

                          <div className="fw-semibold fs-6 text-gray-500">
                            Success Rate
                          </div>
                        </div>
                      </div>
                    </div>

                    <div className="d-flex align-items-center w-200px w-sm-300px flex-column mt-3">
                      <div className="d-flex justify-content-between w-100 mt-auto mb-2">
                        <span className="fw-semibold fs-6 text-gray-500">
                          Profile Compleation
                        </span>
                        <span className="fw-bold fs-6">50%</span>
                      </div>
                      <div className="h-5px mx-3 w-100 bg-light mb-3">
                        <div
                          className="bg-success rounded h-5px"
                          role="progressbar"
                          style={{ width: "50%" }}
                          aria-valuenow={50}
                          aria-valuemin={0}
                          aria-valuemax={100}
                        ></div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              <ul className="nav nav-stretch nav-line-tabs nav-line-tabs-2x border-transparent fs-5 fw-bold">

                <li className="nav-item mt-2">
                  <a
                    className="nav-link text-active-primary ms-0 me-10 py-5 active"
                    href="account/settings.html"
                  >
                    Settings
                  </a>
                </li>

                <li className="nav-item mt-2">
                  <a
                    className="nav-link text-active-primary ms-0 me-10 py-5"
                    href="account/security.html"
                  >
                    Security
                  </a>
                </li>

                

                <li className="nav-item mt-2">
                  <a
                    className="nav-link text-active-primary ms-0 me-10 py-5"
                    href="account/statements.html"
                  >
                    Statements
                  </a>
                </li>

                <li className="nav-item mt-2">
                  <a
                    className="nav-link text-active-primary ms-0 me-10 py-5"
                    href="account/referrals.html"
                  >
                    Referrals
                  </a>
                </li>

                <li className="nav-item mt-2">
                  <a
                    className="nav-link text-active-primary ms-0 me-10 py-5"
                    href="account/api-keys.html"
                  >
                    API Keys
                  </a>
                </li>
              </ul>
            </div>
          </div>

          <div className="card mb-5 mb-xl-10">
            <div
              className="card-header border-0 cursor-pointer"
              role="button"
              data-bs-toggle="collapse"
              data-bs-target="#kt_account_profile_details"
              aria-expanded="true"
              aria-controls="kt_account_profile_details"
            >
              <div className="card-title m-0">
                <h3 className="fw-bold m-0">Profile Details</h3>
              </div>
            </div>

            <div
              id="kt_account_settings_profile_details"
              className="collapse show"
            >
              <form id="kt_account_profile_details_form" className="form">
                <div className="card-body border-top p-9">
                  <div className="row mb-6">
                    <label className="col-lg-4 col-form-label fw-semibold fs-6">
                      Avatar
                    </label>

                    <div className="col-lg-8">
                      <div
                        className="image-input image-input-outline"
                        data-kt-image-input="true"
                        style={{
                          backgroundImage:
                            "url('assets/media/svg/avatars/blank.svg')",
                        }}
                      >
                        <div
                          className="image-input-wrapper w-125px h-125px"
                          style={{
                            backgroundImage:
                              "url('assets/media/svg/avatars/blank.svg')",
                          }}
                        ></div>

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
                          />
                          <input type="hidden" name="avatar_remove" />
                        </label>

                        <span
                          className="btn btn-icon btn-circle btn-active-color-primary w-25px h-25px bg-body shadow"
                          data-kt-image-input-action="cancel"
                          data-bs-toggle="tooltip"
                          title="Cancel avatar"
                        >
                          <i className="ki-outline ki-cross fs-2"></i>
                        </span>

                        <span
                          className="btn btn-icon btn-circle btn-active-color-primary w-25px h-25px bg-body shadow"
                          data-kt-image-input-action="remove"
                          data-bs-toggle="tooltip"
                          title="Remove avatar"
                        >
                          <i className="ki-outline ki-cross fs-2"></i>
                        </span>
                      </div>

                      <div className="form-text">
                        Allowed file types: png, jpg, jpeg.
                      </div>
                    </div>
                  </div>
                  <div className="row mb-6">
                    <label className="col-lg-4 col-form-label required fw-semibold fs-6">
                      Full Name
                    </label>

                    <div className="col-lg-8">
                      <div className="row">
                        <div className="col-lg-6 fv-row">
                          <input
                            type="text"
                            name="fname"
                            className="form-control form-control-lg form-control-solid mb-3 mb-lg-0"
                            placeholder="First name"
                            value="Max"
                          />
                        </div>

                        <div className="col-lg-6 fv-row">
                          <input
                            type="text"
                            name="lname"
                            className="form-control form-control-lg form-control-solid"
                            placeholder="Last name"
                            value="Smith"
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
                        className="form-control form-control-lg form-control-solid"
                        placeholder="Company name"
                        value="Keenthemes"
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
                        className="form-control form-control-lg form-control-solid"
                        placeholder="Phone number"
                        value="044 3276 454 935"
                      />
                    </div>
                  </div>
                  <div className="row mb-6">
                    <label className="col-lg-4 col-form-label fw-semibold fs-6">
                      Company Site
                    </label>

                    <div className="col-lg-8 fv-row">
                      <input
                        type="text"
                        name="website"
                        className="form-control form-control-lg form-control-solid"
                        placeholder="Company website"
                        value="keenthemes.com"
                      />
                    </div>
                  </div>
                  <div className="row mb-6">
                    <label className="col-lg-4 col-form-label fw-semibold fs-6">
                      <span className="required">Country</span>
                      <span
                        className="ms-1"
                        data-bs-toggle="tooltip"
                        title="Country of origination"
                      >
                        <i className="ki-outline ki-information-5 text-gray-500 fs-6"></i>
                      </span>
                    </label>

                    <div className="col-lg-8 fv-row">
                      <select
                        name="country"
                        aria-label="Select a Country"
                        data-control="select2"
                        data-placeholder="Select a country..."
                        className="form-select form-select-solid form-select-lg fw-semibold"
                      >
                        <option value="">Select a Country...</option>
                        <option data-kt-flag="flags/afghanistan.svg" value="AF">
                          Afghanistan
                        </option>
                        <option
                          data-kt-flag="flags/aland-islands.svg"
                          value="AX"
                        >
                          Aland Islands
                        </option>
                        <option data-kt-flag="flags/albania.svg" value="AL">
                          Albania
                        </option>
                        <option data-kt-flag="flags/algeria.svg" value="DZ">
                          Algeria
                        </option>
                        <option
                          data-kt-flag="flags/american-samoa.svg"
                          value="AS"
                        >
                          American Samoa
                        </option>
                        <option data-kt-flag="flags/andorra.svg" value="AD">
                          Andorra
                        </option>
                        <option data-kt-flag="flags/angola.svg" value="AO">
                          Angola
                        </option>
                        <option data-kt-flag="flags/anguilla.svg" value="AI">
                          Anguilla
                        </option>
                        <option
                          data-kt-flag="flags/antigua-and-barbuda.svg"
                          value="AG"
                        >
                          Antigua and Barbuda
                        </option>
                        <option data-kt-flag="flags/argentina.svg" value="AR">
                          Argentina
                        </option>
                        <option data-kt-flag="flags/armenia.svg" value="AM">
                          Armenia
                        </option>
                        <option data-kt-flag="flags/aruba.svg" value="AW">
                          Aruba
                        </option>
                        <option data-kt-flag="flags/australia.svg" value="AU">
                          Australia
                        </option>
                        <option data-kt-flag="flags/austria.svg" value="AT">
                          Austria
                        </option>
                        <option data-kt-flag="flags/azerbaijan.svg" value="AZ">
                          Azerbaijan
                        </option>
                        <option data-kt-flag="flags/bahamas.svg" value="BS">
                          Bahamas
                        </option>
                        <option data-kt-flag="flags/bahrain.svg" value="BH">
                          Bahrain
                        </option>
                        <option data-kt-flag="flags/bangladesh.svg" value="BD">
                          Bangladesh
                        </option>
                        <option data-kt-flag="flags/barbados.svg" value="BB">
                          Barbados
                        </option>
                        <option data-kt-flag="flags/belarus.svg" value="BY">
                          Belarus
                        </option>
                        <option data-kt-flag="flags/belgium.svg" value="BE">
                          Belgium
                        </option>
                        <option data-kt-flag="flags/belize.svg" value="BZ">
                          Belize
                        </option>
                        <option data-kt-flag="flags/benin.svg" value="BJ">
                          Benin
                        </option>
                        <option data-kt-flag="flags/bermuda.svg" value="BM">
                          Bermuda
                        </option>
                        <option data-kt-flag="flags/bhutan.svg" value="BT">
                          Bhutan
                        </option>
                        <option data-kt-flag="flags/bolivia.svg" value="BO">
                          Bolivia, Plurinational State of
                        </option>
                        <option data-kt-flag="flags/bonaire.svg" value="BQ">
                          Bonaire, Sint Eustatius and Saba
                        </option>
                        <option
                          data-kt-flag="flags/bosnia-and-herzegovina.svg"
                          value="BA"
                        >
                          Bosnia and Herzegovina
                        </option>
                        <option data-kt-flag="flags/botswana.svg" value="BW">
                          Botswana
                        </option>
                        <option data-kt-flag="flags/brazil.svg" value="BR">
                          Brazil
                        </option>
                        <option
                          data-kt-flag="flags/british-indian-ocean-territory.svg"
                          value="IO"
                        >
                          British Indian Ocean Territory
                        </option>
                        <option data-kt-flag="flags/brunei.svg" value="BN">
                          Brunei Darussalam
                        </option>
                        <option data-kt-flag="flags/bulgaria.svg" value="BG">
                          Bulgaria
                        </option>
                        <option
                          data-kt-flag="flags/burkina-faso.svg"
                          value="BF"
                        >
                          Burkina Faso
                        </option>
                        <option data-kt-flag="flags/burundi.svg" value="BI">
                          Burundi
                        </option>
                        <option data-kt-flag="flags/cambodia.svg" value="KH">
                          Cambodia
                        </option>
                        <option data-kt-flag="flags/cameroon.svg" value="CM">
                          Cameroon
                        </option>
                        <option data-kt-flag="flags/canada.svg" value="CA">
                          Canada
                        </option>
                        <option data-kt-flag="flags/cape-verde.svg" value="CV">
                          Cape Verde
                        </option>
                        <option
                          data-kt-flag="flags/cayman-islands.svg"
                          value="KY"
                        >
                          Cayman Islands
                        </option>
                        <option
                          data-kt-flag="flags/central-african-republic.svg"
                          value="CF"
                        >
                          Central African Republic
                        </option>
                        <option data-kt-flag="flags/chad.svg" value="TD">
                          Chad
                        </option>
                        <option data-kt-flag="flags/chile.svg" value="CL">
                          Chile
                        </option>
                        <option data-kt-flag="flags/china.svg" value="CN">
                          China
                        </option>
                        <option
                          data-kt-flag="flags/christmas-island.svg"
                          value="CX"
                        >
                          Christmas Island
                        </option>
                        <option
                          data-kt-flag="flags/cocos-island.svg"
                          value="CC"
                        >
                          Cocos (Keeling) Islands
                        </option>
                        <option data-kt-flag="flags/colombia.svg" value="CO">
                          Colombia
                        </option>
                        <option data-kt-flag="flags/comoros.svg" value="KM">
                          Comoros
                        </option>
                        <option
                          data-kt-flag="flags/cook-islands.svg"
                          value="CK"
                        >
                          Cook Islands
                        </option>
                        <option data-kt-flag="flags/costa-rica.svg" value="CR">
                          Costa Rica
                        </option>
                        <option data-kt-flag="flags/ivory-coast.svg" value="CI">
                          Côte d&aois;Ivoire
                        </option>
                        <option data-kt-flag="flags/croatia.svg" value="HR">
                          Croatia
                        </option>
                        <option data-kt-flag="flags/cuba.svg" value="CU">
                          Cuba
                        </option>
                        <option data-kt-flag="flags/curacao.svg" value="CW">
                          Curaçao
                        </option>
                        <option
                          data-kt-flag="flags/czech-republic.svg"
                          value="CZ"
                        >
                          Czech Republic
                        </option>
                        <option data-kt-flag="flags/denmark.svg" value="DK">
                          Denmark
                        </option>
                        <option data-kt-flag="flags/djibouti.svg" value="DJ">
                          Djibouti
                        </option>
                        <option data-kt-flag="flags/dominica.svg" value="DM">
                          Dominica
                        </option>
                        <option
                          data-kt-flag="flags/dominican-republic.svg"
                          value="DO"
                        >
                          Dominican Republic
                        </option>
                        <option data-kt-flag="flags/ecuador.svg" value="EC">
                          Ecuador
                        </option>
                        <option data-kt-flag="flags/egypt.svg" value="EG">
                          Egypt
                        </option>
                        <option data-kt-flag="flags/el-salvador.svg" value="SV">
                          El Salvador
                        </option>
                        <option
                          data-kt-flag="flags/equatorial-guinea.svg"
                          value="GQ"
                        >
                          Equatorial Guinea
                        </option>
                        <option data-kt-flag="flags/eritrea.svg" value="ER">
                          Eritrea
                        </option>
                        <option data-kt-flag="flags/estonia.svg" value="EE">
                          Estonia
                        </option>
                        <option data-kt-flag="flags/ethiopia.svg" value="ET">
                          Ethiopia
                        </option>
                        <option
                          data-kt-flag="flags/falkland-islands.svg"
                          value="FK"
                        >
                          Falkland Islands (Malvinas)
                        </option>
                        <option data-kt-flag="flags/fiji.svg" value="FJ">
                          Fiji
                        </option>
                        <option data-kt-flag="flags/finland.svg" value="FI">
                          Finland
                        </option>
                        <option data-kt-flag="flags/france.svg" value="FR">
                          France
                        </option>
                        <option
                          data-kt-flag="flags/french-polynesia.svg"
                          value="PF"
                        >
                          French Polynesia
                        </option>
                        <option data-kt-flag="flags/gabon.svg" value="GA">
                          Gabon
                        </option>
                        <option data-kt-flag="flags/gambia.svg" value="GM">
                          Gambia
                        </option>
                        <option data-kt-flag="flags/georgia.svg" value="GE">
                          Georgia
                        </option>
                        <option data-kt-flag="flags/germany.svg" value="DE">
                          Germany
                        </option>
                        <option data-kt-flag="flags/ghana.svg" value="GH">
                          Ghana
                        </option>
                        <option data-kt-flag="flags/gibraltar.svg" value="GI">
                          Gibraltar
                        </option>
                        <option data-kt-flag="flags/greece.svg" value="GR">
                          Greece
                        </option>
                        <option data-kt-flag="flags/greenland.svg" value="GL">
                          Greenland
                        </option>
                        <option data-kt-flag="flags/grenada.svg" value="GD">
                          Grenada
                        </option>
                        <option data-kt-flag="flags/guam.svg" value="GU">
                          Guam
                        </option>
                        <option data-kt-flag="flags/guatemala.svg" value="GT">
                          Guatemala
                        </option>
                        <option data-kt-flag="flags/guernsey.svg" value="GG">
                          Guernsey
                        </option>
                        <option data-kt-flag="flags/guinea.svg" value="GN">
                          Guinea
                        </option>
                        <option
                          data-kt-flag="flags/guinea-bissau.svg"
                          value="GW"
                        >
                          Guinea-Bissau
                        </option>
                        <option data-kt-flag="flags/haiti.svg" value="HT">
                          Haiti
                        </option>
                        <option
                          data-kt-flag="flags/vatican-city.svg"
                          value="VA"
                        >
                          Holy See (Vatican City State)
                        </option>
                        <option data-kt-flag="flags/honduras.svg" value="HN">
                          Honduras
                        </option>
                        <option data-kt-flag="flags/hong-kong.svg" value="HK">
                          Hong Kong
                        </option>
                        <option data-kt-flag="flags/hungary.svg" value="HU">
                          Hungary
                        </option>
                        <option data-kt-flag="flags/iceland.svg" value="IS">
                          Iceland
                        </option>
                        <option data-kt-flag="flags/india.svg" value="IN">
                          India
                        </option>
                        <option data-kt-flag="flags/indonesia.svg" value="ID">
                          Indonesia
                        </option>
                        <option data-kt-flag="flags/iran.svg" value="IR">
                          Iran, Islamic Republic of
                        </option>
                        <option data-kt-flag="flags/iraq.svg" value="IQ">
                          Iraq
                        </option>
                        <option data-kt-flag="flags/ireland.svg" value="IE">
                          Ireland
                        </option>
                        <option data-kt-flag="flags/isle-of-man.svg" value="IM">
                          Isle of Man
                        </option>
                        <option data-kt-flag="flags/israel.svg" value="IL">
                          Israel
                        </option>
                        <option data-kt-flag="flags/italy.svg" value="IT">
                          Italy
                        </option>
                        <option data-kt-flag="flags/jamaica.svg" value="JM">
                          Jamaica
                        </option>
                        <option data-kt-flag="flags/japan.svg" value="JP">
                          Japan
                        </option>
                        <option data-kt-flag="flags/jersey.svg" value="JE">
                          Jersey
                        </option>
                        <option data-kt-flag="flags/jordan.svg" value="JO">
                          Jordan
                        </option>
                        <option data-kt-flag="flags/kazakhstan.svg" value="KZ">
                          Kazakhstan
                        </option>
                        <option data-kt-flag="flags/kenya.svg" value="KE">
                          Kenya
                        </option>
                        <option data-kt-flag="flags/kiribati.svg" value="KI">
                          Kiribati
                        </option>
                        <option data-kt-flag="flags/north-korea.svg" value="KP">
                          Korea, Democratic People&aois;s Republic of
                        </option>
                        <option data-kt-flag="flags/kuwait.svg" value="KW">
                          Kuwait
                        </option>
                        <option data-kt-flag="flags/kyrgyzstan.svg" value="KG">
                          Kyrgyzstan
                        </option>
                        <option data-kt-flag="flags/laos.svg" value="LA">
                          Lao People&aois;s Democratic Republic
                        </option>
                        <option data-kt-flag="flags/latvia.svg" value="LV">
                          Latvia
                        </option>
                        <option data-kt-flag="flags/lebanon.svg" value="LB">
                          Lebanon
                        </option>
                        <option data-kt-flag="flags/lesotho.svg" value="LS">
                          Lesotho
                        </option>
                        <option data-kt-flag="flags/liberia.svg" value="LR">
                          Liberia
                        </option>
                        <option data-kt-flag="flags/libya.svg" value="LY">
                          Libya
                        </option>
                        <option
                          data-kt-flag="flags/liechtenstein.svg"
                          value="LI"
                        >
                          Liechtenstein
                        </option>
                        <option data-kt-flag="flags/lithuania.svg" value="LT">
                          Lithuania
                        </option>
                        <option data-kt-flag="flags/luxembourg.svg" value="LU">
                          Luxembourg
                        </option>
                        <option data-kt-flag="flags/macao.svg" value="MO">
                          Macao
                        </option>
                        <option data-kt-flag="flags/madagascar.svg" value="MG">
                          Madagascar
                        </option>
                        <option data-kt-flag="flags/malawi.svg" value="MW">
                          Malawi
                        </option>
                        <option data-kt-flag="flags/malaysia.svg" value="MY">
                          Malaysia
                        </option>
                        <option data-kt-flag="flags/maldives.svg" value="MV">
                          Maldives
                        </option>
                        <option data-kt-flag="flags/mali.svg" value="ML">
                          Mali
                        </option>
                        <option data-kt-flag="flags/malta.svg" value="MT">
                          Malta
                        </option>
                        <option
                          data-kt-flag="flags/marshall-island.svg"
                          value="MH"
                        >
                          Marshall Islands
                        </option>
                        <option data-kt-flag="flags/martinique.svg" value="MQ">
                          Martinique
                        </option>
                        <option data-kt-flag="flags/mauritania.svg" value="MR">
                          Mauritania
                        </option>
                        <option data-kt-flag="flags/mauritius.svg" value="MU">
                          Mauritius
                        </option>
                        <option data-kt-flag="flags/mexico.svg" value="MX">
                          Mexico
                        </option>
                        <option data-kt-flag="flags/micronesia.svg" value="FM">
                          Micronesia, Federated States of
                        </option>
                        <option data-kt-flag="flags/moldova.svg" value="MD">
                          Moldova, Republic of
                        </option>
                        <option data-kt-flag="flags/monaco.svg" value="MC">
                          Monaco
                        </option>
                        <option data-kt-flag="flags/mongolia.svg" value="MN">
                          Mongolia
                        </option>
                        <option data-kt-flag="flags/montenegro.svg" value="ME">
                          Montenegro
                        </option>
                        <option data-kt-flag="flags/montserrat.svg" value="MS">
                          Montserrat
                        </option>
                        <option data-kt-flag="flags/morocco.svg" value="MA">
                          Morocco
                        </option>
                        <option data-kt-flag="flags/mozambique.svg" value="MZ">
                          Mozambique
                        </option>
                        <option data-kt-flag="flags/myanmar.svg" value="MM">
                          Myanmar
                        </option>
                        <option data-kt-flag="flags/namibia.svg" value="NA">
                          Namibia
                        </option>
                        <option data-kt-flag="flags/nauru.svg" value="NR">
                          Nauru
                        </option>
                        <option data-kt-flag="flags/nepal.svg" value="NP">
                          Nepal
                        </option>
                        <option data-kt-flag="flags/netherlands.svg" value="NL">
                          Netherlands
                        </option>
                        <option data-kt-flag="flags/new-zealand.svg" value="NZ">
                          New Zealand
                        </option>
                        <option data-kt-flag="flags/nicaragua.svg" value="NI">
                          Nicaragua
                        </option>
                        <option data-kt-flag="flags/niger.svg" value="NE">
                          Niger
                        </option>
                        <option data-kt-flag="flags/nigeria.svg" value="NG">
                          Nigeria
                        </option>
                        <option data-kt-flag="flags/niue.svg" value="NU">
                          Niue
                        </option>
                        <option
                          data-kt-flag="flags/norfolk-island.svg"
                          value="NF"
                        >
                          Norfolk Island
                        </option>
                        <option
                          data-kt-flag="flags/northern-mariana-islands.svg"
                          value="MP"
                        >
                          Northern Mariana Islands
                        </option>
                        <option data-kt-flag="flags/norway.svg" value="NO">
                          Norway
                        </option>
                        <option data-kt-flag="flags/oman.svg" value="OM">
                          Oman
                        </option>
                        <option data-kt-flag="flags/pakistan.svg" value="PK">
                          Pakistan
                        </option>
                        <option data-kt-flag="flags/palau.svg" value="PW">
                          Palau
                        </option>
                        <option data-kt-flag="flags/palestine.svg" value="PS">
                          Palestinian Territory, Occupied
                        </option>
                        <option data-kt-flag="flags/panama.svg" value="PA">
                          Panama
                        </option>
                        <option
                          data-kt-flag="flags/papua-new-guinea.svg"
                          value="PG"
                        >
                          Papua New Guinea
                        </option>
                        <option data-kt-flag="flags/paraguay.svg" value="PY">
                          Paraguay
                        </option>
                        <option data-kt-flag="flags/peru.svg" value="PE">
                          Peru
                        </option>
                        <option data-kt-flag="flags/philippines.svg" value="PH">
                          Philippines
                        </option>
                        <option data-kt-flag="flags/poland.svg" value="PL">
                          Poland
                        </option>
                        <option data-kt-flag="flags/portugal.svg" value="PT">
                          Portugal
                        </option>
                        <option data-kt-flag="flags/puerto-rico.svg" value="PR">
                          Puerto Rico
                        </option>
                        <option data-kt-flag="flags/qatar.svg" value="QA">
                          Qatar
                        </option>
                        <option data-kt-flag="flags/romania.svg" value="RO">
                          Romania
                        </option>
                        <option data-kt-flag="flags/russia.svg" value="RU">
                          Russian Federation
                        </option>
                        <option data-kt-flag="flags/rwanda.svg" value="RW">
                          Rwanda
                        </option>
                        <option data-kt-flag="flags/st-barts.svg" value="BL">
                          Saint Barthélemy
                        </option>
                        <option
                          data-kt-flag="flags/saint-kitts-and-nevis.svg"
                          value="KN"
                        >
                          Saint Kitts and Nevis
                        </option>
                        <option data-kt-flag="flags/st-lucia.svg" value="LC">
                          Saint Lucia
                        </option>
                        <option
                          data-kt-flag="flags/sint-maarten.svg"
                          value="MF"
                        >
                          Saint Martin (French part)
                        </option>
                        <option
                          data-kt-flag="flags/st-vincent-and-the-grenadines.svg"
                          value="VC"
                        >
                          Saint Vincent and the Grenadines
                        </option>
                        <option data-kt-flag="flags/samoa.svg" value="WS">
                          Samoa
                        </option>
                        <option data-kt-flag="flags/san-marino.svg" value="SM">
                          San Marino
                        </option>
                        <option
                          data-kt-flag="flags/sao-tome-and-prince.svg"
                          value="ST"
                        >
                          Sao Tome and Principe
                        </option>
                        <option
                          data-kt-flag="flags/saudi-arabia.svg"
                          value="SA"
                        >
                          Saudi Arabia
                        </option>
                        <option data-kt-flag="flags/senegal.svg" value="SN">
                          Senegal
                        </option>
                        <option data-kt-flag="flags/serbia.svg" value="RS">
                          Serbia
                        </option>
                        <option data-kt-flag="flags/seychelles.svg" value="SC">
                          Seychelles
                        </option>
                        <option
                          data-kt-flag="flags/sierra-leone.svg"
                          value="SL"
                        >
                          Sierra Leone
                        </option>
                        <option data-kt-flag="flags/singapore.svg" value="SG">
                          Singapore
                        </option>
                        <option
                          data-kt-flag="flags/sint-maarten.svg"
                          value="SX"
                        >
                          Sint Maarten (Dutch part)
                        </option>
                        <option data-kt-flag="flags/slovakia.svg" value="SK">
                          Slovakia
                        </option>
                        <option data-kt-flag="flags/slovenia.svg" value="SI">
                          Slovenia
                        </option>
                        <option
                          data-kt-flag="flags/solomon-islands.svg"
                          value="SB"
                        >
                          Solomon Islands
                        </option>
                        <option data-kt-flag="flags/somalia.svg" value="SO">
                          Somalia
                        </option>
                        <option
                          data-kt-flag="flags/south-africa.svg"
                          value="ZA"
                        >
                          South Africa
                        </option>
                        <option data-kt-flag="flags/south-korea.svg" value="KR">
                          South Korea
                        </option>
                        <option data-kt-flag="flags/south-sudan.svg" value="SS">
                          South Sudan
                        </option>
                        <option data-kt-flag="flags/spain.svg" value="ES">
                          Spain
                        </option>
                        <option data-kt-flag="flags/sri-lanka.svg" value="LK">
                          Sri Lanka
                        </option>
                        <option data-kt-flag="flags/sudan.svg" value="SD">
                          Sudan
                        </option>
                        <option data-kt-flag="flags/suriname.svg" value="SR">
                          Suriname
                        </option>
                        <option data-kt-flag="flags/swaziland.svg" value="SZ">
                          Swaziland
                        </option>
                        <option data-kt-flag="flags/sweden.svg" value="SE">
                          Sweden
                        </option>
                        <option data-kt-flag="flags/switzerland.svg" value="CH">
                          Switzerland
                        </option>
                        <option data-kt-flag="flags/syria.svg" value="SY">
                          Syrian Arab Republic
                        </option>
                        <option data-kt-flag="flags/taiwan.svg" value="TW">
                          Taiwan, Province of China
                        </option>
                        <option data-kt-flag="flags/tajikistan.svg" value="TJ">
                          Tajikistan
                        </option>
                        <option data-kt-flag="flags/tanzania.svg" value="TZ">
                          Tanzania, United Republic of
                        </option>
                        <option data-kt-flag="flags/thailand.svg" value="TH">
                          Thailand
                        </option>
                        <option data-kt-flag="flags/togo.svg" value="TG">
                          Togo
                        </option>
                        <option data-kt-flag="flags/tokelau.svg" value="TK">
                          Tokelau
                        </option>
                        <option data-kt-flag="flags/tonga.svg" value="TO">
                          Tonga
                        </option>
                        <option
                          data-kt-flag="flags/trinidad-and-tobago.svg"
                          value="TT"
                        >
                          Trinidad and Tobago
                        </option>
                        <option data-kt-flag="flags/tunisia.svg" value="TN">
                          Tunisia
                        </option>
                        <option data-kt-flag="flags/turkey.svg" value="TR">
                          Turkey
                        </option>
                        <option
                          data-kt-flag="flags/turkmenistan.svg"
                          value="TM"
                        >
                          Turkmenistan
                        </option>
                        <option
                          data-kt-flag="flags/turks-and-caicos.svg"
                          value="TC"
                        >
                          Turks and Caicos Islands
                        </option>
                        <option data-kt-flag="flags/tuvalu.svg" value="TV">
                          Tuvalu
                        </option>
                        <option data-kt-flag="flags/uganda.svg" value="UG">
                          Uganda
                        </option>
                        <option data-kt-flag="flags/ukraine.svg" value="UA">
                          Ukraine
                        </option>
                        <option
                          data-kt-flag="flags/united-arab-emirates.svg"
                          value="AE"
                        >
                          United Arab Emirates
                        </option>
                        <option
                          data-kt-flag="flags/united-kingdom.svg"
                          value="GB"
                        >
                          United Kingdom
                        </option>
                        <option
                          data-kt-flag="flags/united-states.svg"
                          value="US"
                        >
                          United States
                        </option>
                        <option data-kt-flag="flags/uruguay.svg" value="UY">
                          Uruguay
                        </option>
                        <option data-kt-flag="flags/uzbekistan.svg" value="UZ">
                          Uzbekistan
                        </option>
                        <option data-kt-flag="flags/vanuatu.svg" value="VU">
                          Vanuatu
                        </option>
                        <option data-kt-flag="flags/venezuela.svg" value="VE">
                          Venezuela, Bolivarian Republic of
                        </option>
                        <option data-kt-flag="flags/vietnam.svg" value="VN">
                          Vietnam
                        </option>
                        <option
                          data-kt-flag="flags/virgin-islands.svg"
                          value="VI"
                        >
                          Virgin Islands
                        </option>
                        <option data-kt-flag="flags/yemen.svg" value="YE">
                          Yemen
                        </option>
                        <option data-kt-flag="flags/zambia.svg" value="ZM">
                          Zambia
                        </option>
                        <option data-kt-flag="flags/zimbabwe.svg" value="ZW">
                          Zimbabwe
                        </option>
                      </select>
                    </div>
                  </div>
                </div>

                <div className="card-footer d-flex justify-content-end py-6 px-9">
                  <button
                    type="reset"
                    className="btn btn-light btn-active-light-primary me-2"
                  >
                    Discard
                  </button>
                  <button
                    type="submit"
                    className="btn btn-primary"
                    id="kt_account_profile_details_submit"
                  >
                    Save Changes
                  </button>
                </div>
              </form>
            </div>
          </div>

          <div className="card mb-5 mb-xl-10">
            <div
              className="card-header border-0 cursor-pointer"
              role="button"
              data-bs-toggle="collapse"
              data-bs-target="#kt_account_signin_method"
            >
              <div className="card-title m-0">
                <h3 className="fw-bold m-0">Sign-in Method</h3>
              </div>
            </div>

            <div
              id="kt_account_settings_signin_method"
              className="collapse show"
            >
              <div className="card-body border-top p-9">
                <div className="d-flex flex-wrap align-items-center">
                  <div id="kt_signin_email">
                    <div className="fs-6 fw-bold mb-1">Email Address</div>
                    <div className="fw-semibold text-gray-600">
                      support@keenthemes.com
                    </div>
                  </div>

                  <div
                    id="kt_signin_email_edit"
                    className="flex-row-fluid d-none"
                  >
                    <form id="kt_signin_change_email" className="form">
                      <div className="row mb-6">
                        <div className="col-lg-6 mb-4 mb-lg-0">
                          <div className="fv-row mb-0">
                            <label className="form-label fs-6 fw-bold mb-3">
                              Enter New Email Address
                            </label>
                            <input
                              type="email"
                              className="form-control form-control-lg form-control-solid"
                              id="emailaddress"
                              placeholder="Email Address"
                              name="emailaddress"
                              value="support@keenthemes.com"
                            />
                          </div>
                        </div>
                        <div className="col-lg-6">
                          <div className="fv-row mb-0">
                            <label className="form-label fs-6 fw-bold mb-3">
                              Confirm Password
                            </label>
                            <input
                              type="password"
                              className="form-control form-control-lg form-control-solid"
                              name="confirmemailpassword"
                              id="confirmemailpassword"
                            />
                          </div>
                        </div>
                      </div>
                      <div className="d-flex">
                        <button
                          id="kt_signin_submit"
                          type="button"
                          className="btn btn-primary me-2 px-6"
                        >
                          Update Email
                        </button>
                        <button
                          id="kt_signin_cancel"
                          type="button"
                          className="btn btn-color-gray-500 btn-active-light-primary px-6"
                        >
                          Cancel
                        </button>
                      </div>
                    </form>
                  </div>

                  <div id="kt_signin_email_button" className="ms-auto">
                    <button className="btn btn-light btn-active-light-primary">
                      Change Email
                    </button>
                  </div>
                </div>

                <div className="separator separator-dashed my-6"></div>

                <div className="d-flex flex-wrap align-items-center mb-10">
                  <div id="kt_signin_password">
                    <div className="fs-6 fw-bold mb-1">Password</div>
                    <div className="fw-semibold text-gray-600">
                      ************
                    </div>
                  </div>

                  <div
                    id="kt_signin_password_edit"
                    className="flex-row-fluid d-none"
                  >
                    <form id="kt_signin_change_password" className="form">
                      <div className="row mb-1">
                        <div className="col-lg-4">
                          <div className="fv-row mb-0">
                            <label className="form-label fs-6 fw-bold mb-3">
                              Current Password
                            </label>
                            <input
                              type="password"
                              className="form-control form-control-lg form-control-solid"
                              name="currentpassword"
                              id="currentpassword"
                            />
                          </div>
                        </div>
                        <div className="col-lg-4">
                          <div className="fv-row mb-0">
                            <label className="form-label fs-6 fw-bold mb-3">
                              New Password
                            </label>
                            <input
                              type="password"
                              className="form-control form-control-lg form-control-solid"
                              name="newpassword"
                              id="newpassword"
                            />
                          </div>
                        </div>
                        <div className="col-lg-4">
                          <div className="fv-row mb-0">
                            <label className="form-label fs-6 fw-bold mb-3">
                              Confirm New Password
                            </label>
                            <input
                              type="password"
                              className="form-control form-control-lg form-control-solid"
                              name="confirmpassword"
                              id="confirmpassword"
                            />
                          </div>
                        </div>
                      </div>
                      <div className="form-text mb-5">
                        Password must be at least 8 character and contain
                        symbols
                      </div>
                      <div className="d-flex">
                        <button
                          id="kt_password_submit"
                          type="button"
                          className="btn btn-primary me-2 px-6"
                        >
                          Update Password
                        </button>
                        <button
                          id="kt_password_cancel"
                          type="button"
                          className="btn btn-color-gray-500 btn-active-light-primary px-6"
                        >
                          Cancel
                        </button>
                      </div>
                    </form>
                  </div>

                  <div id="kt_signin_password_button" className="ms-auto">
                    <button className="btn btn-light btn-active-light-primary">
                      Reset Password
                    </button>
                  </div>
                </div>

                <div className="notice d-flex bg-light-primary rounded border-primary border border-dashed p-6">
                  <i className="ki-outline ki-shield-tick fs-2tx text-primary me-4"></i>

                  <div className="d-flex flex-stack flex-grow-1 flex-wrap flex-md-nowrap">
                    <div className="mb-3 mb-md-0 fw-semibold">
                      <h4 className="text-gray-900 fw-bold">
                        Secure Your Account
                      </h4>
                      <div className="fs-6 text-gray-700 pe-7">
                        Two-factor authentication adds an extra layer of
                        security to your account. To log in, in addition you&aois;ll
                        need to provide a 6 digit code
                      </div>
                    </div>

                    <a
                      href="#"
                      className="btn btn-primary px-6 align-self-center text-nowrap"
                      data-bs-toggle="modal"
                      data-bs-target="#kt_modal_two_factor_authentication"
                    >
                      Enable
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="card">
            <div
              className="card-header border-0 cursor-pointer"
              role="button"
              data-bs-toggle="collapse"
              data-bs-target="#kt_account_deactivate"
              aria-expanded="true"
              aria-controls="kt_account_deactivate"
            >
              <div className="card-title m-0">
                <h3 className="fw-bold m-0">Deactivate Account</h3>
              </div>
            </div>

            <div id="kt_account_settings_deactivate" className="collapse show">
              <form id="kt_account_deactivate_form" className="form">
                <div className="card-body border-top p-9">
                  <div className="notice d-flex bg-light-warning rounded border-warning border border-dashed mb-9 p-6">
                    <i className="ki-outline ki-information fs-2tx text-warning me-4"></i>

                    <div className="d-flex flex-stack flex-grow-1">
                      <div className="fw-semibold">
                        <h4 className="text-gray-900 fw-bold">
                          You Are Deactivating Your Account
                        </h4>
                        <div className="fs-6 text-gray-700">
                          For extra security, this requires you to confirm your
                          email or phone number when you reset yousignr
                          password.
                          <br />
                          <a className="fw-bold" href="#">
                            Learn more
                          </a>
                        </div>
                      </div>
                    </div>
                  </div>

                  <div className="form-check form-check-solid fv-row">
                    <input
                      name="deactivate"
                      className="form-check-input"
                      type="checkbox"
                      value=""
                      id="deactivate"
                    />
                    <label className="form-check-label fw-semibold ps-2 fs-6">
                      I confirm my account deactivation
                    </label>
                  </div>
                </div>

                <div className="card-footer d-flex justify-content-end py-6 px-9">
                  <button
                    id="kt_account_deactivate_account_submit"
                    type="submit"
                    className="btn btn-danger fw-semibold"
                  >
                    Deactivate Account
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default page;
