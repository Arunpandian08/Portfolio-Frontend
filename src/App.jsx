import React, { useState, useEffect } from 'react';
import { Element } from 'react-scroll';
import Loader from './Utility/Loader/Loader'; 
import AnimatedBackground from './Utility/Animation/AnimatedBackground';
import Navbar from './Components/Navbar/Navbar';
import Home from './Components/Home/Home';
import About from './Components/About/About';
import Skills from './Components/Skills/Skills';
import Resume from './Components/Resume/Resume';
import Contact from './Components/Contact/Contact';
import Projects from './Components/Projects/Projects';
import Footer from './Components/Footer/Footer';


const App = () => {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Simulate asynchronous loading process
    const timeout = setTimeout(() => {
      setLoading(false);
    }, 2000); // Adjust the duration as needed

    // Cleanup timeout
    return () => clearTimeout(timeout);
  }, []);

  return (
    <div>
      {loading ? (
        <Loader />
      ) : (
        <>
          <AnimatedBackground />
          <Navbar />
          <div className="container-fluid">
            <Element name="home">
              <Home />
            </Element>
            <Element name="about">
              <About />
            </Element>
            <Element name="skills">
              <Skills />
            </Element>
            <Element name="projects">
              <Projects />
            </Element>
            <Element name="resume">
              <Resume />
            </Element>
            <Element name="contact">
              <Contact />
            </Element>
          </div>
              <Footer />
        </>
      )}
    </div>
  );
};

export default App;
