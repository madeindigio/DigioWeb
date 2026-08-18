import i18n from "i18next";
import { initReactI18next } from "react-i18next";
import es from "./es";

const STORAGE_KEY = "digio-lang";
type Lang = "es" | "en";

function getSavedLang(): Lang {
  try {
    const saved = localStorage.getItem(STORAGE_KEY);
    if (saved === "es" || saved === "en") return saved;
  } catch {
    /* SSR / privacy mode */
  }
  return "es";
}

const savedLang = getSavedLang();

// English translations (~90KB of source strings) are code-split and only
// fetched when actually needed, so ES-only visits (the default/fallback
// language) never download or parse them.
async function loadEnglishResource() {
  if (i18n.hasResourceBundle("en", "translation")) return;
  const { default: en } = await import("./en");
  i18n.addResourceBundle("en", "translation", en);
}

/** Ensures a language's resources are registered before switching to it. */
export async function ensureLanguageLoaded(lang: Lang) {
  if (lang === "en") await loadEnglishResource();
}

// Spanish ships in the main bundle (fallback + default language); English
// loads on demand below, awaited before first render only if it was the
// previously saved language.
export const i18nReady = i18n
  .use(initReactI18next)
  .init({
    resources: {
      es: { translation: es },
    },
    lng: savedLang,
    fallbackLng: "es",
    interpolation: { escapeValue: false },
  })
  .then(() => {
    if (savedLang === "en") return loadEnglishResource();
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
