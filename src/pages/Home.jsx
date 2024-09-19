import React from "react";
import { Link } from "react-router-dom";

const Home = () => {
  return (
    <>
    <div className="home-introduction">
      <h1>Welcome</h1>
      <p>
        My name is Ryan Luk, a professional programmer and student. I'm in my
        fourth year of studying Computer Science at York University. Most of my
        experience is in any kind of web development, but I would also be
        interested in a variety of programming projects
      </p>
    </div>
    <div className="home-projects">
      <h1>My Projects</h1>
      <p>Description</p>
      <Link className="button-link" to="/projects">View Projects</Link>
    </div>
    </>
  );
};

export default Home;
