import React from 'react';
import '../Clones-2.css';

const Hero = ({ cdnBase }) => {
    return (
        <section className="hero" id="home">
            <div className="container">
                <div className="hero-content">
                    <div className="hero-text">
                        <h2 className="hero-title">India's biggest<br />& most loved <span className="highlight">Chai<br />and Snacks</span> Cafe</h2>
                        <p className="hero-subtitle">200+ Cafes in Delhi, Mumbai, Bangalore, Pune,<br />Hyderabad, Chennai & more to come</p>
                    </div>
                    <div className="hero-image">
                        <img src={`${cdnBase}hero-chai.png`} alt="Chai and Snacks" className="hero-img-element" />
                    </div>
                </div>
                <div className="hero-footer">
                    <div className="rating">
                        <span className="rating-text">Best rated cafe with 4.4</span>
                        <span className="star">★</span>
                        <span className="rating-text">Rating</span>
                    </div>
                    <div className="contact-number">
                        <span>For queries and support 📞 1800 120 2424</span>
                    </div>
                    <button className="download-btn" onClick={() => alert("Redirecting to App Store...")}>DOWNLOAD APP</button>
                </div>
                <div className="featured-in">
                    <span className="featured-text">FEATURED IN</span>
                    <div className="media-logos">
                        <img src={`${cdnBase}forbes.png`} alt="Forbes" />
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Hero;
