import React from "react";
import ButtonBack from "../ButtonBack";
import ProjectCard from "../projects/ProjectCard";

const Projects = () => {
  const projects = [
    {
      id: 1,
      name: "Bidding Blitz",
      description:
        "An e-commerce website built during a course at school, that lets users bid for various items in two different ways, forward and dutch bidding.",
      link: "/about/education/EECS4413",
      githubLink: "https://github.com/jamesmqle/BiddingBlitz",
    },
    {
      id: 2,
      name: "Student Management System",
      description:
        "A website that helps students to keep track of their grades in school.",
      link: "/projects/student-management-system",
      githubLink: "https://github.com/luk-ryan/StudentManagementSystemV2",
    },
    {
      id: 3,
      name: "Project-Based Courses",
      description:
        "Some of the courses I take have cumulative projects that account for majority of class work. Details will be on the Education side of the About Me page",
      link: "/about/education",
    },
  ];

  return (
    <>
      <div className="introduction">
        <h1>Projects</h1>
        <p>Here are projects I've done in the past.</p>
        <ButtonBack link={"/"} />
      </div>
      <div className="content projects">
        {projects.map((project) => (
          <ProjectCard
            key={project.id}
            name={project.name}
            link={project.link}
            description={project.description}
            githubLink={project.githubLink}
          />
        ))}
      </div>
    </>
  );
};

export default Projects;
