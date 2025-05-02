import { Inter } from 'next/font/google'
import AOS from './aos'
import PageIllustration from '@/components/page-illustration'
import Header from '@/components/ui/header'
import CustomCursor from '@/components/custom-cursor'
import Footer from '@/components/ui/footer'
import './css/style.css'
import "../styles/orbit.css";

const inter = Inter({
  subsets: ['latin'],
  variable: '--font-inter',
  display: 'swap'
})

export const metadata = {
  title: 'Open PRO',
  description: 'Next.js Page Router Template',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body 
        suppressHydrationWarning 
        className={`${inter.variable} font-inter antialiased bg-gray-950 text-gray-200 tracking-tight`}
      >
        <div className="flex min-h-screen flex-col overflow-hidden">
          <Header />
          <main className="grow">
            <PageIllustration />
            {children}
          </main>
    
          <CustomCursor />
        </div>
        <AOS />
      </body>
    </html>
  )
}
