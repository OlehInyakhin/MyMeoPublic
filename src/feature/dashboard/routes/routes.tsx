import { Navigate, Route, Routes } from 'react-router-dom';
import { lazy } from 'react';
import { PageLoader } from '@/components/PageLoader';
import { dashboard } from '@/router/urls';

const Dashboard = lazy(() => import('../pages/Dashboard'));

export function DashboardRoutes() {
  return (
    <Routes>
      <Route element={<PageLoader />}>
        <Route
          index
          element={<Dashboard />}
        />
        <Route
          path="*"
          element={<Navigate to={dashboard} />}
        />
      </Route>
    </Routes>
  );
}
