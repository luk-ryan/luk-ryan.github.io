import React from "react";
import { Link } from "react-router-dom";

const Home = () => {
  return (
    <>
      <div className="home-introduction">
        <h1>Welcome</h1>
        <p>
          My name is Ryan Luk, a professional programmer and student. I'm in my
          fourth year of studying Computer Science at York University. Most of
          my experience is in any kind of web development, but I would also be
          interested in a variety of programming projects.
        </p>
      </div>
      <div className="home">
        <Link className="home-card" to="/about">
          <h1>About Me</h1>
          <p>
            Learn more about my personal journey, both educationally and outside
            of school.
          </p>
        </Link>
        <Link className="home-card" to="/projects">
          <h1>My Projects</h1>
          <p>Showcase of projects I've done in the past.</p>
        </Link>
        <Link className="home-card" to="/resume">
          <h1>Resume</h1>
          <p>Record of all my work history.</p>
        </Link>
        <Link className="home-card" to="/contact">
          <h1>Contact Me</h1>
          <p>
            Have any questions or feedback? Feel free to get in touch with me!
          </p>
        </Link>
      </div>
    </>
  );
};

export default Home;
