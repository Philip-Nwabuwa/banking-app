import BankTransferModule from '@/components/modules/Payout/BankTransfer'

const BankTransfer = () => {
  return (
    <div className="app-content flex-column-fluid">
      <div className="app-container container-xxl">
        <div className="card !tw-rounded-se-none !tw-rounded-ss-none mb-5">
          <BankTransferModule />
        </div>
      </div>
    </div>
  )
}

export default BankTransfer
