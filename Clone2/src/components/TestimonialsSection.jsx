import React, { useState } from 'react';
import '../Clones-2.css';

const TestimonialsSection = ({ testimonials, cdnBase }) => {
    const [currentIndex, setCurrentIndex] = useState(0);

    const handleDotClick = (index) => {
        setCurrentIndex(index);
    };

    // Calculate the testimonials to show based on currentIndex
    // Each dot represents a page of 3 testimonials
    const itemsPerPage = 3;
    const startIndex = currentIndex * itemsPerPage;
    const currentTestimonials = testimonials.slice(startIndex, startIndex + itemsPerPage);

    // Calculate total pages for dots
    const totalPages = Math.ceil(testimonials.length / itemsPerPage);

    return (
        <section className="testimonials-section">
            <div className="container">
                <h2 className="section-title">What Our Customers are Saying</h2>
                <div className="testimonials-grid">
                    {currentTestimonials.map((testimonial, index) => (
                        <div className="testimonial-card" key={startIndex + index} style={{ animation: 'fadeIn 0.5s' }}>
                            <div className="stars">★★★★★</div>
                            <p className="testimonial-text">{testimonial.text}</p>
                            <div className="testimonial-author">
                                <img src={`${cdnBase}${testimonial.image}`} alt={testimonial.author} className="author-avatar" />
                                <div className="author-info">
                                    <p className="author-name">{testimonial.author}</p>
                                    <p className="author-location">{testimonial.location}</p>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>

                <div className="testimonial-dots">
                    {[...Array(totalPages)].map((_, index) => (
                        <span
                            key={index}
                            className={`dot ${currentIndex === index ? 'active' : ''}`}
                            onClick={() => handleDotClick(index)}
                        ></span>
                    ))}
                </div>
            </div>
            <style>
                {`
                    @keyframes fadeIn {
                        from { opacity: 0; transform: translateY(10px); }
                        to { opacity: 1; transform: translateY(0); }
                    }
                `}
            </style>
        </section>
    );
};

export default TestimonialsSection;
