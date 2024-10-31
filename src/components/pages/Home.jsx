import React from "react";
import CardLink from "../CardLink";

const Home = () => {
  return (
    <>
      <div className="home introduction">
        <h1>Welcome</h1>
        <p>
          My name is Ryan Luk, a professional programmer and student. I'm in my
          fourth year of studying Computer Science at York University. Most of
          my experience is in any kind of web development, but I would also be
          interested in a variety of programming projects.
        </p>
      </div>
      <div className="card-container">
        <CardLink
          title="About Me"
          description="Learn more about my personal journey, both educationally and outside of school."
          link="/about"
        />
        <CardLink
          title="My Projects"
          description="Showcase of projects I've done in the past."
          link="/projects"
        />
        <CardLink
          title="Resume"
          description="Record of all my work history."
          link="/resume"
        />
        <CardLink
          title="Contact Me"
          description="Have any questions or feedback? Feel free to get in touch with me!"
          link="/contact"
        />
      </div>
    </>
  );
};

export default Home;
