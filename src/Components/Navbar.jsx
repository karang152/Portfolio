import React, { useState, useEffect } from 'react';
import { FaMoon, FaSun, FaBars } from 'react-icons/fa';

const Navbar = () => {
    const [isDarkMode, setIsDarkMode] = useState(false);
    const [isNavbarActive, setIsNavbarActive] = useState(false);

    // Toggle dark mode
    const toggleDarkMode = () => {
        setIsDarkMode(prevMode => !prevMode);
    };

    // Apply dark mode classes
    useEffect(() => {
        if (isDarkMode) {
            document.body.classList.add('active');
        } else {
            document.body.classList.remove('active');
        }
    }, [isDarkMode]);

    // Handle scroll for header shadow
    useEffect(() => {
        const handleScroll = () => {
            let header = document.querySelector('header');
            if (header) {
                header.classList.toggle('shadow', window.scrollY > 0);
            }
        };

        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    // Handle navbar visibility on scroll
    useEffect(() => {
        const handleNavbarScroll = () => {
            let navbar = document.querySelector('.navbar');
            if (navbar) {
                navbar.classList.remove('active');
            }
        };

        window.addEventListener('scroll', handleNavbarScroll);
        return () => window.removeEventListener('scroll', handleNavbarScroll);
    }, []);

    return (
        <header>
             <div id="menu-icon" onClick={() => setIsNavbarActive(!isNavbarActive)}>
                <FaBars />
                
            </div>
            <div className="logo">
                <a href="#">Portfolio</a>
            </div>
            <nav className={`navbar ${isNavbarActive ? 'active' : ''}`}>
                <a href="#home">Home</a>
                <a href="#about">About</a>
                <a href="#skills">Skills</a>
                <a href="#services">Services</a>
                <a href="#portfolio">Portfolio</a>
                <a href="#contact">Contact</a>
            </nav>
            <div className='' id="darkmode" onClick={toggleDarkMode}>
                {isDarkMode ? <FaSun className="bx bx-sun" /> : <FaMoon className="bx bx-moon" />}
            </div>
           
           
        </header>
        
    );
};

export default Navbar;
