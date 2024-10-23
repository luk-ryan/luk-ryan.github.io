import React from "react";

const Resume = () => {
  return (
    <>
      <div className="introduction">
        <h1>Work Experience</h1>
        <p>
          Here is all of my work history, my resume is also available for
          download below.
        </p>
      </div>
      <div className="content resume">
        <h1>Application Programmer</h1>
        <h2>Ontario Ministry of Health</h2>
        <h3>Sept 2022 - April 2023 (Full-Time)</h3>
        <p>
          I worked in the IT department of the Ministry of Health, where I was
          part of a team responsible for managing a cloud-based database that
          served all health service providers across Ontario. In this role, I
          gained hands-on experience with various Microsoft cloud services,
          including PowerApps, Power Automate, and Dataverse. Leveraging these
          tools, I contributed to the development of a web application designed
          to streamline the collection of critical information from health
          service providers, ensuring efficient data management and integration
          across the province.
        </p>
        <h1>Summary</h1>
        <ul>
          <li>Worked with Microsoft PowerApps to manage Web Application</li>
          <li>Used SQL to query from the Web Application </li>
          <li>
            Utilised Power Automate to create functionality for Web Application
          </li>
          <li>Collaborated with a team using Azure DevOps to manage tasks</li>
          <li>
            Employed the Software Development Life Cycle (SDLC) throughout the
            course of the project
          </li>
        </ul>
        <h1>My Resume</h1>
        <a href="/my-pdf-file.pdf" download="my-pdf-file.pdf">
          <button>
            {/* <FontAwesomeIcon icon={faDownload} style={{ marginRight: "8px" }} /> */}
            Download PDF
          </button>
        </a>
        <p>If the resume is not loading, please try refreshing the page.</p>

        <iframe
          id="resume-pdf"
          src="public/resume.pdf"
          width="100%"
          height="800px"
        />
      </div>
    </>
  );
};

export default Resume;
