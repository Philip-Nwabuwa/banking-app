import { type ClassValue, clsx } from 'clsx'
import { twMerge } from 'tailwind-merge'

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}

export const getPasswordStrength = (password: string) => {
  if (!password) return 0

  let strength = 0

  if (password.length >= 8) strength++

  const hasLetters = /[a-zA-Z]/.test(password)
  const hasNumbers = /[0-9]/.test(password)
  const hasSymbols = /[^a-zA-Z0-9]/.test(password)

  if (hasLetters) strength++
  if (hasNumbers) strength++
  if (hasSymbols) strength++

  return strength
}

export const formatTime = (dateString: string) => {
  const dateObject = new Date(dateString)
  return dateObject.toLocaleTimeString([], {
    hour: '2-digit',
    minute: '2-digit',
  })
}
