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
    <header className="fixed top-0 w-full flex justify-center p-6 md:px-4 z-[1000]">
      <motion.nav 
        animate={{ 
          width: isScrolled ? (window.innerWidth > 768 ? '70%' : '90%') : (window.innerWidth > 768 ? '90%' : '100%'),
          backgroundColor: isScrolled ? 'rgba(0, 0, 0, 0.8)' : 'rgba(15, 15, 15, 0.4)'
        }}
        transition={{ duration: 0.5, ease: [0.165, 0.84, 0.44, 1] }}
        className="w-full max-w-[1100px] h-16 backdrop-blur-3xl border border-white/10 rounded-full flex justify-between items-center px-6 relative"
      >
        <div className="text-xl font-bold tracking-tighter">NS.</div>
        
        <ul className="hidden md:flex gap-8 list-none">
          {navLinks.map((link) => (
            <li key={link.name}>
              <a 
                href={link.href}
                className="text-text-muted text-[0.85rem] font-bold uppercase tracking-wider hover:text-white transition-colors duration-300 no-underline"
              >
                {link.name}
              </a>
            </li>
          ))}
        </ul>
        
        <a 
          href="#contact" 
          className="hidden md:block px-6 py-2.5 bg-white text-black rounded-full font-bold text-xs transition-all duration-300 hover:bg-accent-red hover:text-white hover:-translate-y-0.5 hover:shadow-[0_10px_20px_rgba(255,45,85,0.2)]"
        >
          Contact Us
        </a>

        <button 
          className="md:hidden bg-transparent border-none text-white z-[1001]" 
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
            className="fixed inset-0 w-full h-screen bg-black/98 backdrop-blur-xl z-[1000] flex flex-col justify-center items-center gap-10"
          >
            {navLinks.map((link) => (
              <a 
                key={link.name} 
                href={link.href} 
                className="text-2xl font-bold tracking-tight text-text-muted hover:text-white transition-colors"
                onClick={handleLinkClick}
              >
                {link.name}
              </a>
            ))}
            <a 
              href="#contact" 
              className="text-2xl font-bold tracking-tight text-accent-red transition-colors"
              onClick={handleLinkClick}
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
