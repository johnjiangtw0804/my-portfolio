import { FaGithub, FaLinkedin, FaPaw } from "react-icons/fa";
import Navbar from "./Navbar";
import { useState } from "react";

function Header() {
  const [navOpen, setNavOpen] = useState(false);

  return (
    <header className="fixed top-0 left-0 w-full h-16 z-10 flex items-center backdrop-blur-md bg-gray-900/60 border-b border-purple-500 shadow-lg">
      {/* Left: Logo */}
      <div
        className="flex justify-between items-center max-w-screen-2xl w-full mx-auto px-4
        md:px-6 md:grid-cols-[1fr,auto,1fr]"
      >
        {/* Left Logo */}
        <h1 className="flex items-center justify-between">
          <FaPaw />
          Jonathan Jiang
        </h1>

        {/* Navbar For the grid property*/}
        <div className="relative justify-self-center">
          {/* menu 跟 close */}
          <button
            className="menu-button md:hidden"
            onClick={() => {
              setNavOpen(!navOpen);
            }}
          >
            {/* 按鈕圖片 */}
            <span className={`material-symbols-outlined`}>
              {navOpen ? "close" : "menu"}
            </span>
          </button>
          {/* 中間的 navbar */}
          <Navbar navOpen={navOpen} />
        </div>

        {/* Contact me */}
        <a
          href="#contact"
          className="btn btn-secondary max-md:hidden md:justify-end"
        >
          contact me
        </a>
      </div>
    </header>
  );
}

export default Header;
