import React from 'react';
import blog1 from "../images/blog-4.png"
import blog2 from "../images/blog-2.png"
import blog3 from "../images/blog-3.png"


const Portfolio = () => {
  return (
    <section className="portfolio" id="portfolio">
      <div className="heading">
        <h2>Portfolio</h2>
        <span>Our Recent Work</span>
      </div>
      <div className="portfolio-content">
        <a href="https://karang152.github.io/QR-Generator/">
        <div className="portfolio-img">
          <img src={blog1} alt=""/>
        </div>
        </a>
        <a href="https://karang152.github.io/calculator/">
        <div className="portfolio-img">
          <img src={blog2} alt=""/>
        </div>
        </a>
        <a href="#">
        <div className="portfolio-img">
          <img src={blog3} alt=""/>
        </div>
        </a>
      </div>
    </section>
  );
}

export default Portfolio;
