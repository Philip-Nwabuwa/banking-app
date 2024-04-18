'use client'

import Image from 'next/image'
import Button from '@/components/common/Button'
import {
  SettlementsType,
  SettlementsData,
  AccountData,
} from '@/types/statements'
import Link from 'next/link'
import { useState } from 'react'
import MinLogo from '@/assets/logos/simple-black.png'
import Swal from 'sweetalert2'
import Modal from '@/components/common/Modal'
import CopyToClipboard from '@/components/common/CopyToClipboard'

const Deposit = () => {
  const [searchTerm, setSearchTerm] = useState('')
  const [isModalOpen, setIsModalOpen] = useState(false)
  const [selectedStatus, setSelectedStatus] = useState('all')
  const [copied, setCopied] = useState(false)
  const [currentPage, setCurrentPage] = useState(1)
  const itemsPerPage = 5

  const sortedStatements = SettlementsData.sort((a, b) => {
    const dateA = new Date(a.date)
    const dateB = new Date(b.date)
    return dateB.getTime() - dateA.getTime()
  })

  const filteredStatements: SettlementsType[] = sortedStatements.filter(
    (item) => {
      const matchesSearchTerm =
        item.account.toLowerCase().includes(searchTerm.toLowerCase()) ||
        item.id.toLowerCase().includes(searchTerm.toLowerCase()) ||
        item.amount.toLowerCase().includes(searchTerm.toLowerCase())

      if (selectedStatus === 'all') {
        return matchesSearchTerm
      } else {
        return matchesSearchTerm && item.status === selectedStatus
      }
    }
  )

  const totalPages = Math.ceil(filteredStatements.length / itemsPerPage)
  const indexOfLastItem = currentPage * itemsPerPage
  const indexOfFirstItem = indexOfLastItem - itemsPerPage
  const currentItems = filteredStatements.slice(
    indexOfFirstItem,
    indexOfLastItem
  )

  const paginate = (pageNumber: number) => {
    setCurrentPage(pageNumber)
  }

  if (!currentItems) {
    return <div>No Settlements data found</div>
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
        <div className="card card-custom bg-body border-0 h-md-10 mb-6">
          <div className="card-body tw-flex tw-gap-2 tw-items-center">
            <i className="ki-duotone ki-information fs-4x">
              <span className="path1"></span>
              <span className="path2"></span>
              <span className="path3"></span>
            </i>
            <div className="tw-text-xl tw-font-bold">
              Tranfer funds to any of the accounts below to fund your account.
            </div>
          </div>
        </div>
        <div className="row g-3 g-xl-4">
          <div className="col-xl-4 mb-xl-10 tw-h-fit">
            <div className="card card-custom bg-body border-0 h-md-100">
              <div className="tw-flex tw-flex-col">
                {AccountData.map((item) => (
                  <div
                    key={item.id}
                    className="tw-flex tw-items-center tw-gap-4 tw-px-10 tw-py-4 tw-border-b tw-border-dotted tw-border-[#f1f1f4]"
                  >
                    <Image src={MinLogo} alt={''} height={40} width={40} />
                    <div className="tw-flex tw-flex-col tw-gap-1">
                      <div className="tw-font-bold tw-text-2xl">
                        {item.accountName}
                      </div>
                      <div className="tw-text-xl tw-flex tw-items-center tw-gap-2">
                        {item.accountNumber}{' '}
                        <CopyToClipboard text={item.accountNumber} />
                      </div>
                      <div>{item.account}</div>
                      {/* <button className="tw-border-[3px] tw-border-solid tw-border-[#1b84ff] tw-rounded-xl tw-px-3 tw-py-2">
                        Get USSD Code
                      </button> */}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
          <div className="col-xl-8 mb-5 mb-xl-10">
            <div className="card card-custom bg-body border-0 h-md-100">
              <div className="card-body pt-0">
                <table
                  className="table align-middle table-row-dashed fs-6 gy-5"
                  id="kt_ecommerce_report_shipping_table"
                >
                  <thead>
                    <tr className="text-start text-gray-500 fw-bold fs-7 text-uppercase gs-0">
                      <th>ID</th>
                      <th>Account</th>
                      <th>Date</th>
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
                              type="button"
                              className="text-primary"
                              onClick={openModal}
                            >
                              {item.id}
                            </button>

                            <Modal
                              isOpen={isModalOpen}
                              onClose={closeModal}
                              title={`Settlements details for id: ${item.id}`}
                              buttonText={'Close'}
                            >
                              <div className="tw-flex tw-flex-col tw-gap-2 tw-text-lg">
                                <div
                                  className={`badge !tw-inline-block tw-w-fit badge-light-${item.status === 'Approved' ? 'success' : item.status === 'Cancelled' ? 'danger' : 'warning'}`}
                                >
                                  {item.status}
                                </div>
                                <div>
                                  <span>Account Name:</span> {item.accountName}
                                </div>
                                <div>
                                  <span>Account Number:</span>{' '}
                                  {item.accountNumber}
                                </div>
                                <div>
                                  <span>Bank:</span> {item.account}
                                </div>
                                <div>
                                  <span>Amout:</span> {item.amount}
                                </div>
                                <div>
                                  <span>Date:</span>
                                  {item.date}
                                </div>
                              </div>
                            </Modal>
                          </>
                        </td>
                        <td>
                          <div className="tw-text-lg tw-font-bold">
                            {item.accountName}
                          </div>
                          <div className="tw-flex tw-flex-col tw-gap-1">
                            <div>{item.accountNumber}</div>
                            <div>{item.account}</div>
                          </div>
                        </td>

                        <td>
                          <div>{item.date.split(',')[0]}</div>
                          <div>{item.date.split(',')[1]}</div>
                        </td>
                        <td>
                          <div
                            className={`badge !tw-inline-block badge-light-${item.status === 'Approved' ? 'success' : item.status === 'Cancelled' ? 'danger' : 'warning'}`}
                          >
                            {item.status}
                          </div>
                        </td>
                        <td className="text-end">{item.amount}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
              <ul className="pagination mb-10">
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
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Deposit
