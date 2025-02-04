import { Dictionary } from "../i18n/config";
import Image from "next/image";

const skills = [
  {
    name: "JavaScript",
    icon: "/icons/javascript.svg",
  },
  {
    name: "TypeScript",
    icon: "/icons/typescript.svg",
  },
  {
    name: "React",
    icon: "/icons/react.svg",
  },
  {
    name: "Next.js",
    icon: "/icons/nextdotjs.svg",
  },
  {
    name: "Node.js",
    icon: "/icons/nodedotjs.svg",
  },
  {
    name: "Express",
    icon: "/icons/express.svg",
  },
  {
    name: "MongoDB",
    icon: "/icons/mongodb.svg",
  },
  {
    name: "HTML5",
    icon: "/icons/html5.svg",
  },
  {
    name: "Tailwind CSS",
    icon: "/icons/tailwindcss.svg",
  },
  {
    name: "Git",
    icon: "/icons/git.svg",
  },
];

type SkillsProps = {
  dictionary: Dictionary["skills"];
};

const Skills = ({ dictionary }: SkillsProps) => {
  return (
    <section id="skills" className="py-20">
      <div className="container mx-auto px-6">
        <h2 className="text-3xl font-bold mb-8 text-center">
          {dictionary.title}
        </h2>
        <div className="flex flex-wrap justify-center gap-4">
          {skills.map((skill) => (
            <div
              key={skill.name}
              className="flex items-center gap-2 bg-gray-200 px-4 py-2 rounded-full"
            >
              <Image
                src={skill.icon}
                alt={skill.name}
                width={24}
                height={24}
                className="w-6 h-6"
              />
              <span>{skill.name}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;
