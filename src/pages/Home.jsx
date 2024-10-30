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
      <div className="content">
        <div className="home">
          <div className="home-card">
            <h1>My Projects</h1>
            <p>Showcase of projects I've done in the past.</p>
            <Link className="button-link" to="/projects">
              View Projects
            </Link>
          </div>
          <div className="home-card">
            <h1>Work Experience</h1>
            <p>Record of all my work history.</p>
            <Link className="button-link" to="/resume">
              View Resume
            </Link>
          </div>
        </div>
      </div>
    </>
  );
};

export default Home;
