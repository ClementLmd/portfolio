import { Metadata } from "next";
import { LocaleType } from "../i18n/config";
import { env } from "./env";

export function getMetadata(lang: LocaleType): Metadata {
  const isFrench = lang === "fr";

  return {
    metadataBase: new URL(
      process.env.NEXT_PUBLIC_BASE_URL || "http://localhost:3000"
    ),
    title: "Clément Laumond - Portfolio",
    description: isFrench
      ? "Développeur Web Full Stack spécialisé en React, Next.js et Node.js. Découvrez mes projets et mon expérience."
      : "Full Stack Web Developer specialized in React, Next.js, and Node.js. View my projects and experience.",
    keywords: isFrench
      ? [
          "Développeur Web",
          "Full Stack",
          "React",
          "Next.js",
          "Node.js",
          "TypeScript",
        ]
      : [
          "Web Developer",
          "Full Stack",
          "React",
          "Next.js",
          "Node.js",
          "TypeScript",
        ],
    robots: {
      index: true,
      follow: true,
      nocache: true,
      googleBot: {
        index: true,
        follow: true,
        noimageindex: true,
      },
    },
    openGraph: {
      type: "website",
      locale: isFrench ? "fr_FR" : "en_US",
      url: env.baseUrl,
      siteName: isFrench
        ? "Portfolio de Clément Laumond"
        : "Clément Laumond Portfolio",
      title: isFrench
        ? "Clément Laumond - Développeur Web Full Stack"
        : "Clément Laumond - Full Stack Web Developer",
      description: isFrench
        ? "Développeur Web Full Stack spécialisé en React, Next.js et Node.js. Découvrez mes projets et mon expérience."
        : "Full Stack Web Developer specialized in React, Next.js, and Node.js. View my projects and experience.",
      images: [
        {
          url: "/og-image.png",
          width: 1200,
          height: 630,
          alt: isFrench
            ? "Portfolio de Clément Laumond"
            : "Clément Laumond Portfolio",
        },
      ],
    },
    twitter: null,
  };
}
