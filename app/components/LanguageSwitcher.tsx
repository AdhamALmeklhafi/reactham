import React from "react";
import { i18n } from "@lingui/core";
import { loadLocale } from "../lib/i18n";

const locales: { [key: string]: { direction: string } } = {
  en: { direction: "ltr" },
  ar: { direction: "rtl" },
};

const LanguageSwitcher: React.FC = () => {
  const changeLanguage = async (newLang: string) => {
    const localeValue = !newLang || !locales[newLang] ? "en" : newLang;
    await loadLocale(localeValue);
  };

  return (
    <div className="flex gap-2">
      <button
        onClick={() => changeLanguage("en")}
        className={i18n.locale === "en" ? "font-bold" : ""}
      >
        EN
      </button>
      <button
        onClick={() => changeLanguage("ar")}
        className={i18n.locale === "ar" ? "font-bold" : ""}
      >
        AR
      </button>
    </div>
  );
};

export default LanguageSwitcher;
