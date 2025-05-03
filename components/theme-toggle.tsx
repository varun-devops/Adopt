'use client'

import { useState, useEffect } from 'react'

export default function ThemeToggle() {
  const [darkMode, setDarkMode] = useState(false)

  // Initialize theme based on user preference or system preference
  useEffect(() => {
    const isDark = localStorage.getItem('theme') === 'dark' || 
      (!localStorage.getItem('theme') && window.matchMedia('(prefers-color-scheme: dark)').matches)
    
    setDarkMode(isDark)
    if (isDark) {
      document.documentElement.classList.add('dark')
    } else {
      document.documentElement.classList.remove('dark')
    }
  }, [])

  // Toggle theme function
  const toggleTheme = () => {
    if (darkMode) {
      document.documentElement.classList.remove('dark')
      localStorage.setItem('theme', 'light')
    } else {
      document.documentElement.classList.add('dark')
      localStorage.setItem('theme', 'dark')
    }
    setDarkMode(!darkMode)
  }

  return (
    <button 
      onClick={toggleTheme}
      className="relative inline-flex h-7 w-14 items-center rounded-full border-2 border-gray-300 dark:border-gray-600 p-1 focus:outline-none transition-colors duration-300 bg-gray-100 dark:bg-gray-800"
      aria-label={darkMode ? "Switch to light mode" : "Switch to dark mode"}
    >
      {/* Sun icon */}
      <svg 
        className={`absolute left-1 h-4 w-4 text-yellow-500 transition-opacity duration-200 ${darkMode ? 'opacity-0' : 'opacity-100'} z-[9999]`}
        fill="none" 
        viewBox="0 0 24 24" 
        stroke="currentColor"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={2}
          d="M12 3v1m0 16v1m9-9h-1M4 12H3m15.364 6.364l-.707-.707M6.343 6.343l-.707-.707m12.728 0l-.707.707M6.343 17.657l-.707.707M16 12a4 4 0 11-8 0 4 4 0 018 0z"
        />
      </svg>
      
      {/* Moon icon */}
      <svg 
        className={`absolute right-1.5 h-5 w-5 text-blue-300 transition-opacity duration-200 ${darkMode ? 'opacity-100' : 'opacity-0'} z-[9999]`}
        fill="none" 
        viewBox="0 0 24 24" 
        stroke="currentColor"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={2}
          d="M20.354 15.354A9 9 0 018.646 3.646 9.003 9.003 0 0012 21a9.003 9.003 0 008.354-5.646z"
        />
      </svg>
      
      {/* Toggle slider */}
      <span
        className={`${
          darkMode ? 'translate-x-7' : 'translate-x-0'
        } inline-block h-5 w-5 transform rounded-full bg-white dark:bg-gray-200 shadow-lg transition-transform duration-300 ease-in-out`}
      />
      <span className="sr-only">Toggle theme</span>
    </button>
  )
}
