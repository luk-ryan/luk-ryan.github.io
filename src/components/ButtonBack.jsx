import React from "react";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowLeft } from "@fortawesome/free-solid-svg-icons";

const ButtonBack = ({ link }) => {
  return (
    <Link className="button-link button-back" to={link}>
      <FontAwesomeIcon icon={faArrowLeft} />
    </Link>
  );
};

export default ButtonBack;
