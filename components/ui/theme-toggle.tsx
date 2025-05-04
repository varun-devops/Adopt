"use client"

import { useState, useEffect } from 'react'
import { useTheme } from 'next-themes'

export default function ThemeToggle() {
  const [mounted, setMounted] = useState(false)
  const { resolvedTheme, setTheme } = useTheme()

  // Ensure component is mounted to avoid hydration mismatch
  useEffect(() => setMounted(true), [])
  useEffect(() => {
    const isDark = localStorage.getItem('theme') === 'dark' || 
      (!localStorage.getItem('theme') && window.matchMedia('(prefers-color-scheme: dark)').matches);

    setTheme(isDark ? 'dark' : 'light');
    document.documentElement.classList.toggle('dark', isDark);
  }, []);
  if (!mounted) return null

  return (
    <button
      className="relative inline-flex h-8 w-16 items-center rounded-full border-2 border-gray-300 dark:border-gray-600 p-1 focus:outline-none focus:ring-2 focus:ring-blue-500 dark:focus:ring-blue-400 transition-colors duration-200 bg-gray-100 dark:bg-gray-800"
      onClick={() => {
        const newTheme = resolvedTheme === 'dark' ? 'light' : 'dark';
        setTheme(newTheme);
        document.documentElement.classList.toggle('dark', newTheme === 'dark');
      }}
      aria-label={`Switch to ${resolvedTheme === 'dark' ? 'light' : 'dark'} mode`}
    >
      {/* Sun icon (light mode) */}
      <svg 
        xmlns="http://www.w3.org/2000/svg" 
        className={`absolute left-1.5 h-5 w-5 text-yellow-500 transition-opacity duration-200 ${resolvedTheme === 'dark' ? 'opacity-0' : 'opacity-100'} z-[9999]`}
        fill="none" 
        viewBox="0 0 24 24" 
        stroke="currentColor"
      >
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 3v1m0 16v1m9-9h-1M4 12H3m15.364 6.364l-.707-.707M6.343 6.343l-.707-.707m12.728 0l-.707.707M6.343 17.657l-.707.707M16 12a4 4 0 11-8 0 4 4 0 018 0z" />
      </svg>
      
      {/* Moon icon (dark mode) */}
      <svg 
        xmlns="http://www.w3.org/2000/svg" 
        className={`absolute right-1.5 h-5 w-5 text-blue-300 transition-opacity duration-200 ${resolvedTheme === 'dark' ? 'opacity-100' : 'opacity-0'}`}
        fill="none" 
        viewBox="0 0 24 24" 
        stroke="currentColor"
      >
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M20.354 15.354A9 9 0 018.646 3.646 9.003 9.003 0 0012 21a9.003 9.003 0 008.354-5.646z" />
      </svg>
      
      {/* Toggle slider */}
      <span
        className={`${
          resolvedTheme === 'dark' ? 'translate-x-8' : 'translate-x-0'
        } inline-block h-6 w-6 transform rounded-full bg-white dark:bg-gray-200 shadow-lg transition-transform duration-300 ease-in-out`}
      />
      <span className="sr-only">Toggle theme</span>
    </button>
  )
}
