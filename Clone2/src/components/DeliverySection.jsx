import React from 'react';
import '../Clones-2.css';

const DeliverySection = ({ cdnBase, onShowInfo }) => {
    return (
        <section className="delivery-section" id="delivery">
            <div className="container">
                <h2 className="section-title">Chai Delivery</h2>
                <div className="delivery-card">
                    <div className="delivery-content">
                        <h3>Get your <span className="chai-text">Chai</span><br />at home</h3>
                        <p>We deliver <strong>Hot chai</strong> in<br />specially designed kettle</p>
                        <button className="order-now-btn" onClick={() => onShowInfo("Order feature coming soon!")}>Order Now</button>
                    </div>
                    <div className="delivery-image-container">
                        <img src={`${cdnBase}delivery_banner_img.png`} alt="Chai Delivery" className="delivery-product-img" />
                    </div>
                </div>
            </div>
        </section>
    );
};

export default DeliverySection;
