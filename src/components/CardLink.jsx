// CardLink.js
import React from "react";
import { Link } from "react-router-dom";

const CardLink = ({ title, description, link, onClick }) => {
  const content = (
    <>
      <h1>{title}</h1>
      <p>{description}</p>
    </>
  );

  if (onClick) {
    return (
      <div className="card-link" onClick={onClick}>
        {content}
      </div>
    );
  }

  return (
    <Link className="card-link" to={link}>
      {content}
    </Link>
  );
};

export default CardLink;
