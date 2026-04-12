import React from 'react';

const Footer = () => {
  return (
    <footer className="w-full py-12 px-[8%] border-t border-white/5 bg-bg-black">
      <div className="flex flex-col md:flex-row justify-between items-center gap-6 mb-12">
        <div className="text-center md:text-left">
          <p className="text-text-primary font-bold text-lg mb-1">+91 93214 83542</p>
          <p className="text-text-muted text-sm tracking-wide">nitishsingh9hfhs@gmail.com</p>
        </div>
      </div>
      <div className="text-center text-text-muted/40 text-xs tracking-widest uppercase">
        &copy; {new Date().getFullYear()} Nitish Singh. All rights reserved.
      </div>
    </footer>
  );
};

export default Footer;
