import React from 'react';
import { motion, useReducedMotion } from 'framer-motion';
import { ArrowUpRight } from 'lucide-react';
import { VAULT_IDEAS } from '../constants';

const IdeaVault = () => {
  const reduceMotion = useReducedMotion();

  return (
    <section className="ideas-section section-block" id="about">
      <div className="layout-shell ideas-layout">
        <div className="ideas-heading">
          <p className="section-index"><span>05</span> THE IDEA VAULT</p>
          <h2>A few ideas<br />on the <em>whiteboard.</em></h2>
          <p>Curiosity doesn&apos;t clock out when a project ships. Here are a few directions I keep coming back to.</p>
        </div>

        <div className="idea-list">
          {VAULT_IDEAS.map((idea, index) => (
            <motion.div
              className="idea-item"
              key={idea.title}
              initial={reduceMotion ? false : { opacity: 0, y: 12 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: reduceMotion ? 0 : 0.35, delay: reduceMotion ? 0 : index * 0.045 }}
              viewport={{ once: true, amount: 0.5 }}
            >
              <span className="idea-item-index">0{index + 1}</span>
              <span className="idea-item-title">{idea.title}</span>
              <span className="idea-item-category">{idea.category}</span>
              <ArrowUpRight size={17} />
            </motion.div>
          ))}
          <span className="ideas-side-note">SKETCHES, NOT SHIPPED PROJECTS</span>
        </div>
      </div>
    </section>
  );
};

export default IdeaVault;
