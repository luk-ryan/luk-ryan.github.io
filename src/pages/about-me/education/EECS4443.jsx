import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGithub } from "@fortawesome/free-brands-svg-icons";
import Header from "../../../components/Header";

const EECS3401 = () => {
  return (
    <>
      <Header
        title="EECS 4443: Mobile User Interfaces"
        description="Fourth year course that focuses on mobile app development, primarily
          with on user interfaces that include touch, multi-touch, vibration,
          device motion, position, and orientation, environment sensing, video
          capture, and audio capture."
      />

      <div className="wrapper">
        <p>
          In this course, we learned about mobile app development using Java in
          Android Studio, primarily focusing on different interactions with
          views and layouts to make for smooth UI/UX design.
        </p>
        <div className="course-subheading">
          <h2>Final Project</h2>
          <p>
            <a
              className="text-link"
              href="https://github.com/luk-ryan/big2"
              target="_blank"
              rel="noopener noreferrer"
            >
              Final Source Code <FontAwesomeIcon icon={faGithub} />
            </a>
          </p>
        </div>
        <p>
          This course had one big project that was split into 2 deliverables. As
          a team of 4, our task was to create a fully functional mobile
          application of our choosing. We came up with the idea of creating a
          score tracking app for when people play card games in person, and the
          game we chose is called Big 2.
        </p>
        <h3>Video Demo</h3>
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
            src="https://www.youtube.com/embed/16jUU53i6_4"
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
        <h3>Deliverable 1</h3>
        <p>
          In this section, we discussed the idea of our app and wrote up a
          proposal document that defines the scope of our project within the
          remaining 2 months of this course. Below is the proposal we submitted.
        </p>
        <iframe
          id="eecs-4413-deliverable-1-report.pdf"
          src="/education/eecs-4443-deliverable-1-report.pdf"
          width="100%"
          height="1000em"
        />
        <div className="course-subheading">
          <h3>Deliverable 2</h3>
        </div>
        <p>
          In this section, we completed development of the application, which
          included a working local database storage system, with finalized
          styling and functionality of each page. We were also able to do some
          user testing, gathering quantitive and qualitative feedback, comparing
          it to a spreadsheet that can be used for the same function.
        </p>
        <iframe
          id="eecs-4413-deliverable-2-report.pdf"
          src="/education/eecs-4443-deliverable-2-report.pdf"
          width="100%"
          height="1000em"
        />
      </div>
    </>
  );
};

export default EECS3401;
