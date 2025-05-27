import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import "./styles/index.css";
import Home from "./pages/home/Home";
import Resume from "./pages/resume/Resume";
import Contact from "./pages/contact/Contact";

import Projects from "./pages/projects/Projects";
import ProjectDetail from "./pages/projects/ProjectDetail";

import AboutMe from "./pages/about-me/AboutMe";
import Hobbies from "./pages/about-me/Hobbies";
import Piano from "./pages/about-me/hobbies/Piano";
import Karate from "./pages/about-me/hobbies/Karate";
import Tricking from "./pages/about-me/hobbies/Tricking";
import Education from "./pages/about-me/Education";
import EECS3461 from "./pages/about-me/education/EECS3461";
import EECS3401 from "./pages/about-me/education/EECS3401";
import EECS4413 from "./pages/about-me/education/EECS4413";
import EECS4443 from "./pages/about-me/education/EECS4443";

import NavBar from "./components/NavBar";
import Footer from "./components/Footer";
import ScrollToTop from "./components/ScrollToTop";

function App() {
  return (
    <div className="app">
      <Router>
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
      </Router>
      <Footer />
    </div>
  );
}

export default App;
