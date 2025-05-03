"use client"

import { useState, useEffect } from 'react'

interface LoadingSpinnerProps {
  isLoading: boolean
}

export default function LoadingSpinner({ isLoading }: LoadingSpinnerProps) {
  return (
    <div className={`fixed inset-0 z-[9999] flex items-center justify-center backdrop-blur-sm transition-opacity duration-300 ${isLoading ? 'opacity-100 pointer-events-auto' : 'opacity-0 pointer-events-none'}`}>
      <div className="relative w-20 h-20">
        {/* Cosmic background effect */}
        <div className="absolute inset-0 rounded-full bg-gradient-to-br from-indigo-600/30 to-red-500/20 blur-lg animate-pulse"></div>
        
        {/* Orbital rings */}
        {[1, 2, 3].map((_, index) => (
          <div 
            key={`orbit-${index}`} 
            className="absolute left-1/2 top-1/2 rounded-full border border-gray-700/70 transform -translate-x-1/2 -translate-y-1/2"
            style={{ 
              width: `${(index + 1) * 35}px`, 
              height: `${(index + 1) * 35}px`,
              borderWidth: '1px',
              animation: `spin ${(index + 2) * 3}s linear infinite ${index * 0.2}s`,
              opacity: 0.8 - (index * 0.2)
            }}
          ></div>
        ))}
        
        {/* Center point - Logo */}
        <img 
          src="/images/logo.png" 
          alt="Adopt Logo" 
          className="absolute left-1/2 top-1/2 w-6 h-6 rounded-full transform -translate-x-1/2 -translate-y-1/2 shadow-lg z-10"
        />
        
        {/* Orbiting elements */}
        {[0, 1, 2].map((index) => (
          <div 
            key={`particle-${index}`}
            className="absolute left-1/2 top-1/2 w-3 h-3 rounded-full bg-white shadow-lg transform -translate-x-1/2 -translate-y-1/2"
            style={{
              animation: `orbit ${(index + 2) * 2}s linear infinite`,
              animationDelay: `${index * 0.3}s`,
              transformOrigin: 'center',
              left: `calc(50% + ${(index + 1) * 15}px)`,
            }}
          ></div>
        ))}
      </div>
    </div>
  )
}
