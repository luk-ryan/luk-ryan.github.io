import React from "react";

const AboutMe = () => {
  return (
    <>
      <div className="introduction">
        <h1>About Me</h1>
        <p>This is Me!</p>
      </div>
      <div className="content about-me">
        <p>
          Hi, my name is Ryan Luk. I am currently in my last year of studying
          Computer Science at York University. One of the most satisfying things
          for me is when I am able to understand complicated concepts and solve
          complex problems. I also really enjoy learning new things in general,
          which many of my hobbies/interests are centered around. My main
          interests outside of programming include playing piano and karate.
          Recently, I've been learning tricking, which is like a combination of
          gymnastics tumbling, martial art kicks, and flips.
        </p>
        <h2>Education</h2>
        <p>
          First, I will go over some of the course I've completed and different
          topics I've learned
        </p>
        <h3>Algorithms</h3>
        <p>
          In third year, I took an algorithms course. I learned the steps to
          solving problems using various algorithms, such as greedy algorithms,
          recursive backtracking, and dynamic programming. We explored how
          exactly each of these algorithms worked, as well as the efficiency of
          each one, using it as a metric to compare them to one another.
        </p>
        <h3>Data Structures</h3>
        <p>
          In second year, I learned about the fundamental data structures, like
          arrays, linked lists, stacks, queues, and trees. This helped build my
          foundation for understanding algorithms in my later years. We explored
          common basic algorithms that would use each data structure, as well as
          which situations would call for certain data structures.
        </p>

        <h3>Advanced Object-Oriented Programming</h3>
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
        <p>
          <ul>
            <li>Operating System Fundamentals</li>
            <li>Database Management Systems</li>
            <li>Software Design</li>
            <li>User Interfaces</li>
            <li>Discrete Mathematics and Logic for Computer Science</li>
            <li>Statistics</li>
          </ul>
        </p>

        <h2>Hobbies and Interests</h2>
        <h3>Piano</h3>
        <h3>Karate</h3>
        <h3>Tricking</h3>
      </div>
    </>
  );
};

export default AboutMe;
