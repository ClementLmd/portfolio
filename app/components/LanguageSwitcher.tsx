"use client";

import { usePathname, useRouter } from "next/navigation";
import { locales, LocaleType } from "../i18n/config";
import Image from "next/image";
import { useEffect, useState } from "react";

export default function LanguageSwitcher() {
  const pathname = usePathname();
  const router = useRouter();
  const [currentLocale, setCurrentLocale] = useState<string>("en");

  // Use useEffect to safely set the current locale after component mounts
  useEffect(() => {
    if (pathname) {
      const pathSegments = pathname.split("/");
      if (pathSegments.length > 1 && pathSegments[1]) {
        setCurrentLocale(pathSegments[1]);
      }
    }
  }, [pathname]);

  const handleLanguageChange = (newLocale: string) => {
    if (!pathname) return;
    const newPath = pathname.replace(/^\/[a-z]{2}/, `/${newLocale}`);
    router.push(newPath);
  };

  const getFlagSrc = (locale: LocaleType) => {
    return locale === "fr" ? "/icons/france-flag.svg" : "/icons/uk-flag.svg";
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
              <Image
                src={getFlagSrc(locale)}
                alt={locale}
                width={20}
                height={20}
              />
            </button>
          )
      )}
    </div>
  );
}
