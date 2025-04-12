'use client'

import { useState, useRef, useEffect } from 'react'
import { Transition } from '@headlessui/react'
import Link from 'next/link'

export default function MobileMenu() {
  const [mobileNavOpen, setMobileNavOpen] = useState<boolean>(false)

  const trigger = useRef<HTMLButtonElement>(null)
  const mobileNav = useRef<HTMLDivElement>(null)

  // close the mobile menu on click outside
  useEffect(() => {
    const clickHandler = ({ target }: { target: EventTarget | null }): void => {
      if (!mobileNav.current || !trigger.current) return
      if (!mobileNavOpen || mobileNav.current.contains(target as Node) || trigger.current.contains(target as Node)) return
      setMobileNavOpen(false)
    }
    document.addEventListener('click', clickHandler)
    return () => document.removeEventListener('click', clickHandler)
  })

  // close the mobile menu if the esc key is pressed
  useEffect(() => {
    const keyHandler = ({ keyCode }: { keyCode: number }): void => {
      if (!mobileNavOpen || keyCode !== 27) return
      setMobileNavOpen(false)
    }
    document.addEventListener('keydown', keyHandler)
    return () => document.removeEventListener('keydown', keyHandler)
  })

  return (
    <div className="md:hidden">
      {/* Hamburger button */}
      <button
        ref={trigger}
        className={`hamburger ${mobileNavOpen && 'active'}`}
        aria-controls="mobile-nav"
        aria-expanded={mobileNavOpen}
        onClick={() => setMobileNavOpen(!mobileNavOpen)}
      >
        <span className="sr-only">Menu</span>
        <svg
          className="h-6 w-6 fill-current text-gray-300 transition duration-150 ease-in-out hover:text-white"
          viewBox="0 0 24 24"
          xmlns="http://www.w3.org/2000/svg"
        >
          <rect y="4" width="24" height="2" rx="1" />
          <rect y="11" width="24" height="2" rx="1" />
          <rect y="18" width="24" height="2" rx="1" />
        </svg>
      </button>

      {/*Mobile navigation */}
      <div ref={mobileNav}>
        <Transition
          show={mobileNavOpen}
          as="nav"
          id="mobile-nav"
          className="absolute left-0 top-full z-20 h-screen w-full overflow-scroll bg-gray-900"
          enter="transition ease-out duration-200 transform"
          enterFrom="opacity-0 -translate-y-2"
          enterTo="opacity-100 translate-y-0"
          leave="transition ease-out duration-200"
          leaveFrom="opacity-100"
          leaveTo="opacity-0"
        >
          <ul className="px-5 py-2">
            <li>
              <Link href="/startups" className="flex items-center py-2 text-gray-300 hover:text-white" onClick={() => setMobileNavOpen(false)}>
                Startups
              </Link>
            </li>
            <li>
              <Link href="/investors" className="flex items-center py-2 text-gray-300 hover:text-white" onClick={() => setMobileNavOpen(false)}>
                Investors
              </Link>
            </li>
            <li>
              <Link href="/about" className="flex items-center py-2 text-gray-300 hover:text-white" onClick={() => setMobileNavOpen(false)}>
                About Us
              </Link>
            </li>
            <li className="py-2 my-2 border-t border-gray-700">
              <Link href="/signin" className="flex items-center py-2 text-gray-300 hover:text-white" onClick={() => setMobileNavOpen(false)}>
                Sign in
              </Link>
            </li>
            <li>
              <Link 
                href="/signup" 
                className="btn-sm my-2 w-full bg-linear-to-t from-indigo-600 to-red-500 text-white shadow-lg shadow-indigo-500/25" 
                onClick={() => setMobileNavOpen(false)}
              >
                <span>Sign up</span>
                <span className="ml-1 tracking-normal text-white/50">-&gt;</span>
              </Link>
            </li>
          </ul>
        </Transition>
      </div>
    </div>
  )
}
