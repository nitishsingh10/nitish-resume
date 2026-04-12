import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Github, Linkedin } from 'lucide-react';

const ContactForm = () => {
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });
  const [status, setStatus] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus('Sending...');

    const FORMSPREE_ID = 'mjgpnlod';
    const endpoint = `https://formspree.io/f/${FORMSPREE_ID}`;

    try {
      const response = await fetch(endpoint, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        setStatus('Success! Nitish will get back to you soon.');
        setFormData({ name: '', email: '', message: '' });
        setTimeout(() => setStatus(''), 5000);
      } else {
        setStatus('Something went wrong. Please try again.');
      }
    } catch (error) {
      setStatus('Unable to send. Please check your connection.');
    }
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  return (
    <section id="contact" className="section-padding">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-left max-lg:text-center"
        >
          <div className="contact-info">
            <div className="text-[clamp(3rem,8vw,6rem)] font-extrabold leading-none mb-8">Nitish Singh</div>
            <div className="flex gap-5 mt-8 max-lg:justify-center">
              <a
                href="https://github.com/nitishsingh10"
                target="_blank"
                rel="noopener noreferrer"
                className="w-[60px] h-[60px] rounded-full border border-white/10 flex items-center justify-center text-white transition-all duration-300 bg-white/[0.03] hover:bg-white hover:text-black hover:-translate-y-1.5"
                title="GitHub"
              >
                <Github size={24} />
              </a>
              <a
                href="https://linkedin.com/in/nitish-singh-001"
                target="_blank"
                rel="noopener noreferrer"
                className="w-[60px] h-[60px] rounded-full border border-white/10 flex items-center justify-center text-white transition-all duration-300 bg-white/[0.03] hover:bg-white hover:text-black hover:-translate-y-1.5"
                title="LinkedIn"
              >
                <Linkedin size={24} />
              </a>
            </div>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, x: 50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="glass-card p-10"
        >
          <h2 className="mb-8 text-3xl md:text-4xl font-bold">Let's work together</h2>
          <form onSubmit={handleSubmit} className="space-y-5">
            <div className="w-full">
              <input
                type="text"
                name="name"
                placeholder="Full Name"
                required
                value={formData.name}
                onChange={handleChange}
                className="w-full p-6 bg-white/[0.03] border border-white/10 rounded-2xl text-white outline-none transition-all duration-300 focus:border-accent-red focus:bg-white/[0.06]"
              />
            </div>
            <div className="w-full">
              <input
                type="email"
                name="email"
                placeholder="Email"
                required
                value={formData.email}
                onChange={handleChange}
                className="w-full p-6 bg-white/[0.03] border border-white/10 rounded-2xl text-white outline-none transition-all duration-300 focus:border-accent-red focus:bg-white/[0.06]"
              />
            </div>
            <div className="w-full">
              <textarea
                name="message"
                placeholder="Message"
                rows="5"
                required
                value={formData.message}
                onChange={handleChange}
                className="w-full p-6 bg-white/[0.03] border border-white/10 rounded-2xl text-white outline-none transition-all duration-300 focus:border-accent-red focus:bg-white/[0.06] resize-none"
              ></textarea>
            </div>
            <button 
              type="submit" 
              disabled={status.includes('Sending')}
              className="w-full p-5 bg-white text-black rounded-2xl font-extrabold text-lg transition-all duration-300 hover:bg-accent-red hover:text-white hover:-translate-y-1 disabled:opacity-50"
            >
              {status.includes('Sending') ? 'Sending...' : 'Send Message'}
            </button>
            {status && (
              <p 
                className={`mt-4 text-center ${status.includes('Success') ? 'text-green-400' : 'text-white'}`}
              >
                {status}
              </p>
            )}
          </form>
        </motion.div>
      </div>
    </section>
  );
};

export default ContactForm;
