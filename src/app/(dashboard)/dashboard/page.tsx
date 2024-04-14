'use client'

import Image from 'next/image'
import Link from 'next/link'
import { SetStateAction, useState } from 'react'

import Card from '@/assets/images/credit-card.png'

const transactions = [
  {
    orderNo: '#15317',
    status: 'Successful',
    amount: '$1,200.00',
    rewards: 120,
    date: '14 Dec 2020, 8:43 pm',
  },
  {
    orderNo: '#15998',
    status: 'Successful',
    amount: '$79.00',
    rewards: 7,
    date: '01 Dec 2020, 10:12 am',
  },
  {
    orderNo: '#15046',
    status: 'Successful',
    amount: '$5,500.00',
    rewards: 550,
    date: '12 Nov 2020, 2:01 pm',
  },
  {
    orderNo: '#15917',
    status: 'Pending',
    amount: '$880.00',
    rewards: 88,
    date: '21 Oct 2020, 5:54 pm',
  },
  {
    orderNo: '#14404',
    status: 'Successful',
    amount: '$7,650.00',
    rewards: 765,
    date: '19 Oct 2020, 7:32 am',
  },
  {
    orderNo: '#15238',
    status: 'Successful',
    amount: '$375.00',
    rewards: 37,
    date: '23 Sep 2020, 12:38 am',
  },
  {
    orderNo: '#15929',
    status: 'Successful',
    amount: '$129.00',
    rewards: 12,
    date: '11 Sep 2020, 3:18 pm',
  },
  {
    orderNo: '#15445',
    status: 'Rejected',
    amount: '$450.00',
    rewards: 45,
    date: '03 Sep 2020, 1:08 am',
  },
  {
    orderNo: '#14575',
    status: 'Pending',
    amount: '$8,700.00',
    rewards: 870,
    date: '01 Sep 2020, 4:58 pm',
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

  const totalPages = Math.ceil(transactions.length / transactionsPerPage)

  const paginate = (pageNumber: SetStateAction<number>) =>
    setCurrentPage(pageNumber)
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
          <div className="col-xl-8 mb-5 mb-xl-10">
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
                <h2>Transaction History</h2>
              </div>
            </div>
            <div className="card-body pt-0 pb-5">
              <table
                className="table align-middle table-row-dashed gy-5"
                id="kt_table_customers_payment"
              >
                <thead className="border-bottom border-gray-200 fs-7 fw-bold">
                  <tr className="text-start text-muted text-uppercase gs-0">
                    <th className="min-w-100px">Order No.</th>
                    <th>Status</th>
                    <th>Amount</th>
                    <th className="min-w-160px">Date</th>
                  </tr>
                </thead>
                <tbody className="fs-6 fw-semibold text-gray-600">
                  {currentTransactions.map((transaction, index) => (
                    <tr key={index}>
                      <td>
                        <a
                          href="apps/ecommerce/sales/details.html"
                          className="text-gray-600 text-hover-primary mb-1"
                        >
                          {transaction.orderNo}
                        </a>
                      </td>
                      <td>
                        <span
                          className={`badge badge-light-${
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
                      <td>{transaction.date}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
            <ul className="pagination mb-10">
              <li
                className={`page-item previous ${
                  currentPage === 1 ? 'disabled' : ''
                }`}
                onClick={() => paginate(currentPage - 1)}
              >
                <a href="#" className="page-link">
                  <i className="previous"></i>
                </a>
              </li>
              {Array.from({ length: totalPages }, (_, i) => (
                <li
                  key={i}
                  className={`page-item ${
                    currentPage === i + 1 ? 'active' : ''
                  }`}
                  onClick={() => paginate(i + 1)}
                >
                  <a href="#" className="page-link">
                    {i + 1}
                  </a>
                </li>
              ))}
              <li
                className={`page-item next ${
                  currentPage === totalPages ? 'disabled' : ''
                }`}
                onClick={() => paginate(currentPage + 1)}
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
  )
}

export default Dashboard
