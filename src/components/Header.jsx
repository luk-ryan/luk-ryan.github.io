import React from "react";

const Header = ({ title, description, children, className = "" }) => {
  return (
    <header className={`header ${className}`}>
      <h1>{title}</h1>
      <p>{description}</p>
      {children}
    </header>
  );
};

export default Header;
