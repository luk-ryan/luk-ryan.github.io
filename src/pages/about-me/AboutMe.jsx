import React from "react";
import CardLink from "../../components/CardLink";
import ButtonBack from "../../components/ButtonBack";
import Header from "../../components/Header";

const AboutMe = () => {
  return (
    <>
      <Header title="About Me" description="This is Me!" />

      <div className="card-wrapper">
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
