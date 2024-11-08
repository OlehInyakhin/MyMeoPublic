import React from 'react';
import { Navigate, Route, Routes } from 'react-router-dom';
import { PageLoader } from '@/components/PageLoader';
import { authorization, resetPassword } from '@/router/urls';

const Authorization = React.lazy(() => import('../pages/Authorization'));
const ResetPassword = React.lazy(() => import('../pages/ResetPassword'));
const Callback = React.lazy(() => import('../pages/Callback'));

export function AuthorizationRoutes() {
  return (
    <Routes>
      <Route element={<PageLoader />}>
        <Route
          index
          element={<Authorization />}
        />
        <Route
          index
          path={resetPassword}
          element={<ResetPassword />}
        />
        <Route
          index
          path={'/callback'}
          element={<Callback />}
        />
        <Route
          path="*"
          element={<Navigate to={authorization} />}
        />
      </Route>
    </Routes>
  );
}
