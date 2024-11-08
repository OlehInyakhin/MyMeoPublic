import { Suspense } from 'react';
import { Outlet } from 'react-router-dom';
import { Fallback } from '@/components/PageLoader/Fallback';

export function PageLoader() {
  return (
    <Suspense fallback={<Fallback />}>
      <Outlet />
    </Suspense>
  );
}
