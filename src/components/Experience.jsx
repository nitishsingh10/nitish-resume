import React from 'react';
import { motion, useReducedMotion } from 'framer-motion';
import { ArrowUpRight } from 'lucide-react';
import { EXPERIENCE } from '../constants';

const Experience = () => {
  const reduceMotion = useReducedMotion();

  return (
    <section className="experience-section section-block" id="experience">
      <div className="layout-shell experience-layout">
        <div className="experience-intro">
          <p className="section-index"><span>02</span> THE JOURNEY SO FAR</p>
          <h2>Always<br />in <em>progress.</em></h2>
          <p className="experience-summary">I&apos;m early in my journey — studying the fundamentals, then finding ways to put them to work with other people.</p>
          <a className="experience-social-link" href="https://www.linkedin.com/in/nitish-singh-001" target="_blank" rel="noopener noreferrer">
            More on LinkedIn <ArrowUpRight size={15} />
          </a>
        </div>

        <div className="experience-list">
          {EXPERIENCE.map((item, index) => (
            <motion.article
              className="experience-item"
              key={item.title}
              initial={reduceMotion ? false : { opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: reduceMotion ? 0 : 0.56, delay: reduceMotion ? 0 : index * 0.1 }}
              viewport={{ once: true, amount: 0.3 }}
            >
              <div className="experience-date"><span>{item.year}</span><i /></div>
              <div>
                <p className="experience-kind">{item.kind}</p>
                <h3>{item.title}</h3>
                <p className="experience-place">{item.place}</p>
                <p className="experience-description">{item.description}</p>
              </div>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Experience;
