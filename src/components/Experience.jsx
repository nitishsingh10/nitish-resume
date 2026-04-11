import React from 'react';
import { motion } from 'framer-motion';
import { GraduationCap, Users } from 'lucide-react';
import { EXPERIENCE } from '../constants';

const iconMap = {
  GraduationCap: GraduationCap,
  Users: Users
};

const Experience = () => {
  return (
    <section id="experience">
      <h2 className="section-title">Experience & Education</h2>
      <div className="timeline">
        {EXPERIENCE.map((item, index) => {
          const IconComponent = iconMap[item.icon];
          return (
            <motion.div 
              key={index}
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
              viewport={{ once: true }}
              className="timeline-item"
            >
              <div className="timeline-icon">
                {IconComponent && <IconComponent size={20} />}
              </div>
              <div className="timeline-content">
                <h3>{item.title}</h3>
                <p className="timeline-meta">{item.meta}</p>
                <p>{item.description}</p>
              </div>
            </motion.div>
          );
        })}
      </div>
    </section>
  );
};

export default Experience;
