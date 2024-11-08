import { useEffect } from 'react';
import { useNavigate, useSearchParams } from 'react-router-dom';
import { Fallback } from '@/components/PageLoader/Fallback';
import { useAuthCallback } from '@/feature/authorization/api/login/login.hooks';

export default function Callback() {
  const nav = useNavigate();
  const [searchParams] = useSearchParams();
  const code = searchParams.get('code');
  const { mutateAsync } = useAuthCallback();

  const handleRedirect = (url: string) => {
    nav(url);
  };

  useEffect(() => {
    if (code) {
      mutateAsync({
        code,
        url: window.location.origin,
      })
        .then((data) => {
          console.log(data);
        })
        .catch((err) => {
          console.error(err);
          handleRedirect('/');
        });
    }
  }, [code]);

  return <Fallback />;
}
