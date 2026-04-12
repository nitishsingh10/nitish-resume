import React from 'react';
import { motion } from 'framer-motion';

const Hero = () => {
  return (
    <section id="home" className="min-h-screen flex flex-col justify-center items-center pt-[140px] px-[15px] pb-[60px] text-center">
      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
        className="text-text-muted text-sm md:text-base font-medium mb-4"
      >
        Hy! I'm Nitish Singh | Based in Bengaluru 🇮🇳
      </motion.div>
      
      <motion.h1 
        initial={{ opacity: 0, scale: 0.95 }}
        whileInView={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.8, delay: 0.2 }}
        viewport={{ once: true }}
        className="text-[clamp(2.2rem,8vw,5.5rem)] font-bold tracking-tighter leading-tight mb-6"
      >
        Computer Science (AI/ML)<br />Full-Stack & Web3 Developer
      </motion.h1>
      
      <motion.p 
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.8, delay: 0.4 }}
        viewport={{ once: true }}
        className="text-text-muted text-[clamp(0.95rem,1.2vw,1.15rem)] leading-relaxed mb-12"
      >
        I build designs and architectures that solve problems,<br />inspire action, and drive success.
      </motion.p>
      
      <motion.div 
         initial={{ opacity: 0, y: 40 }}
         whileInView={{ opacity: 1, y: 0 }}
         transition={{ duration: 1, delay: 0.6 }}
         viewport={{ once: true }}
         className="relative w-[clamp(280px,90vw,380px)] h-[clamp(350px,110vw,480px)] mt-10"
      >
        {/* Glow Orb */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[140%] h-[140%] bg-[radial-gradient(circle,var(--color-accent-red)_0%,transparent_70%)] blur-[60px] opacity-80 -z-10"></div>
        
        <div className="w-full h-full rounded-[28px] overflow-hidden border border-white/15">
          <img 
            src="/nitish_stylized.png" 
            alt="Nitish Singh" 
            className="w-full h-full object-cover" 
          />
        </div>
        
        <motion.div 
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 1, delay: 1.2 }}
          className="absolute -bottom-8 -right-4 md:-right-10 pointer-events-none z-20"
        >
          <span className="text-[clamp(3.5rem,10vw,6.5rem)] text-white font-normal font-signature -rotate-6 drop-shadow-[0_0_15px_rgba(255,45,85,0.4)]">
            Nitish Singh
          </span>
        </motion.div>
        
        <div className="absolute top-4 right-4 px-3 py-1.5 bg-black/60 backdrop-blur-md border border-white/10 rounded-full text-[10px] font-bold uppercase tracking-widest text-white">
          Available as freelancer
        </div>
      </motion.div>
    </section>
  );
};

export default Hero;
