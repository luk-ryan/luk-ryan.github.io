import "./index.css";
import NavBar from "./components/NavBar";
import Footer from "./components/Footer";
import Home from "./components/pages/Home";
import AboutMe from "./components/pages/AboutMe";
import Contact from "./components/pages/Contact";
import Projects from "./components/pages/Projects";
import ProjectDetail from "./components/projects/ProjectDetail";
import Resume from "./components/pages/Resume";
import ScrollToTop from "./components/ScrollToTop";
import Education from "./components/about-me/Education";
import Hobbies from "./components/about-me/Hobbies";
import Piano from "./components/about-me/hobbies/Piano";
import Karate from "./components/about-me/hobbies/Karate";
import Tricking from "./components/about-me/hobbies/Tricking";
import EECS3461 from "./components/about-me/education/EECS3461";
import EECS3401 from "./components/about-me/education/EECS3401";
import EECS4413 from "./components/about-me/education/EECS4413";
import EECS4443 from "./components/about-me/education/EECS4443";

import { Routes, Route } from "react-router-dom";

function App() {
  return (
    <div className="app">
      <ScrollToTop />
      <NavBar />
      <div className="main-content">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<AboutMe />} />
          <Route path="/about/education" element={<Education />} />
          <Route path="/about/education/EECS3401" element={<EECS3401 />} />
          <Route path="/about/education/EECS3461" element={<EECS3461 />} />
          <Route path="/about/education/EECS4413" element={<EECS4413 />} />
          <Route path="/about/education/EECS4443" element={<EECS4443 />} />
          <Route path="/about/hobbies" element={<Hobbies />} />
          <Route path="/about/hobbies/piano" element={<Piano />} />
          <Route path="/about/hobbies/karate" element={<Karate />} />
          <Route path="/about/hobbies/tricking" element={<Tricking />} />
          <Route path="/projects" element={<Projects />} />
          <Route path="/projects/:projectTitle" element={<ProjectDetail />} />
          <Route path="/resume" element={<Resume />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
      </div>
      <Footer />
    </div>
  );
}

export default App;
