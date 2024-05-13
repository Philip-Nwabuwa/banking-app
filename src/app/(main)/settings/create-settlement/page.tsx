
const CreateSettlement = () => {
  return (
    <div className="card !tw-rounded-se-none !tw-rounded-ss-none mb-5 mb-xl-10">
      <div
        className="card-header border-0 cursor-pointer"
        role="button"
        data-bs-toggle="collapse"
        data-bs-target="#kt_account_profile_details"
        aria-expanded="true"
        aria-controls="kt_account_profile_details"
      >
        <div className="card-title m-0">
          <h3 className="fw-bold m-0">Create Bank Settlement</h3>
        </div>
      </div>

      <div id="kt_account_settings_profile_details" className="collapse show">
        <form id="kt_account_profile_details_form" className="form">
          <div className="card-body border-top p-9">
            <div className="row mb-6">
              <label className="col-lg-4 col-form-label required fw-semibold fs-6">
                Bank name
              </label>

              <div className="col-lg-8 fv-row">
                <input
                  type="text"
                  className="form-control form-control-lg form-control-solid mb-3 mb-lg-0"
                  placeholder="Bank Name"
                />
              </div>
            </div>
            <div className="row mb-6">
              <label className="col-lg-4 col-form-label required fw-semibold fs-6">
                Account Number
              </label>

              <div className="col-lg-8 fv-row">
                <input
                  type="number"
                  name=""
                  className="form-control form-control-lg form-control-solid"
                  placeholder="Account number"
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
        <div id="kt_scrolltop" className="scrolltop" data-kt-scrolltop="true">
          <i className="ki-outline ki-arrow-up"></i>
        </div>
      </div>
    </div>
  )
}

export default CreateSettlement
