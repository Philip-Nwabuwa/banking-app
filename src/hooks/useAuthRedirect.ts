'use client'

import { useEffect } from 'react'
import { useRouter } from 'next/navigation'
import Cookies from 'js-cookie'

const useAuthRedirect = (redirectTo: string = '/login') => {
  const router = useRouter()

  useEffect(() => {
    const session_id = Cookies.get('session_id')
    if (!session_id) {
      router.replace(redirectTo)
    } else {
      router.push('/dashboard')
    }
  }, [router, redirectTo])
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
