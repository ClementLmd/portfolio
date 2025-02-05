import "./globals.css";
import { Inter } from "next/font/google";
import { defaultLocale, locales } from "./i18n/config";

const inter = Inter({ subsets: ["latin"] });

export async function generateStaticParams() {
  return locales.map((locale) => ({ lang: locale }));
}

export default async function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang={defaultLocale}>
      <body className={inter.className}>{children}</body>
    </html>
  );
}
