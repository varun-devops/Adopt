"use client";

import { useState, useEffect } from "react";
import LoadingSpinner from "@/components/ui/loading-spinner";

export default function PageTransition({ children }: { children: React.ReactNode }) {
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    const handleRouteChangeStart = () => setIsLoading(true);
    const handleRouteChangeComplete = () => setIsLoading(false);

    // Simulate route change events
    setTimeout(() => setIsLoading(false), 800);

    return () => {
      // Cleanup logic if needed
    };
  }, []);

  return (
    <>
      <LoadingSpinner isLoading={isLoading} />
      {children}
    </>
  );
}
