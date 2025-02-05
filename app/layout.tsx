import "./globals.css";
import { Inter } from "next/font/google";
import { locales, type LocaleType } from "./i18n/config";

const inter = Inter({ subsets: ["latin"] });

type Props = {
  children: React.ReactNode;
  params: { lang: LocaleType };
};

export async function generateStaticParams() {
  return locales.map((locale) => ({ lang: locale }));
}

export default function RootLayout({ children, params }: Props) {
  return (
    <html lang={params.lang}>
      <body className={inter.className}>{children}</body>
    </html>
  );
}
