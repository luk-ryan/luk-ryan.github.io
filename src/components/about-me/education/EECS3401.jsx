import React from "react";
import ButtonBack from "../../ButtonBack";

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
          For our final projet, we chose a dataset for data to train on,
          analysed the results, and packaged it together into a report, which
          included jupyter notebook file with our test results.
        </p>
      </div>
    </>
  );
};

export default EECS3401;
