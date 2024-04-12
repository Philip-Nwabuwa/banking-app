'use client'

import {
  CommandEmpty,
  CommandGroup,
  CommandInput,
  CommandItem,
  CommandList,
} from '@/components/ui/command'
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from '@/components/ui/popover'
import { ChevronDownIcon, Command } from 'lucide-react'

const BankTransfer = () => {
  return (
    <div id="kt_app_content" className="app-content flex-column-fluid">
      <div
        id="kt_app_content_container"
        className="app-container container-xxl"
      >
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
              <h3 className="fw-bold m-0">Bank Transfer</h3>
            </div>
          </div>

          <div
            id="kt_account_settings_profile_details"
            className="collapse show"
          >
            <form id="kt_account_profile_details_form" className="form">
              <div className="card-body border-top p-9">
                <Popover>
                  <PopoverTrigger asChild>
                    <button className="tw-ml-auto">
                      Owner{' '}
                      <ChevronDownIcon className="tw-ml-2 tw-h-4 tw-w-4 tw-text-muted-foreground" />
                    </button>
                  </PopoverTrigger>
                  <PopoverContent className="tw-p-0" align="end">
                    <Command>
                      <CommandInput placeholder="Select new role..." />
                      <CommandList>
                        <CommandEmpty>No roles found.</CommandEmpty>
                        <CommandGroup>
                          <CommandItem className="tw-teamaspace-y-1 tw-flex tw-flex-col tw-items-start tw-px-4 tw-py-2">
                            <p>Viewer</p>
                            <p className="tw-text-sm tw-text-muted-foreground">
                              Can view and comment.
                            </p>
                          </CommandItem>
                          <CommandItem className="tw-teamaspace-y-1 tw-flex tw-flex-col tw-items-start tw-px-4 tw-py-2">
                            <p>Developer</p>
                            <p className="tw-text-sm tw-text-muted-foreground">
                              Can view, comment and edit.
                            </p>
                          </CommandItem>
                          <CommandItem className="tw-teamaspace-y-1 tw-flex tw-flex-col tw-items-start tw-px-4 tw-py-2">
                            <p>Billing</p>
                            <p className="tw-text-sm tw-text-muted-foreground">
                              Can view, comment and manage billing.
                            </p>
                          </CommandItem>
                          <CommandItem className="tw-teamaspace-y-1 tw-flex tw-flex-col tw-items-start tw-px-4 tw-py-2">
                            <p>Owner</p>
                            <p className="tw-text-sm tw-text-muted-foreground">
                              Admin-level access to all resources.
                            </p>
                          </CommandItem>
                        </CommandGroup>
                      </CommandList>
                    </Command>
                  </PopoverContent>
                </Popover>
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
                    />
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
            <div
              id="kt_scrolltop"
              className="scrolltop"
              data-kt-scrolltop="true"
            >
              <i className="ki-outline ki-arrow-up"></i>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default BankTransfer
