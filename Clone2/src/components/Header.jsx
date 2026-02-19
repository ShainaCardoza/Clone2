import React from 'react';
import '../Clones-2.css';

const Header = ({ isDarkMode, toggleTheme, openModal }) => {

    const scrollToSection = (e, id) => {
        e.preventDefault();
        const element = document.getElementById(id);
        if (element) {
            element.scrollIntoView({ behavior: 'smooth' });
        }
    };

    return (
        <header className="header">
            <div className="container">
                <div className="header-content">
                    <div className="logo">
                        <h1>Chaayos</h1>
                    </div>
                    <nav className="main-nav">
                        <ul>
                            <li><a href="#shop" onClick={(e) => scrollToSection(e, 'shop')}>Shop</a></li>
                            {/* Mapping About Us to Home for now, or could act as a 'Back to Top' */}
                            <li><a href="#home" onClick={(e) => scrollToSection(e, 'home')}>About Us</a></li>
                            <li><a href="#stores" onClick={(e) => scrollToSection(e, 'stores')}>Cafe Locator</a></li>
                        </ul>
                    </nav>
                    <div className="header-actions">
                        <button className="search-btn" aria-label="Search">
                            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                                <circle cx="11" cy="11" r="8"></circle>
                                <path d="m21 21-4.35-4.35"></path>
                            </svg>
                        </button>
                        <button className="user-btn" aria-label="User" id="loginBtn" onClick={openModal}>
                            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                                <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"></path>
                                <circle cx="12" cy="7" r="4"></circle>
                            </svg>
                        </button>
                        <button className="theme-toggle-btn" aria-label="Toggle Dark Mode" id="themeToggle" onClick={toggleTheme}>
                            {isDarkMode ? '☀️' : '🌙'}
                        </button>
                    </div>
                </div>
            </div>
        </header>
    );
};

export default Header;
