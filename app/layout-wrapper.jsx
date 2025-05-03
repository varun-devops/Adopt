import { Suspense } from 'react';
import SearchParamsHandler from '@/components/search-params-handler';

export default function LayoutWrapper({ children }) {
  return (
    <Suspense fallback={<div>Loading...</div>}>
      <SearchParamsHandler>
        {() => children}
      </SearchParamsHandler>
    </Suspense>
  );
}
