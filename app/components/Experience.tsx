import { Dictionary } from "../i18n/config";

const experiences = [
  {
    title: "Senior Web Developer",
    company: "Tech Innovators Inc.",
    period: "2020 - Present",
    description:
      "Lead development of complex web applications using React and Node.js.",
  },
  {
    title: "Full Stack Developer",
    company: "Digital Solutions Ltd.",
    period: "2017 - 2020",
    description:
      "Developed and maintained various client projects using MERN stack.",
  },
  {
    title: "Junior Developer",
    company: "StartUp Ventures",
    period: "2015 - 2017",
    description:
      "Assisted in the development of web applications and gained experience in Agile methodologies.",
  },
];

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
          {experiences.map((exp, index) => (
            <div key={index} className="bg-gray-800 p-6 rounded-lg shadow-md">
              <h3 className="text-xl font-semibold">{exp.title}</h3>
              <p className="text-blue-600">{exp.company}</p>
              <p className="text-gray-400 mb-2">{exp.period}</p>
              <p className="text-gray-500">{exp.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Experience;
