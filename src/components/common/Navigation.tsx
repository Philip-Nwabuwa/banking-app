import Link from 'next/link'

interface NavigationProps {
  pathname: string
  navItems: { label: string; path: string }[]
}

const Navigation: React.FC<NavigationProps> = ({ pathname, navItems }) => {
  return (
    <div id="kt_app_content_container" className="app-container container-xxl">
      <div className="card mb-5 mb-xl-10">
        <div
          className="card-body"
          style={{
            paddingBottom: '10px',
            paddingTop: '5px',
          }}
        >
          <ul
            style={{
              display: 'flex',
              justifyContent: 'start',
              alignItems: 'center',
            }}
            className="nav nav-stretch nav-line-tabs nav-line-tabs-2x border-transparent fs-5 fw-bold"
          >
            {navItems.map((item, index) => (
              <li key={index} className="nav-item mt-2">
                <Link
                  href={item.path}
                  className={`nav-link text-active-primary ms-0 me-10 ${
                    pathname === item.path ? 'active' : ''
                  }`}
                >
                  {item.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  )
}

export default Navigation
