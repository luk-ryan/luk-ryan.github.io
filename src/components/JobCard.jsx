import React from "react";
import TextLink from "./TextLink";

const JobCard = ({
  title,
  companyText,
  companyLink,
  duration,
  description,
  summary,
}) => {
  return (
    <div className="info-card job-card">
      <div className="job-card-header">
        <div>
          <h1>{title}</h1>
          <h2>
            <TextLink href={companyLink}>{companyText}</TextLink>
          </h2>
          <h3>{duration}</h3>
        </div>
        <div>
          <p>{description}</p>
        </div>
      </div>
      <h1>Summary</h1>
      <ul>
        {summary.map((item, index) => (
          <li key={index}>{item}</li>
        ))}
      </ul>
    </div>
  );
};

export default JobCard;
