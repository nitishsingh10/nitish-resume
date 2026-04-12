import React from 'react';
import { motion } from 'framer-motion';
import { VAULT_IDEAS } from '../constants';

const IdeaVault = () => {
  return (
    <section id="vault" className="section-padding">
      <motion.h2 
        initial={{ opacity: 0, x: -20 }}
        whileInView={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
        className="font-plus-jakarta"
      >
        Hackathon & Idea Vault
      </motion.h2>
      
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
        {VAULT_IDEAS.map((idea, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            whileHover={{ y: -10, scale: 1.02 }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
            viewport={{ once: true }}
            className="relative h-[350px] rounded-[24px] overflow-hidden bg-black border border-white/10 cursor-pointer group"
          >
            <div className="w-full h-full">
              <img 
                src={idea.image} 
                alt={idea.title} 
                className="w-full h-full object-cover opacity-60 transition-all duration-500 group-hover:opacity-100 group-hover:scale-105" 
              />
              <div className="absolute inset-x-0 bottom-0 p-8 bg-gradient-to-t from-black via-black/60 to-transparent">
                <span className="inline-block px-3 py-1 bg-white/10 backdrop-blur-md rounded-full text-[10px] font-bold uppercase tracking-wider text-accent-red mb-3">
                  {idea.category}
                </span>
                <h3 className="text-xl md:text-2xl font-bold text-white mb-0">{idea.title}</h3>
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default IdeaVault;
