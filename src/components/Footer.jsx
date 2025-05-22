import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLinkedin, faGithub } from "@fortawesome/free-brands-svg-icons";

const Footer = () => {
  return (
    <footer className="footer">
      <p>&copy; {new Date().getFullYear()} Ryan Luk</p>
      <ul className="footer-links">
        <li>
          <a
            href="https://linkedin.com/in/ryan-k-luk"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FontAwesomeIcon icon={faLinkedin} size="2x" />
          </a>
        </li>
        <li>
          <a
            href="https://github.com/luk-ryan"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FontAwesomeIcon icon={faGithub} size="2x" />
          </a>
        </li>
      </ul>
    </footer>
  );
};

export default Footer;
