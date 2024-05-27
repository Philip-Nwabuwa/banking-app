'use client'

import { clearAllCookies } from '@/store/cookie'
import { useState, useEffect } from 'react'
import { toast } from 'sonner'
import { triggerAuthRedirect } from './useAuthRedirect'
import { useLogout } from '@/services/auth'
import useUserStore from '@/store/profile'

function useLogoutOnTimeout(timeoutDuration: number) {
  const { mutateAsync } = useLogout()
  const { clearUserData } = useUserStore()

  useEffect(() => {
    const checkTimeout = setInterval(async () => {
      const response = await mutateAsync()
      toast.success(response.data.message)
      clearAllCookies()
      clearUserData()
      setTimeout(() => {
        triggerAuthRedirect()
      }, 2000)
    }, timeoutDuration)

    return () => clearInterval(checkTimeout)
  }, [timeoutDuration, mutateAsync])
}

function useActivityTimeout(timeoutDuration = 10 * 60 * 1000) {
  const [lastActivityTime, setLastActivityTime] = useState(Date.now())
  const [isModalOpen, setIsModalOpen] = useState(false)

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setLastActivityTime(Date.now())
        } else {
          setIsModalOpen(false)
        }
      },
      {
        threshold: 0,
      }
    )

    observer.observe(document.documentElement)

    const handleInteractions = () => {
      setLastActivityTime(Date.now())
    }

    window.addEventListener('mousemove', handleInteractions)
    window.addEventListener('keypress', handleInteractions)
    window.addEventListener('click', handleInteractions)

    return () => {
      observer.disconnect()
      window.removeEventListener('mousemove', handleInteractions)
      window.removeEventListener('keypress', handleInteractions)
      window.removeEventListener('click', handleInteractions)
    }
  }, [])

  useLogoutOnTimeout(timeoutDuration)

  useEffect(() => {
    const checkTimeout = setInterval(() => {
      const currentTime = Date.now()

      if (currentTime - lastActivityTime >= timeoutDuration - 8 * 60 * 1000) {
        setIsModalOpen(true)
      }
    }, 1000)

    return () => clearInterval(checkTimeout)
  }, [timeoutDuration, lastActivityTime])

  const closeModal = () => {
    setIsModalOpen(false)
    setLastActivityTime(Date.now())
  }

  return { isModalOpen, closeModal }
}

export default useActivityTimeout
