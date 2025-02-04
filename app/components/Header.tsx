import Link from "next/link";
import { Dictionary } from "../i18n/config";
import LanguageSwitcher from "./LanguageSwitcher";

type HeaderProps = {
  dictionary: Dictionary["nav"];
};

const Header = ({ dictionary }: HeaderProps) => {
  return (
    <header className="bg-gray-800 shadow-lg sticky top-0 z-10">
      <nav className="container mx-auto px-6 py-3 relative">
        <ul className="flex justify-center space-x-6">
          <li>
            <Link href="#experience" className="text-white hover:text-blue-400">
              {dictionary.experience}
            </Link>
          </li>
          <li>
            <Link href="#projects" className="text-white hover:text-blue-400">
              {dictionary.projects}
            </Link>
          </li>
          <li>
            <Link href="#skills" className="text-white hover:text-blue-400">
              {dictionary.skills}
            </Link>
          </li>
        </ul>
        <div className="absolute right-6 top-1/2 -translate-y-1/2">
          <LanguageSwitcher />
        </div>
      </nav>
    </header>
  );
};

export default Header;
