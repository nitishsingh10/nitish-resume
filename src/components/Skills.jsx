import React from 'react';
import { motion, useReducedMotion } from 'framer-motion';
import { SKILLS } from '../constants';

const Skills = () => {
  const reduceMotion = useReducedMotion();

  return (
    <section className="skills-section section-block" id="skills">
      <div className="layout-shell">
        <div className="section-topline">
          <p className="section-index"><span>03</span> THE TOOLKIT</p>
          <span className="section-aside">FUNDAMENTALS FIRST, TOOLS SECOND</span>
        </div>
        <div className="section-title-row skills-title-row">
          <h2>What I work <em>with.</em></h2>
          <p className="skills-intro">Tools and technologies I&apos;m actively learning and using to turn ideas into software.</p>
        </div>

        <div className="skill-list">
          {SKILLS.map((group, index) => (
            <motion.div
              className="skill-row"
              key={group.category}
              initial={reduceMotion ? false : { opacity: 0, y: 14 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: reduceMotion ? 0 : 0.4, delay: reduceMotion ? 0 : index * 0.05 }}
              viewport={{ once: true, amount: 0.35 }}
            >
              <h3>{group.category}</h3>
              <div className="skill-values">
                {group.items.map((item) => <span key={item}>{item}</span>)}
              </div>
              <span className="skill-row-index">0{index + 1}</span>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;
