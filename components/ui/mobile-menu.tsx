"use client";

import { useState, useRef, useEffect } from "react";
import Link from "next/link";
import { Transition } from "@headlessui/react";
import ThemeToggle from "./theme-toggle";

export default function MobileMenu() {
  const [mobileNavOpen, setMobileNavOpen] = useState<boolean>(false);
  const [aboutDropdownOpen, setAboutDropdownOpen] = useState<boolean>(false);

  const trigger = useRef<HTMLButtonElement>(null);
  const mobileNav = useRef<HTMLDivElement>(null);

  // close the mobile menu on click outside
  useEffect(() => {
    const clickHandler = ({ target }: MouseEvent) => {
      if (!mobileNav.current || !trigger.current) return;
      if (
        !mobileNavOpen ||
        mobileNav.current.contains(target as Node) ||
        trigger.current.contains(target as Node)
      )
        return;
      setMobileNavOpen(false);
    };
    document.addEventListener("click", clickHandler);
    return () => document.removeEventListener("click", clickHandler);
  }, [mobileNavOpen]);

  // close the mobile menu if the esc key is pressed
  useEffect(() => {
    const keyHandler = ({ keyCode }: KeyboardEvent) => {
      if (!mobileNavOpen || keyCode !== 27) return;
      setMobileNavOpen(false);
    };
    document.addEventListener("keydown", keyHandler);
    return () => document.removeEventListener("keydown", keyHandler);
  }, [mobileNavOpen]);

  // handle about dropdown toggle
  const toggleAboutDropdown = (e: React.MouseEvent) => {
    e.preventDefault();
    setAboutDropdownOpen(!aboutDropdownOpen);
  };

  return (
    <div className="md:hidden">
      {/* Theme toggle button */}
      <div className="mr-4">
        <ThemeToggle />
      </div>

      {/* Hamburger button */}
      <button
        ref={trigger}
        className={`hamburger ${mobileNavOpen && "active"}`}
        aria-controls="mobile-nav"
        aria-expanded={mobileNavOpen}
        onClick={() => setMobileNavOpen(!mobileNavOpen)}
      >
        <span className="sr-only">Menu</span>
        <svg
          className="w-6 h-6 fill-current text-gray-300 hover:text-gray-200 transition duration-150 ease-in-out"
          viewBox="0 0 24 24"
          xmlns="http://www.w3.org/2000/svg"
        >
          <rect y="4" width="24" height="2" rx="1" />
          <rect y="11" width="24" height="2" rx="1" />
          <rect y="18" width="24" height="2" rx="1" />
        </svg>
      </button>

      {/* Mobile navigation */}
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
            <li className="py-2">
              <span className="flex items-center text-gray-300">
                Startups
                <svg
                  className="w-3 h-3 fill-current text-gray-300 cursor-pointer ml-1 shrink-0"
                  viewBox="0 0 12 12"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path d="M10.28 4.305L5.989 8.598 1.695 4.305A1 1 0 00.28 5.72l5 5a1 1 0 001.414 0l5-5a1 1 0 10-1.414-1.414z" />
                </svg>
              </span>
              <ul className="pl-4 mt-2">
                <li>
                  <Link
                    href="/startup"
                    className="flex items-center py-1 text-gray-400 hover:text-white"
                    onClick={() => setMobileNavOpen(false)}
                  >
                    For Startups
                  </Link>
                </li>
                <li>
                  <Link
                    href="/funding"
                    className="flex items-center py-1 text-gray-400 hover:text-white"
                    onClick={() => setMobileNavOpen(false)}
                  >
                    Get Funding
                  </Link>
                </li>
                <li>
                  <Link
                    href="/mentorship"
                    className="flex items-center py-1 text-gray-400 hover:text-white"
                    onClick={() => setMobileNavOpen(false)}
                  >
                    Mentorship
                  </Link>
                </li>
              </ul>
            </li>
            <li>
              <Link
                href="/investors"
                className="flex items-center py-2 text-gray-300 hover:text-white"
                onClick={() => setMobileNavOpen(false)}
              >
                Investors
              </Link>
            </li>
            <li className="py-2">
              <span className="flex items-center text-gray-300">
                About Us
                <svg
                  className="w-3 h-3 fill-current text-gray-300 cursor-pointer ml-1 shrink-0"
                  viewBox="0 0 12 12"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path d="M10.28 4.305L5.989 8.598 1.695 4.305A1 1 0 00.28 5.72l5 5a1 1 0 001.414 0l5-5a1 1 0 10-1.414-1.414z" />
                </svg>
              </span>
              <ul className="pl-4 mt-2">
                <li>
                  <Link
                    href="/portfolio"
                    className="flex items-center py-1 text-gray-400 hover:text-white"
                    onClick={() => setMobileNavOpen(false)}
                  >
                    Portfolio
                  </Link>
                </li>
                <li>
                  <Link
                    href="/partners"
                    className="flex items-center py-1 text-gray-400 hover:text-white"
                    onClick={() => setMobileNavOpen(false)}
                  >
                    Partners
                  </Link>
                </li>
                <li>
                  <Link
                    href="/about"
                    className="flex items-center py-1 text-gray-400 hover:text-white"
                    onClick={() => setMobileNavOpen(false)}
                  >
                    About Us
                  </Link>
                </li>
              </ul>
            </li>
            <li>
              <Link
                href="/contact"
                className="flex items-center py-2 text-gray-300 hover:text-white"
                onClick={() => setMobileNavOpen(false)}
              >
                Contact Us
              </Link>
            </li>
            <li className="py-2 my-2 border-t border-gray-700 flex justify-between items-center">
              <Link
                href="/signin"
                className="flex items-center py-2 text-gray-300 hover:text-white"
                onClick={() => setMobileNavOpen(false)}
              >
                Sign in
              </Link>
              <ThemeToggle />
            </li>
            <li>
              <Link
                href="/signin"
                className="flex items-center py-2 text-gray-300 hover:text-white"
                onClick={() => setMobileNavOpen(false)}
              >
                Sign in
              </Link>
            </li>
          </ul>
        </Transition>
      </div>
    </div>
  );
}
