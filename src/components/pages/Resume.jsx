import React from "react";
import ButtonBack from "../ButtonBack";

const Resume = () => {
  return (
    <>
      <div className="introduction">
        <h1>Work Experience</h1>
        <p>
          Here is all of my work history, my resume is also available for
          download below.
        </p>
        <ButtonBack link={"/"} />
      </div>
      <div className="content resume">
        <div className="job">
          <div className="job-header">
            <div className="job-information">
              <h1>Application Programmer</h1>
              <h2>Ontario Ministry of Health</h2>
              <h3>Sept 2022 - April 2023 (Full-Time)</h3>
            </div>
            <div className="job-description">
              <p>
                I worked in the IT department of the Ministry of Health, where I
                was part of a team responsible for managing a cloud-based
                database that served all health service providers across
                Ontario. In this role, I gained hands-on experience with various
                Microsoft cloud services, including PowerApps, Power Automate,
                and Dataverse. Leveraging these tools, I contributed to the
                development of a web application designed to streamline the
                collection of critical information from health service
                providers, ensuring efficient data management and integration
                across the province.
              </p>
            </div>
          </div>
          <h1>Summary</h1>
          <ul>
            <li>Worked with Microsoft PowerApps to manage Web Application</li>
            <li>Used SQL to query from the Web Application </li>
            <li>
              Utilised Power Automate to create functionality for Web
              Application
            </li>
            <li>Collaborated with a team using Azure DevOps to manage tasks</li>
            <li>
              Employed the Software Development Life Cycle (SDLC) throughout the
              course of the project
            </li>
          </ul>
        </div>
        <div className="resume-section">
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
