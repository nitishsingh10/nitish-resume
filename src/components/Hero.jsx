import React from 'react';
import { motion } from 'framer-motion';

const Hero = () => {
  return (
    <section id="home" className="hero">
      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
        className="tagline"
      >
        Hy! I'm Nitish Singh | Based in Bengaluru 🇮🇳
      </motion.div>
      
      <motion.h1 
        initial={{ opacity: 0, scale: 0.95 }}
        whileInView={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.8, delay: 0.2 }}
        viewport={{ once: true }}
        className="hero-headline"
      >
        Computer Science (AI/ML)<br />Full-Stack & Web3 Developer
      </motion.h1>
      
      <motion.p 
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.8, delay: 0.4 }}
        viewport={{ once: true }}
        className="hero-subheadline"
      >
        I build designs and architectures that solve problems,<br />inspire action, and drive success.
      </motion.p>
      
      <motion.div 
         initial={{ opacity: 0, y: 40 }}
         whileInView={{ opacity: 1, y: 0 }}
         transition={{ duration: 1, delay: 0.6 }}
         viewport={{ once: true }}
         className="profile-frame"
      >
        <div className="hero-glow-orb"></div>
        
        <div className="profile-img-container">
          <img 
            src="/nitish_stylized.png" 
            alt="Nitish Singh" 
            className="profile-img" 
          />
        </div>
        
        <motion.div 
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 0.9, x: 0 }}
          transition={{ duration: 1, delay: 1.2 }}
          className="signature"
        >
          Nitish Singh
        </motion.div>
        
        <div className="available-badge">
          Available as freelancer
        </div>
      </motion.div>
    </section>
  );
};

export default Hero;
