import Image from "next/image";
import { Dictionary } from "../i18n/config";

type ProjectsProps = {
  dictionary: Dictionary["projects"];
};

const Projects = ({ dictionary }: ProjectsProps) => {
  return (
    <section id="projects" className="py-10">
      <div className="container mx-auto px-6">
        <h2 className="text-3xl font-bold mb-8 text-center">
          {dictionary.title}
        </h2>
        <div className="flex flex-wrap justify-center gap-6">
          {dictionary.projects.map((project, index) => (
            <a
              key={index}
              className="max-w-sm max-h-[500px] bg-gray-800 rounded-lg overflow-hidden shadow-md 
                hover:shadow-xl transition-all duration-300 hover:scale-105 cursor-pointer"
              href={project.website}
              target="_blank"
              rel="noopener noreferrer"
            >
              <Image
                src={project.image || "/placeholder.svg"}
                alt={project.title}
                width={300}
                height={200}
                className="w-full h-64 object-cover"
              />
              <div className="p-6">
                <h3 className="text-xl font-semibold mb-2">{project.title}</h3>
                <p className="text-gray-400">{project.description}</p>
              </div>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
