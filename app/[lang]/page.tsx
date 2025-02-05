import { type LocaleType } from "../i18n/config";
import Hero from "../components/Hero";
import Skills from "../components/Skills";
import Projects from "../components/Projects";
import { getDictionary } from "../i18n/get-dictionary";
import Header from "../components/Header";
import Experience from "../components/Experience";
import Footer from "../components/Footer";

interface PageProps {
  params: Promise<{ lang: LocaleType }>;
}

export default async function Page({ params }: PageProps) {
  const resolvedParams = await params;
  const dictionary = await getDictionary(resolvedParams.lang);

  return (
    <div className="min-h-screen bg-gray-900">
      <Header dictionary={dictionary.nav} />
      <main>
        <Hero dictionary={dictionary.hero} />
        <Experience dictionary={dictionary.experience} />
        <Projects dictionary={dictionary.projects} />
        <Skills dictionary={dictionary.skills} />
      </main>
      <Footer dictionary={dictionary.footer} />
    </div>
  );
}
