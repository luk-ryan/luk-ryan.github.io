import React from "react";
import { Link, useLocation } from "react-router-dom";

const NavBar = () => {
  const path = useLocation(); // get current location

  return (
    <nav className="navbar">
      <div className="logo">
        <Link to="/">Ryan Luk</Link>
      </div>
      <ul className="nav-links">
        <li>
          <Link
            to="/about"
            className={location.pathname === "/about" ? "active" : ""}
          >
            About Me
          </Link>
        </li>
        <li>
          <Link
            to="/projects"
            className={location.pathname === "/projects" ? "active" : ""}
          >
            Projects
          </Link>
        </li>
        <li>
          <Link
            to="/resume"
            className={location.pathname === "/resume" ? "active" : ""}
          >
            Resume
          </Link>
        </li>
        <li>
          <Link
            to="/contact"
            className={location.pathname === "/contact" ? "active" : ""}
          >
            Contact Me
          </Link>
        </li>
      </ul>
    </nav>
  );
};

export default NavBar;
