const Balance = () => {
  return (
    <div className="d-flex mb-3 mb-lg-6">
      <div className="tw-bg-white border border-gray-300 border-dashed rounded w-100 py-2 px-4">
        <span className="fs-6 text-gray-500 fw-bold tw-flex tw-justify-between tw-items-center">
          Balance
          <i className="ki-duotone ki-arrows-circle fs-2 tw-cursor-pointer hover:tw-animate-spin">
            <span className="path1"></span>
            <span className="path2"></span>
          </i>
        </span>
        <div className="fs-2x fw-bold text-success">₦0</div>
      </div>
    </div>
  )
}

export default Balance
