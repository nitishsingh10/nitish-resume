import React from 'react';

const Footer = () => {
  return (
    <footer>
      <div className="footer-content">
        <div className="contact-details">
          <p>+91 93214 83542</p>
          <p>nitishsingh2t@gmail.com</p>
        </div>
        <div className="social-links">
          <a href="https://github.com/nitishsingh10" target="_blank" rel="noopener noreferrer">GitHub</a>
          <a href="https://linkedin.com/in/nitish-singh-001" target="_blank" rel="noopener noreferrer">LinkedIn</a>
        </div>
      </div>
      <div className="copyright">&copy; {new Date().getFullYear()} Nitish Singh. All rights reserved.</div>
    </footer>
  );
};

export default Footer;
