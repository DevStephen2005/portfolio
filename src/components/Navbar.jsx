import { useState } from "react";
import { FaBars, FaTimes } from "react-icons/fa";

function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="bg-slate-900 text-white px-6 py-4 sticky top-0 z-50 shadow-lg">
      <div className="max-w-7xl mx-auto flex justify-between items-center">
        <a href="#">
          <h1 className="text-2xl font-bold text-blue-400">Stephen Joseph</h1>
        </a>

        <button
          onClick={() => setIsOpen(!isOpen)}
          className="md:hidden text-2xl"
        >
          {isOpen ? <FaTimes /> : <FaBars />}
        </button>

        <ul className="hidden md:flex gap-8 font-medium">
          <li>
            <a href="#about" className="hover:text-blue-400 transition">
              About
            </a>
          </li>

          <li>
            <a href="#skills" className="hover:text-blue-400 transition">
              Skills
            </a>
          </li>

          <li>
            <a href="#projects" className="hover:text-blue-400 transition">
              Projects
            </a>
          </li>

          <li>
            <a href="#education" className="hover:text-blue-400 transition">
              Education
            </a>
          </li>

          <li>
            <a href="#contact" className="hover:text-blue-400 transition">
              Contact
            </a>
          </li>
        </ul>
      </div>

      {isOpen && (
        <ul className="md:hidden flex flex-col gap-4 mt-4 text-center bg-slate-800 py-4 rounded-lg">
          <li>
            <a href="#about" onClick={() => setIsOpen(false)}>
              About
            </a>
          </li>

          <li>
            <a href="#skills" onClick={() => setIsOpen(false)}>
              Skills
            </a>
          </li>

          <li>
            <a href="#projects" onClick={() => setIsOpen(false)}>
              Projects
            </a>
          </li>

          <li>
            <a href="#education" onClick={() => setIsOpen(false)}>
              Education
            </a>
          </li>

          <li>
            <a href="#contact" onClick={() => setIsOpen(false)}>
              Contact
            </a>
          </li>
        </ul>
      )}
    </nav>
  );
}

export default Navbar;
