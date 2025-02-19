import { i18n } from "@lingui/core";

const locales: { [key: string]: { direction: string } } = {
  en: { direction: "ltr" },
  ar: { direction: "rtl" },
};

export const loadLocale = async (localeValue: string) => {
  const { messages } = await import(`../locales/${localeValue}/messages.po`);
  i18n.load(localeValue, messages);
  i18n.activate(localeValue);

  if (typeof window !== "undefined") {
    document.documentElement.setAttribute("lang", localeValue);
    document.documentElement.setAttribute(
      "dir",
      locales[localeValue].direction,
    );
    localStorage.setItem("locale", localeValue);
  }
};
