import React from 'react';
import '../Clones-2.css';

const Footer = () => {
    return (
        <footer className="footer">
            <div className="container">
                <div className="footer-content">
                    <div className="footer-section">
                        <h3 className="footer-title">Site menu</h3>
                        <ul className="footer-links">
                            <li><a href="#">Our Story</a></li>
                            <li><a href="#">Search</a></li>
                            <li><a href="#">Terms and Conditions</a></li>
                            <li><a href="#">Privacy Policy</a></li>
                            <li><a href="#">Track Your Order</a></li>
                            <li><a href="#">Safetea</a></li>
                            <li><a href="#">Download App</a></li>
                            <li><a href="#">My account</a></li>
                        </ul>
                    </div>
                    <div className="footer-section">
                        <h3 className="footer-title">Get in touch</h3>
                        <a href="tel:18001202424" className="footer-phone">18001202424</a>
                    </div>
                    <div className="footer-section">
                        <h3 className="footer-title">Follow us</h3>
                        <div className="social-links">
                            <a href="#" className="social-link" aria-label="Instagram">📷</a>
                            <a href="#" className="social-link" aria-label="Facebook">f</a>
                            <a href="#" className="social-link" aria-label="Twitter">🐦</a>
                        </div>
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
