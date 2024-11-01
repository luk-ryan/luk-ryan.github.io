import React from "react";
import ButtonBack from "../ButtonBack";
import ProjectCard from "../ProjectCard";

const Projects = () => {
  const projects = [
    {
      id: 1,
      name: "Student Management System",
      description:
        "A website that helps students to keep track of their grades in school.",
      githubLink: "https://github.com/luk-ryan/StudentManagementSystemV2",
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
            description={project.description}
            githubLink={project.githubLink}
          />
        ))}
      </div>
    </>
  );
};

export default Projects;
