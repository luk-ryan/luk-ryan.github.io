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

function App() {
  return (
    <div className="app">
      <Router>
        <ScrollToTop />
        <NavBar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<AboutMe />} />
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
