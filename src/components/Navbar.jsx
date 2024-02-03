import React from "react";

function Navbar() {
  return (
    <header className="py-2 px-10 flex justify-between items-center bg-white">
      <div className="flex items-center gap-1 text-gray-700 cursor-default transition hover:text-teal-700">
        <i class="fa-regular fa-circle-user text-xl"></i>
        <h1 className="text-2xl font-medium">Kewbuzz</h1>
      </div>

      <ul>
        <li>
          <a className="transition hover:text-cyan-800" href="/">
            Home
          </a>
        </li>
      </ul>
    </header>
  );
}

export default Navbar;
