
function Navbar() {
  return (
    <nav className="bg-slate-900 text-white px-8 py-4 flex justify-between items-center">

      <h1 className="text-2xl font-bold">
        Stephen Joseph  
      </h1>

      <ul className="flex gap-6">
        <li className="cursor-pointer hover:text-blue-400">
          Home
        </li>

        <li className="cursor-pointer hover:text-blue-400">
          About
        </li>

        <li className="cursor-pointer hover:text-blue-400">
          Skills
        </li>

        <li className="cursor-pointer hover:text-blue-400">
          Projects
        </li>

        <li className="cursor-pointer hover:text-blue-400">
          Contact
        </li>
      </ul>

    </nav>
  );
}

export default Navbar;