import React from "react";
import CardLink from "../../components/CardLink";
import ButtonBack from "../../components/ButtonBack";
import Header from "../../components/Header";

const Hobbies = () => {
  return (
    <>
      <Header
        title="Hobbies and Interests"
        description="I really enjoy learning new things in general. Here, you can see all
          of my main hobbies and interests outside of programming."
      />
      <div className="card-wrapper">
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
