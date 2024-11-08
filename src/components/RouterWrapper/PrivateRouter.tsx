import { useEffect } from 'react';
import { Outlet, ScrollRestoration } from 'react-router-dom';
// import { useTranslation } from 'react-i18next';
import { Layout } from '@/components/Layout';
// import { useUserStore } from '@/store';
// import { authorization } from '@/router/urls';

export function PrivateRouter() {
  // const {
  //   i18n: { changeLanguage },
  // } = useTranslation();
  // const { loggedIn, sessionExpired, setLoggedIn } = useUserStore();

  useEffect(() => {
    setTimeout(() => {
      // document.querySelector('.loader')!.classList.add('loaded');
    }, 2000);
  }, []);

  return (
    <Layout>
      <ScrollRestoration />
      <Outlet />
    </Layout>
  );
}
