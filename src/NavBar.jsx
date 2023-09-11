import React from "react";
import logo from "/logo.png";
import { RiTwitterXLine } from "react-icons/ri";

const NavBar = () => {
  return (
    <nav className="flex justify-center items-center mt-4 py-4 lg:justify-between lg:mt-0">
      <img src={logo} alt="Repl.ai logo" className="w-40" />
      <a href="https://twitter.com/0xEzis">
        <div className="hidden lg:flex justify-center cursor-pointer items-center gap-3 bg-black text-white rounded-2xl px-4 py-1.5">
          <RiTwitterXLine className="text-xl" />
          <p className="text-xl mt-1">Soutiens-moi ! </p>
        </div>
      </a>
    </nav>
  );
};

export default NavBar;
