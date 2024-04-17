import Link from 'next/link'

interface SidebarLinkProps {
  link: {
    href: string
    icon: string
    label: string
  }
  isActiveLink: (href: string) => boolean
  toggleSidebar?: () => void
}

const SidebarLink: React.FC<SidebarLinkProps> = ({
  link,
  isActiveLink,
  toggleSidebar,
}) => {
  return (
    <div className="col mb-4">
      <Link
        href={link.href}
        className={`btn btn-icon btn-outline btn-bg-light btn-active-light-primary btn-flex flex-column flex-center w-lg-90px h-lg-90px w-70px h-70px border-gray-200 ${
          isActiveLink(link.href) ? 'active' : ''
        }`}
        data-kt-button="true"
        onClick={toggleSidebar}
      >
        <span className="mb-2">
          <i className={`ki-outline ${link.icon} fs-1`}></i>
        </span>
        <span className="fs-7 fw-bold">{link.label}</span>
      </Link>
    </div>
  )
}

export default SidebarLink
