import React from "react";
import { navlinks } from "../constants";

const Header = () => {
  return (
    <header className="relative w-full bg-[#121212]">
      <nav className="flexBetween w-full px-20 md:max-w-7xl mx-auto md:px-5 py-2">
        <h1 className="title-bold text-red-500 text-[10rem] md:text-4xl font-bold ">
          K<span className="dummy-signature text-gray-300">Combs</span>
        </h1>
        <ul className="flexCenter gap-12">
          {navlinks.map(({ label, url }, index) => {
            return (
              <li key={index}>
                <a
                  href={url}
                  className="text-[5rem] md:text-base text-white font-medium"
                >
                  {label}
                </a>
              </li>
            );
          })}
        </ul>
      </nav>
    </header>
  );
};

export default Header;
