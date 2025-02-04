import { getDictionary } from "../i18n/get-dictionary";
import type { LocaleType } from "../i18n/config";
import Header from "../components/Header";
import Hero from "../components/Hero";
import Experience from "../components/Experience";
import Projects from "../components/Projects";
import Skills from "../components/Skills";
import Footer from "../components/Footer";

export default async function Home({
  params,
}: {
  params: { lang: LocaleType };
}) {
  const { lang } = await params;
  const dictionary = await getDictionary(lang);

  return (
    <div className="min-h-screen bg-gray-100">
      <Header dictionary={dictionary.nav} />
      <main>
        <Hero dictionary={dictionary.hero} />
        <Experience />
        <Projects />
        <Skills />
      </main>
      <Footer />
    </div>
  );
}
