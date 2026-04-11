import React from 'react';
import { motion } from 'framer-motion';
import { VAULT_IDEAS } from '../constants';

const IdeaVault = () => {
  return (
    <section id="vault">
      <h2 className="section-title">Hackathon & Idea Vault</h2>
      <div className="vault-grid">
        {VAULT_IDEAS.map((idea, index) => (
          <motion.div 
            key={idea}
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            whileHover={{ scale: 1.05, backgroundColor: '#fff', color: '#000' }}
            transition={{ duration: 0.3, delay: index * 0.05 }}
            viewport={{ once: true }}
            className="vault-card"
          >
            {idea}
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default IdeaVault;
