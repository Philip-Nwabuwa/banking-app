import { StatementsData } from '@/types/statements'

const StatementDescription = ({ params }: { params: { slug: string } }) => {
  const statement = StatementsData.find(
    (statement) => statement.orderId === params.slug
  )

  if (!statement) {
    return <div>No Reversal Available.</div>
  }

  return (
    <div id="kt_app_content" className="app-content flex-column-fluid">
      <div
        id="kt_app_content_container"
        className="app-container container-xxl"
      >
        <div className="card mb-5 pt-5 tw-px-[27px] pb-10 tw-flex tw-flex-col tw-gap-3 tw-text-lg">
          <div>Reference ID: {params.slug}</div>
          <div>Date: {statement.date}</div>
          <div>Type: {statement.type}</div>
          <div>Order ID: {statement.orderId}</div>
          {statement.mobile && <div>Mobile: {statement.mobile}</div>}
          {statement.senderName && (
            <div>Sender Name: {statement.senderName}</div>
          )}
          {statement.description && (
            <div>Description: {statement.description}</div>
          )}
          {statement.userId && <div>User ID: {statement.userId}</div>}
          <div>Time: {statement.time}</div>
          <div>Amount: {statement.amount}</div>
        </div>
      </div>
    </div>
  )
}

export default StatementDescription
