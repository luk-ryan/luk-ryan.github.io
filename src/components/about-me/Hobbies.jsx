import React from "react";
import CardLink from "../CardLink";
import ButtonBack from "../ButtonBack";

const Hobbies = () => {
  return (
    <>
      <div className="introduction">
        <h1>Hobbies and Interests</h1>
        <p>
          I really enjoy learning new things in general. Here, you can see all
          of my main hobbies and interests outside of programming.
        </p>
        {/* <p>
          My main interests outside of programming include playing piano and
          karate. Recently, I've been learning tricking, which is like a
          combination of gymnastics tumbling, martial art kicks, and flips.
        </p> */}
        <ButtonBack link={"/about"} />
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
