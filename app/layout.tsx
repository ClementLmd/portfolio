import "./globals.css";
import { Inter } from "next/font/google";
import { locales } from "./i18n/config";

const inter = Inter({ subsets: ["latin"] });

export async function generateStaticParams() {
  return locales.map((locale) => ({ lang: locale }));
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="fr">
      <body className={inter.className}>{children}</body>
    </html>
  );
}
