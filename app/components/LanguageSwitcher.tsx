import React from "react";
import { loadLocale } from "../lib/i18n";

const locales: { [key: string]: { direction: string } } = {
  en: { direction: "ltr" },
  ar: { direction: "rtl" },
};

const LanguageSwitcher: React.FC = () => {
  const [currentLang, setCurrentLang] = React.useState("en");

  return (
    <div className="">
      {Object.keys(locales)
        .filter((lang) => lang !== currentLang)
        .map((lang) => (
          <button
            key={lang}
            onClick={async () => {
              const localeValue = !lang || !locales[lang] ? "en" : lang;
              await loadLocale(localeValue);
              setCurrentLang(localeValue);
            }}
            className="hover:underline font-bold"
          >
            {lang.toUpperCase()}
          </button>
        ))}
    </div>
  );
};

export default LanguageSwitcher;
