// CardLink.js
import React from "react";
import { Link } from "react-router-dom";

const CardLink = ({ title, description, link }) => {
  const content = (
    <>
      <h1>{title}</h1>
      <p>{description}</p>
    </>
  );

  return (
    <Link className="card-link" to={link}>
      {content}
    </Link>
  );
};

export default CardLink;
