import React from 'react';
import { FaCode, FaServer, FaBrush, FaWordpress } from 'react-icons/fa'; // Import React Icons

const Services = () => {
  return (
    <section className="services" id="services">
      <div className="heading">
        <h2>Services</h2>
        <span>Our Services</span>
      </div>
      <div className="services-content">
        <div className="services-box">
          <FaCode size={50} className="icon" /> {/* Web Development Icon */}
          <h3>Frontend Development</h3>
          <a href=" ">Learn More</a>
        </div>
        <div className="services-box">
          <FaServer size={50} className="icon" /> {/* Backend Development Icon */}
          <h3>Backend Development</h3>
          <a href=" ">Learn More</a>
        </div>
        <div className="services-box">
          <FaBrush size={50} className="icon" /> {/* UI/UX Design Icon */}
          <h3>UI/UX Design</h3>
          <a href=" ">Learn More</a>
        </div>
        <div className="services-box">
          <FaWordpress size={50} className="icon" /> {/* Wordpress Developer Icon */}
          <h3>WordPress</h3>
          <a href=" ">Learn More</a>
        </div>
      </div>
    </section>
  );
}

export default Services;
