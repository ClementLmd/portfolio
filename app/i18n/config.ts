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
  experience: {
    title: string;
    experiences: {
      title: string;
      company: string;
      period: string;
      description: string;
      stack: string[];
      website?: string;
    }[];
  };
  projects: {
    title: string;
    description: string;
    projects: {
      title: string;
      description: string;
      image: string;
      stack: string[];
      website?: string;
    }[];
  };
  skills: {
    title: string;
  };
  footer: {
    allRightsReserved: string;
  };
}
