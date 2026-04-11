import React, { useEffect, useState } from 'react';
import { motion, useScroll, useSpring } from 'framer-motion';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Experience from './components/Experience';
import Skills from './components/Skills';
import Projects from './components/Projects';
import IdeaVault from './components/IdeaVault';
import ContactForm from './components/ContactForm';
import Footer from './components/Footer';

function App() {
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001
  });

  useEffect(() => {
    const handleMouseMove = (e) => {
      setMousePos({
        x: (e.clientX / window.innerWidth - 0.5) * 50,
        y: (e.clientY / window.innerHeight - 0.5) * 50
      });
    };
    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  return (
    <div className="portfolio-app">
      {/* Scroll Progress Bar */}
      <motion.div className="scroll-progress" style={{ scaleX }} />

      {/* Ambient Orbs (Premium Flow) */}
      <div className="background-glow">
        <motion.div 
          className="orb orb-1"
          animate={{ 
            x: mousePos.x * 0.5, 
            y: mousePos.y * 0.5,
            scale: [1, 1.1, 1]
          }}
          transition={{ 
            x: { type: 'spring', stiffness: 50, damping: 20 },
            y: { type: 'spring', stiffness: 50, damping: 20 },
            scale: { duration: 10, repeat: Infinity, ease: "easeInOut" }
          }}
        />
        <motion.div 
          className="orb orb-2"
          animate={{ x: mousePos.x * -0.8, y: mousePos.y * -0.8 }}
          transition={{ type: 'spring', stiffness: 40, damping: 25 }}
        />
        <motion.div 
          className="orb orb-3"
          animate={{ x: mousePos.x * 1.2, y: mousePos.y * 1.2 }}
          transition={{ type: 'spring', stiffness: 60, damping: 15 }}
        />
      </div>

      <Navbar />
      
      <main>
        <Hero />
        <Experience />
        <Skills />
        <Projects />
        <IdeaVault />
        <ContactForm />
      </main>

      <Footer />
    </div>
  );
}

export default App;
