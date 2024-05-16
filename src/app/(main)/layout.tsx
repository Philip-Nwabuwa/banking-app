'use client'

import Modal from '@/components/common/Modal'
import Loading from '@/components/common/loading'
import useActivityTimeout from '@/hooks/useActivityTimeout'
import useAuthRedirect, { triggerAuthRedirect } from '@/hooks/useAuthRedirect'
import { useLogout } from '@/services/auth'
import { clearAllCookies } from '@/store/cookie'
import { toast } from 'sonner'

const Layout = ({
  children,
}: Readonly<{
  children: React.ReactNode
}>) => {
  const { mutateAsync } = useLogout()
  const loading = useAuthRedirect('/login')

  const { isModalOpen, closeModal } = useActivityTimeout()

  if (loading) {
    return <Loading />
  }

  if (isModalOpen) {
    return (
      <Modal
        isOpen={isModalOpen}
        onClose={closeModal}
        title={''}
        buttonText={'yes'}
        onSubmit={async () => {
          const response = await mutateAsync()
          toast.success(response.data.message)
          clearAllCookies()
          setTimeout(() => {
            triggerAuthRedirect()
          }, 2000)
        }}
        submitText="Logout"
        submitStyle="btn btn-light-danger"
      >
        <div className="tw-text-center">
          <p className="tw-font-bold tw-text-2xl">Are you still there?</p>
        </div>
      </Modal>
    )
  }

  return <div>{children}</div>
}

export default Layout
