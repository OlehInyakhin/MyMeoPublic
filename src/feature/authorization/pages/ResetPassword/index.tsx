import { Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import { authorization } from '@/router/urls';

function ResetPassword() {
  const { t } = useTranslation();

  return (
    <>
      <h1>{t('Reset password')}</h1>
      <Link to={authorization}>{t('Sing in')}</Link>
    </>
  );
}

export default ResetPassword;
