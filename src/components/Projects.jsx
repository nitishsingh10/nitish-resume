import React from 'react';
import { motion } from 'framer-motion';
import { Layout, ArrowUpRight } from 'lucide-react';
import { PROJECTS } from '../constants';

const Projects = () => {
  return (
    <section id="work" className="section-padding">
      <motion.h2 
        initial={{ opacity: 0, x: -20 }}
        whileInView={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
        className="font-plus-jakarta"
      >
        Featured Projects
      </motion.h2>
      
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-[30px] w-full">
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
            className="glass-card p-[clamp(24px,5vw,40px)] group transition-all duration-300 no-underline text-inherit block"
          >
            <div className="w-full h-[300px] overflow-hidden relative rounded-[calc(var(--radius-card)-12px)] mb-6">
                {project.image ? (
                  <img 
                    src={project.image} 
                    alt={project.title} 
                    className="w-full h-full object-cover transition-transform duration-600 ease-[cubic-bezier(0.165,0.84,0.44,1)] group-hover:scale-105" 
                  />
                ) : (
                  <div className="w-full h-full flex items-center justify-center bg-linear-to-br from-[#111] to-[#222]">
                    <Layout size={48} className="text-[#444]" />
                  </div>
                )}
                <div className="absolute inset-0 bg-black/0 transition-colors group-hover:bg-black/10"></div>
            </div>
            
            <div className="project-info">
              <h3 className="flex items-center justify-between mb-3">
                {project.title}
                <ArrowUpRight 
                  size={20} 
                  className="opacity-50 transition-all duration-300 group-hover:opacity-100 group-hover:translate-x-1 group-hover:-translate-y-1" 
                />
              </h3>
              <p className="text-base leading-relaxed">{project.description}</p>
            </div>
          </motion.a>
        ))}
      </div>
    </section>
  );
};

export default Projects;
