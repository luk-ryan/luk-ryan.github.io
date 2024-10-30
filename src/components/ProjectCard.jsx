import React from "react";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGithub } from "@fortawesome/free-brands-svg-icons";

const ProjectCard = ({ name, description, githubLink }) => {
  const formatTitle = (title) => {
    return title.toLowerCase().replace(/ /g, "-");
  };

  return (
    <div className="project-card">
      <div className="project-header">
        <h2>{name}</h2>
        <p>{description}</p>
      </div>
      <div className="project-links">
        <Link className="button-link" to={`/projects/${formatTitle(name)}`}>
          View Details
        </Link>
        <a
          href={githubLink}
          target="_blank"
          rel="noopener noreferrer"
          className="project-github"
        >
          <FontAwesomeIcon icon={faGithub} /> Source Code
        </a>
      </div>
    </div>
  );
};

export default ProjectCard;
