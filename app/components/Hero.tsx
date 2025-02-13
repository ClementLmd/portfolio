import Image from "next/image";
import { Dictionary } from "../i18n/config";

type HeroProps = {
  dictionary: Dictionary["hero"];
};

const Hero = ({ dictionary }: HeroProps) => {
  return (
    <section className=" py-10">
      <div className="container mx-auto px-6 flex flex-col md:flex-row items-center">
        <div className="md:w-1/2 text-center md:text-left mb-8 md:mb-0">
          <div className="flex justify-center md:justify-start mb-6">
            <Image
              src="/profil_picture.jpg"
              alt="Clément Lmd picture"
              width={200}
              height={200}
              className="w-48 h-64 rounded-full object-cover"
              priority
            />
          </div>
          <h1 className="text-4xl font-bold mb-2">{dictionary.title}</h1>
          <p className="text-xl mb-6">{dictionary.subtitle}</p>
        </div>
        <div className="md:w-1/2">
          <h2 className="text-3xl font-bold mb-4">{dictionary.aboutMe}</h2>
          <p className="text-lg mb-6">{dictionary.description}</p>
          <div className="flex justify-center md:justify-start space-x-4 mt-4">
            <a
              href="https://github.com/ClementLmd"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-gray-700 text-white p-2 rounded-full border-2 border-transparent 
                hover:border-gray-500 transition duration-300"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4" />
                <path d="M9 18c-4.51 2-5-2-7-2" />
              </svg>
            </a>
            <a
              href="https://www.malt.fr/profile/clementlaumond"
              target="_blank"
              rel="noopener noreferrer"
              className="ml-4 bg-gray-300 text-white p-2 rounded-full border-2 border-transparent 
                hover:border-gray-500 transition duration-300"
            >
              <Image
                src="/icons/malt.svg"
                alt="Malt"
                width={24}
                height={24}
                className="w-6 h-6 fill-current text-white"
              />
            </a>
            <a
              href="mailto:clement.laumond@gmail.com"
              className="bg-gray-700 text-white p-2 rounded-full border-2 border-transparent 
                hover:border-gray-500 transition duration-300"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <rect width="20" height="16" x="2" y="4" rx="2" />
                <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7" />
              </svg>
            </a>
            {/* <a
              href="/your-cv.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-white text-black p-2 rounded-full hover:bg-white-800 transition duration-300"
            >
              <FileText size={24} />
            </a> */}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
