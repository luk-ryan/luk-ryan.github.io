import React from "react";
import Header from "../../../components/Header";

const EECS3461 = () => {
  return (
    <>
      <Header
        title="EECS 3461: User Interfaces"
        description="Third year course that introduces user interfaces and the tools and
          mechanisms to create and prototype them"
      />

      <div className="wrapper">
        <p>
          The biggest component of this course was to decide on a problem and
          come up with a design solution for this problem. As a team of four
          students, we researched problems by conducting surveys with potential
          end-users of a system as the first part of our project. After choosing
          a problem, we then brainstormed various ideas on a system that would
          help solve this problem, drawing out Low-Fidelity prototypes.
        </p>
        <h2>Final Project</h2>
        <p>
          Once we decided to move forward with the idea of a mobile application,
          we used Figma to develop wireframes, as well as a working interactive
          prototype and compiled it into a final report for submission.
        </p>
        <div className="course-subheading">
          <h3>Report:</h3>
          <p>
            <a
              className="text-link"
              href="https://www.figma.com/design/pYtrfKJOkf5Mg3Jd0xfMGd/EECS-3461"
              target="_blank"
              rel="noopener noreferrer"
            >
              Figma Design
            </a>
          </p>
        </div>
        <iframe
          id="education/eecs-3461-assignment-2.pdf"
          src="/education/eecs-3461-assignment-2.pdf"
          width="100%"
          height="1000em"
        />
      </div>
    </>
  );
};

export default EECS3461;
