import type { LocaleType, Dictionary } from "./config";

export const getDictionary = async (
  locale: LocaleType
): Promise<Dictionary> => {
  switch (locale) {
    case "en":
      return (await import("./dictionaries/en.json")).default;
    case "fr":
      return (await import("./dictionaries/fr.json")).default;
    default:
      return (await import("./dictionaries/fr.json")).default;
  }
};
