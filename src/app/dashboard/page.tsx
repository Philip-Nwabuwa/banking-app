'use client'

import Image from 'next/image'
import Link from 'next/link'
import { useState } from 'react'

import Card from '@/assets/images/credit-card.png'
import Balance from '@/components/common/Balance'

const transactions = [
  {
    orderNo: '#15317',
    status: 'Successful',
    type: 'airtime',
    amount: '₦1,200.00',
    date: '14 Dec 2020, 8:43 pm',
  },
  {
    orderNo: '#15998',
    status: 'Successful',
    type: 'transfer',
    amount: '₦7900.00',
    date: '01 Dec 2020, 10:12 am',
  },
  {
    orderNo: '#15046',
    status: 'Successful',
    type: 'electricity',
    amount: '₦5,500.00',
    date: '12 Nov 2020, 2:01 pm',
  },
  {
    orderNo: '#15917',
    status: 'Pending',
    type: 'betting',
    amount: '₦880.00',
    date: '21 Oct 2020, 5:54 pm',
  },
  {
    orderNo: '#14404',
    status: 'Failed',
    type: 'transfer',
    amount: '₦7,650.00',
    date: '19 Oct 2020, 7:32 am',
  },
]

const Dashboard = () => {
  const [currentPage, setCurrentPage] = useState(1)
  const transactionsPerPage = 5

  const indexOfLastTransaction = currentPage * transactionsPerPage
  const indexOfFirstTransaction = indexOfLastTransaction - transactionsPerPage
  const currentTransactions = transactions.slice(
    indexOfFirstTransaction,
    indexOfLastTransaction
  )

  const formatTime = (dateString: string) => {
    const dateObject = new Date(dateString)
    return dateObject.toLocaleTimeString([], {
      hour: '2-digit',
      minute: '2-digit',
    })
  }

  return (
    <div className="d-flex flex-column flex-column-fluid">
      <div id="kt_app_toolbar" className="app-toolbar py-3 py-lg-0">
        <div
          id="kt_app_toolbar_container"
          className="app-container container-xxl d-flex flex-stack"
        >
          <div className="page-title d-flex flex-column justify-content-center me-3">
            <h1 className="page-heading d-flex text-gray-900 fw-bold fs-3 flex-column justify-content-center my-0">
              Welcome
            </h1>

            <ul className="breadcrumb breadcrumb-separatorless fw-semibold fs-7 my-0 pt-1">
              <li className="breadcrumb-item text-muted">
                <Link
                  href="/dashboard"
                  className="text-muted text-hover-primary"
                >
                  Dashboard
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </div>
      <div id="kt_app_content" className="app-content flex-column-fluid">
        <div
          id="kt_app_content_container"
          className="app-container container-xxl"
        >
          <div className="lg:tw-hidden tw-block">
            <Balance />
          </div>
          <div className="mb-5 mb-xl-10">
            <div className="card card-custom bg-body border-0 h-md-100">
              <div className="card-body d-flex justify-content-center flex-wrap ps-xl-15 pe-0">
                <div className="flex-grow-1 mt-2 me-9 me-md-0">
                  <div className="position-relative text-gray-800 fs-1 z-index-2 fw-bold mb-5">
                    Upgrade Your Account
                  </div>
                  <span className="text-gray-600 fw-semibold fs-6 mb-6 d-block">
                    Upgrade your account to access all features of Paytonic.
                    <br />
                    by submitting your BVN and other details.
                  </span>
                  <div className="mb-7">
                    <Link
                      href="/dashboard/welcome"
                      replace
                      className="btn btn-sm btn-primary fw-semibold me-2"
                    >
                      Upgrade Now
                    </Link>
                  </div>
                </div>
                <Image
                  src={Card}
                  className="h-175px me-15"
                  alt="Card image"
                  width={175}
                  height={175}
                />
              </div>
            </div>
          </div>
          <div className="card pt-4 mb-6 mb-xl-9">
            <div className="card-header border-0">
              <div className="card-title">
                <h2>Transaction History For Today</h2>
              </div>
            </div>
            <div className="card-body pt-0 pb-5">
              <table
                className="table align-middle table-row-dashed gy-5"
                id="kt_table_customers_payment"
              >
                <thead className="border-bottom border-gray-200 fs-7 fw-bold">
                  <tr className="text-start text-muted text-uppercase gs-0">
                    <th>Order No.</th>
                    <th>Type</th>
                    <th>Status</th>
                    <th>Amount</th>
                    <th className='tw-hidden sm:tw-flex min-w-160px'>Time</th>
                  </tr>
                </thead>
                <tbody className="fs-6 fw-semibold text-gray-600">
                  {currentTransactions.map((transaction, index) => (
                    <tr key={index}>
                      <td>
                        <span className="text-gray-600 mb-1">
                          {transaction.orderNo}
                        </span>
                      </td>
                      <td>{transaction.type}</td>

                      <td>
                        <span
                          className={`badge tw-text-sm badge-light-${
                            transaction.status === 'Successful'
                              ? 'success'
                              : transaction.status === 'Pending'
                                ? 'warning'
                                : 'danger'
                          }`}
                        >
                          {transaction.status}
                        </span>
                      </td>
                      <td>{transaction.amount}</td>
                      <td className='tw-hidden sm:tw-flex'>{formatTime(transaction.date)}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Dashboard
