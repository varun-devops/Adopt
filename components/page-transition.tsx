"use client"

import { usePathname, useSearchParams } from 'next/navigation'
import { useState, useEffect } from 'react'
import LoadingSpinner from '@/components/ui/loading-spinner'

export default function PageTransition({ children }: { children: React.ReactNode }) {
  const pathname = usePathname()
  const searchParams = useSearchParams()
  const [isLoading, setIsLoading] = useState(false)
  const [isPageMounted, setIsPageMounted] = useState(false)
  
  // Initialize mounted state
  useEffect(() => {
    setIsPageMounted(true)
  }, [])
  
  // Track navigation changes
  useEffect(() => {
    const handleRouteChangeStart = () => {
      setIsLoading(true)
    }
    
    const handleRouteChangeComplete = () => {
      setTimeout(() => {
        setIsLoading(false)
      }, 500) // Minimum loading time for visual feedback
    }
    
    // Using URL changes as route change indicators
    setIsLoading(true)
    
    // Add a small delay to show the loading animation
    const timer = setTimeout(() => {
      setIsLoading(false)
    }, 800)
    
    return () => {
      clearTimeout(timer)
    }
  }, [pathname, searchParams])

  return (
    <>
      <LoadingSpinner isLoading={isLoading} />
      <div 
        className={`transition-opacity duration-500 ease-in-out ${
          isPageMounted && !isLoading ? 'opacity-100' : 'opacity-0'
        }`}
      >
        {children}
      </div>
    </>
  )
}
