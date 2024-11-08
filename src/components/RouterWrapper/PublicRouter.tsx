import { Outlet, ScrollRestoration } from 'react-router-dom';
import { PublicLayout } from '@/components/PublicLayout';

export function PublicRouter() {
  return (
    <PublicLayout>
      <ScrollRestoration />
      <Outlet />
    </PublicLayout>
  );
}
