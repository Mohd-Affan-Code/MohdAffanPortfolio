import i18n from "i18next";
import { initReactI18next } from "react-i18next";
import HttpBackend from "i18next-http-backend";
import LanguageDetector from "i18next-browser-languagedetector";

i18n
  .use(HttpBackend) // loads translations from the backend (local files in this case)
  .use(LanguageDetector) // detects the user's language
  .use(initReactI18next) // passes i18n down to react-i18next
  .init({
    lng: "en", // default language
    fallbackLng: "en", // fallback language if translation is not found
    debug: true, // enables debug mode to see loading details in the console

    interpolation: {
      escapeValue: false, // React escapes values automatically
    },

    backend: {
      loadPath: "/locales/{{lng}}/translation.json", // path to load translation files
    },

    detection: {
      order: ["querystring", "cookie", "localStorage", "navigator"], // order of language detection
      caches: ["cookie", "localStorage"], // where to store the language info
    },
  });

export default i18n;
