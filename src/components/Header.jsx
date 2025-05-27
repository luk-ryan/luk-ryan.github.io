import React from "react";

const Header = ({ title, description, children, className = "" }) => {
  return (
    <header className={`header ${className}`}>
      <div className="wide-wrapper">
        <h1>{title}</h1>
        <p>{description}</p>
        {children}
      </div>
    </header>
  );
};

export default Header;
