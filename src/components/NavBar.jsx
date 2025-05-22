import React, { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";

const NavBar = () => {
  const path = useLocation();
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  // Toggle the mobile menu
  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  // Close the mobile menu if the screen width is resized above 800px
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth > 800) {
        setIsMobileMenuOpen(false);
      }
    };

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <nav className="navbar">
      <Link className="logo" to="/">
        Ryan Luk
      </Link>
      <button className="hamburger" onClick={toggleMobileMenu}>
        ☰
      </button>
      <ul className={`nav-links ${isMobileMenuOpen ? "mobile active" : ""}`}>
        <li>
          <Link
            to="/about"
            className={path.pathname.startsWith("/about") ? "active" : ""}
          >
            About Me
          </Link>
        </li>
        <li>
          <Link
            to="/projects"
            className={path.pathname.startsWith("/projects") ? "active" : ""}
          >
            Projects
          </Link>
        </li>
        <li>
          <Link
            to="/resume"
            className={path.pathname === "/resume" ? "active" : ""}
          >
            Resume
          </Link>
        </li>
        <li>
          <Link
            to="/contact"
            className={path.pathname === "/contact" ? "active" : ""}
          >
            Contact Me
          </Link>
        </li>
      </ul>
    </nav>
  );
};

export default NavBar;
