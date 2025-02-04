import Image from "next/image";
import { Dictionary } from "../i18n/config";

const projects = [
  {
    title: "E-commerce Platform",
    description:
      "A full-stack e-commerce solution with React, Node.js, and MongoDB.",
    image: "/placeholder.svg?height=200&width=300",
  },
  {
    title: "Task Management App",
    description:
      "A React Native mobile app for efficient task management and collaboration.",
    image: "/placeholder.svg?height=200&width=300",
  },
  {
    title: "Portfolio Website",
    description:
      "A responsive portfolio website built with Next.js and Tailwind CSS.",
    image: "/placeholder.svg?height=200&width=300",
  },
];

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
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <div
              key={index}
              className="bg-gray-800 rounded-lg overflow-hidden shadow-md"
            >
              <Image
                src={project.image || "/placeholder.svg"}
                alt={project.title}
                width={300}
                height={200}
                className="w-full"
              />
              <div className="p-6">
                <h3 className="text-xl font-semibold mb-2">{project.title}</h3>
                <p className="text-gray-400">{project.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
