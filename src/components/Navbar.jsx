import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Home', href: '#home' },
    { name: 'Experience', href: '#experience' },
    { name: 'Skills', href: '#skills' },
    { name: 'My Work', href: '#work' },
    { name: 'Vault', href: '#vault' },
  ];

  return (
    <header>
      <motion.nav 
        animate={{ 
          width: isScrolled ? '70%' : '90%',
          backgroundColor: isScrolled ? 'rgba(0, 0, 0, 0.8)' : 'rgba(15, 15, 15, 0.4)'
        }}
        transition={{ duration: 0.5, ease: [0.165, 0.84, 0.44, 1] }}
        id="navbar" 
        className={isScrolled ? 'scrolled' : ''}
      >
        <div className="logo">
          <span style={{ fontWeight: 800, fontSize: '1.2rem', letterSpacing: '-1px' }}>NS.</span>
        </div>
        <ul className="nav-links">
          {navLinks.map((link) => (
            <li key={link.name}>
              <a href={link.href}>{link.name}</a>
            </li>
          ))}
        </ul>
        <a href="#contact" className="contact-btn">Contact Us</a>
      </motion.nav>
    </header>
  );
};

export default Navbar;
