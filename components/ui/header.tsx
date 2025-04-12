'use client'

import { useState, useEffect } from 'react'
import Link from 'next/link'
import Logo from './logo'
import MobileMenu from '../ui/mobile-menu'
import { Transition } from '@headlessui/react'
import { usePathname } from 'next/navigation'
import { useRouter } from 'next/navigation'


export default function Header() {
  const [top, setTop] = useState<boolean>(true)

  // detect whether user has scrolled the page down by 10px
  const scrollHandler = () => {
    window.pageYOffset > 10 ? setTop(false) : setTop(true)
  }

  useEffect(() => {
    scrollHandler()
    window.addEventListener('scroll', scrollHandler)
    return () => window.removeEventListener('scroll', scrollHandler)
  }, [top])

  return (
    <header className={`fixed z-30 w-full transition duration-300 ease-in-out ${!top ? 'bg-gray-900/90 backdrop-blur-sm shadow-lg' : ''}`}>
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <div className="flex h-16 items-center justify-between md:h-20">
          {/* Site branding */}
          <div className="shrink-0 mr-4">
            <Logo />
          </div>

          {/* Desktop navigation */}
          <nav className="hidden md:flex md:grow">
            {/* Desktop menu links */}
            <ul className="flex grow flex-wrap items-center justify-end">
              <li>
                <Link href="/startups" className="flex items-center px-3 py-2 text-sm font-medium text-gray-300 transition duration-150 ease-in-out hover:text-white">
                  Startups
                </Link>
              </li>
              <li>
                <Link href="/investors" className="flex items-center px-3 py-2 text-sm font-medium text-gray-300 transition duration-150 ease-in-out hover:text-white">
                  Investors
                </Link>
              </li>
              <li>
                <Link href="/about" className="flex items-center px-3 py-2 text-sm font-medium text-gray-300 transition duration-150 ease-in-out hover:text-white">
                  About Us
                </Link>
              </li>
            </ul>

            {/* Desktop sign in links */}
            <ul className="flex items-center">
              <li>
                <Link href="/signin" className="flex items-center px-3 py-2 text-sm font-medium text-gray-300 transition duration-150 ease-in-out hover:text-white">
                  Sign in
                </Link>
              </li>
              <li>
                <Link href="/signup" className="btn-sm ml-2 bg-linear-to-t from-indigo-600 to-red-500 bg-[length:100%_100%] bg-[bottom] text-white shadow-lg shadow-indigo-500/25 hover:bg-[length:100%_200%]">
                  <span>Sign up</span>
                  <span className="ml-1 tracking-normal text-white/50">-&gt;</span>
                </Link>
              </li>
            </ul>
          </nav>

          <MobileMenu />
        </div>
      </div>
    </header>
  )
}
