import "./globals.css";
import { Inter } from "next/font/google";
import { locales } from "./i18n/config";
import { PostHogProvider } from "./components/PostHogProvider";

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
      <body className={inter.className}>
        <PostHogProvider>
          {children}
        </PostHogProvider>
      </body>
    </html>
  );
}