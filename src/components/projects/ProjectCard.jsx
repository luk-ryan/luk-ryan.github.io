import React from "react";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGithub } from "@fortawesome/free-brands-svg-icons";

const ProjectCard = ({ name, description, link, githubLink }) => {
  return (
    <div className="project-card">
      <div className="project-header">
        <h2>{name}</h2>
        <p>{description}</p>
      </div>
      <div className="project-links">
        <Link className="button-link" to={link}>
          View Details
        </Link>
        {githubLink && (
          <p>
            <a
              className="text-link"
              href={githubLink}
              target="_blank"
              rel="noopener noreferrer"
            >
              <FontAwesomeIcon icon={faGithub} /> Source Code
            </a>
          </p>
        )}
      </div>
    </div>
  );
};

export default ProjectCard;
