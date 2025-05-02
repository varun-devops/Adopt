'use client'

import { useEffect } from 'react'

export default function AOS() {
  useEffect(() => {
 
    if (typeof window !== 'undefined') {
      const AOS = require('aos')
      require('aos/dist/aos.css')
      
      
      AOS.init({
        once: true,
        disable: 'phone',
        duration: 600,
        easing: 'ease-out-sine',
      })
    }
  }, [])

  return null
}
