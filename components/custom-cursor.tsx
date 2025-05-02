'use client'

import { useEffect, useState } from 'react'

export default function CustomCursor() {
  const [position, setPosition] = useState({ x: 0, y: 0 })
  const [followerPosition, setFollowerPosition] = useState({ x: 0, y: 0 })
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    // Add cursor elements to DOM
    if (typeof document !== 'undefined') {
      // Check if cursor elements already exist
      if (!document.querySelector('.custom-cursor')) {
        const cursor = document.createElement('div')
        cursor.classList.add('custom-cursor')
        document.body.appendChild(cursor)
      }
      
      if (!document.querySelector('.custom-cursor-follower')) {
        const follower = document.createElement('div')
        follower.classList.add('custom-cursor-follower')
        document.body.appendChild(follower)
      }
    }

    const updateCursorPosition = (e: MouseEvent) => {
      setPosition({ x: e.clientX, y: e.clientY })
      // Delay the follower for a smooth trailing effect
      setTimeout(() => {
        setFollowerPosition({ x: e.clientX, y: e.clientY })
      }, 70)
    }

    const handleMouseEnter = () => setIsVisible(true)
    const handleMouseLeave = () => setIsVisible(false)

    window.addEventListener('mousemove', updateCursorPosition)
    document.addEventListener('mouseenter', handleMouseEnter)
    document.addEventListener('mouseleave', handleMouseLeave)

    return () => {
      window.removeEventListener('mousemove', updateCursorPosition)
      document.removeEventListener('mouseenter', handleMouseEnter)
      document.removeEventListener('mouseleave', handleMouseLeave)
    }
  }, [])

  useEffect(() => {
    const cursor = document.querySelector('.custom-cursor') as HTMLElement
    const follower = document.querySelector('.custom-cursor-follower') as HTMLElement

    if (cursor && follower) {
      cursor.style.left = `${position.x}px`
      cursor.style.top = `${position.y}px`
      cursor.style.opacity = isVisible ? '1' : '0'

      follower.style.left = `${followerPosition.x}px`
      follower.style.top = `${followerPosition.y}px`
      follower.style.opacity = isVisible ? '0.7' : '0'
    }
  }, [position, followerPosition, isVisible])

  return null
}
