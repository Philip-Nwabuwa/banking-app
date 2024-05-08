'use client'

import Image from 'next/image'
import Link from 'next/link'
import { useState } from 'react'

import Card from '@/assets/images/credit-card.png'
import { Balance } from '@/components/common/Balance'
import LineChart from '@/components/common/LineChart'
import { formatTime } from '@/lib/utils'
import { transactions } from '@/types/transactions'

const Dashboard = () => {
  const [currentPage, setCurrentPage] = useState(1)
  const transactionsPerPage = 5

  const indexOfLastTransaction = currentPage * transactionsPerPage
  const indexOfFirstTransaction = indexOfLastTransaction - transactionsPerPage
  const currentTransactions = transactions.slice(
    indexOfFirstTransaction,
    indexOfLastTransaction
  )

  const seriesName = 'Money In'
  const categories = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat']
  const seriesData: number[] = Array(categories.length).fill(0)
  const height = 250

  const baseColor = '#17C653'
  const lightColor = '#DFFFEA'
  const labelColor = '#6e707e'
  const borderColor = '#ebedf2'

  categories.forEach((day, index) => {
    // Filter transactions for the current day with status 'Successful' and types 'deposit' and 'received'
    const transactionsForDay = transactions.filter(
      (transaction) =>
        new Date(transaction.date).toLocaleDateString('en-US', {
          weekday: 'short',
        }) === day &&
        transaction.status === 'Successful' &&
        (transaction.type === 'deposit' || transaction.type === 'received')
    )

    const sumForDay = transactionsForDay.reduce((sum, transaction) => {
      const amount = parseFloat(transaction.amount.replace(/[₦,]/g, ''))
      return sum + amount
    }, 0)
    seriesData[index] = sumForDay
  })

  const seriesName1 = 'Money Out'
  const seriesData1: number[] = Array(categories.length).fill(0)

  const baseColor1 = '#F8285A'
  const lightColor1 = '#FFEEF3'

  categories.forEach((day, index) => {
    const transactionsForDay = transactions.filter(
      (transaction) =>
        new Date(transaction.date).toLocaleDateString('en-US', {
          weekday: 'short',
        }) === day &&
        transaction.status === 'Successful' &&
        (transaction.type === 'airtime' ||
          transaction.type === 'bank-transfer' ||
          transaction.type === 'paytonic-transfer' ||
          transaction.type === 'betting' ||
          transaction.type === 'settlement' ||
          transaction.type === 'television' ||
          transaction.type === 'data' ||
          transaction.type === 'electricity')
    )
    const sumForDay = transactionsForDay.reduce((sum, transaction) => {
      const amount = parseFloat(transaction.amount.replace(/[₦,]/g, ''))
      return sum + amount
    }, 0)
    seriesData1[index] = sumForDay
  })

  return (
    <div className="d-flex flex-column flex-column-fluid">
      <div id="kt_app_toolbar" className="app-toolbar !tw-h-16 py-3 py-lg-0">
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
                    Verfiy Your Account
                  </div>
                  <span className="text-gray-600 fw-semibold fs-6 mb-6 d-block">
                  Verfiy your account to access all features of Paytonic.
                    <br />
                    by submitting your BVN and other details.
                  </span>
                  <div className="mb-7">
                    <Link
                      href="/verify-account"
                      className="btn btn-sm btn-primary fw-semibold me-2"
                    >
                      Verfiy Now
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
          {currentTransactions.length === 0 ? null : (
            <div className="tw-grid md:tw-grid-cols-2 tw-gap-4 mb-5 mb-xl-10">
              <LineChart
                name={seriesName}
                categories={categories}
                height={height}
                baseColor={baseColor}
                lightColor={lightColor}
                labelColor={labelColor}
                borderColor={borderColor}
                data={seriesData}
              />
              <LineChart
                data={seriesData1}
                name={seriesName1}
                categories={categories}
                height={height}
                baseColor={baseColor1}
                lightColor={lightColor1}
                labelColor={labelColor}
                borderColor={borderColor}
              />
            </div>
          )}
          <div className="card pt-4 mb-6 mb-xl-9">
            <div className="card-header border-0">
              <div className="card-title">
                <h2>Transaction History For Today</h2>
              </div>
            </div>
            <div className="card-body table-responsive pt-0 pb-5">
              {currentTransactions.length === 0 ? (
                <p>No transactions yet</p>
              ) : (
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
                      <th>Time</th>
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
                        <td>{formatTime(transaction.date)}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Dashboard