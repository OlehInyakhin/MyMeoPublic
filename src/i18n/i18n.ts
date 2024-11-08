import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import en from './translations/en';

export const resources = {
  en: {
    translation: {
      ...en,
    },
  },
};

i18n
  .use(initReactI18next) // passes i18n down to react-i18next
  .init({
    debug: true,
    resources,
    fallbackLng: 'en',
    lng: 'en',
    interpolation: {
      escapeValue: false,
    },
  });

export default i18n;
