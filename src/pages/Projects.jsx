import React from "react";
import { Link } from "react-router-dom"; // Import Link from react-router-dom
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGithub } from "@fortawesome/free-brands-svg-icons";

const Projects = () => {
  const projects = [
    { id: 1, name: "Student Management System" },
    { id: 2, name: "Project Two" },
    // Add more projects as needed
  ];

  const formatTitle = (title) => {
    return title.toLowerCase().replace(/ /g, "-");
  };

  return (
    <>
      <div className="introduction">
        <h1>Projects</h1>
        <p>Here are projects I've done in the past.</p>
      </div>
      <div className="content projects">
        <Link to={`/projects/${formatTitle(projects[0].name)}`}>
          <h2>{projects[0].name}</h2>
        </Link>
        <p>
          A website that helps students to keep track of their grades in school.
        </p>
        <p>
          <a
            href="https://github.com/luk-ryan/StudentManagementSystemV2"
            target="_blank"
            rel="noopener noreferrer"
          >
            Source Code <FontAwesomeIcon icon={faGithub} />
          </a>
        </p>
      </div>
    </>
  );
};

export default Projects;
