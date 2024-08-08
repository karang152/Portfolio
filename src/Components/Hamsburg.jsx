import React, { useState, useEffect } from 'react';
import { FaMoon, FaSun, FaBars } from 'react-icons/fa';

const Hamsburg = () => {
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

    // Handle navbar visibility on scroll and outside click
    useEffect(() => {
        const handleNavbarScroll = () => {
            setIsNavbarActive(false);
        };

        const handleClickOutside = (event) => {
            const navbar = document.querySelector('.navbar');
            const menuIcon = document.getElementById('menu-icon');
            if (navbar && !navbar.contains(event.target) && !menuIcon.contains(event.target)) {
                setIsNavbarActive(false);
            }
        };

        window.addEventListener('scroll', handleNavbarScroll);
        document.addEventListener('mousedown', handleClickOutside);

        return () => {
            window.removeEventListener('scroll', handleNavbarScroll);
            document.removeEventListener('mousedown', handleClickOutside);
        };
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
                <a href="#home" onClick={() => setIsNavbarActive(false)}>Home</a>
                <a href="#about" onClick={() => setIsNavbarActive(false)}>About</a>
                <a href="#skills" onClick={() => setIsNavbarActive(false)}>Skills</a>
                <a href="#services" onClick={() => setIsNavbarActive(false)}>Services</a>
                <a href="#portfolio" onClick={() => setIsNavbarActive(false)}>Portfolio</a>
                <a href="#contact" onClick={() => setIsNavbarActive(false)}>Contact</a>
               
            </nav>
            <div id="darkmode" onClick={toggleDarkMode}>
                    {isDarkMode ? <FaSun className="bx bx-sun" /> : <FaMoon className="bx bx-moon" />}
                </div>
        </header>
    );
};

export default Hamsburg;
