import React from 'react';
const NavBar = () => {
    return (
        <nav className="navbar">
            <ul className="navbar-list">
                <li><a href="#home">Home</a></li>
                <li><a href="#about">Projects</a></li>
                <li><a href="#contact">Contact</a></li>
                 <li><a href="#blogs">Blogs</a></li>

            </ul>
        </nav>
    );
};

export default NavBar;