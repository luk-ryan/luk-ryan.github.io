import React from "react";
import Course from "./education/Course";
import ButtonBack from "../../components/ButtonBack";
import CardLink from "../../components/CardLink";

const Education = () => {
  // Dictionary of theory-based courses
  const theoryCourses = {
    "EECS 3421": {
      title: "Database Management Systems",
      description: `In third year, I learned about the basics of relational databases.
                    The main focus of this course was to familiarize myself with the SQL language,
                    as well as how the more commonly used relational database worked compared to other types of databases.
                    I was able to understand everything I needed to know, from creating my own database system for a
                    specific situation to querying from a complex database that has already been established.`,
    },
    "EECS 3101": {
      title: "Design and Analysis of Algorithms",
      description: `Another third-year course I took was an algorithms course. I learned
                    the steps to solving problems using various algorithms, such as greedy algorithms,
                    recursive backtracking, and dynamic programming. We explored how exactly each of these
                    algorithms worked, as well as the efficiency of each one, using it as a metric to compare them
                    to one another.`,
    },
    "EECS 2011": {
      title: "Fundamentals of Data Structures",
      description: `In second year, I learned about the fundamental data structures, like
                    arrays, linked lists, stacks, queues, and trees. This helped build my foundation for understanding
                    algorithms in my later years. We explored common basic algorithms that would use each data structure,
                    as well as which situations would call for certain data structures.`,
    },
    "EECS 2030": {
      title: "Advanced Object-Oriented Programming",
      description: `Another second-year course where I built my foundation in OOP and the
                    Java programming language. Here, I learned about the structure of Java projects with classes,
                    and objects. I was able to understand fundamental concepts, such as methods, inheritance,
                    polymorphism, and generic classes. Because of this course, one of my most comfortable
                    programming languages is Java.`,
    },
  };

  return (
    <>
      <div className="header">
        <h1>Education</h1>
        <p>
          Here, I go over some of the courses I've completed and different
          topics I've learned.
        </p>
        <ButtonBack link={"/about"} />
      </div>
      <div className="content" style={{ marginBottom: 0 }}>
        <p>
          I am currently in my last year of studying Computer Science at York
          University. One of the most satisfying things for me is when I am able
          to understand complicated concepts and solve complex problems.
        </p>
        <h2>Project-Based Courses:</h2>
      </div>
      <div className="card-container" style={{ margin: 0 }}>
        <CardLink
          title="EECS 4443"
          description="Mobile User Interfaces"
          link="/about/education/EECS4443"
        />
        <CardLink
          title="EECS 4413"
          description="Building E-Commerce Systems"
          link="/about/education/EECS4413"
        />
        <CardLink
          title="EECS 3401"
          description="Introduction to AI and Logic Programming"
          link="/about/education/EECS3401"
        />
        <CardLink
          title="EECS 3461"
          description="User Interfaces"
          link="/about/education/EECS3461"
        />
      </div>
      <div className="content" style={{ marginTop: "3em" }}>
        <h2>Theory-Based Courses:</h2>
        {Object.entries(theoryCourses).map(([courseCode, courseDetails]) => (
          <Course
            key={courseCode}
            title={`${courseCode}: ${courseDetails.title}`}
            description={courseDetails.description}
          />
        ))}
        <h3>Other</h3>
        <p>Here are other concepts/courses I've studied: </p>
        <ul>
          <li>Software Design</li>
          <li>Ethics and Professional Practice in Computing</li>
          <li>Operating System Fundamentals</li>
          <li>Discrete Mathematics and Logic for Computer Science</li>
          <li>Statistics</li>
        </ul>
      </div>
    </>
  );
};

export default Education;
