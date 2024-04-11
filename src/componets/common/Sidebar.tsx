"use client";

import Logo from "@/assets/logos/main.png";
import MinLogo from "@/assets/logos/simple.png";
import UserImage from "@/assets/images/user.jpg";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";

const links = [
  {
    href: "/dashboard/accounts",
    icon: "ki-chart-line-up-2",
    label: "Accounts",
  },
  { href: "/dashboard/payout", icon: "ki-calendar", label: "Payout" },
  { href: "/dashboard/bills", icon: "ki-security-check", label: "Bills" },
  {
    href: "/dashboard/withdrawals",
    icon: "ki-wifi-square",
    label: "Withdrawals",
  },
  { href: "/dashboard/airtime", icon: "ki-rocket", label: "Airtime" },
  {
    href: "/dashboard/statements",
    icon: "ki-geolocation",
    label: "Statements",
  },
  { href: "/dashboard/reversal", icon: "ki-abstract-28", label: "Reversal" },
  { href: "/dashboard/pos", icon: "ki-abstract-28", label: "POS" },
];

const Sidebar = () => {
  const pathname = usePathname();

  const isActiveLink = (href: string) => {
    return pathname === href;
  };

  return (
    <div
      id="kt_app_sidebar"
      className="app-sidebar flex-column"
      data-kt-drawer="true"
      data-kt-drawer-name="app-sidebar"
      data-kt-drawer-activate="{default: true, lg: false}"
      data-kt-drawer-overlay="true"
      data-kt-drawer-width="275px"
      data-kt-drawer-direction="start"
      data-kt-drawer-toggle="#kt_app_sidebar_toggle"
    >
      <div
        className="d-flex flex-stack px-4 px-lg-6 py-3 py-lg-8"
        id="kt_app_sidebar_logo"
      >
        <Link href="/dashboard">
          <Image
            alt="Logo"
            src={Logo}
            className="h-25px h-lg-30px theme-light-show"
            width={226}
            height={60}
          />

          {/* <img
              alt="LogoMe"
              src="assets/media/logos/demo23-dark.svg"
              className="h-20px h-lg-25px theme-dark-show"
            /> */}
        </Link>

        <div className="ms-3">
          <div
            className="cursor-pointer position-relative symbol symbol-circle symbol-40px"
            data-kt-menu-trigger="{default: 'click', lg: 'hover'}"
            data-kt-menu-attach="parent"
            data-kt-menu-placement="bottom-end"
          >
            <Link href={"/dashboard/settings"}>
              <Image
                src={UserImage}
                width={100}
                height={100}
                alt="user"
                style={{
                  width: "50px",
                  height: "50px",
                  borderRadius: "100%",
                }}
              />
            </Link>
            <div className="position-absolute rounded-circle bg-success start-100 top-100 h-8px w-8px ms-n3 mt-n3"></div>
          </div>
        </div>
      </div>

      <div
        className="flex-column-fluid px-4 px-lg-8 py-4"
        id="kt_app_sidebar_nav"
      >
        <div
          id="kt_app_sidebar_nav_wrapper"
          className="d-flex flex-column hover-scroll-y pe-4 me-n4"
          data-kt-scroll="true"
          data-kt-scroll-activate="true"
          data-kt-scroll-height="auto"
          data-kt-scroll-dependencies="#kt_app_sidebar_logo, #kt_app_sidebar_footer"
          data-kt-scroll-wrappers="#kt_app_sidebar, #kt_app_sidebar_nav"
          data-kt-scroll-offset="5px"
        >
          {/* <div className="d-flex align-items-center flex-column w-100 mb-6">
            <div className="d-flex justify-content-between fw-bolder fs-6 text-gray-800 w-100 mt-auto mb-3">
              <span>Your Goal</span>
            </div>
            <div
              className="w-100 bg-light-primary rounded mb-2"
              style={{ height: "24px" }}
            >
              <div
                className="bg-primary rounded"
                role="progressbar"
                style={{ height: "24px", width: "0%" }}
                aria-valuenow={0}
                aria-valuemin={0}
                aria-valuemax={100}
              ></div>
            </div>
            <div className="fw-semibold fs-7 text-primary w-100 mt-auto">
              <span>reached 0% of your target</span>
            </div>
          </div> */}
          <div className="d-flex mb-3 mb-lg-6">
            <div className="border border-gray-300 border-dashed rounded min-w-100px w-100 py-2 px-4 me-6">
              <span className="fs-6 text-gray-500 fw-bold">Balance</span>

              <div className="fs-2 fw-bold text-success">$0</div>
            </div>

            <div className="border border-gray-300 border-dashed rounded min-w-100px w-100 py-2 px-4">
              <span className="fs-6 text-gray-500 fw-bold">Legder</span>

              <div className="fs-2 fw-bold text-danger">$0</div>
            </div>
          </div>
          <div className="mb-6">
            <h3 className="text-gray-800 fw-bold mb-8">Services</h3>

            <div
              className="row row-cols-3"
              data-kt-buttons="true"
              data-kt-buttons-target="[data-kt-button]"
            >
              {links.map((link, index) => (
                <div className="col mb-4" key={index}>
                  <Link
                    href={link.href}
                    className={`btn btn-icon btn-outline btn-bg-light btn-active-light-primary btn-flex flex-column flex-center w-lg-90px h-lg-90px w-70px h-70px border-gray-200 ${
                      isActiveLink(link.href) ? "active" : ""
                    }`}
                    data-kt-button="true"
                  >
                    <span className="mb-2">
                      <i className={`ki-outline ${link.icon} fs-1`}></i>
                    </span>
                    <span className="fs-7 fw-bold">{link.label}</span>
                  </Link>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
      <div
        className="flex-column-auto d-flex flex-center px-4 px-lg-8 py-3 py-lg-8"
        id="kt_app_sidebar_footer"
      >
        <div className="app-footer-item">
          <Link
            href="/dashboard/settings"
            className="btn btn-icon btn-custom btn-icon-muted btn-active-light btn-active-color-primary w-35px h-35px w-md-40px h-md-40px"
          >
            <i className="ki-outline ki-setting-2 fs-2"></i>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
