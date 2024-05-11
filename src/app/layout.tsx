import type { Metadata } from 'next'
import '../style/style.bundle.css'
import '../style/plugins.bundle.css'
import ThemeProvider from '@/components/providers/ThemeProvider'
import { Toaster } from 'sonner'
// import NextTopLoader from 'nextjs-toploader'
import TanstackProvider from '@/components/providers/TanstackProvider'

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
      <body>
        <ThemeProvider>
          {/* <NextTopLoader
            color="#2299DD"
            crawlSpeed={200}
            showSpinner={false}
            height={3}
            crawl={true}
            easing="ease"
            speed={200}
            shadow="0 0 10px #2299DD,0 0 5px #2299DD"
            zIndex={1600}
            showAtBottom={false}
          /> */}
          <TanstackProvider>{children}</TanstackProvider>
          <Toaster richColors position="top-center" />
        </ThemeProvider>
      </body>
    </html>
  )
}
