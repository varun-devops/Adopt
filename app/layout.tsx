import './css/style.css'

import { Inter, Architects_Daughter } from 'next/font/google'
import { Metadata } from 'next'

import AosProvider from '@/components/aos-provider'
import CustomCursor from '@/components/custom-cursor'
import PageTransition from '@/components/page-transition'
import { ThemeProvider } from '@/components/theme-provider'

const inter = Inter({
  subsets: ['latin'],
  variable: '--font-inter',
  display: 'swap'
})

const architects_daughter = Architects_Daughter({
  subsets: ['latin'],
  variable: '--font-architects-daughter',
  weight: '400',
  display: 'swap'
})

export const metadata: Metadata = {
  title: 'Adopt Network',
  description: 'Adopt Network - Connecting startups with investors',
  icons: {
    icon: [
      {
        url: '/images/logo.png',
        href: '/images/logo.png',
        type: 'image/png',
        sizes: '32x32'
      },
      {
        url: '/images/logo.png',
        href: '/images/logo.png',
        type: 'image/png',
        sizes: '16x16'
      }
    ],
    apple: {
      url: '/images/logo.png',
      href: '/images/logo.png',
      type: 'image/png',
      sizes: '180x180'
    },
    shortcut: {
      url: '/images/logo.png',
      href: '/images/logo.png'
    }
  }
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={`${inter.variable} ${architects_daughter.variable} font-inter antialiased bg-gray-900 text-gray-200 tracking-tight`}>
        <ThemeProvider attribute="class" defaultTheme="dark" enableSystem>
          <div className="flex min-h-screen flex-col overflow-hidden supports-[overflow:clip]:overflow-clip">
            <AosProvider>
              <PageTransition>
                {children}
              </PageTransition>
            </AosProvider>
          </div>
          <CustomCursor />
        </ThemeProvider>
      </body>
    </html>
  )
}
