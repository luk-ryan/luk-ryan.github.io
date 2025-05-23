import React from "react";
import ButtonBack from "../../../components/ButtonBack";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGithub } from "@fortawesome/free-brands-svg-icons";
import Header from "../../../components/Header";

const EECS3401 = () => {
  return (
    <>
      <Header
        title="EECS 4413: Building E-Commerce Systems"
        description="Fourth year course that focuses on server frameworks, client
          technologies, messaging protocols, security, performance, and best
          practices through hands-on projects."
      />

      <div className="wrapper">
        <p>
          In this course, we learned about different ways of implementing
          software design patterns into architecture for building e-commerce web
          applications, primarily focusing on various concepts in Java for
          backend implementation.
        </p>
        <div className="course-subheading">
          <h2>Full Project</h2>
          <p>
            <a
              className="text-link"
              href="https://github.com/jamesmqle/BiddingBlitz"
              target="_blank"
              rel="noopener noreferrer"
            >
              Final Source Code <FontAwesomeIcon icon={faGithub} />
            </a>
          </p>
        </div>
        <p>
          This course had one big project that was split into 3 deliverables. As
          a team of 4, our task was to create a fully functional auction system.
          The project requirements included 6 main use cases:
          <ul>
            <li>UC1: Sign-in and sign-up</li>
            <li>UC2: Catalogue with item search functionality</li>
            <li>UC3: Forward and dutch auction bidding logic</li>
            <ul>
              <li>
                Forward Auction: users can provide a new bidding price which
                must be higher that the current price, which will then be shown
                to all users who have bid on the item previously
              </li>
              <li>
                Dutch Auction: price is set at a high starting price, and every
                interval of time, decreases by a certain amount until a user
                buys the item.
              </li>
            </ul>
            <li>UC4: Auction ended</li>
            <li>UC5: payment logic</li>
            <li>UC6: receipt and transaction history</li>
          </ul>
        </p>
        <h3>Deliverable 1</h3>
        <p>
          In this section, we discussed the architecture of our project in order
          to plan out how exactly our project would be structured and have a
          clean, organized project. Below is the design document we submitted.
        </p>
        <iframe
          id="eecs-4413-deliverable-1-report.pdf"
          src="/education/eecs-4413-deliverable-1-report.pdf"
          width="100%"
          height="1000em"
        />
        <div className="course-subheading">
          <h3>Deliverable 2</h3>
          <p>
            <a
              className="text-link"
              href="https://github.com/jamesmqle/BiddingBlitz/tree/deliverable-2"
              target="_blank"
              rel="noopener noreferrer"
            >
              Source Code <FontAwesomeIcon icon={faGithub} />
            </a>
          </p>
        </div>
        <p>
          In this section, we created the bulk of our project, which included
          both backend (Java Spring Boot) and frontend (ReactJS) directories,
          with the main focus being our backend RESTful API calls, with some
          minimal frontend to satisfy our 6 main use cases. Our design document
          was altered to include class diagrams of our system below.
        </p>
        <iframe
          id="eecs-4413-deliverable-2-report.pdf"
          src="/education/eecs-4413-deliverable-2-report.pdf"
          width="100%"
          height="1000em"
        />
      </div>
    </>
  );
};

export default EECS3401;
