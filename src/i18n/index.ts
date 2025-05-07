// src/i18n/index.ts
'use client';

import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import HttpBackend from 'i18next-http-backend';
// import LanguageDetector from 'i18next-browser-languagedetector';

i18n
  .use(HttpBackend)
  // .use(LanguageDetector)
  .use(initReactI18next)
  .init({
    fallbackLng: 'ru',
    supportedLngs: ['ru', 'kg', 'en'],
    debug: process.env.NODE_ENV === 'development',
    backend: {
      loadPath: '/locales/{{lng}}/{{ns}}.json',
    },
    interpolation: {
      escapeValue: false,
    },
    ns: ['common'],
    defaultNS: 'common',
    react: {
      useSuspense: false,
    },
  });

export default i18n;
