// src/pages/ProjectDetail.js
import React from "react";
import { useParams } from "react-router-dom";

const ProjectDetail = () => {
  const { projectId, projectTitle } = useParams();

  // Mock project data, replace with actual data fetching logic
  const projectData = {
    1: {
      title: "Student Management System",
      description:
        "A website that helps students to keep track of their grades in school.",
    },
    2: { title: "Project Two", description: "This is project two." },
  };

  const project = projectData[projectId];

  if (!project) {
    return <div>Project not found.</div>;
  }

  return (
    <>
      <div className="introduction">
        <h1>{project.title}</h1>
        <p>{project.description}</p>
      </div>
    </>
  );
};

export default ProjectDetail;
