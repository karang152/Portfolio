import React from 'react';
import { FaGithub, FaLinkedinIn } from 'react-icons/fa';
import { FaXTwitter } from "react-icons/fa6";
import { SiLeetcode, SiHackerrank } from "react-icons/si";
import Image1 from "../images/profile.png";

const Home = () => {
  return (
    <section className="home" id="home">
      <div className="social">
        <a href="https://www.linkedin.com/in/karan-kumar-gupta-8608a0253/" target="_blank" rel="noopener noreferrer"><FaLinkedinIn /></a>
        <a href="https://twitter.com/KaranGu65844741" target="_blank" rel="noopener noreferrer"><FaXTwitter /></a>
        <a href="https://github.com/karang152" target="_blank" rel="noopener noreferrer"><FaGithub /></a>
        <a href="https://leetcode.com/u/karan_kumar_gupta" target="_blank" rel="noopener noreferrer"><SiLeetcode /></a>
        <a href="https://www.hackerrank.com/profile/karang152btecha1" target="_blank" rel="noopener noreferrer"><SiHackerrank /></a>
      </div>
      <div className="home-img">
        <img src={Image1} alt="Karan Gupta" />
      </div>
      <div className="home-text">
        <span>Hello, I'm</span>
        <h1>Karan Kumar Gupta</h1>
        <h2>Frontend Developer</h2>
        <p>Passionate about building beautiful and functional web applications. Let's create something amazing together!</p>
        <a href="#contact" className="btn">Contact Me</a>
      </div>
    </section>
  );
}

export default Home;
