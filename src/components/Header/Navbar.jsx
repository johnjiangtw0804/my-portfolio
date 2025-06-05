import { useRef, useEffect } from "react";
import { PropTypes } from "prop-types";

function Navbar({ navOpen }) {
  const lastActiveLink = useRef();
  const activeBox = useRef();

  const initActiveBox = () => {
    activeBox.current.style.top = lastActiveLink.current.offsetTop + "px";
    activeBox.current.style.left = lastActiveLink.current.offsetLeft + "px";
    activeBox.current.style.width = lastActiveLink.current.offsetWidth + "px";
    activeBox.current.style.height = lastActiveLink.current.offsetHeight + "px";
  };

  useEffect(initActiveBox, []);

  const activeCurrentLnk = (event) => {
    lastActiveLink.current?.classList.remove("active");
    event.target.classList.add("active");

    // Every time we click, we need to remove the last active link
    lastActiveLink.current = event.target;
    initActiveBox();
  };

  window.addEventListener("resize", initActiveBox);

  const navItems = [
    {
      label: "Home",
      link: "#home",
      className: "nav-link active",
      ref: lastActiveLink,
    },
    {
      label: "About",
      link: "#about",
      className: "nav-link",
    },
    {
      label: "Work",
      link: "#work",
      className: "nav-link",
    },
    {
      label: "Socials",
      link: "#socials",
      className: "nav-link",
    },
    {
      label: "Contact",
      link: "#contact",
      className: "nav-link md:hidden",
    },
  ];
  return (
    <nav className={`navbar ${navOpen ? "active" : ""}`}>
      {navItems.map(({ label, link, className, ref }, index) => {
        return (
          <a
            href={link}
            key={index}
            className={className}
            ref={ref}
            onClick={activeCurrentLnk}
          >
            {label}
          </a>
        );
      })}
      {/* This is used to tell which one is the active box */}
      <div className="active-box" ref={activeBox}></div>
    </nav>
  );
}

Navbar.propTypes = {
  navOpen: PropTypes.bool.isRequired,
};

export default Navbar;
