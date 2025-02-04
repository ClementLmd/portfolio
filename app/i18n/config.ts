export const defaultLocale = "fr";
export const locales = ["en", "fr"];
export type LocaleType = (typeof locales)[number];

export interface Dictionary {
  hero: {
    title: string;
    subtitle: string;
    description: string;
    aboutMe: string;
  };
  nav: {
    home: string;
    experience: string;
    projects: string;
    skills: string;
    contact: string;
  };
}
