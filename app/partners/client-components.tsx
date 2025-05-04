'use client';

import { useSearchParams } from 'next/navigation';

// This component will handle any search params functionality
export function SearchParamsHandler() {
  // Safe to use client hooks here
  const searchParams = useSearchParams();
  
  // Use searchParams as needed
  // For example, you can filter partners based on category from URL
  // const category = searchParams.get('category');
  
  return null; // This component doesn't render anything, just handles search params
}
