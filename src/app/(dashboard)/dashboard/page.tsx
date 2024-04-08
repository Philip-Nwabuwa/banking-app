"use client"

import { SetStateAction, useState } from "react";

const transactions = [
  {
    orderNo: "#15317",
    status: "Successful",
    amount: "$1,200.00",
    rewards: 120,
    date: "14 Dec 2020, 8:43 pm",
  },
  {
    orderNo: "#15998",
    status: "Successful",
    amount: "$79.00",
    rewards: 7,
    date: "01 Dec 2020, 10:12 am",
  },
  {
    orderNo: "#15046",
    status: "Successful",
    amount: "$5,500.00",
    rewards: 550,
    date: "12 Nov 2020, 2:01 pm",
  },
  {
    orderNo: "#15917",
    status: "Pending",
    amount: "$880.00",
    rewards: 88,
    date: "21 Oct 2020, 5:54 pm",
  },
  {
    orderNo: "#14404",
    status: "Successful",
    amount: "$7,650.00",
    rewards: 765,
    date: "19 Oct 2020, 7:32 am",
  },
  {
    orderNo: "#15238",
    status: "Successful",
    amount: "$375.00",
    rewards: 37,
    date: "23 Sep 2020, 12:38 am",
  },
  {
    orderNo: "#15929",
    status: "Successful",
    amount: "$129.00",
    rewards: 12,
    date: "11 Sep 2020, 3:18 pm",
  },
  {
    orderNo: "#15445",
    status: "Rejected",
    amount: "$450.00",
    rewards: 45,
    date: "03 Sep 2020, 1:08 am",
  },
  {
    orderNo: "#14575",
    status: "Pending",
    amount: "$8,700.00",
    rewards: 870,
    date: "01 Sep 2020, 4:58 pm",
  },
];

const Dashboard = () => {
  const [currentPage, setCurrentPage] = useState(1);
  const transactionsPerPage = 5;

  const indexOfLastTransaction = currentPage * transactionsPerPage;
  const indexOfFirstTransaction = indexOfLastTransaction - transactionsPerPage;
  const currentTransactions = transactions.slice(
    indexOfFirstTransaction,
    indexOfLastTransaction
  );

  const totalPages = Math.ceil(transactions.length / transactionsPerPage);

  const paginate = (pageNumber: SetStateAction<number>) =>
    setCurrentPage(pageNumber);
  return (
    <div className="d-flex flex-column flex-column-fluid">
      <div id="kt_app_toolbar" className="app-toolbar py-3 py-lg-0">
        <div
          id="kt_app_toolbar_container"
          className="app-container container-xxl d-flex flex-stack"
        >
          <div className="page-title d-flex flex-column justify-content-center me-3">
            <h1 className="page-heading d-flex text-gray-900 fw-bold fs-3 flex-column justify-content-center my-0">
              Getting Started
            </h1>

            <ul className="breadcrumb breadcrumb-separatorless fw-semibold fs-7 my-0 pt-1">
              <li className="breadcrumb-item text-muted">
                <a href="index.html" className="text-muted text-hover-primary">
                  Home
                </a>
              </li>
              <li className="breadcrumb-item">
                <span className="bullet bg-gray-500 w-5px h-2px"></span>
              </li>
              <li className="breadcrumb-item text-muted">Subscription</li>
            </ul>
          </div>
          <div className="d-flex align-items-center gap-2 gap-lg-3">
            <div className="m-0">
              <a
                href="#"
                className="btn btn-sm btn-flex btn-secondary fw-bold"
                data-kt-menu-trigger="click"
                data-kt-menu-placement="bottom-end"
              >
                <i className="ki-outline ki-filter fs-6 text-muted me-1"></i>
                Filter
              </a>
              <div
                className="menu menu-sub menu-sub-dropdown w-250px w-md-300px"
                data-kt-menu="true"
                id="kt_menu_65a10d99c96cf"
              >
                <div className="px-7 py-5">
                  <div className="fs-5 text-gray-900 fw-bold">
                    Filter Options
                  </div>
                </div>

                <div className="separator border-gray-200"></div>

                <div className="px-7 py-5">
                  <div className="mb-10">
                    <label className="form-label fw-semibold">Status:</label>

                    <div>
                      <select
                        className="form-select form-select-solid"
                        data-kt-select2="true"
                        data-close-on-select="false"
                        data-placeholder="Select option"
                        data-dropdown-parent="#kt_menu_65a10d99c96cf"
                        data-allow-clear="true"
                      >
                        <option></option>
                        <option value="1">Approved</option>
                        <option value="2">Pending</option>
                        <option value="2">In Process</option>
                        <option value="2">Rejected</option>
                      </select>
                    </div>
                  </div>
                  <div className="mb-10">
                    <label className="form-label fw-semibold">
                      Member Type:
                    </label>

                    <div className="d-flex">
                      <label className="form-check form-check-sm form-check-custom form-check-solid me-5">
                        <input
                          className="form-check-input"
                          type="checkbox"
                          value="1"
                        />
                        <span className="form-check-label">Author</span>
                      </label>
                      <label className="form-check form-check-sm form-check-custom form-check-solid">
                        <input
                          className="form-check-input"
                          type="checkbox"
                          value="2"
                        />
                        <span className="form-check-label">Customer</span>
                      </label>
                    </div>
                  </div>
                  <div className="mb-10">
                    <label className="form-label fw-semibold">
                      Notifications:
                    </label>

                    <div className="form-check form-switch form-switch-sm form-check-custom form-check-solid">
                      <input
                        className="form-check-input"
                        type="checkbox"
                        value=""
                        name="notifications"
                      />
                      <label className="form-check-label">Enabled</label>
                    </div>
                  </div>
                  <div className="d-flex justify-content-end">
                    <button
                      type="reset"
                      className="btn btn-sm btn-light btn-active-light-primary me-2"
                      data-kt-menu-dismiss="true"
                    >
                      Reset
                    </button>
                    <button
                      type="submit"
                      className="btn btn-sm btn-primary"
                      data-kt-menu-dismiss="true"
                    >
                      Apply
                    </button>
                  </div>
                </div>
              </div>
            </div>

            <a
              href="#"
              className="btn btn-sm fw-bold btn-primary"
              data-bs-toggle="modal"
              data-bs-target="#kt_modal_create_app"
            >
              Create
            </a>
          </div>
        </div>
      </div>
      <div id="kt_app_content" className="app-content flex-column-fluid">
        <div
          id="kt_app_content_container"
          className="app-container container-xxl"
        >
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
                    <th className="min-w-100px">Rewards</th>
                    <th className="min-w-100px">Date</th>
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
                            transaction.status === "Successful"
                              ? "success"
                              : transaction.status === "Pending"
                              ? "warning"
                              : "danger"
                          }`}
                        >
                          {transaction.status}
                        </span>
                      </td>
                      <td>{transaction.amount}</td>
                      <td>{transaction.rewards}</td>
                      <td>{transaction.date}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
            <ul className="pagination mb-10">
              <li
                className={`page-item previous ${
                  currentPage === 1 ? "disabled" : ""
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
                    currentPage === i + 1 ? "active" : ""
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
                  currentPage === totalPages ? "disabled" : ""
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
  );
};

export default Dashboard;
