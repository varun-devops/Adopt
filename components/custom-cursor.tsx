"use client";

import { useState, useEffect } from 'react';

export default function CustomCursor() {
  const [position, setPosition] = useState({ x: -100, y: -100 });
  const [followerPosition, setFollowerPosition] = useState({ x: -100, y: -100 });
  const [isVisible, setIsVisible] = useState(false);
  const [isClicking, setIsClicking] = useState(false);
  const [isHovering, setIsHovering] = useState(false);

  useEffect(() => {
    // Only show cursor on non-touch devices
    if (typeof window !== 'undefined' && 'ontouchstart' in window) {
      document.body.style.cursor = 'auto';
      return;
    }

    const updatePosition = (e: MouseEvent) => {
      setPosition({ x: e.clientX, y: e.clientY });
      setTimeout(() => {
        setFollowerPosition({ x: e.clientX, y: e.clientY });
      }, 100);
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

    document.addEventListener('mousemove', updatePosition);
    document.addEventListener('mouseenter', handleMouseEnter);
    document.addEventListener('mouseleave', handleMouseLeave);
    document.addEventListener('mousedown', handleMouseDown);
    document.addEventListener('mouseup', handleMouseUp);
    document.addEventListener('mouseover', handleMouseOver);

    return () => {
      document.removeEventListener('mousemove', updatePosition);
      document.removeEventListener('mouseenter', handleMouseEnter);
      document.removeEventListener('mouseleave', handleMouseLeave);
      document.removeEventListener('mousedown', handleMouseDown);
      document.removeEventListener('mouseup', handleMouseUp);
      document.removeEventListener('mouseover', handleMouseOver);
    };
  }, []);

  // Hide default cursor
  useEffect(() => {
    // Only hide cursor on non-touch devices
    if (typeof window !== 'undefined' && !('ontouchstart' in window)) {
      document.body.style.cursor = 'none';
    }
    
    return () => {
      document.body.style.cursor = 'auto';
    };
  }, []);

  if (typeof window !== 'undefined' && 'ontouchstart' in window) {
    return null;
  }

  return (
    <>
      <div 
        className={`custom-cursor ${isVisible ? 'opacity-100' : 'opacity-0'} ${isClicking ? 'scale-75' : ''} ${isHovering ? 'scale-150 mix-blend-difference' : ''}`}
        style={{ 
          left: `${position.x}px`, 
          top: `${position.y}px` 
        }}
      />
      <div 
        className={`custom-cursor-follower ${isVisible ? 'opacity-50' : 'opacity-0'} ${isClicking ? 'scale-75' : ''} ${isHovering ? 'scale-150' : ''}`}
        style={{ 
          left: `${followerPosition.x}px`, 
          top: `${followerPosition.y}px` 
        }}
      />
    </>
  );
}
