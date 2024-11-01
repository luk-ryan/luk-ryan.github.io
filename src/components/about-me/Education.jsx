import React from "react";
import ButtonBack from "../ButtonBack";

const Education = () => {
  return (
    <>
      <div className="introduction">
        <h1>Education</h1>
        <p>
          Here, I go over some of the course I've completed and different topics
          I've learned
        </p>
        <ButtonBack link={"/about"} />
      </div>
      <div className="content about-me">
        <p>
          I am currently in my last year of studying Computer Science at York
          University. One of the most satisfying things for me is when I am able
          to understand complicated concepts and solve complex problems.
        </p>
        <h3> Database Management Systems (EECS 3421)</h3>
        <p>
          In third year, I learned to about the basics of relational databases.
          The main focus of this course was to familiarize myself with the SQL
          language, as well as how the more commonly used relational database
          worked compared to other types of databases. I was able understand
          everything I needed to know from creating my own database system for a
          specific situation to querying from a complex database that has
          already been established.
        </p>
        <h3>User Interfaces (EECS 3461)</h3>
        <p>
          Another third year course I took was about user interfaces. The
          biggest component of this course was to decide on a problem and come
          up with a design solution for this problem. As a team of four
          students, we researched problems by conducting surveys with potential
          end-users of a system as the first part of our project. After choosing
          a problem, we then brainstormed various ideas on a system that would
          help solve this problem, drawing out Low-Fidelity prototypes, and
          wireframes for it. Once we decided to move forward with the idea of a
          mobile application, we used Figma to develop a working interactive
          prototype and compiled it into a final report for submission.
        </p>
        <h3>Introduction to AI and Logic Programming (EECS 3401)</h3>
        <p>
          Another third year course I took was an introductory course to AI. In
          this course, we learned some theory behind various machine learning
          algorithms, such as linear regression, support vector machine (SVM),
          and decision trees. For the second part of this course, we were
          introduced to the python libraries that would use these algorithms.
          For our final projet, we chose a dataset for data to train on,
          analysed the results, and packaged it together into a report, which
          included jupyter notebook file with our test results.
        </p>
        <h3>Design and Analysis of Algorithms (EECS 3101)</h3>
        <p>
          Another third year course I took was an algorithms course. I learned
          the steps to solving problems using various algorithms, such as greedy
          algorithms, recursive backtracking, and dynamic programming. We
          explored how exactly each of these algorithms worked, as well as the
          efficiency of each one, using it as a metric to compare them to one
          another.
        </p>
        <h3>Fundamentals of Data Structures (EECS 2011)</h3>
        <p>
          In second year, I learned about the fundamental data structures, like
          arrays, linked lists, stacks, queues, and trees. This helped build my
          foundation for understanding algorithms in my later years. We explored
          common basic algorithms that would use each data structure, as well as
          which situations would call for certain data structures.
        </p>
        <h3>Advanced Object-Oriented Programming (EECS 2030)</h3>
        <p>
          Another second year course where I built my foundation in OOP and the
          Java programming language. Here, I learned about the structure of java
          projects with classes, and objects. I was able to understand
          fundamental concepts, such as methods, inheritance, polymorphism, and
          generic classes. Because of this course, one of my most comfortable
          programming languages is Java.
        </p>
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
