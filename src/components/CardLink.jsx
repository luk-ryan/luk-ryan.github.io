// CardLink.js
import React from "react";
import { Link } from "react-router-dom";

const CardLink = ({ title, description, link }) => {
  return (
    <Link className="card-link" to={link}>
      <h2>{title}</h2>
      <p>{description}</p>
    </Link>
  );
};

export default CardLink;
