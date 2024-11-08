import { useEffect } from 'react';
import { RouterProvider } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import { router } from '@/router';
import setupAxiosInterceptors from '@/api/axios/interceptors';
import { userStore } from '@/store';
import { queryClient } from '@/api/queryClient';

export function App() {
  const {
    i18n: { language, dir },
    t,
  } = useTranslation();

  useEffect(() => {
    setupAxiosInterceptors();
    window.document.dir = dir();
    window.document.documentElement.lang = language;
    document.title = t('common.title');
  }, [language]);

  useEffect(() => {
    return () => {
      queryClient.clear();
      userStore.setLoggedIn(false);
    };
  }, []);

  return <RouterProvider router={router} />;
}
