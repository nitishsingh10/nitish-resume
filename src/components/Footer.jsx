import React from 'react';
import { ArrowUpRight } from 'lucide-react';

const Footer = () => (
  <footer className="site-footer">
    <div className="layout-shell footer-main">
      <a className="footer-brand" href="#home">N<span>.</span></a>
      <p>Built in Bengaluru.<br /><span>Still becoming.</span></p>
      <a className="footer-top-link" href="#home">BACK TO TOP <ArrowUpRight size={14} /></a>
    </div>
    <div className="layout-shell footer-bottom">
      <span>© {new Date().getFullYear()} Nitish Singh</span>
      <span>COMPUTER SCIENCE · AI / ML · BENGALURU, INDIA</span>
    </div>
  </footer>
);

export default Footer;
