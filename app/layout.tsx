import { Inter } from 'next/font/google'
import CustomCursor from '@/components/custom-cursor'
import AOSWrapper from '@/app/aos'
import './css/style.css'
import "../styles/orbit.css";

const inter = Inter({
  subsets: ['latin'],
  variable: '--font-inter',
  display: 'swap'
})

export const metadata = {
  title: 'Adopt Network',
  description: 'Investment Platform for Startups and Investors',
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
        <AOSWrapper>
          <CustomCursor />
          {children}
        </AOSWrapper>
      </body>
    </html>
  )
}
