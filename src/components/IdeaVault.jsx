import React from 'react';
import { motion } from 'framer-motion';
import { VAULT_IDEAS } from '../constants';

const IdeaVault = () => {
  return (
    <section id="vault" className="vault-section">
      <motion.h2 
        initial={{ opacity: 0, x: -20 }}
        whileInView={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
      >
        Hackathon & Idea Vault
      </motion.h2>
      
      <div className="vault-grid">
        {VAULT_IDEAS.map((idea, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            whileHover={{ y: -10, scale: 1.02 }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
            viewport={{ once: true }}
            className="vault-card"
          >
            <div className="vault-card-img-wrapper">
              <img src={idea.image} alt={idea.title} className="vault-card-img" />
              <div className="vault-card-overlay">
                <span className="vault-category">{idea.category}</span>
                <h3 className="vault-card-title">{idea.title}</h3>
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default IdeaVault;
