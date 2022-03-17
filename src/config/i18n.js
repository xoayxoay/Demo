import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';

import en from 'translations/en.json';
import vi from 'translations/vi.json';

export const DEFAULT_LOCALE = 'en';

const localeStorage = localStorage.getItem('locale');

i18n.use(initReactI18next).init({
  resources: {
    en: {
      translation: en,
    },
    vi: {
      translation: vi,
    },
  },
  fallbackLng: localeStorage || DEFAULT_LOCALE,
  keySeparator: false,
  interpolation: {
    escapeValue: false,
  },
  debug: false,
});

export default i18n;
