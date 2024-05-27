'use client'

import Modal from '@/components/common/Modal'
import { useBankTransactionsList } from '@/services/wallet'
import { BankTransactionType } from '@/types/bank'
import { useState } from 'react'

const BankTransactionsPage = () => {
  const { data: BankTransactionData, isLoading: loadingBankTransactions } =
    useBankTransactionsList()
  console.log(BankTransactionData?.data.data)

  const TransactionList = BankTransactionData?.data.data

  const [searchTerm, setSearchTerm] = useState('')
  const [selectedStatus, setSelectedStatus] = useState('all')
  const [isModalOpen, setIsModalOpen] = useState<boolean>(false)
  const [currentPage, setCurrentPage] = useState(1)

  const openModal = () => {
    setIsModalOpen(true)
  }

  const closeModal = () => {
    setIsModalOpen(false)
  }
  return (
    <div id="kt_app_content" className="app-content flex-column-fluid">
      <div
        id="kt_app_content_container"
        className="app-container container-xxl"
      >
        {TransactionList && TransactionList.length > 0 ? (
          <div className="card !tw-rounded-se-none !tw-rounded-ss-none card-flush">
            <div className="card-header align-items-center py-5 gap-2 gap-md-5">
              <div className="card-title">
                <div className="d-flex align-items-center position-relative my-1">
                  <i className="ki-outline ki-magnifier fs-3 position-absolute ms-4"></i>
                  <input
                    type="text"
                    data-kt-ecommerce-order-filter="search"
                    className="form-control form-control-solid w-250px ps-12"
                    placeholder="Search..."
                    onChange={(e) => setSearchTerm(e.target.value)}
                  />
                </div>

                <div className="d-none"></div>
              </div>

              <div className="card-toolbar flex-row-fluid justify-content-end gap-5">
                <input
                  className="form-control form-control-solid w-100 mw-250px"
                  placeholder="Pick date range"
                />

                <div className="w-150px">
                  <select
                    className="form-select form-select-solid"
                    data-control="select2"
                    data-hide-search="true"
                    data-placeholder="Status"
                    onChange={(e) => setSelectedStatus(e.target.value)}
                  >
                    <option value="all">All</option>
                    <option value="Completed">Completed</option>
                    <option value="Pending">Pending</option>
                    <option value="Cancelled">Cancelled</option>
                  </select>
                </div>

                <button
                  type="button"
                  className="btn btn-light-primary"
                  data-kt-menu-trigger="click"
                  data-kt-menu-placement="bottom-end"
                >
                  <i className="ki-outline ki-exit-up fs-2"></i>Export Report
                </button>
                <div
                  className="menu menu-sub menu-sub-dropdown menu-column menu-rounded menu-gray-600 menu-state-bg-light-primary fw-semibold fs-7 w-200px py-4"
                  data-kt-menu="true"
                >
                  <div className="menu-item px-3">
                    <a
                      href="#"
                      className="menu-link px-3"
                      data-kt-ecommerce-export="copy"
                    >
                      Copy to clipboard
                    </a>
                  </div>

                  <div className="menu-item px-3">
                    <a
                      href="#"
                      className="menu-link px-3"
                      data-kt-ecommerce-export="excel"
                    >
                      Export as Excel
                    </a>
                  </div>

                  <div className="menu-item px-3">
                    <a
                      href="#"
                      className="menu-link px-3"
                      data-kt-ecommerce-export="csv"
                    >
                      Export as CSV
                    </a>
                  </div>

                  <div className="menu-item px-3">
                    <a
                      href="#"
                      className="menu-link px-3"
                      data-kt-ecommerce-export="pdf"
                    >
                      Export as PDF
                    </a>
                  </div>
                </div>
              </div>
            </div>

            <div className="card-body table-responsive pt-0">
              <table className="table align-middle table-row-dashed fs-6 gy-5">
                <thead>
                  <tr className="text-start text-gray-500 fw-bold fs-7 text-uppercase gs-0">
                    <th>Reference</th>
                    <th>Bank details</th>

                    <th>Amount</th>
                    <th>Date & Time</th>
                    <th>Status</th>
                  </tr>
                </thead>
                <tbody className="fw-semibold text-gray-600">
                  {TransactionList.map((item: BankTransactionType) => (
                    <tr key={item.reference}>
                      <td className="tw-flex tw-flex-col tw-gap-1">
                        <div>{item.account_name}</div>
                        <div>
                          <button className="text-primary" onClick={openModal}>
                            {item.reference}
                          </button>
                          <Modal
                            isOpen={isModalOpen}
                            onClose={closeModal}
                            title={`Transaction details for id: ${item.reference}`}
                            buttonText={'Close'}
                          >
                            <div className="tw-flex tw-flex-col tw-gap-2 tw-text-lg">
                              <div
                                className={`badge !tw-inline-block tw-w-fit badge-light-${item.status === 'APPROVED' ? 'success' : item.status === 'Cancelled' ? 'danger' : 'warning'}`}
                              >
                                {item.status}
                              </div>

                              <div>
                                <span>Account name:</span> {item.account_name}
                              </div>
                              <div>
                                <span>Account number:</span>
                                {item.account_number}
                              </div>
                              <div>
                                <span>Account bank:</span> {item.bank.name}
                              </div>
                              <div>
                                <span>Amount:</span> {item.amount}
                              </div>
                              <div>
                                <span>Fee:</span> {item.charge}
                              </div>
                              <div>
                                <span>Date:</span> {item.date_created}
                              </div>
                            </div>
                          </Modal>
                        </div>
                      </td>

                      <td>
                        <div>{item.account_number}</div>
                        <div>{item.bank.name}</div>
                      </td>

                      <td>{item.amount}</td>
                      <td>{item.date_created}</td>
                      <td>
                        <div
                          className={`badge badge-light-${item.status === 'APPROVED' ? 'success' : item.status === 'Cancelled' ? 'danger' : 'warning'}`}
                        >
                          {item.status}
                        </div>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
            {/* <ul className="pagination mb-10">
              <li
                className={`page-item previous ${
                  currentPage === 1 ? 'disabled tw-cursor-not-allowed' : ''
                }`}
                onClick={() => {
                  if (currentPage > 1) {
                    paginate(currentPage - 1)
                  }
                }}
              >
                <a href="#" className="page-link">
                  <i className="previous"></i>
                </a>
              </li>
              {Array.from({ length: totalPages }, (_, i) => (
                <li
                  key={i}
                  className={`page-item ${currentPage === i + 1 ? 'active' : ''}`}
                  onClick={() => paginate(i + 1)}
                >
                  <a href="#" className="page-link">
                    {i + 1}
                  </a>
                </li>
              ))}
              <li
                className={`page-item next ${
                  currentPage === totalPages
                    ? 'disabled tw-cursor-not-allowed'
                    : ''
                }`}
                onClick={() => {
                  if (currentPage < totalPages) {
                    paginate(currentPage + 1)
                  }
                }}
              >
                <a href="#" className="page-link">
                  <i className="next"></i>
                </a>
              </li>
            </ul> */}
          </div>
        ) : (
          <>No data available</>
        )}
      </div>
    </div>
  )
}

export default BankTransactionsPage
