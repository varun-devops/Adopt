"use client";

import React, { useState, useEffect } from "react";

interface TypewriterEffectProps {
  text: string;
  className?: string;
  delay?: number;
}

export const TypewriterEffect = ({ 
  text, 
  className, 
  delay = 50 
}: TypewriterEffectProps) => {
  const [displayText, setDisplayText] = useState("");
  const [currentIndex, setCurrentIndex] = useState(0);
  
  useEffect(() => {
    if (currentIndex < text.length) {
      const timeout = setTimeout(() => {
        setDisplayText(prev => prev + text[currentIndex]);
        setCurrentIndex(currentIndex + 1);
      }, delay); // Adjustable speed
      
      return () => clearTimeout(timeout);
    }
  }, [currentIndex, text, delay]);
  
  return (
    <h1 
      className={`animate-[gradient_6s_linear_infinite] bg-[linear-gradient(to_right,var(--color-gray-200),var(--color-indigo-200),var(--color-gray-50),var(--color-indigo-300),var(--color-gray-200))] bg-[length:200%_auto] bg-clip-text pb-5 font-nacelle text-4xl font-semibold text-transparent md:text-5xl ${className || ""}`}
      data-aos="fade-up"
    >
      {displayText}
    </h1>
  );
};

interface GradientTextProps {
  children: React.ReactNode;
  className?: string;
}

export const GradientText = ({ children, className }: GradientTextProps) => {
  return (
    <span 
      className={`animate-[gradient_6s_linear_infinite] bg-[linear-gradient(to_right,var(--color-gray-200),var(--color-indigo-200),var(--color-gray-50),var(--color-indigo-300),var(--color-gray-200))] bg-[length:200%_auto] bg-clip-text text-transparent ${className || ""}`}
    >
      {children}
    </span>
  );
};

interface StyledSpanProps {
  children: React.ReactNode;
  className?: string;
}

export const StyledSpan = ({ children, className }: StyledSpanProps) => {
  return (
    <span 
      className={`inline-flex items-center gap-3 pb-3 before:h-px before:w-8 before:bg-linear-to-r before:from-transparent before:to-indigo-200/50 after:h-px after:w-8 after:bg-linear-to-l after:from-transparent after:to-indigo-200/50 ${className || ""}`}
      data-aos="fade-up"
    >
      {children}
    </span>
  );
};
