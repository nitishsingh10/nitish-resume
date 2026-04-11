import React from 'react';
import { motion } from 'framer-motion';
import { Layout, ArrowUpRight } from 'lucide-react';
import { PROJECTS } from '../constants';

const Projects = () => {
  return (
    <section id="work">
      <motion.h2 
        initial={{ opacity: 0, x: -20 }}
        whileInView={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
        className="section-title"
      >
        Featured Projects
      </motion.h2>
      
      <div className="project-grid">
        {PROJECTS.map((project, index) => (
          <motion.a
            key={project.id}
            href={project.link}
            target="_blank"
            rel="noopener noreferrer"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            whileHover={{ y: -15 }}
            transition={{ duration: 0.6, delay: index * 0.1, ease: [0.165, 0.84, 0.44, 1] }}
            viewport={{ once: true }}
            className="card project-card"
            style={{ textDecoration: 'none', color: 'inherit', display: 'block' }}
          >
            <div className="project-img-wrapper" style={{ overflow: 'hidden', position: 'relative' }}>
                {project.image ? (
                <img src={project.image} alt={project.title} className="project-img" style={{ width: '100%', display: 'block' }} />
                ) : (
                <div className="project-img-placeholder" style={{ 
                    background: 'linear-gradient(45deg, #111, #222)', 
                    height: '280px',
                    display: 'flex', 
                    alignItems: 'center', 
                    justifyContent: 'center' 
                }}>
                    <Layout size={48} color="#444" />
                </div>
                )}
                <div className="project-overlay" style={{
                    position: 'absolute',
                    top: 0, left: 0, width: '100%', height: '100%',
                    background: 'linear-gradient(0deg, rgba(0,0,0,0.8) 0%, transparent 60%)',
                    opacity: 0,
                    transition: 'opacity 0.3s ease'
                }}></div>
            </div>
            
            <div className="project-info">
              <h3 style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: '12px' }}>
                {project.title}
                <ArrowUpRight size={20} className="arrow-icon" style={{ opacity: 0.5, transition: 'all 0.3s ease' }} />
              </h3>
              <p style={{ fontSize: '1rem', lineHeight: '1.6' }}>{project.description}</p>
            </div>
          </motion.a>
        ))}
      </div>
    </section>
  );
};

export default Projects;
