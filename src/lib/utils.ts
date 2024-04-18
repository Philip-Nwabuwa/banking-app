import { type ClassValue, clsx } from 'clsx'
import { toast } from 'sonner'
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

export const handleCopyToClipboard = (
  item: string,
  setCopied: React.Dispatch<React.SetStateAction<boolean>>
) => {
  console.log(item);
  
  navigator.clipboard
  .writeText(item)
  .then(() => {
    setCopied(true);
    setTimeout(() => {
      setCopied(false);
    }, 3000);
  })
    .catch((error) => {
      console.error('Failed to copy:', error)
      toast.error('Failed to copy')
    })
}
