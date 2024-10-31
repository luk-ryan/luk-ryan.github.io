import React, { useState } from "react";
import CardLink from "../CardLink";
import Education from "../subpages/Education";
import Hobbies from "../subpages/Hobbies";

const AboutMe = () => {
  const [selectedComponent, setSelectedComponent] = useState(null);

  const renderComponent = () => {
    switch (selectedComponent) {
      case "education":
        return <Education onBack={() => setSelectedComponent(null)} />;
      case "hobbies":
        return <Hobbies onBack={() => setSelectedComponent(null)} />;
      default:
        return null;
    }
  };

  return (
    <>
      <div className="introduction">
        <h1>About Me</h1>
        <p>This is Me!</p>
      </div>
      {/* Conditionally render the cards only if no component is selected */}
      {selectedComponent === null && (
        <div className="card-container">
          <CardLink
            title="Education"
            description="Click here to learn about my educational background."
            onClick={() => setSelectedComponent("education")}
          />
          <CardLink
            title="Hobbies"
            description="Click here to learn about my hobbies and interests."
            onClick={() => setSelectedComponent("hobbies")}
          />
        </div>
      )}
      <div className="content about-me">{renderComponent()}</div>
    </>
  );
};

export default AboutMe;
