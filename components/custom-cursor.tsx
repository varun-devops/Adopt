"use client";

import { useState, useEffect, useRef } from 'react';

export default function CustomCursor() {
  // Initialize state
  const [position, setPosition] = useState({ x: 0, y: 0 });
  const [followerPosition, setFollowerPosition] = useState({ x: 0, y: 0 });
  const [isVisible, setIsVisible] = useState(false);
  const [isClicking, setIsClicking] = useState(false);
  const [isHovering, setIsHovering] = useState(false);
  const [isMounted, setIsMounted] = useState(false);
  const followerRef = useRef<NodeJS.Timeout | null>(null);
  const cursorInitialized = useRef(false);
  const forceVisibilityTimeoutRef = useRef<NodeJS.Timeout | null>(null);

  // Handle hydration - only run on client after component mounts
  useEffect(() => {
    setIsMounted(true);
    
    // Force cursor to be visible after a delay
    forceVisibilityTimeoutRef.current = setTimeout(() => {
      if (typeof window !== 'undefined') {
        // Get viewport center
        const centerX = window.innerWidth / 2;
        const centerY = window.innerHeight / 2;
        
        // Force update positions
        setPosition({ x: centerX, y: centerY });
        setFollowerPosition({ x: centerX, y: centerY });
        setIsVisible(true);
      }
    }, 500); // Wait for layout to fully load

    return () => {
      if (forceVisibilityTimeoutRef.current) {
        clearTimeout(forceVisibilityTimeoutRef.current);
      }
    };
  }, []);

  useEffect(() => {
    if (!isMounted) return;

    // Skip for touch devices
    if (typeof window !== 'undefined' && 'ontouchstart' in window) {
      document.body.style.cursor = 'auto';
      return;
    }

    // Immediately set initial position
    const initialX = window.innerWidth / 2;
    const initialY = window.innerHeight / 2;
    
    // Instantly update positions
    setPosition({ x: initialX, y: initialY });
    setFollowerPosition({ x: initialX, y: initialY });
    setIsVisible(true);
    cursorInitialized.current = true;

    const updatePosition = (e: MouseEvent) => {
      // Update cursor position immediately
      setPosition({ x: e.clientX, y: e.clientY });
      
      // Clear any existing timeout for follower
      if (followerRef.current) {
        clearTimeout(followerRef.current);
      }
      
      // Set follower with minimal delay for smooth following
      followerRef.current = setTimeout(() => {
        setFollowerPosition({ x: e.clientX, y: e.clientY });
      }, 10); // Further reduced delay
    };

    const handleMouseEnter = () => setIsVisible(true);
    const handleMouseLeave = () => setIsVisible(false);
    const handleMouseDown = () => setIsClicking(true);
    const handleMouseUp = () => setIsClicking(false);

    // Detect when cursor is over a clickable element
    const handleMouseOver = (e: MouseEvent) => {
      const target = e.target as HTMLElement;
      const isHoverable = 
        target.tagName.toLowerCase() === 'a' || 
        target.tagName.toLowerCase() === 'button' ||
        target.closest('a') !== null || 
        target.closest('button') !== null ||
        target.classList.contains('hoverable');

      setIsHovering(isHoverable);
    };

    // Add event listeners
    document.addEventListener('mousemove', updatePosition);
    document.addEventListener('mouseenter', handleMouseEnter);
    document.addEventListener('mouseleave', handleMouseLeave);
    document.addEventListener('mousedown', handleMouseDown);
    document.addEventListener('mouseup', handleMouseUp);
    document.addEventListener('mouseover', handleMouseOver);

    // Hide default cursor
    document.body.style.cursor = 'none';

    // Force cursor visibility after a short delay
    setTimeout(() => {
      setIsVisible(true);
    }, 200);

    return () => {
      // Clean up all event listeners and timeouts
      document.removeEventListener('mousemove', updatePosition);
      document.removeEventListener('mouseenter', handleMouseEnter);
      document.removeEventListener('mouseleave', handleMouseLeave);
      document.removeEventListener('mousedown', handleMouseDown);
      document.removeEventListener('mouseup', handleMouseUp);
      document.removeEventListener('mouseover', handleMouseOver);
      
      if (followerRef.current) {
        clearTimeout(followerRef.current);
      }
      
      document.body.style.cursor = 'auto';
    };
  }, [isMounted]); // Only run once isMounted is true

  // Don't render during SSR, but DO render even on touch devices for debugging
  if (!isMounted) {
    return null;
  }

  return (
    <>
      <div 
        className={`custom-cursor ${isClicking ? 'scale-75' : ''} ${isHovering ? 'scale-150 mix-blend-difference' : ''}`}
        style={{ 
          left: `${position.x}px`, 
          top: `${position.y}px`,
          willChange: 'transform, opacity',
          opacity: isVisible ? 1 : 0,
          display: 'block', // Force display
          visibility: 'visible' // Force visibility
        }}
      />
      <div 
        className={`custom-cursor-follower ${isClicking ? 'scale-75' : ''} ${isHovering ? 'scale-150' : ''}`}
        style={{ 
          left: `${followerPosition.x}px`, 
          top: `${followerPosition.y}px`,
          willChange: 'transform, opacity',
          opacity: isVisible ? 0.7 : 0,
          display: 'block', // Force display
          visibility: 'visible' // Force visibility
        }}
      />
    </>
  );
}
