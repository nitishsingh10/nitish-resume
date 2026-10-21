import React, { useEffect, useState } from 'react';
import { AnimatePresence, motion, useReducedMotion } from 'framer-motion';
import { ArrowUpRight, Menu, X } from 'lucide-react';

const links = [
  { label: 'Projects', href: '#work' },
  { label: 'Experience', href: '#experience' },
  { label: 'Skills', href: '#skills' },
  { label: 'Services', href: '#services' },
  { label: 'About', href: '#about' },
];

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const reduceMotion = useReducedMotion();

  useEffect(() => {
    const update = () => setScrolled(window.scrollY > 12);
    update();
    window.addEventListener('scroll', update, { passive: true });
    return () => window.removeEventListener('scroll', update);
  }, []);

  useEffect(() => {
    const closeOnEscape = (event) => {
      if (event.key === 'Escape') setMenuOpen(false);
    };
    window.addEventListener('keydown', closeOnEscape);
    return () => window.removeEventListener('keydown', closeOnEscape);
  }, []);

  const closeMenu = () => setMenuOpen(false);

  return (
    <header className={`site-header${scrolled ? ' is-scrolled' : ''}`}>
      <nav className="nav-inner" aria-label="Main navigation">
        <a className="brand" href="#home" onClick={closeMenu} aria-label="Nitish Singh, home">
          <span className="brand-monogram">N<span>.</span></span>
          <span className="brand-name">NITISH SINGH</span>
        </a>

        <div className="desktop-links">
          {links.map((link, index) => (
            <a href={link.href} key={link.href}><span>0{index + 1}</span>{link.label}</a>
          ))}
        </div>

        <a className="nav-cta" href="#contact">Let&apos;s connect <ArrowUpRight size={15} /></a>

        <button
          className="menu-toggle"
          type="button"
          onClick={() => setMenuOpen((open) => !open)}
          aria-label={menuOpen ? 'Close navigation menu' : 'Open navigation menu'}
          aria-expanded={menuOpen}
          aria-controls="mobile-navigation"
        >
          {menuOpen ? <X size={21} /> : <Menu size={21} />}
        </button>
      </nav>

      <AnimatePresence>
        {menuOpen && (
          <motion.div
            id="mobile-navigation"
            className="mobile-menu"
            initial={reduceMotion ? false : { opacity: 0, y: -8 }}
            animate={{ opacity: 1, y: 0 }}
            exit={reduceMotion ? undefined : { opacity: 0, y: -8 }}
            transition={{ duration: reduceMotion ? 0 : 0.2 }}
          >
            {links.map((link, index) => (
              <a href={link.href} key={link.href} onClick={closeMenu}>
                <span>0{index + 1}</span>{link.label}<ArrowUpRight size={17} />
              </a>
            ))}
            <a className="mobile-connect" href="#contact" onClick={closeMenu}>Let&apos;s connect <ArrowUpRight size={17} /></a>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
};

export default Navbar;
