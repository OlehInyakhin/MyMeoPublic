import { useTranslation } from 'react-i18next';

export function Footer() {
  const { t } = useTranslation();
  return (
    <div className='text-sm text-center py-4'>
      {t('common.footer.rights', { year: new Date().getFullYear()})}
    </div>
  );
}
