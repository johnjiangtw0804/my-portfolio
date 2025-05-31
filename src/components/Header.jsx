import { FaGithub, FaLinkedin, FaPaw } from "react-icons/fa";

function Header() {
  return (
    <header className="shadow">
      <nav className="flex justify-center">
        {/* justify-between for left homepage link and right social links*/}
        <div className="flex justify-between items-center w-full max-w-5xl h-16 px-4 md:px-8">
          {/* Left: Logo */}
          <a
            href="#"
            className="flex items-center gap-2 text-white font-bold hover:text-cyan-800 text-xl font-display"
          >
            <FaPaw />
            Jonathan Jiang
          </a>

          {/* Right: Social Links */}
          <div className="flex items-center gap-4">
            <a
              className="flex items-center gap-1 text-xl text-white font-bold hover:text-cyan-800 font-display"
              href="https://github.com/johnjiangtw0804"
              target="_blank"
              rel="noopener noreferrer"
            >
              My Github
              <FaGithub />
            </a>
            <a
              className="flex items-center gap-1 text-xl text-white font-bold hover:text-cyan-800 font-display"
              href="https://www.linkedin.com/in/jonathan-jiang-0a4ab9b9/"
              target="_blank"
              rel="noopener noreferrer"
            >
              LinkedIn
              <FaLinkedin />
            </a>
          </div>
        </div>
      </nav>
    </header>
  );
}

export default Header;
