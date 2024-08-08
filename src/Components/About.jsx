import React from 'react';
import { FaRegUser } from "react-icons/fa";
import { FiPhone } from "react-icons/fi";
import { HiOutlineMail } from "react-icons/hi";
import about from "../images/about.png";
import resume from "../assets/resume.pdf";


const About = () => {
  return (
    <section className="about" id="about">
      <div className="heading" >
        <h2>About Me</h2>
        <span>Introduction</span>
      </div>
      <div className="about-container">
        <div className="about-img mt-0">
          <img src={about} alt="Karan Gupta"/>
        </div>
        <div className="about-text mt-4">
          <p>Hello! I'm Karan Kumar Gupta, a passionate Frontend Developer with a keen interest in creating visually appealing and user-friendly websites. I'm currently pursuing a BTech in Computer Science and Engineering with a focus on AI and ML. My goal is to leverage my skills in web development to contribute to innovative projects and continue learning and growing in the field.</p>
          <div className="information">
            <div className="info-box">
              <a href='#'><FaRegUser className="icon" /><span>Karan Kumar Gupta</span></a>
            </div>
            <div className="info-box">
              <a href="tel:+917667301112"><FiPhone className="icon"/><span>7667301112</span></a>
            </div>
            <div className="info-box">
              <a href="mailto:karang152btechaiml2025@kccitm.edu.in"><HiOutlineMail className="icon"/><span>karang152btechaiml2025@kccitm.edu.in</span></a>
            </div>
          </div>
          <a href={resume} className="btn1" download>Download CV</a>
        </div>
      </div>
    </section>
  );
}

export default About;
