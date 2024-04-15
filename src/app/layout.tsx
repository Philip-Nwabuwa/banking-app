import type { Metadata } from 'next'
import '../style/globals.css'
import '../style/plugins.bundle.css'
import '../style/style.bundle.css'
import ThemeProvider from '@/components/providers/ThemeProvider'
import { Toaster } from 'sonner'

export const metadata: Metadata = {
  title: 'Paytonic',
  description: 'A redefined payment service for your business',
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <ThemeProvider>
        <body>{children}</body>
        <Toaster richColors position="top-center" />
      </ThemeProvider>
    </html>
  )
}
