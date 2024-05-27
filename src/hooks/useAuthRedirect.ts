'use client'

import { useEffect, useState } from 'react'
import { useRouter } from 'next/navigation'
import Cookies from 'js-cookie'

const useAuthRedirect = (redirectTo: string = '/login') => {
  const router = useRouter()
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    setLoading(true)

    const checkAuth = async () => {
      const session_id = Cookies.get('session_id')
      const profile_name = Cookies.get('profile_set')
      if (!session_id) {
        router.push(redirectTo)
      } else if (session_id && profile_name === 'false') {
        router.push(redirectTo)
      } else {
        ;[]
      }
      setLoading(false)
    }

    checkAuth()
  }, [router, redirectTo])

  return loading
}
export const triggerAuthRedirect = (redirectTo: string = '/login') => {
  const session_id = Cookies.get('session_id')
  if (!session_id) {
    window.location.href = redirectTo
  } else {
    window.location.href = '/dashboard'
  }
}

export default useAuthRedirect
