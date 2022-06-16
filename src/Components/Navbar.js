import React from "react";
import { MenuIcon } from "@heroicons/react/outline";
const Navbar = () => {
  return (
    <div className="relative container mx-6 md:mx-auto pt-6 ">
      <nav className="flex justify-between items-center">
        <div className="pt-2">
          <h1 className="font-bold text-3xl">BRAND</h1>
        </div>

        <li className="hidden md:flex space-x-6">
          <a
            href="./page/Home.js"
            className="text-lg font-bold uppercase hover:text-stone-200"
          >
            Home
          </a>
          <a
            href="./page/Home.js"
            className="text-lg font-bold uppercase hover:text-stone-200"
          >
            gallery
          </a>
        </li>
      </nav>
    </div>
  );
};

export default Navbar;
