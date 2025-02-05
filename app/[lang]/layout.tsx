import type { Metadata } from "next";
import { type LocaleType } from "../i18n/config";

export async function generateMetadata({
  params,
}: {
  params: { lang: LocaleType };
}): Promise<Metadata> {
  const isFrench = params.lang === "fr";

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
    openGraph: {
      type: "website",
      locale: isFrench ? "fr_FR" : "en_US",
      url: "https://your-domain.com",
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
          url: "/images/og-image.jpg",
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

export default async function Layout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
