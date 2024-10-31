import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowLeft } from "@fortawesome/free-solid-svg-icons";
import CardLink from "../CardLink";

const Hobbies = () => {
  return (
    <>
      <div className="introduction">
        <h1>About Me</h1>
        <p>This is Me!</p>
      </div>
      <div className="card-container">
        <CardLink
          title="Piano"
          description="Click here to learn more about my piano journey."
          link="/about/hobbies/piano"
        />
        <CardLink
          title="Karate"
          description="Click here to learn about my karate experience."
          link="/about/hobbies/karate"
        />
        <CardLink
          title="Tricking"
          description="Click here to learn about my tricking adventures."
          link="/about/hobbies/tricking"
        />
      </div>
    </>
  );
};

export default Hobbies;
