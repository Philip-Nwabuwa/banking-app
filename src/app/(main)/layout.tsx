'use client'

import Loading from '@/components/common/loading'
import useAuthRedirect from '@/hooks/useAuthRedirect'

const Layout = ({
  children,
}: Readonly<{
  children: React.ReactNode
}>) => {
  const loading = useAuthRedirect('/login')
  if (loading) {
    return <Loading />
  }
  return <div>{children}</div>
}

export default Layout
