import { Dictionary } from "../i18n/config";

type ExperienceProps = {
  dictionary: Dictionary["experience"];
};

const Experience = ({ dictionary }: ExperienceProps) => {
  return (
    <section id="experience" className="py-10">
      <div className="container mx-auto px-6">
        <h2 className="text-3xl font-bold mb-8 text-center">
          {dictionary.title}
        </h2>
        <div className="space-y-6">
          {dictionary.experiences.map((exp, index) => (
            <div key={index} className="bg-gray-800 p-6 rounded-lg shadow-md">
              <h3 className="text-xl font-semibold">{exp.title}</h3>
              <p className="text-blue-300">
                <a href={exp.website} target="_blank" rel="noopener noreferrer">
                  {exp.company}
                </a>
              </p>
              <p className="text-gray-250 mb-2">{exp.period}</p>
              <p className="text-gray-300">{exp.description}</p>
              <p className="text-gray-400 mt-2">
                Stack: {exp.stack.join(", ")}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Experience;
