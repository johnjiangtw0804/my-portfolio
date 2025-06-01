import { FaGithub, FaLinkedin, FaPaw } from "react-icons/fa";

function Header() {
  return (
    <header className="sticky top-0 z-50 backdrop-blur-md bg-gray-900/60 border-b border-purple-500 shadow-lg section-container">
      <nav className="navbar-container">
        {/* justify-between for left homepage link and right social links*/}
        {/* Left: Logo */}
        <a
          href="#"
          className="flex gap-2 text-white font-bold hover:underline title-md font-mono"
        >
          <FaPaw />
          Jonathan Jiang
        </a>

        {/* Right: Social Links */}
        <div className="flex items-center gap-4">
          <a
            className="flex items-center gap-1 text-xl text-white font-bold hover:underline font-mono"
            href="https://github.com/johnjiangtw0804"
            target="_blank"
            rel="noopener noreferrer"
          >
            My Github
            <FaGithub />
          </a>
          <a
            className="flex items-center gap-1 text-xl text-white font-bold hover:underline font-mono"
            href="https://www.linkedin.com/in/jonathan-jiang-0a4ab9b9/"
            target="_blank"
            rel="noopener noreferrer"
          >
            LinkedIn
            <FaLinkedin />
          </a>
        </div>
      </nav>
    </header>
  );
}

export default Header;
