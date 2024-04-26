'use client'

import Modal from '@/components/common/Modal'
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from '@/components/ui/popover'
import { PosData } from '@/types/pos'
import Image from 'next/image'
import Link from 'next/link'
import { useState } from 'react'
import ImagePos from '@/assets/images/NoPos.png'

const POS = () => {
  const [open, setOpen] = useState(false)
  const [selectedTerminal, setSelectedTerminal] = useState('all')
  const [selectedStatus, setSelectedStatus] = useState('all')

  const sortedTransactions = PosData.sort((a, b) => {
    const dateA = new Date(a.date)
    const dateB = new Date(b.date)
    return dateB.getTime() - dateA.getTime()
  })

  const [filteredTransactions, setFilteredTransactions] =
    useState(sortedTransactions)
  const [isModalOpen, setIsModalOpen] = useState<boolean>(false)
  const [currentPage, setCurrentPage] = useState(1)

  const itemsPerPage = 5

  const applyFilter = () => {
    const newFilteredTransactions = sortedTransactions.filter((item) => {
      const matchesTerminal =
        selectedTerminal === 'all' || item.terminal === selectedTerminal
      const matchesStatus =
        selectedStatus === 'all' || item.status === selectedStatus

      return matchesTerminal && matchesStatus
    })

    setFilteredTransactions(newFilteredTransactions)
    setOpen(false)
  }

  const resetFilter = () => {
    setSelectedTerminal('all')
    setSelectedStatus('all')
    setFilteredTransactions(sortedTransactions)
    setOpen(false)
  }

  const totalPages = Math.ceil(filteredTransactions.length / itemsPerPage)
  const indexOfLastItem = currentPage * itemsPerPage
  const indexOfFirstItem = indexOfLastItem - itemsPerPage
  const currentItems = filteredTransactions.slice(
    indexOfFirstItem,
    indexOfLastItem
  )

  const filterOptions = [
    { value: 'all', label: 'All' },
    { value: 'Successful', label: 'Successful' },
    { value: 'Pending', label: 'Pending' },
    { value: 'Failed', label: 'Failed' },
  ]

  const uniqueTerminals = Array.from(
    new Set(PosData.map((item) => item.terminal))
  )

  const paginate = (pageNumber: number) => {
    setCurrentPage(pageNumber)
  }

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
        {PosData.length > 0 ? (
          <div className="card card-flush table-responsive tw-mt-10">
            <div className="card-header align-items-center py-5 gap-2 gap-md-5">
              <div className="card-title">
                <div className="d-flex align-items-center position-relative my-1">
                  <i className="ki-outline ki-magnifier fs-3 position-absolute ms-4"></i>
                  <input
                    type="text"
                    data-kt-ecommerce-order-filter="search"
                    className="form-control form-control-solid w-250px ps-12"
                    placeholder="Search for ID or Amount.."
                    onChange={(e) => {
                      const searchTerm = e.target.value.toLowerCase()
                      const newFilteredTransactions = sortedTransactions.filter(
                        (item) =>
                          item.ID.toLowerCase().includes(searchTerm) ||
                          item.amount.toLowerCase().includes(searchTerm)
                      )
                      setFilteredTransactions(newFilteredTransactions)
                    }}
                  />
                </div>

                <div
                  id="kt_ecommerce_report_shipping_export"
                  className="d-none"
                ></div>
              </div>

              <div className="card-toolbar flex-row-fluid justify-content-end gap-5">
                <input
                  className="form-control form-control-solid w-100 mw-250px"
                  placeholder="Pick date range"
                  id="kt_ecommerce_report_shipping_daterangepicker"
                />

                <Popover open={open} onOpenChange={setOpen}>
                  <PopoverTrigger asChild>
                    <button
                      aria-expanded={open}
                      className="btn btn-md btn-flex btn-secondary fw-bold"
                    >
                      <i className="ki-outline ki-filter fs-6 text-muted me-1"></i>
                      Filter
                    </button>
                  </PopoverTrigger>
                  <PopoverContent className="w-250px w-md-300px">
                    <div>
                      <div className="px-7 py-5">
                        <div className="fs-5 text-gray-900 fw-bold">
                          Filter Options
                        </div>
                      </div>
                      <div className="separator border-gray-200"></div>
                      <div className="px-7 py-5">
                        <div className="mb-10">
                          <label className="form-label fw-semibold">
                            Devices:
                          </label>
                          <select
                            className="form-select form-select-solid"
                            data-control="select2"
                            data-hide-search="true"
                            data-placeholder="Status"
                            data-kt-ecommerce-order-filter="status"
                            onChange={(e) =>
                              setSelectedTerminal(e.target.value)
                            }
                            value={selectedTerminal}
                          >
                            <option value="all">All</option>
                            {uniqueTerminals.map((terminal) => (
                              <option key={terminal} value={terminal}>
                                {terminal}
                              </option>
                            ))}
                          </select>
                        </div>
                        <div className="mb-10">
                          <label className="form-label fw-semibold">
                            Status:
                          </label>
                          <div className="tw-flex tw-flex-col tw-gap-2 tw-text-lg">
                            {filterOptions.map((option) => (
                              <label
                                key={option.value}
                                className="form-check form-check-sm form-check-custom form-check-solid me-5"
                              >
                                <input
                                  className="form-check-input"
                                  type="checkbox"
                                  value={option.value}
                                  onChange={(e) =>
                                    setSelectedStatus(e.target.value)
                                  }
                                  checked={selectedStatus === option.value}
                                />
                                <span className="form-check-label">
                                  {option.label}
                                </span>
                              </label>
                            ))}
                          </div>
                        </div>
                        <div className="d-flex justify-content-end">
                          <button
                            type="button"
                            className="btn btn-sm btn-light btn-active-light-primary me-2"
                            onClick={resetFilter}
                          >
                            Reset
                          </button>
                          <button
                            type="button"
                            className="btn btn-sm btn-primary"
                            onClick={applyFilter}
                          >
                            Apply
                          </button>
                        </div>
                      </div>
                    </div>
                  </PopoverContent>
                </Popover>

                <button
                  type="button"
                  className="btn btn-light-primary"
                  data-kt-menu-trigger="click"
                  data-kt-menu-placement="bottom-end"
                >
                  <i className="ki-outline ki-exit-up fs-2"></i>Export Report
                </button>
                <div
                  id="kt_ecommerce_report_shipping_export_menu"
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

            <div className="card-body pt-0">
              {filteredTransactions.length > 0 ? (
                <>
                  <table
                    className="table align-middle table-row-dashed fs-6 gy-5"
                    id="kt_ecommerce_report_shipping_table"
                  >
                    <thead>
                      <tr className="text-start text-gray-500 fw-bold fs-7 text-uppercase gs-0">
                        <th className="min-w-100px">ID</th>
                        <th>Terminal</th>
                        <th className="min-w-80px">Date</th>
                        <th>Status</th>
                        <th className="text-end">Amount</th>
                      </tr>
                    </thead>
                    <tbody className="fw-semibold text-gray-600">
                      {currentItems.map((item, index) => (
                        <tr key={index}>
                          <td>
                            <>
                              <button
                                className="text-primary"
                                onClick={openModal}
                              >
                                {item.ID}
                              </button>
                              <Modal
                                isOpen={isModalOpen}
                                onClose={closeModal}
                                title={`POS details for id: ${item.ID}`}
                                buttonText={'Close'}
                              >
                                <div className="tw-flex tw-flex-col tw-gap-2 tw-text-lg">
                                  <div
                                    className={`badge !tw-inline-block tw-w-fit badge-light-${item.status === 'Successful' ? 'success' : item.status === 'Failed' ? 'danger' : 'warning'}`}
                                  >
                                    {item.status}
                                  </div>
                                  <div>
                                    <span>Terminal:</span> {item.terminal}
                                  </div>
                                  <div>
                                    <span>Amount:</span> {item.amount}
                                  </div>
                                  <div>
                                    <span>Date:</span> {item.date}
                                  </div>
                                </div>
                              </Modal>
                            </>
                          </td>
                          <td>{item.terminal}</td>

                          <td>{item.date}</td>
                          <td>
                            <div
                              className={`badge !tw-inline-block tw-w-fit badge-light-${item.status === 'Successful' ? 'success' : item.status === 'Failed' ? 'danger' : 'warning'}`}
                            >
                              {item.status}
                            </div>
                          </td>
                          <td className="text-end">{item.amount}</td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                  <ul className="pagination">
                    <li
                      className={`page-item previous ${
                        currentPage === 1
                          ? 'disabled tw-cursor-not-allowed'
                          : ''
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
                  </ul>
                </>
              ) : (
                <div className="tw-my-10 tw-text-center tw-text-xl tw-font-bold">
                  No transactions found.
                </div>
              )}
            </div>
          </div>
        ) : (
          <div className="card">
            <div className="card-body">
              <div className="card-px text-center pt-15 pb-15">
                <h2 className="fs-2x fw-bold mb-0">POS transactions</h2>
                <p className="text-gray-500 fs-4 fw-semibold py-7">
                  No POS transaction found <br /> click bellow to purchase a POS
                </p>
                <Link
                  href="/pos/buy-pos"
                  replace
                  className="btn btn-primary er fs-6 px-8 py-4"
                  data-bs-toggle="modal"
                  data-bs-target="#kt_modal_create_api_key"
                >
                  Purchase A POS
                </Link>
              </div>
              <div className="tw-flex tw-items-center tw-justify-center pb-15 px-5">
                <Image
                  src={ImagePos}
                  alt=""
                  className="!mw-100 !h-200px !h-sm-325px"
                  width={250}
                  height={250}
                />
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  )
}

export default POS
