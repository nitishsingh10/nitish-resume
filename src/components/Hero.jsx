import React from 'react';
import { motion, useReducedMotion } from 'framer-motion';
import { ArrowDown, ArrowDownRight, ArrowUpRight, MapPin } from 'lucide-react';
import { CONTACT } from '../constants';

const Hero = () => {
  const reduceMotion = useReducedMotion();
  const enter = (delay) => reduceMotion
    ? { initial: false, animate: { opacity: 1 } }
    : {
      initial: { opacity: 0, y: 24 },
      animate: { opacity: 1, y: 0 },
      transition: { duration: 0.72, delay, ease: [0.22, 1, 0.36, 1] },
    };

  return (
    <section className="hero layout-shell" id="home">
      <div className="hero-aurora" aria-hidden="true">
        <span className="hero-aurora-curtain hero-aurora-curtain-one" />
        <span className="hero-aurora-curtain hero-aurora-curtain-two" />
        <span className="hero-aurora-bloom" />
      </div>

      <div className="hero-copy">
        <motion.p className="hero-kicker" {...enter(0.05)}>
          <span className="hero-kicker-dot" /> HI, I&apos;M NITISH —
          <span className="hero-kicker-detail">COMPUTER SCIENCE · AI / ML</span>
        </motion.p>

        <motion.h1 {...enter(0.12)}>
          I turn curiosity<br />
          <em>into code.</em>
        </motion.h1>

        <motion.p className="hero-summary" {...enter(0.22)}>
          A student builder exploring full-stack development, applied AI, and Web3 by making products that solve real problems.
        </motion.p>

        <motion.div className="hero-actions" {...enter(0.31)}>
          <a className="button button-dark" href="#work">
            See selected work <ArrowDownRight size={17} />
          </a>
          <a className="hero-email-link" href={`mailto:${CONTACT.email}`}>
            Say hello <ArrowUpRight size={16} />
          </a>
        </motion.div>

        <motion.div className="hero-meta" {...enter(0.4)}>
          <span><MapPin size={14} /> Bengaluru, India</span>
          <span className="hero-meta-rule" />
          <span>PW Institute of Innovation · 2029</span>
        </motion.div>

        <motion.a className="scroll-indicator" href="#work" {...enter(0.48)}>
          <span className="scroll-indicator-icon"><ArrowDown size={14} /></span>
          <span>Scroll for the work</span>
        </motion.a>
      </div>

      <div className="hero-portrait-float">
        <motion.div
          className="hero-portrait-area"
          initial={reduceMotion ? false : { opacity: 0, x: 25, rotate: 2 }}
          animate={{ opacity: 1, x: 0, rotate: 0 }}
          transition={{ duration: reduceMotion ? 0 : 0.85, delay: reduceMotion ? 0 : 0.15, ease: [0.22, 1, 0.36, 1] }}
        >
          <div className="portrait-ambient-glow" aria-hidden="true" />
          <img
            className="hero-portrait-cutout"
            src="/nitish-professional.png"
            alt="Nitish Singh wearing a charcoal blazer, arms crossed"
            fetchPriority="high"
          />
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;
