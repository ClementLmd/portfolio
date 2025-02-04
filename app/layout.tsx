import "./globals.css";
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import type React from "react"; // Import React
import { locales, type LocaleType } from "./i18n/config";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Clément Laumond - Portfolio",
  description: "Web Developer Portfolio",
};

export async function generateStaticParams() {
  return locales.map((locale) => ({ lang: locale }));
}

export default function RootLayout({
  children,
  params: { lang },
}: {
  children: React.ReactNode;
  params: { lang: LocaleType };
}) {
  return (
    <html lang={lang}>
      <body className={inter.className}>{children}</body>
    </html>
  );
}
