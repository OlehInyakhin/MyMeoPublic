import { useNavigate } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import { resetPassword } from '@/router/urls';
import { Button } from '@/components/ui/button';
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from '@/components/ui/card';
import { Icons } from '@/components/ui/icons';
import { useLoginWithGoogle } from '@/feature/authorization/api/login/login.hooks';

function Authorization() {
  const nav = useNavigate();
  const { t } = useTranslation();
  const { mutateAsync, isPending } = useLoginWithGoogle();

  const handleRedirect = (url: string) => () => {
    nav(url);
  };

  const handleLogin = () => {
    mutateAsync();
  };

  return (
    <Card className="w-full py-8 px-6 bg-gray-800 text-gray-100 text-center shadow-xl shadow-slate/10 border-0">
      <CardHeader className="space-y-4">
        <CardTitle className="text-3xl font-bold">{t('Authorization')}</CardTitle>
        <CardDescription className="text-gray-400">
          {t('Use your Google account to continue')}
        </CardDescription>
      </CardHeader>
      <CardContent className="space-y-4">
        <Button
          onClick={handleLogin}
          disabled={isPending}
          className="w-full bg-white text-black hover:bg-gray-200"
          variant="outline"
        >
          <Icons.google className="mr-2 h-4 w-4" />
          {t('Sign in')}
        </Button>
      </CardContent>
      <CardFooter className="justify-center">
        <Button
          onClick={handleRedirect(resetPassword)}
          variant="link"
          className="bg-transparent border-0 text-gray-400 hover:text-gray-300"
        >
          Forgot password?
        </Button>
      </CardFooter>
    </Card>
  );
}

export default Authorization;
