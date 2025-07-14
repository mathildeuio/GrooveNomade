import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import LanguageDetector from 'i18next-browser-languagedetector';

import fr from './locales/fr.json';
import en from './locales/en.json';
import es from './locales/es.json';

i18n
  .use(LanguageDetector) // détecte automatiquement la langue
  .use(initReactI18next)
  .init({
    fallbackLng: 'fr',
    resources: {
      fr: { translation: fr },
      en: { translation: en },
      es: { translation: es }
    },
    interpolation: {
      escapeValue: false // React échappe déjà les valeurs
    }
  });

export default i18n;
