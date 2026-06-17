import { FaGithub, FaExternalLinkAlt } from "react-icons/fa";

import expenseTrackerImg from "../assets/images/expense_img.png";
import resumeBuilderImg from "../assets/images/ai_resume_img.png";
import portfolioImg from "../assets/images/portfolio_img.png";


function Projects() {
  const projects = [
    {
      title: "Expense Tracker",
      image: expenseTrackerImg,
      description:
        "Full-stack MERN expense tracking application with authentication, analytics dashboard, PDF reports, admin panel, and transaction management.",
      tech: ["React", "Node.js", "Express", "MongoDB", "Tailwind CSS"],
      github: "https://github.com/DevStephen2005/expense-tracker",
      live: "https://expense-tracker-client-x2b6.onrender.com/",
    },

    {
      title: "AI Resume Builder",
      image: resumeBuilderImg,
      description:
        "AI-powered resume builder that generates professional resumes, improves content using AI, and exports resumes as PDF.",
      tech: ["React", "Node.js", "MongoDB", "OpenAI API", "Tailwind CSS"],
      github: "YOUR_GITHUB_LINK",
      live: "YOUR_LIVE_LINK",
    },

    {
      title: "Portfolio Website",
      image: portfolioImg,
      description:
        "Modern responsive developer portfolio showcasing projects, skills, certifications, and contact information.",
      tech: ["React", "Tailwind CSS", "Vercel"],
      github: "YOUR_GITHUB_LINK",
      live: "YOUR_LIVE_LINK",
    },
  ];

  return (
    <section id="projects" className="py-20 px-6 bg-white">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-4xl font-bold text-center mb-4">Projects</h2>

        <div
          className="
            grid
            md:grid-cols-2
            lg:grid-cols-3
            gap-8
            mt-12
          "
        >
          {projects.map((project) => (
            <div
              key={project.title}
              className="
                bg-white
                rounded-2xl
                overflow-hidden
                shadow-lg
                hover:shadow-2xl
                hover:-translate-y-2
                transition-all
                duration-300
              "
            >
              <div className="overflow-hidden">
                <img
                  src={project.image}
                  alt={project.title}
                  className="
                    w-full
                    h-56
                    object-cover
                    hover:scale-105
                    transition-transform
                    duration-300
                  "
                />
              </div>

              <div className="p-6">
                <h3 className="text-2xl font-bold mb-3">{project.title}</h3>

                <p className="text-gray-600 mb-4">{project.description}</p>

                <div className="flex flex-wrap gap-2 mb-6">
                  {project.tech.map((item) => (
                    <span
                      key={item}
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
                      {item}
                    </span>
                  ))}
                </div>

                <div className="flex gap-3">
                  <a
                    href={project.github}
                    target="_blank"
                    rel="noreferrer"
                    className="
                      flex
                      items-center
                      gap-2
                      bg-gray-900
                      text-white
                      px-4
                      py-2
                      rounded-lg
                      hover:bg-black
                      transition
                    "
                  >
                    <FaGithub />
                    GitHub
                  </a>

                  <a
                    href={project.live}
                    target="_blank"
                    rel="noreferrer"
                    className="
                      flex
                      items-center
                      gap-2
                      bg-blue-600
                      text-white
                      px-4
                      py-2
                      rounded-lg
                      hover:bg-blue-700
                      transition
                    "
                  >
                    <FaExternalLinkAlt />
                    Demo
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Projects;
