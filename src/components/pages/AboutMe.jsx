import React from "react";
import CardLink from "../CardLink";
import ButtonBack from "../ButtonBack";

const AboutMe = () => {
  return (
    <>
      <div className="introduction">
        <h1>About Me</h1>
        <p>This is Me!</p>
        <ButtonBack link={"/"} />
      </div>
      <div className="card-container">
        <CardLink
          title="Education"
          description="Click here to learn about my educational background."
          link="/about/education"
        />
        <CardLink
          title="Hobbies"
          description="Click here to learn about my hobbies and interests."
          link="/about/hobbies"
        />
      </div>
    </>
  );
};

export default AboutMe;
