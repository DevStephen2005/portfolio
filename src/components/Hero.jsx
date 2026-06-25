import { FaGithub, FaLinkedin, FaEnvelope } from "react-icons/fa";

import photo from "../assets/images/photo.jpg";

function Hero() {
  return (
    <section className="min-h-[85vh] flex flex-col justify-center items-center text-center px-6">
      <img
        src={photo}
        alt="profile"
        className="w-44 h-44 rounded-full shadow-lg mb-6 border-4 border-blue-500"
      />

      <h5 className="text-4xl md:text-5xl font-bold mb-4">
        Hi, I'm Stephen J
      </h5>

      <p className="text-blue-600 font-semibold mb-2 md:text-3xl">
        Full Stack Developer (MERN)
      </p>

      <p className="max-w-3xl text-gray-600 text-lg mb-8">
        I build responsive and scalable web applications using MongoDB,
        Express.js, React, and Node.js. Passionate about creating modern user
        interfaces, REST APIs, authentication systems, and real-world software
        solutions.
      </p>

      <div className="flex flex-wrap justify-center gap-3 mb-8">
        <span className="bg-green-100 text-green-700 px-4 py-2 rounded-full">
          MongoDB
        </span>

        <span className="bg-gray-200 text-gray-700 px-4 py-2 rounded-full">
          Express.js
        </span>

        <span className="bg-cyan-100 text-cyan-700 px-4 py-2 rounded-full">
          React
        </span>

        <span className="bg-lime-100 text-lime-700 px-4 py-2 rounded-full">
          Node.js
        </span>

        <span className="bg-yellow-100 text-yellow-700 px-4 py-2 rounded-full">
          JavaScript
        </span>

        <span className="bg-blue-100 text-blue-700 px-4 py-2 rounded-full">
          Tailwind CSS
        </span>
      </div>

      <div className="flex gap-4 mb-8">
        <a href="#projects">
          <button className="bg-blue-600 text-white px-6 py-3 rounded-lg hover:bg-blue-700 transition cursor-pointer">
          View Projects
        </button>
        </a>
        

        <a
          href="/resume.pdf"
          download
          className="
      border border-blue-600
      text-blue-600
      px-6 py-3
      rounded-lg
      hover:bg-blue-600
      hover:text-white
      transition">
          Download Resume
        </a>
      </div>

      <div className="flex gap-8 text-3xl text-gray-700">
        <a
          href="https://github.com/DevStephen2005"
          target="_blank"
          rel="noreferrer"
          className="hover:text-blue-600 transition"
        >
          <FaGithub />
        </a>

        <a
          href="https://linkedin.com/in/stephen2005"
          target="_blank"
          rel="noreferrer"
          className="hover:text-blue-600 transition"
        >
          <FaLinkedin />
        </a>

        <a
          href="mailto:devstephen15@gmail.com"
          className="hover:text-blue-600 transition"
        >
          <FaEnvelope />
        </a>
      </div>
    </section>
  );
}

export default Hero;
