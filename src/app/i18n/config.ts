import i18n from "i18next";
import { initReactI18next } from "react-i18next";
import es from "./es";
import en from "./en";

const STORAGE_KEY = "digio-lang";

function getSavedLang(): string {
  try {
    const saved = localStorage.getItem(STORAGE_KEY);
    if (saved === "es" || saved === "en") return saved;
  } catch {
    /* SSR / privacy mode */
  }
  return "es";
}

i18n.use(initReactI18next).init({
  resources: {
    es: { translation: es },
    en: { translation: en },
  },
  lng: getSavedLang(),
  fallbackLng: "es",
  interpolation: { escapeValue: false },
});

// Persist choice + update <html lang>
i18n.on("languageChanged", (lng) => {
  try {
    localStorage.setItem(STORAGE_KEY, lng);
  } catch {
    /* noop */
  }
  document.documentElement.lang = lng;
});

// Set on init
document.documentElement.lang = i18n.language;

export default i18n;
