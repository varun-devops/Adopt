import { useState, useEffect } from 'react';

/**
 * A custom hook to replace useSearchParams without causing build issues
 * @param defaultValues Default values for parameters
 * @returns Array with parameters object and function to update them
 */
export function useQueryParams(defaultValues = {}) {
  const [params, setParams] = useState(defaultValues);
  const [isClient, setIsClient] = useState(false);

  // Only run on client side
  useEffect(() => {
    setIsClient(true);
    
    // Parse URL search params when component mounts
    const urlParams = new URLSearchParams(window.location.search);
    const initialParams = { ...defaultValues };
    
    // Update initial params from URL if they exist
    Object.keys(defaultValues).forEach(key => {
      const paramValue = urlParams.get(key);
      if (paramValue !== null) {
        initialParams[key] = paramValue;
      }
    });
    
    setParams(initialParams);
    
    // Optional: Listen for popstate events (browser back/forward)
    const handlePopState = () => {
      const urlParams = new URLSearchParams(window.location.search);
      const newParams = { ...defaultValues };
      
      Object.keys(defaultValues).forEach(key => {
        const paramValue = urlParams.get(key);
        if (paramValue !== null) {
          newParams[key] = paramValue;
        }
      });
      
      setParams(newParams);
    };
    
    window.addEventListener('popstate', handlePopState);
    return () => window.removeEventListener('popstate', handlePopState);
  }, []);

  // Function to update params
  const updateParams = (newParams) => {
    const updatedParams = { ...params, ...newParams };
    setParams(updatedParams);
    
    // Optionally update URL (client-side only, without causing navigation)
    if (isClient) {
      const urlParams = new URLSearchParams();
      Object.entries(updatedParams).forEach(([key, value]) => {
        if (value) urlParams.set(key, String(value));
      });
      
      const newUrl = `${window.location.pathname}?${urlParams.toString()}`;
      window.history.pushState({}, '', newUrl);
    }
  };

  return [params, updateParams];
}
