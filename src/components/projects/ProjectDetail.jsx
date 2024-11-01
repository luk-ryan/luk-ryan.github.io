// src/pages/ProjectDetail.js
import React from "react";
import { useParams } from "react-router-dom";
import ButtonBack from "../ButtonBack";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGithub } from "@fortawesome/free-brands-svg-icons";

const ProjectDetail = () => {
  const { projectTitle } = useParams();

  if (projectTitle == "student-management-system") {
    return (
      <>
        <div className="introduction">
          <h1>Student Management System</h1>
          <p>
            A website that helps students to keep track of their grades in
            school.
          </p>
          <p>
            <a
              className="text-link"
              href="https://github.com/luk-ryan/StudentManagementSystemV2"
              target="_blank"
              rel="noopener noreferrer"
            >
              Source Code <FontAwesomeIcon icon={faGithub} />
            </a>
          </p>
          <ButtonBack link={"/"} />
        </div>
        <div className="content project-details">
          <h2>Overview</h2>
          <p>
            This side project aims to assist students in maintaining
            organization throughout their post-secondary education. The platform
            will allow students to create accounts to manage their information,
            add courses, track grades, set tasks and deadlines, and upload
            files. I presented this project idea to a fellow developer, and we
            collaborated on its development.
          </p>
          <h2>Backend Description</h2>
          <p>
            The backend is structured using Flask, SQLAlchemy for database
            management, and Flask-Bcrypt for secure password handling. It allows
            users to create and manage their accounts, register for courses,
            track evaluations, and monitor their grades effectively. Utilizing a
            robust architecture, the application integrates features such as
            user authentication, session management, and data manipulation for
            courses and evaluations.
          </p>
          <h2>Frontend Description</h2>
          <p>
            The frontend is designed with a responsive and user-friendly
            interface using HTML, CSS, and JavaScript. The CSS defines a light
            and dark theme, utilizing CSS variables for easy customization. Key
            UI elements include a fixed top navigation bar for easy access to
            links, styled buttons for actions like sign-up and log-in, and flash
            messages for feedback on user interactions. JavaScript enhances user
            interactivity, managing modal popups for adding courses and toggling
            visibility for evaluation input rows. The frontend structure
            supports dynamic content loading and displays real-time updates,
            such as the addition or removal of courses and evaluations. HTML
            templates are built to extend a base layout, ensuring a cohesive
            design throughout the application.
          </p>
        </div>
      </>
    );
  } else {
    return <div className="introduction">Project not found.</div>;
  }
};

export default ProjectDetail;
