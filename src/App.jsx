import React from 'react';
import { motion, useScroll, useSpring } from 'framer-motion';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Projects from './components/Projects';
import Experience from './components/Experience';
import Skills from './components/Skills';
import Services from './components/Services';
import IdeaVault from './components/IdeaVault';
import ContactForm from './components/ContactForm';
import Footer from './components/Footer';

function App() {
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, { stiffness: 100, damping: 28, restDelta: 0.001 });

  return (
    <div className="portfolio-app">
      <a className="skip-link" href="#main-content">Skip to content</a>
      <motion.div className="scroll-progress" style={{ scaleX }} aria-hidden="true" />
      <Navbar />

      <main id="main-content">
        <Hero />
        <div className="moving-ribbon" aria-hidden="true">
          <div className="moving-ribbon-track">
            {[0, 1].map((copy) => (
              <div className="moving-ribbon-group" key={copy}>
                <span>FULL-STACK</span><i>✳</i>
                <span>APPLIED AI</span><i>✳</i>
                <span>DEVELOPER TOOLS</span><i>✳</i>
                <span>WEB3</span><i>✳</i>
                <span>COMMUNITY</span><i>✳</i>
              </div>
            ))}
          </div>
        </div>
        <Projects />
        <Experience />
        <Skills />
        <Services />
        <IdeaVault />
        <ContactForm />
      </main>

      <Footer />
    </div>
  );
}

export default App;
