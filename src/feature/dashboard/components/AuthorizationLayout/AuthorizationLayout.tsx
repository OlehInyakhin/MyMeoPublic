import { Link, Outlet } from 'react-router-dom';
import { goToLanding } from '@/router/urls';

export function AuthorizationLayout() {
  return (
    <>
      <Outlet />
      <Link to={goToLanding}>Logo</Link>
    </>
  );
}
