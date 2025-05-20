import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGithub } from "@fortawesome/free-brands-svg-icons";
import ButtonBack from "../../../components/ButtonBack";

const EECS3401 = () => {
  return (
    <>
      <div className="introduction">
        <h1>EECS 3401: Introduction to AI and Logic Programming</h1>
        <p>
          Third year course that examines fundamental concepts in AI: knowledge
          representation and reasoning, search, constraint satisfaction,
          reasoning under uncertainty, etc
        </p>
        <ButtonBack link={"/about/education"} />
      </div>
      <div className="content">
        <p>
          In this course, we learned some theory behind various machine learning
          algorithms, such as linear regression, support vector machine (SVM),
          and decision trees. For the second part of this course, we were
          introduced to the python libraries that would use these algorithms.
        </p>
        <h2>Final Project</h2>
        <p>
          For our final project, we chose a dataset for data to train on,
          analysed the results, and packaged it together into a report, which
          included a jupyter notebook file with our test results.
        </p>
        <div className="course-subheading">
          <h3>Report:</h3>
          <p>
            <a
              className="text-link"
              href="https://github.com/luk-ryan/EECS-3401-Netflix"
              target="_blank"
              rel="noopener noreferrer"
            >
              Source Code <FontAwesomeIcon icon={faGithub} />
            </a>
          </p>
        </div>
        <iframe
          id="-eecs-3401-netflix-final-assignment.pdf"
          src="/education/eecs-3401-netflix-final-assignment.pdf"
          width="100%"
          height="1000em"
        />
        <h3>Video Presentation:</h3>
        <div
          className="video-container"
          style={{
            position: "relative",
            paddingBottom: "56.25%", // 16:9 aspect ratio
            height: 0,
            overflow: "hidden",
            maxWidth: "100%",
          }}
        >
          <iframe
            width="100%"
            height="100%"
            src="https://www.youtube.com/embed/p2t69_RM8p0"
            title="YouTube video player"
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
            style={{
              position: "absolute",
              top: 0,
              left: 0,
              width: "100%",
              height: "100%",
            }}
          />
        </div>
      </div>
    </>
  );
};

export default EECS3401;
