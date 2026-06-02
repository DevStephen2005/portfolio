import {
  FaGithub,
  FaExternalLinkAlt,
} from "react-icons/fa";

import weatherImg from "../assets/images/weather.jpg";
import movieImg from "../assets/images/movie.jpg";
import authImg from "../assets/images/auth.jpg";

function Projects() {
  const projects = [
    {
      title: "Weather App",
      image: weatherImg,
      description:
        "Real-time weather application using OpenWeather API.",
      tech: ["React", "Axios", "Tailwind"],
      github: "#",
      live: "#",
    },
    {
      title: "Movie Search App",
      image: movieImg,
      description:
        "Search movies and view details using OMDb API.",
      tech: ["React", "API", "CSS"],
      github: "#",
      live: "#",
    },
    {
      title: "Authentication UI",
      image: authImg,
      description:
        "Modern login and registration interface.",
      tech: ["React", "Tailwind"],
      github: "#",
      live: "#",
    },
  ];

  return (
    <section
      id="projects"
      className="py-20 px-6 bg-white"
    >
      <div className="max-w-7xl mx-auto">

        <h2 className="text-4xl font-bold text-center mb-4">
          Projects
        </h2>

        <div className="grid md:grid-cols-2 gap-8 mt-10">

          {projects.map((project) => (
            <div
              key={project.title}
              className="
                bg-white
                rounded-2xl
                overflow-hidden
                shadow-lg
                hover:shadow-2xl
                transition-all
                duration-300
              "
            >
              <img
                src={project.image}
                alt={project.title}
                className="
                  w-full
                  h-56
                  object-cover
                "
              />

              <div className="p-6">

                <h3 className="text-2xl font-bold mb-3">
                  {project.title}
                </h3>

                <p className="text-gray-600 mb-4">
                  {project.description}
                </p>

                <div className="flex flex-wrap gap-2 mb-5">

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
                      "
                    >
                      {item}
                    </span>
                  ))}

                </div>

                <div className="flex gap-4">

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
                    "
                  >
                    <FaExternalLinkAlt />
                    Live Demo
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