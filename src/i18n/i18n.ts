import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import LanguageDetector from 'i18next-browser-languagedetector';
import { enTranslations } from './translations/en';
import { heTranslations } from './translations/he';
import { ruTranslations } from './translations/ru';

i18n
  .use(LanguageDetector)
  .use(initReactI18next)
  .init({
    resources: {
      en: {
        translation: enTranslations
      },
      he: {
        translation: heTranslations
      },
      ru: {
        translation: ruTranslations
      }
    },
    lng: 'he', // Set Hebrew as default
    fallbackLng: 'he',
    interpolation: {
      escapeValue: false
    }
  });

export default i18n;