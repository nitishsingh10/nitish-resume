import React from 'react';
import { motion, useReducedMotion } from 'framer-motion';
import { ArrowUpRight } from 'lucide-react';
import { PROJECTS } from '../constants';

const Projects = () => {
  const reduceMotion = useReducedMotion();

  return (
    <section className="projects-section section-block" id="work">
      <div className="layout-shell">
        <div className="section-topline">
          <p className="section-index"><span>01</span> SELECTED WORK</p>
          <span className="section-aside">A FEW THINGS BUILT WITH CURIOSITY <i>✳</i></span>
        </div>
        <div className="section-title-row">
          <h2>Ideas, in <em>motion.</em></h2>
          <span className="work-count">PROJECTS / 04</span>
        </div>

        <div className="case-list">
          {PROJECTS.map((project, index) => (
            <motion.article
              className={`case-file${index % 2 === 1 ? ' case-file-reverse' : ''}`}
              key={project.id}
              initial={reduceMotion ? false : { opacity: 0, y: 28 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: reduceMotion ? 0 : 0.62, delay: reduceMotion ? 0 : 0.04 }}
              viewport={{ once: true, amount: 0.16 }}
            >
              <a className="case-artwork" href={project.link} target="_blank" rel="noopener noreferrer" aria-label={`${project.linkLabel}: ${project.title}`}>
                <img src={project.image} alt={`${project.title} editorial project illustration`} loading="lazy" />
                <span className="artwork-label">PROJECT VISUAL <i>·</i> {project.number}</span>
                <span className="artwork-link"><ArrowUpRight size={20} /></span>
              </a>

              <div className="case-copy">
                <div className="case-overline"><span>{project.number}</span><i />{project.eyebrow}</div>
                <h3>{project.title}</h3>
                <p>{project.description}</p>
                <div className="case-tags">
                  {project.tags.map((tag) => <span key={tag}>{tag}</span>)}
                </div>
                <a className="case-link" href={project.link} target="_blank" rel="noopener noreferrer">
                  {project.linkLabel}<ArrowUpRight size={16} />
                </a>
              </div>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
