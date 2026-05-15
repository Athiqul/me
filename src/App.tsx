import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Skills from './components/Skills';
import Experience from './components/Experience';
import Education from './components/Education';
import Projects from './components/Projects';
import ArchitectureMindset from './components/ArchitectureMindset';
import Contact from './components/Contact';
import Footer from './components/Footer';
import ResumeViewer from './components/ResumeViewer';

const PortfolioHome = () => (
  <div className="min-h-screen">
    <Navbar />
    <main>
      <section id="hero">
        <Hero />
      </section>
      
      <section id="about">
        <ArchitectureMindset />
      </section>

      <section id="skills">
        <Skills />
      </section>

      <section id="experience">
        <Experience />
      </section>

      <section id="education">
        <Education />
      </section>

      <section id="projects">
        <Projects />
      </section>

      <section id="contact">
        <Contact />
      </section>
    </main>
    <Footer />
  </div>
);

const App = () => {
  return (
    <Router basename="/me">
      <Routes>
        <Route path="/" element={<PortfolioHome />} />
        <Route path="/resume" element={<ResumeViewer />} />
      </Routes>
    </Router>
  );
};

export default App;