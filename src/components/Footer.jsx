import React from 'react';

const Footer = () => {
  return (
    <footer>
      <div className="footer-content">
        <div className="contact-details">
          <p>+91 93214 83542</p>
          <p>nitishsingh9hfhs@gmail.com</p>
        </div>
      </div>
      <div className="copyright">&copy; {new Date().getFullYear()} Nitish Singh. All rights reserved.</div>
    </footer>
  );
};

export default Footer;
