import React from 'react';
import '../Clones-2.css';

const ProductCard = ({ image, label, title, badges, cdnBase }) => {
    return (
        <div className={label ? "product-card" : "product-item"}>
            {badges && badges.map((badge, index) => (
                <div key={index} className={badge.type === 'sale' ? 'sale-badge' : 'new-badge'}>{badge.text}</div>
            ))}

            {label ? (
                <>
                    <img src={`${cdnBase}${image}`} alt={title} className={`product-image ${label.toLowerCase().replace(' ', '-')}`} />
                    <div className="product-label">{label}</div>
                    <h3 className="product-name" dangerouslySetInnerHTML={{ __html: title }}></h3>
                </>
            ) : (
                <>
                    <img src={`${cdnBase}${image}`} alt={title} className="product-item-image" />
                    <h3 className="product-item-title">{title}</h3>
                </>
            )}
        </div>
    );
};

export default ProductCard;
