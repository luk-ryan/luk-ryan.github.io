import React from "react";
import ButtonBack from "../../../components/ButtonBack";
import Header from "../../../components/Header";

const Piano = () => {
  return (
    <>
      <Header title="About Me" description="This is Me!" />

      <div className="wrapper about-me">
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
