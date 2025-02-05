import "./globals.css";
import { Inter } from "next/font/google";
import { locales, type LocaleType } from "./i18n/config";

const inter = Inter({ subsets: ["latin"] });

export async function generateStaticParams() {
  return locales.map((locale) => ({ lang: locale }));
}

export default async function RootLayout({
  children,
  params,
}: {
  children: React.ReactNode;
  params: { lang: LocaleType };
}) {
  return (
    <html lang={params.lang}>
      <body className={inter.className}>{children}</body>
    </html>
  );
}
