import React, { useState } from 'react';
import { motion, useReducedMotion } from 'framer-motion';
import { ArrowUpRight, Github, Linkedin, Mail, Phone, Send } from 'lucide-react';
import { CONTACT } from '../constants';

const ContactForm = () => {
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });
  const [status, setStatus] = useState('');
  const reduceMotion = useReducedMotion();

  const handleSubmit = async (event) => {
    event.preventDefault();
    setStatus('Sending your note…');

    try {
      const response = await fetch('https://formspree.io/f/mjgpnlod', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData),
      });
      if (!response.ok) throw new Error('Message could not be sent.');
      setStatus('Thanks for reaching out — I’ll be in touch.');
      setFormData({ name: '', email: '', message: '' });
    } catch {
      setStatus('Couldn’t send right now. Please email me directly instead.');
    }
  };

  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormData((current) => ({ ...current, [name]: value }));
  };

  return (
    <section className="contact-section section-block" id="contact">
      <motion.div
        className="layout-shell contact-layout"
        initial={reduceMotion ? false : { opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: reduceMotion ? 0 : 0.55 }}
        viewport={{ once: true, amount: 0.15 }}
      >
        <div className="contact-copy">
          <p className="section-index"><span>06</span> SAY HELLO</p>
          <h2>Good things<br />start with a<br /><em>hello.</em></h2>
          <p className="contact-summary">Have a project, an opportunity, or a good question? I&apos;d like to hear from you.</p>

          <a className="contact-detail" href={`mailto:${CONTACT.email}`}>
            <Mail size={17} /><span>{CONTACT.email}</span><ArrowUpRight size={16} />
          </a>
          <a className="contact-detail" href="tel:+919321483542">
            <Phone size={17} /><span>{CONTACT.phone}</span><ArrowUpRight size={16} />
          </a>

          <div className="contact-socials">
            <a href={CONTACT.github} target="_blank" rel="noopener noreferrer" aria-label="GitHub profile"><Github size={18} /></a>
            <a href={CONTACT.linkedin} target="_blank" rel="noopener noreferrer" aria-label="LinkedIn profile"><Linkedin size={18} /></a>
          </div>
        </div>

        <form className="contact-form" onSubmit={handleSubmit}>
          <div className="contact-form-heading">
            <span>OR SEND A NOTE</span><span>↘</span>
          </div>
          <label>
            <span>Your name</span>
            <input name="name" autoComplete="name" placeholder="Jane Smith" required value={formData.name} onChange={handleChange} />
          </label>
          <label>
            <span>Your email</span>
            <input name="email" type="email" autoComplete="email" placeholder="jane@company.com" required value={formData.email} onChange={handleChange} />
          </label>
          <label>
            <span>What&apos;s on your mind?</span>
            <textarea name="message" rows="3" placeholder="A little context helps…" required value={formData.message} onChange={handleChange} />
          </label>
          <button className="button button-light" type="submit" disabled={status.startsWith('Sending')}>
            {status.startsWith('Sending') ? 'Sending…' : 'Send message'} <Send size={15} />
          </button>
          <p className="form-status" aria-live="polite">{status}</p>
        </form>
      </motion.div>
    </section>
  );
};

export default ContactForm;
