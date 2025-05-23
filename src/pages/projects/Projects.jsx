import React from "react";
import ProjectCard from "./ProjectCard";
import ButtonBack from "../../components/ButtonBack";
import Header from "../../components/Header";

const Projects = () => {
  const projects = [
    {
      id: 1,
      name: "Big 2 Companion App",
      description:
        "A mobile application that assists players while playing the card game Big 2 by tracking scores and progression.",
      link: "/about/education/EECS4443",
      githubLink: "https://github.com/luk-ryan/big2",
    },
    {
      id: 2,
      name: "Bidding Blitz",
      description:
        "An e-commerce website that lets users bid for various items in two different ways, forward and dutch bidding.",
      link: "/about/education/EECS4413",
      githubLink: "https://github.com/jamesmqle/BiddingBlitz",
    },
    {
      id: 3,
      name: "Student Management System",
      description:
        "A website that helps students to keep track of their grades in school.",
      link: "/projects/student-management-system",
      githubLink: "https://github.com/luk-ryan/StudentManagementSystemV2",
    },
    {
      id: 4,
      name: "Project-Based Courses",
      description:
        "Some of the courses I take have cumulative projects that account for majority of class work. Details will be on the Education side of the About Me page",
      link: "/about/education",
    },
  ];

  return (
    <>
      <Header
        title="Projects"
        description="Here are projects I've done in the past."
      />

      <div className="wrapper">
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
