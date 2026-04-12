import React from 'react';
import { motion } from 'framer-motion';
import { SKILLS } from '../constants';

const Skills = () => {
  return (
    <section id="skills" className="section-padding">
      <h2 className="font-plus-jakarta">Technical Skills</h2>
      <div className="grid grid-cols-1 md:grid-cols-4 lg:grid-cols-6 gap-6">
        {SKILLS.map((skill, index) => (
          <motion.div 
            key={index}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
            viewport={{ once: true }}
            className="glass-card p-8 md:col-span-2 lg:col-span-2"
          >
            <h3 className="mb-6">{skill.category}</h3>
            <div className="flex flex-wrap gap-3 mt-6">
              {skill.items.map((item) => (
                <span 
                  key={item}
                  className="px-[18px] py-2 bg-white/5 border border-border-subtle rounded-full text-[0.9rem] text-text-muted transition-colors hover:bg-white/10 hover:text-white"
                >
                  {item}
                </span>
              ))}
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default Skills;
