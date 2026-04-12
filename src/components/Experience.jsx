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
    <section id="experience" className="section-padding">
      <h2 className="font-plus-jakarta mb-12">Experience & Education</h2>
      <div className="relative pl-12 border-l border-white/10 ml-4 space-y-12">
        {EXPERIENCE.map((item, index) => {
          const IconComponent = iconMap[item.icon];
          return (
            <motion.div 
              key={index}
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
              viewport={{ once: true }}
              className="relative"
            >
              {/* Timeline Dot/Icon wrapper */}
              <div className="absolute -left-[68px] top-0 w-12 h-12 bg-bg-black border border-white/10 rounded-full flex items-center justify-center text-accent-red shadow-[0_0_20px_rgba(255,45,85,0.1)]">
                {IconComponent && <IconComponent size={20} />}
              </div>
              
              <div className="timeline-content">
                <h3 className="text-xl md:text-2xl font-bold mb-1">{item.title}</h3>
                <p className="text-accent-red font-medium text-sm md:text-base mb-3 opacity-90 uppercase tracking-widest">{item.meta}</p>
                <p className="text-text-muted leading-relaxed max-w-3xl">{item.description}</p>
              </div>
            </motion.div>
          );
        })}
      </div>
    </section>
  );
};

export default Experience;
