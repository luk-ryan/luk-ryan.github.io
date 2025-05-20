import React from "react";
import ButtonBack from "../../../components/ButtonBack";

const Karate = () => {
  return (
    <>
      <div className="introduction">
        <h1>About Me</h1>
        <p>This is Me!</p>
        <ButtonBack link={"/about/hobbies"} />
      </div>
      <div className="content about-me">
        <h2>Karate</h2>
        <p>
          I started karate when I was around eight, moving up through each belt
          level from white to black belt in about three years. Many people stop
          after their first-degree black belt, but I kept training and earned my
          second-degree belt after five years. As one of the older, more
          advanced students, the dojo owner noticed my commitment and offered me
          a chance to start teaching. I began as a volunteer and eventually
          became an instructor in high school, making it my first job. Now, as a
          fourth-degree black belt and senior instructor, I continue training
          and coaching students for competitions. This year, I'm also preparing
          for my first tournament and working hard on my own fitness.
        </p>
      </div>
    </>
  );
};

export default Karate;
