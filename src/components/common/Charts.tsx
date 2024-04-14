import React, { useEffect } from 'react'

const Charts = () => {
    useEffect(() => {
        const initChart = () => {
          const e = document.getElementById("kt_card_widget_1_chart");
          if (e) {
            const t = e.getAttribute("data-kt-chart-color");
            const a = parseInt(window.getComputedStyle(e).height || '0');
            const l = getComputedStyle(document.documentElement).getPropertyValue("--bs-gray-500");
            const r = KTUtil.isHexColor(t) ? t : getComputedStyle(document.documentElement).getPropertyValue("--bs-" + t);
            const o = getComputedStyle(document.documentElement).getPropertyValue("--bs-gray-300");
            const i = new ApexCharts(e, {
              series: [
                {
                  name: "Sales",
                  data: [30, 75, 55, 45, 30, 60, 75, 50],
                  margin: { left: 5, right: 5 },
                },
              ],
              chart: {
                fontFamily: "inherit",
                type: "bar",
                height: a,
                toolbar: { show: !1 },
                sparkline: { enabled: !0 },
              },
              plotOptions: {
                bar: { horizontal: !1, columnWidth: ["35%"], borderRadius: 6 },
              },
              legend: { show: !1 },
              dataLabels: { enabled: !1 },
              stroke: { show: !0, width: 4, colors: ["transparent"] },
              xaxis: {
                axisBorder: { show: !1 },
                axisTicks: { show: !1 },
                labels: { show: !1, style: { colors: l, fontSize: "12px" } },
                crosshairs: { show: !1 },
              },
              yaxis: {
                labels: { show: !1, style: { colors: l, fontSize: "12px" } },
              },
              fill: { type: "solid" },
              states: {
                normal: { filter: { type: "none", value: 0 } },
                hover: { filter: { type: "none", value: 0 } },
                active: {
                  allowMultipleDataPointsSelection: !1,
                  filter: { type: "none", value: 0 },
                },
              },
              tooltip: {
                style: { fontSize: "12px" },
                x: {
                  formatter: function (e: string) {
                    return "Feb: " + e;
                  },
                },
                y: {
                  formatter: function (e: string) {
                    return e + "%";
                  },
                },
              },
              colors: [r, o],
              grid: {
                borderColor: !1,
                strokeDashArray: 4,
                yaxis: { lines: { show: !0 } },
                padding: { top: 10, left: 25, right: 25 },
              },
            });
            setTimeout(() => {
              i.render();
            }, 300);
          }
        };
        initChart();
      }, []);
  return (
    <div className="row g-5 g-xl-8">
      <div className="col-xl-6">
        <div className="card card-xl-stretch mb-xl-8">
          <div className="card-header border-0 pt-5">
            <h3 className="card-title align-items-start flex-column">
              <span className="card-label fw-bold fs-3 mb-1">
                Recent Statistics
              </span>
              <span className="text-muted fw-semibold fs-7">
                More than 400 new members
              </span>
            </h3>
            <div className="card-toolbar">
              <button
                type="button"
                className="btn btn-sm btn-icon btn-color-primary btn-active-light-primary"
                data-kt-menu-trigger="click"
                data-kt-menu-placement="bottom-end"
              >
                <i className="ki-outline ki-category fs-6"></i>
              </button>
              <div
                className="menu menu-sub menu-sub-dropdown w-250px w-md-300px"
                data-kt-menu="true"
                id="kt_menu_65a10da04dcaf"
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
                        multiple={true}
                        data-kt-select2={true}
                        data-close-on-select={false}
                        data-placeholder="Select option"
                        data-dropdown-parent="#kt_menu_65a10da04dcaf"
                        data-allow-clear={true}
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
                          checked={true}
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
                        checked={true}
                      />
                      <label className="form-check-label">Enabled</label>
                    </div>
                  </div>
                  <div className="d-flex justify-content-end">
                    <button
                      type="reset"
                      className="btn btn-sm btn-light btn-active-light-primary me-2"
                      data-kt-menu-dismiss={true}
                    >
                      Reset
                    </button>
                    <button
                      type="submit"
                      className="btn btn-sm btn-primary"
                      data-kt-menu-dismiss={true}
                    >
                      Apply
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="card-body">
            <div
              id="kt_charts_widget_1_chart"
              style={{ height: '350px' }}
            ></div>
          </div>
        </div>
      </div>
      <div className="col-xl-6">
        <div className="card card-xl-stretch mb-5 mb-xl-8">
          <div className="card-header border-0 pt-5">
            <h3 className="card-title align-items-start flex-column">
              <span className="card-label fw-bold fs-3 mb-1">
                Recent Orders
              </span>
              <span className="text-muted fw-semibold fs-7">
                More than 500 new orders
              </span>
            </h3>
            <div className="card-toolbar" data-kt-buttons={true}>
              <a
                className="btn btn-sm btn-color-muted btn-active btn-active-primary active px-4 me-1"
                id="kt_charts_widget_2_year_btn"
              >
                Year
              </a>
              <a
                className="btn btn-sm btn-color-muted btn-active btn-active-primary px-4 me-1"
                id="kt_charts_widget_2_month_btn"
              >
                Month
              </a>
              <a
                className="btn btn-sm btn-color-muted btn-active btn-active-primary px-4"
                id="kt_charts_widget_2_week_btn"
              >
                Week
              </a>
            </div>
          </div>
          <div className="card-body">
            <div
              id="kt_charts_widget_2_chart"
              style={{ height: '350px' }}
            ></div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Charts
