// Sticky Navbar
const handleScroll = () => {
    let header = document.querySelector('header');
    header.classList.toggle('shadow', window.scrollY > 0);
};

const handleMenuClick = () => {
    let navbar = document.querySelector('.navbar');
    navbar.classList.toggle('active');
};

const handleWindowScroll = () => {
    let navbar = document.querySelector('.navbar');
    navbar.classList.remove('active');
};

// Dark Mode
const handleDarkModeToggle = () => {
    let darkmode = document.querySelector('#darkmode');
    if (darkmode.classList.contains('fa-moon')) {
        darkmode.classList.replace('fa-moon', 'fa-sun');
        document.body.classList.add('active');
    } else {
        darkmode.classList.replace('fa-sun', 'fa-moon');
        document.body.classList.remove('active');
    }
};

export { handleScroll, handleMenuClick, handleWindowScroll, handleDarkModeToggle };
