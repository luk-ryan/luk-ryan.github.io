import React from "react";

const TextLink = ({ href, onClick, children }) => {
  return href ? (
    <a
      className="text-link"
      href={href}
      target="_blank"
      rel="noopener noreferrer"
    >
      {children}
    </a>
  ) : (
    <span className="text-link" onClick={onClick}>
      {children}
    </span>
  );
};

export default TextLink;
