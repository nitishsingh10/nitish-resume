import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Github, Linkedin } from 'lucide-react';

const ContactForm = () => {
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });
  const [status, setStatus] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    setStatus('Sending...');
    // Simulate API call
    setTimeout(() => {
      setStatus('Success! Nitish will get back to you soon.');
      setFormData({ name: '', email: '', message: '' });
      setTimeout(() => setStatus(''), 5000);
    }, 1500);
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  return (
    <section id="contact">
      <div className="contact-container">
        <motion.div 
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="contact-left"
        >
          <div className="contact-orb"></div>
          <div className="contact-info">
            <div className="contact-name">Nitish Singh</div>
            <div className="contact-socials">
              <a 
                href="https://github.com/nitishsingh10" 
                target="_blank" 
                rel="noopener noreferrer" 
                className="contact-social-link"
                title="GitHub"
              >
                <Github size={24} />
              </a>
              <a 
                href="https://linkedin.com/in/nitish-singh-001" 
                target="_blank" 
                rel="noopener noreferrer" 
                className="contact-social-link"
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
          className="card contact-form-card"
        >
          <h2>Let's work together</h2>
          <form onSubmit={handleSubmit}>
            <div className="form-group">
              <input 
                type="text" 
                name="name"
                placeholder="Full Name" 
                required 
                value={formData.name}
                onChange={handleChange}
              />
            </div>
            <div className="form-group">
              <input 
                type="email" 
                name="email"
                placeholder="Email" 
                required 
                value={formData.email}
                onChange={handleChange}
              />
            </div>
            <div className="form-group">
              <textarea 
                name="message"
                placeholder="Message" 
                rows="5" 
                required 
                value={formData.message}
                onChange={handleChange}
              ></textarea>
            </div>
            <button type="submit" className="submit-btn" disabled={status.includes('Sending')}>
              {status.includes('Sending') ? 'Sending...' : 'Send Message'}
            </button>
            {status && <p style={{ marginTop: '15px', color: status.includes('Success') ? '#4ade80' : '#fff' }}>{status}</p>}
          </form>
        </motion.div>
      </div>
    </section>
  );
};

export default ContactForm;
