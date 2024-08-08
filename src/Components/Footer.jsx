import React from 'react';
import { FaFacebook, FaTwitter, FaInstagram, FaYoutube } from 'react-icons/fa'; 

const Footer = () => {
  return (
    <div className="footer">
      <h2>Portfolio</h2>
      <div className="footer-social">
        <a href="#" aria-label="Facebook"><FaFacebook size={24} /></a>
        <a href="#" aria-label="Twitter"><FaTwitter size={24} /></a>
        <a href="#" aria-label="Instagram"><FaInstagram size={24} /></a>
        <a href="#" aria-label="YouTube"><FaYoutube size={24} /></a>
      </div>
    </div>
  );
}

export default Footer;
