import React from 'react';
import { FaCode, FaHtml5, FaCss3Alt, FaJs, FaReact, FaWordpressSimple, FaBootstrap } from 'react-icons/fa';

const Skills = () => {
  const skills = [
    { name: 'C', className: 'c-bar' },
    { name: 'C++', className: 'cpp-bar' },
    { name: 'HTML', className: 'html-bar', icon: <FaHtml5 /> },
    { name: 'CSS', className: 'css-bar', icon: <FaCss3Alt /> },
    { name: 'JavaScript', className: 'js-bar', icon: <FaJs /> },
    { name: 'React', className: 'react-bar', icon: <FaReact /> },
    { name: 'Tailwind CSS', className: 'tailwind-bar' },
    { name: 'WordPress', className: 'wordpress-bar', icon: <FaWordpressSimple /> },
    { name: 'Bootstrap', className: 'bootstrap-bar', icon: <FaBootstrap /> },
    { name: 'Problem Solving', className: 'problem-solving-bar' }
  ];

  return (
    <section className="skills" id="skills">
      <div className="heading">
        <h2>Skills</h2>
        <span>My Skills</span>
      </div>
      <div className="skills-container">
        {skills.map((skill, index) => (
          <div key={index} className="">
            <div className="skill-item">
              <div className="skill-icon">{skill.icon || <FaCode />}</div>
              <h3>{skill.name}</h3>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Skills;
