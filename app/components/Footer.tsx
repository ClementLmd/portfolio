import { Dictionary } from "../i18n/config";

type FooterProps = {
  dictionary: Dictionary["footer"];
};

const Footer = ({ dictionary }: FooterProps) => {
  return (
    <footer className="bg-gray-800 text-white py-6">
      <div className="container mx-auto px-6 text-center">
        <p>
          &copy; {new Date().getFullYear()} Clément Laumond -{" "}
          {dictionary.allRightsReserved}
        </p>
        <div className="mt-4">
          <a
            href="https://github.com/ClementLmd"
            target="_blank"
            rel="noopener noreferrer"
            className="text-gray-400 hover:text-white mx-2"
          >
            GitHub
          </a>
          <a
            href="https://www.malt.fr/profile/clementlaumond"
            target="_blank"
            rel="noopener noreferrer"
            className="text-gray-400 hover:text-white mx-2"
          >
            Malt
          </a>
          <a
            href="https://www.linkedin.com/in/clementlmd"
            target="_blank"
            rel="noopener noreferrer"
            className="text-gray-400 hover:text-white mx-2"
          >
            LinkedIn
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
