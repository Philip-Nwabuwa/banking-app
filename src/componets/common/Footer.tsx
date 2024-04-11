import Link from 'next/link'
import React from 'react'

const Footer = () => {
  return (
    <div id="kt_app_footer" className="app-footer">
      <div className="app-container container-xxl d-flex flex-column flex-md-row flex-center flex-md-stack py-3">
        <div className="text-gray-900 order-2 order-md-1">
          <span className="text-muted fw-semibold me-1">2024&copy;</span>
          <Link
            href="https://keenthemes.com"
            target="_blank"
            className="text-gray-800 text-hover-primary"
          >
            Keenthemes
          </Link>
        </div>

        <ul className="menu menu-gray-600 menu-hover-primary fw-semibold order-1">
          <li className="menu-item">
            <Link
              href="https://keenthemes.com"
              target="_blank"
              className="menu-link px-2"
            >
              About
            </Link>
          </li>
          <li className="menu-item">
            <Link
              href="https://devs.keenthemes.com"
              target="_blank"
              className="menu-link px-2"
            >
              Support
            </Link>
          </li>
          <li className="menu-item">
            <Link
              href="https://1.envato.market/EA4JP"
              target="_blank"
              className="menu-link px-2"
            >
              Purchase
            </Link>
          </li>
        </ul>
      </div>
    </div>
  )
}

export default Footer
