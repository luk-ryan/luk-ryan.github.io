import React from "react";
import ButtonBack from "../../components/Button";
import Header from "../../components/Header";
import JobCard from "../../components/JobCard";

const Resume = () => {
  const jobs = [
    {
      title: "Application Programmer",
      companyText: "Ontario Ministry of Health",
      companyLink: "https://www.ontario.ca/page/ministry-health",
      duration: "Sept 2022 - April 2023 (Full-Time)",
      description:
        "I worked in the IT department of the Ministry of Health, where I was part of a team responsible for managing a cloud-based database that served all health service providers across Ontario. In this role, I gained hands-on experience with various Microsoft cloud services, including PowerApps, Power Automate, and Dataverse. Leveraging these tools, helped ensure efficient data management and integration across the province.",
      summary: [
        "Worked with Microsoft PowerApps to manage Web Application",
        "Used SQL to query from the Web Application",
        "Utilised Power Automate to create functionality for Web Application",
        "Collaborated with a team using Azure DevOps to manage tasks",
        "Employed the Software Development Life Cycle (SDLC) throughout the course of the project",
      ],
    },
  ];

  return (
    <>
      <Header
        title="Work Experience"
        description="Here is all of my work history, my resume is also available for
          download below."
      />

      <div className="wrapper">
        <div className="info-card-list">
          <JobCard {...jobs[0]} />
        </div>
        <div className="text-center margin-block-2">
          <h1>My Resume</h1>
          <a
            href="/resume_software_developer.pdf"
            download="resume_ryan_luk.pdf"
          >
            <button>Download PDF</button>
          </a>
          <p>If the resume is not loading, please try refreshing the page.</p>

          <iframe
            id="resume-pdf"
            src="/resume_software_developer.pdf"
            width="100%"
            height="1000em"
          />
        </div>
      </div>
    </>
  );
};

export default Resume;
