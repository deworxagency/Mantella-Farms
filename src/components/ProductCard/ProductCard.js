import React from 'react';
import './ProductCard.css';

const ArrowRight = () => (
  <svg viewBox="0 0 24 24" width="16" height="16" fill="none">
    <path d="M5 12h14M13 6l6 6-6 6" stroke="#fff" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"/>
  </svg>
);

const CheckMini = () => (
  <svg viewBox="0 0 16 16" width="13" height="13" fill="none">
    <path d="M3 8l3.5 3.5L13 5" stroke="#FF6500" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
  </svg>
);

const ProductCard = ({ image, name, onClick, size = 'normal', details, expanded, onArrowClick }) => {
  const handleArrow = (e) => {
    e.stopPropagation();
    if (onArrowClick) onArrowClick();
    else if (onClick) onClick();
  };

  return (
    <div className={`product-card product-card--${size}`} onClick={onClick}>
      <div className="product-card-image">
        {image
          ? <img src={image} alt={name} />
          : <div className="product-card-placeholder" />}
      </div>

      <div className="product-card-footer">
        <span className="product-card-name">{name}</span>
        <button
          className={`arrow-circle${expanded ? ' arrow-circle--open' : ''}`}
          aria-label={expanded ? `Close ${name}` : `View ${name}`}
          onClick={handleArrow}
        >
          <ArrowRight />
        </button>
      </div>

      {details && (
        <div className={`product-card-details${expanded ? ' product-card-details--open' : ''}`}>
          {details.price && (
            <p className="product-card-price">{details.price}</p>
          )}
          <p className="product-card-desc">{details.desc}</p>
          <ul className="product-card-highlights">
            {details.highlights.map(h => (
              <li key={h}><CheckMini />{h}</li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
};

export default ProductCard;
