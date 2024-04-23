'use client'

import { useEffect, useState } from 'react'

const ScrollToTop = () => {
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      const scrollY = window.scrollY
      if (scrollY > 0) {
        setIsVisible(true)
      } else {
        setIsVisible(false)
      }
    }

    window.addEventListener('scroll', handleScroll)

    return () => {
      window.removeEventListener('scroll', handleScroll)
    }
  }, [])

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }
  return (
    <div
      onClick={scrollToTop}
      className={`tw-fixed tw-bottom-5 tw-right-5 tw-w-10 tw-h-10 tw-rounded-xl tw-bg-[#1B84FF] tw-flex tw-justify-center tw-items-center tw-cursor-pointer tw-transition-opacity tw-duration-300 ${isVisible ? 'tw-opacity-30' : 'tw-opacity-0'} hover:tw-opacity-100`}
      style={{ transitionTimingFunction: 'ease-in' }}
    >
      <i className="!tw-text-white ki-outline ki-arrow-up !tw-text-[16px]"></i>
    </div>
  )
}

export default ScrollToTop
