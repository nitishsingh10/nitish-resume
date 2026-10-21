import React from 'react';
import { motion, useReducedMotion } from 'framer-motion';
import { ArrowUpRight, Code2, Server, Sparkles } from 'lucide-react';
import { CONTACT } from '../constants';

const SERVICES = [
  {
    title: 'Web app development',
    description: 'Responsive product sites and focused dashboards built around clear user flows and maintainable components.',
    tags: ['React', 'Node.js', 'Responsive UI'],
    Icon: Code2,
  },
  {
    title: 'APIs & backend',
    description: 'REST APIs, service integrations, and backend features built with Python, Java, or Node.js.',
    tags: ['FastAPI', 'Spring', 'REST APIs'],
    Icon: Server,
  },
  {
    title: 'AI prototypes',
    description: 'Practical AI features and early prototypes that turn a clear problem into a working demo.',
    tags: ['Applied AI', 'Integrations', 'MVPs'],
    Icon: Sparkles,
  },
];

const Services = () => {
  const reduceMotion = useReducedMotion();

  return (
    <section className="services-section section-block" id="services">
      <div className="layout-shell">
        <div className="section-topline">
          <p className="section-index"><span>04</span> FREELANCE SERVICES</p>
          <span className="section-aside">WEB · BACKEND · APPLIED AI</span>
        </div>

        <div className="services-heading-row">
          <div>
            <h2>Build your next<br />useful <em>thing.</em></h2>
            <p className="services-intro">Project-based help for web apps, backend APIs, and early AI prototypes. Share the goal and we can shape a practical first step.</p>
          </div>
          <a className="button button-dark services-cta" href={`mailto:${CONTACT.email}?subject=Freelance%20project%20inquiry`}>
            Discuss a project <ArrowUpRight size={16} />
          </a>
        </div>

        <div className="service-grid">
          {SERVICES.map(({ title, description, tags, Icon }, index) => (
            <motion.article
              className="service-card"
              key={title}
              initial={reduceMotion ? false : { opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: reduceMotion ? 0 : 0.48, delay: reduceMotion ? 0 : index * 0.08 }}
              viewport={{ once: true, amount: 0.2 }}
            >
              <div className="service-card-top">
                <span className="service-number">0{index + 1}</span>
                <Icon size={21} strokeWidth={1.6} aria-hidden="true" />
              </div>
              <h3>{title}</h3>
              <p>{description}</p>
              <div className="service-tags">
                {tags.map((tag) => <span key={tag}>{tag}</span>)}
              </div>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
