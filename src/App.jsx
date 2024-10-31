import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import "./index.css";
import NavBar from "./components/NavBar";
import Footer from "./components/Footer";
import Home from "./components/pages/Home";
import AboutMe from "./components/pages/AboutMe";
import Contact from "./components/pages/Contact";
import Projects from "./components/pages/Projects";
import ProjectDetail from "./components/subpages/ProjectDetail";
import Resume from "./components/pages/Resume";
import ScrollToTop from "./components/ScrollToTop";
import Education from "./components/subpages/Education";
import Hobbies from "./components/subpages/Hobbies";
import Piano from "./components/subpages/hobbies/Piano";
import Karate from "./components/subpages/hobbies/Karate";
import Tricking from "./components/subpages/hobbies/Tricking";

function App() {
  return (
    <div className="app">
      <Router>
        <ScrollToTop />
        <NavBar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<AboutMe />} />
          <Route path="/about/education" element={<Education />} />
          <Route path="/about/hobbies" element={<Hobbies />} />
          <Route path="/about/hobbies/piano" element={<Piano />} />
          <Route path="/about/hobbies/karate" element={<Karate />} />
          <Route path="/about/hobbies/tricking" element={<Tricking />} />
          <Route path="/projects" element={<Projects />} />
          <Route path="/projects/:projectTitle" element={<ProjectDetail />} />
          <Route path="/resume" element={<Resume />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
      </Router>
      <Footer />
    </div>
  );
}

export default App;
