import { FaReact, FaNodeJs, FaGitAlt } from "react-icons/fa";
import { SiMongodb } from "react-icons/si";

function Skills() {
  const skillCategories = [
    {
      title: "Frontend",
      icon: <FaReact className="text-5xl text-cyan-500" />,
      skills: [
        "HTML",
        "CSS",
        "JavaScript",
        "React",
        "Tailwind CSS",
      ],
    },
    {
      title: "Backend",
      icon: <FaNodeJs className="text-5xl text-green-500" />,
      skills: [
        "Node.js",
        "Express.js",
      ],
    },
    {
      title: "Database",
      icon: <SiMongodb className="text-5xl text-green-600" />,
      skills: [
        "MongoDB",
        "MySQL",
      ],
    },
    {
      title: "Tools",
      icon: <FaGitAlt className="text-5xl text-orange-500" />,
      skills: [
        "Git",
        "GitHub",
        "Postman",
        "VS Code",
      ],
    },
  ];

  return (
    <section
      id="skills"
      className="py-20 px-6 bg-gray-50"
    >
      <div className="max-w-6xl mx-auto">

        <h2 className="text-4xl font-bold text-center mb-4">
          Skills
        </h2>

        <p className="text-center text-gray-600 mb-12">
          Technologies and tools I use to build
          full-stack web applications.
        </p>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">

          {skillCategories.map((category) => (
            <div
              key={category.title}
              className="
                bg-white
                rounded-2xl
                shadow-md
                p-6
                hover:shadow-xl
                hover:-translate-y-2
                transition-all
                duration-300
              "
            >
              <div className="flex flex-col items-center mb-6">

                {category.icon}

                <h3 className="text-xl font-bold mt-4 text-blue-600">
                  {category.title}
                </h3>

              </div>

              <div className="flex flex-wrap justify-center gap-2">

                {category.skills.map((skill) => (
                  <span
                    key={skill}
                    className="
                      bg-blue-100
                      text-blue-700
                      px-3
                      py-1
                      rounded-full
                      text-sm
                      font-medium
                    "
                  >
                    {skill}
                  </span>
                ))}

              </div>

            </div>
          ))}

        </div>

      </div>
    </section>
  );
}

export default Skills;