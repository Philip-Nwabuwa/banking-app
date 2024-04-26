'use client'

import { useState } from 'react'
import { toast } from 'sonner'

const CopyToClipboard = ({ text }: { text: string }) => {
  const [showSuccess, setShowSuccess] = useState(false)
  const [copiedValue, setCopiedValue] = useState('')

  const copyToClipboard = async () => {
    try {
      await navigator.clipboard.writeText(text)
      setShowSuccess(true)
      setCopiedValue(text)
      setTimeout(
        () => {
          setCopiedValue('')
        },
        10 * 60 * 1000
      )
      setTimeout(() => {
        setShowSuccess(false)
      }, 3000)
    } catch (error) {
      toast.error('Failed to copy, try again.')
    }
  }

  return (
    <div>
      {!showSuccess && (
        <i
          className="ki-solid ki-copy fs-1 tw-cursor-pointer"
          onClick={copyToClipboard}
        ></i>
      )}
      {showSuccess && (
        <i className="ki-solid ki-copy-success fs-1 text-success"></i>
      )}
    </div>
  )
}

export default CopyToClipboard
