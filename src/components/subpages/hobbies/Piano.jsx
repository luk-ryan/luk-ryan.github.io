import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowLeft } from "@fortawesome/free-solid-svg-icons";

const Piano = () => {
  return (
    <>
      <div className="introduction">
        <h1>About Me</h1>
        <p>This is Me!</p>
      </div>
      <div className="content about-me">
        <button className="button-link button-back">
          <FontAwesomeIcon icon={faArrowLeft} />
        </button>
        <h2>Piano</h2>
        <p>
          I started learning piano when I was four, beginning with group lessons
          and then moving to one-on-one sessions as I followed the Royal
          Conservatory of Music (RCM) program. This curriculum goes from levels
          1-10, each with a practical exam to advance and theory exams required
          from level 8 onward. I worked through all 10 levels with my teacher’s
          help, finishing up in my first year of university. Now, I keep
          exploring new pieces and play for fun in my free time.
        </p>
      </div>
    </>
  );
};

export default Piano;
