'use client'

import Loading from '@/components/common/loading'
import Signup from '@/components/modules/auth/signup'
import useAuthRedirect from '@/hooks/useAuthRedirect'

const SignUpPage = () => {
  const loading = useAuthRedirect('/signup')
  if (loading) {
    return <Loading />
  }
  return (
    <>
      <Signup />
    </>
  )
}

export default SignUpPage
