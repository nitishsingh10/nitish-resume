import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X } from 'lucide-react';

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

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

  const handleLinkClick = () => {
    setIsMobileMenuOpen(false);
  };

  return (
    <header>
      <motion.nav 
        animate={{ 
          width: isScrolled ? (window.innerWidth > 768 ? '70%' : '85%') : (window.innerWidth > 768 ? '90%' : '100%'),
          backgroundColor: isScrolled ? 'rgba(0, 0, 0, 0.8)' : 'rgba(15, 15, 15, 0.4)'
        }}
        transition={{ duration: 0.5, ease: [0.165, 0.84, 0.44, 1] }}
        id="navbar" 
        className={isScrolled ? 'scrolled' : ''}
      >
        <div className="logo">NS.</div>
        
        <ul className="nav-links">
          {navLinks.map((link) => (
            <li key={link.name}>
              <a href={link.href}>{link.name}</a>
            </li>
          ))}
        </ul>
        
        <a href="#contact" className="contact-btn">Contact Us</a>

        <button 
          className="mobile-menu-btn" 
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
        >
          {isMobileMenuOpen ? <X size={28} /> : <Menu size={28} />}
        </button>
      </motion.nav>

      {/* Mobile Menu Overlay */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div 
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="mobile-overlay"
          >
            {navLinks.map((link) => (
              <a 
                key={link.name} 
                href={link.href} 
                className="mobile-nav-link"
                onClick={handleLinkClick}
              >
                {link.name}
              </a>
            ))}
            <a 
              href="#contact" 
              className="mobile-nav-link"
              onClick={handleLinkClick}
              style={{ color: 'var(--accent-red)' }}
            >
              Contact
            </a>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
};

export default Navbar;
