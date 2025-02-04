const skills = [
  "JavaScript",
  "TypeScript",
  "React",
  "Next.js",
  "Node.js",
  "Express",
  "MongoDB",
  "SQL",
  "HTML5",
  "CSS3",
  "Tailwind CSS",
  "Git",
]

const Skills = () => {
  return (
    <section id="skills" className="py-20 bg-gray-100">
      <div className="container mx-auto px-6">
        <h2 className="text-3xl font-bold mb-8 text-center">Skills</h2>
        <div className="flex flex-wrap justify-center gap-4">
          {skills.map((skill, index) => (
            <span key={index} className="bg-blue-600 text-white px-4 py-2 rounded-full text-sm font-semibold">
              {skill}
            </span>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Skills

