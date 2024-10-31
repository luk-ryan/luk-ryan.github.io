import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowLeft } from "@fortawesome/free-solid-svg-icons";

const Hobbies = ({ onBack }) => {
  return (
    <>
      <button className="button-link button-back" onClick={onBack}>
        <FontAwesomeIcon icon={faArrowLeft} />
      </button>
      <h2>Hobbies and Interests</h2>
      <h3>Piano</h3>
      <p>
        I started learning piano when I was four, beginning with group lessons
        and then moving to one-on-one sessions as I followed the Royal
        Conservatory of Music (RCM) program. This curriculum goes from levels
        1-10, each with a practical exam to advance and theory exams required
        from level 8 onward. I worked through all 10 levels with my teacher’s
        help, finishing up in my first year of university. Now, I keep exploring
        new pieces and play for fun in my free time.
      </p>
      <h3>Karate</h3>
      <p>
        I started karate when I was around eight, moving up through each belt
        level from white to black belt in about three years. Many people stop
        after their first-degree black belt, but I kept training and earned my
        second-degree belt after five years. As one of the older, more advanced
        students, the dojo owner noticed my commitment and offered me a chance
        to start teaching. I began as a volunteer and eventually became an
        instructor in high school, making it my first job. Now, as a
        fourth-degree black belt and senior instructor, I continue training and
        coaching students for competitions. This year, I'm also preparing for my
        first tournament and working hard on my own fitness.
      </p>
      <h3>Tricking</h3>
      <p>
        Tricking is a mix of martial arts, gymnastics, kicks, and flips, all in
        one sport. I discovered it a couple of years ago at a parkour gym called
        The Monkey Vault. Initially, I wanted to train for stunts—I’ve always
        admired my cousin, who works as a stunt double, and thought it could be
        a unique career path. But after watching trickers pull off impressive
        combos, I decided to focus on tricking instead. I also had the idea of
        teaching it as a new martial arts style at the dojo where I currently
        instruct.
      </p>
      <p>
        When I first started tricking, I picked up the basics quickly—even the
        beginner tricks are challenging! Unfortunately, about a year in, I
        fractured my big toe, which meant taking a three-month break from
        training. The injury slowed my progress, affecting not only my physical
        recovery but also my confidence in tricks that involve going upside
        down. Since getting back, I've been working hard to overcome this mental
        block and continue progressing with more advanced moves. My goal is to
        keep pushing forward and eventually bring tricking into the dojo where I
        teach.
      </p>
    </>
  );
};

export default Hobbies;
