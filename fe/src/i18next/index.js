import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';

import Backend from 'i18next-http-backend';
import LanguageDetector from 'i18next-browser-languagedetector';
// don't want to use this?
// have a look at the Quick start guide 
// for passing in lng and translations on init

import enJSON from './translations/en';
import vnJSON from './translations/vn';

const resources = {
    en: { translation: enJSON },
    vn: { translation: vnJSON },
};

i18n.use(initReactI18next).init({
    resources,
    keySeparator: false,
    lng: 'vn',
    fallbackLng: 'en',
    react: {
        useSuspense: true,
    },
    interpolation: {
        escapeValue: false,
    },
});


export default i18n;

