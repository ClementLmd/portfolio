import { getMetadata } from "../config/metadata";
import { LocaleType } from "../i18n/config";

interface LayoutProps {
  params: Promise<{ lang: LocaleType }>;
  children: React.ReactNode;
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ lang: LocaleType }>;
}) {
  const resolvedParams = await params;
  return {
    ...getMetadata(resolvedParams.lang),
    robots: {
      index: true,
      follow: true,
      googleBot: {
        index: true,
        follow: true,
      },
    },
  };
}

export default async function Layout({ children, params }: LayoutProps) {
  const resolvedParams = await params;
  return <div lang={resolvedParams.lang}>{children}</div>;
}
