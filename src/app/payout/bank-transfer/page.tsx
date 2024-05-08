import BankTransferModule from '@/components/modules/Payout/BankTransfer'

const BankTransfer = () => {
  return (
    <div id="kt_app_content" className="app-content flex-column-fluid">
      <div
        id="kt_app_content_container"
        className="app-container container-xxl"
      >
        <div className="card !tw-rounded-se-none !tw-rounded-ss-none mb-5">
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

          <BankTransferModule />
        </div>
      </div>
    </div>
  )
}

export default BankTransfer
