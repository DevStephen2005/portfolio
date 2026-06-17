import "./App.css";
import About from "./components/About";
import Contact from "./components/Contact";
import Education from "./components/Education";
import Footer from "./components/Footer";
import Hero from "./components/Hero";
import Navbar from "./components/Navbar";
import Projects from "./components/Projects";
import ScrollToTop from "./components/ScrollToTop";
import Skills from "./components/skills";
import Stats from "./components/Stats";



function App() {
  return (
    <>
      <Navbar />

      <Hero />
      <About />
      <Stats />
      <Skills />
      <Projects />
      <Education />
      <Contact />

      <Footer />
      
      <ScrollToTop />

    </>
  );
}

export default App;
