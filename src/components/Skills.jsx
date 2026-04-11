import React from 'react';
import { motion } from 'framer-motion';
import { SKILLS } from '../constants';

const Skills = () => {
  return (
    <section id="skills">
      <h2 className="section-title">Technical Skills</h2>
      <div className="bento-grid">
        {SKILLS.map((skill, index) => (
          <motion.div 
            key={index}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
            viewport={{ once: true }}
            className="card"
            style={{ gridColumn: 'span 2' }}
          >
            <h3>{skill.category}</h3>
            {skill.category === 'Programming Languages' ? (
              <div className="skills-list">
                {skill.items.map((item) => (
                  <span key={item}>{item}</span>
                ))}
              </div>
            ) : (
              <div className="skills-list">
                {skill.items.map((item) => (
                  <span key={item}>{item}</span>
                ))}
              </div>
            )}
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default Skills;
