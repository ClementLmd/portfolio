"use client";

import { usePathname, useRouter } from "next/navigation";
import { locales } from "../i18n/config";

export default function LanguageSwitcher() {
  const pathname = usePathname();
  const router = useRouter();
  const currentLocale = pathname.split("/")[1];

  const handleLanguageChange = (newLocale: string) => {
    const currentPath = pathname;
    const newPath = currentPath.replace(/^\/[a-z]{2}/, `/${newLocale}`);
    router.push(newPath);
  };

  return (
    <div className="flex gap-2">
      {locales.map(
        (locale) =>
          locale !== currentLocale && (
            <button
              key={locale}
              onClick={() => handleLanguageChange(locale)}
              className="px-2 py-1 rounded text-white hover:bg-gray-700"
            >
              {locale.toUpperCase()}
            </button>
          )
      )}
    </div>
  );
}
