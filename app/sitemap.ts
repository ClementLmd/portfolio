import { env } from "./config/env";
import { locales } from "./i18n/config";
import { MetadataRoute } from "next";

export default function sitemap(): MetadataRoute.Sitemap {
  return locales.map((locale) => ({
    url: `${env.baseUrl}/${locale}`,
    lastModified: new Date(),
    changeFrequency: "monthly",
    priority: 1,
  }));
}
