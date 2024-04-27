import useSidebarLinks from '@/types/sidebar-links'
import Link from 'next/link'
import { UrlObject } from 'url'

import BankTransferModal from '../Modals/payout/BankTransferModal'
import PaytonicTransferModal from '../Modals/payout/PaytonicTransferModal'
import AirtimeModal from '@/components/Modals/bills/AirtimeModal'
import BettingModal from '@/components/Modals/bills/BettingModal'
import DataModal from '@/components/Modals/bills/DataModal'
import ElectricityModal from '@/components/Modals/bills/ElectricityModal'
import TelevisionModal from '@/components/Modals/bills/TelevisionModal'

interface LinkItem {
  href?: string | UrlObject
  icon: string
  label: string
  onClick?: () => void
}

interface SidebarLinkProps {
  link: LinkItem | { name: string; links: LinkItem[] }
  isActiveLink: (href: string) => boolean
  toggleSidebar?: () => void
}

const SidebarLink: React.FC<SidebarLinkProps> = ({
  link,
  isActiveLink,
  toggleSidebar,
}) => {
  const { showModal, setShowModal } = useSidebarLinks()

  const closeModal = () => {
    setShowModal(null)
  }

  const handleLinkClick = (onClick: (() => void) | undefined) => {
    if (onClick) {
      onClick()
    }
  }

  if ('name' in link && Array.isArray(link.links)) {
    return (
      <div className="tw-w-full">
        <h3 className="text-gray-800 fw-bold mb-8">{link.name}</h3>
        <div className="row row-cols-3">
          {link.links.map((subLink, index) => (
            <SidebarLink
              key={index}
              link={subLink}
              isActiveLink={isActiveLink}
              toggleSidebar={toggleSidebar}
            />
          ))}
        </div>
      </div>
    )
  } else {
    const singleLink = link as LinkItem
    return (
      <div className="col mb-4">
        {singleLink.onClick ? (
          <button
            className={`btn btn-icon btn-outline btn-bg-light btn-active-light-primary btn-flex flex-column flex-center w-lg-90px h-lg-90px w-70px h-70px border-gray-200 ${
              isActiveLink(singleLink.href as string) ? 'active' : ''
            }`}
            onClick={() => handleLinkClick(singleLink.onClick)}
            data-kt-button="true"
          >
            <span className="mb-2">
              <i className={`ki-outline ${singleLink.icon} fs-1`}></i>
            </span>
            <span className="fs-7 fw-bold">{singleLink.label}</span>
          </button>
        ) : (
          <Link
            href={singleLink.href || '#'}
            className={`btn btn-icon btn-outline btn-bg-light btn-active-light-primary btn-flex flex-column flex-center w-lg-90px h-lg-90px w-70px h-70px border-gray-200 ${
              isActiveLink(singleLink.href as string) ? 'active' : ''
            }`}
            onClick={toggleSidebar}
            data-kt-button="true"
          >
            <span className="mb-2">
              <i className={`ki-outline ${singleLink.icon} fs-1`}></i>
            </span>
            <span className="fs-7 fw-bold">{singleLink.label}</span>
          </Link>
        )}
        {showModal === 'airtime' && <AirtimeModal onClose={closeModal} />}
        {showModal === 'data' && <DataModal onClose={closeModal} />}
        {showModal === 'television' && <TelevisionModal onClose={closeModal} />}
        {showModal === 'electricity' && (
          <ElectricityModal onClose={closeModal} />
        )}
        {showModal === 'betting' && <BettingModal onClose={closeModal} />}
        {showModal === 'bank-transfer' && (
          <BankTransferModal onClose={closeModal} />
        )}
        {showModal === 'paytonic-transfer' && (
          <PaytonicTransferModal onClose={closeModal} />
        )}
      </div>
    )
  }
}

export default SidebarLink
