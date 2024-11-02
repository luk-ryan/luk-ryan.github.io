import React from "react";
import ButtonBack from "../../ButtonBack";

const EECS3461 = () => {
  return (
    <>
      <div className="introduction">
        <h1>EECS 3461: User Interfaces</h1>
        <p>
          Third year course that introduces user interfaces and the tools and
          mechanisms to create and prototype them
        </p>
        <ButtonBack link={"/about/education"} />
      </div>
      <div className="content">
        <p>
          The biggest component of this course was to decide on a problem and
          come up with a design solution for this problem. As a team of four
          students, we researched problems by conducting surveys with potential
          end-users of a system as the first part of our project. After choosing
          a problem, we then brainstormed various ideas on a system that would
          help solve this problem, drawing out Low-Fidelity prototypes, and
          wireframes for it. Once we decided to move forward with the idea of a
          mobile application, we used Figma to develop a working interactive
          prototype and compiled it into a final report for submission.
        </p>
      </div>
    </>
  );
};

export default EECS3461;
