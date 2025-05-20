import React from "react";

const Course = ({ title, description }) => {
  return (
    <>
      <h3>{title}</h3>
      <p>{description}</p>
    </>
  );
};

export default Course;
