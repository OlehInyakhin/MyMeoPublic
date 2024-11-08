import { createBrowserRouter, createRoutesFromElements, Route } from 'react-router-dom';
import { authorization, dashboard } from '@/router/urls';
import { PrivateRouter, PublicRouter } from '@/components/RouterWrapper';
import { AuthorizationRoutes } from '@/feature/authorization/routes';
import { DashboardRoutes } from '@/feature/dashboard/routes';

export const router = createBrowserRouter(
  createRoutesFromElements(
    <Route>
      <Route element={<PublicRouter />}>
        <Route
          path={`${authorization}/*`}
          element={<AuthorizationRoutes />}
        />
      </Route>
      <Route element={<PrivateRouter />}>
        <Route
          path={`${dashboard}/*`}
          element={<DashboardRoutes />}
        />
      </Route>
    </Route>,
  ),
);
