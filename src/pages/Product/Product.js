import React from 'react';
import './Product.css';

const CheckMini = () => (
  <svg viewBox="0 0 16 16" width="13" height="13" fill="none">
    <path d="M3 8l3.5 3.5L13 5" stroke="#FF6500" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
  </svg>
);

const PRODUCTS = [
  {
    name: 'Fresh Vegetables',
    image: '/images/vegetables.jpg',
    badge: 'Seasonal',
    price: 'From R25 / bag',
    desc: 'Hand-picked seasonal vegetables grown right on our farm. Available in mixed bags or by single variety — spinach, butternut, beetroot, green peppers, and more.',
    highlights: ['Mixed seasonal varieties', 'Sold per bag or by bulk crate', 'Delivery available'],
  },
  {
    name: 'Fresh Tomatoes',
    image: '/images/tomatoes.jpg',
    badge: 'Best Seller',
    price: 'From R30 / kg',
    desc: 'Vine-ripened and full of flavour. Our tomatoes are picked at peak freshness and are available year-round in various grades for retailers and restaurants.',
    highlights: ['Sold per kg or per 10 kg box', 'Minimum bulk order: 5 kg', 'Available year-round'],
  },
  {
    name: 'Fresh Cabbage',
    image: '/images/cabbage.jpg',
    badge: 'In Season',
    price: 'From R15 / head',
    desc: 'Crisp, dense cabbages grown in our open fields. Sold per head or by the crate — ideal for retailers, restaurants, and community buyers.',
    highlights: ['Per head or per crate (12 heads)', 'Firm, dense heads', 'Great for bulk buyers'],
  },
  {
    name: 'XL Eggs',
    image: '/images/eggs.png',
    badge: 'Top Rated',
    price: 'R60 for 30 eggs',
    desc: 'Freshly laid, high-quality eggs produced to perfection. Our hens lay over 5 000 eggs daily, giving you consistent supply and outstanding freshness.',
    highlights: ['30-egg tray: R60', '5 000+ eggs produced daily', 'Bulk trays available on order'],
  },
  {
    name: 'Sweet Corn',
    image: '/images/maize.jpeg',
    badge: 'In Season',
    price: 'From R8 / cob',
    desc: 'Golden sweet corn grown fresh on the farm. Available in season and perfect for retailers, street vendors, and community kitchens.',
    highlights: ['Sold per cob or per bulk bag', 'Naturally grown, no additives', 'Seasonal availability'],
  },
  {
    name: 'Soy Beans',
    image: '/images/IMG_1683.JPG',
    badge: 'Available',
    price: 'Contact for pricing',
    desc: 'High-protein soy beans grown on our fields. Available in bulk for feed suppliers, processors, and wholesalers.',
    highlights: ['Sold per bag or per tonne', 'High protein content', 'Bulk orders welcome'],
  },
  {
    name: 'Free-Range Chicken',
    image: '/images/Chicken%20image.png',
    badge: 'Available',
    price: 'Contact for pricing',
    desc: 'Farm-raised free-range chickens — naturally fed and available live or dressed for retailers and households.',
    highlights: ['Free-range and naturally fed', 'Available live or dressed', 'Bulk orders available'],
  },
  {
    name: 'Cattle',
    image: '/images/Cows%20.png',
    badge: 'Available',
    price: 'Contact for pricing',
    desc: 'Healthy, well-reared cattle available for purchase. Ideal for feedlot operations, butcheries, and commercial buyers.',
    highlights: ['Grass and feed-reared', 'Various sizes available', 'Contact for current stock'],
  },
  {
    name: 'Sheep',
    image: '/images/sheeps.jpeg',
    badge: 'Available',
    price: 'Contact for pricing',
    desc: 'Quality sheep raised on open pasture. Suitable for slaughter, breeding stock, and community buyers looking for healthy animals.',
    highlights: ['Open-pasture raised', 'Suitable for slaughter or breeding', 'Delivery negotiable'],
  },
  {
    name: 'Pigs',
    image: '/images/pigs.jpeg',
    badge: 'Available',
    price: 'Contact for pricing',
    desc: 'Well-fed farm pigs raised in a healthy environment. Available for butcheries, restaurants, and bulk buyers.',
    highlights: ['Farm-raised in healthy conditions', 'Available per head', 'Contact for current stock'],
  },
];

const BADGE_COLORS = {
  'Best Seller': '#FF6500',
  'Top Rated':   '#FF6500',
  'In Season':   '#2e7d32',
  'Seasonal':    '#1565c0',
  'Available':   '#6a1b9a',
};

const ProductDetailCard = ({ name, image, badge, price, desc, highlights }) => (
  <div className="pd-card">
    <div className="pd-card-image">
      {image
        ? <img src={image} alt={name} />
        : <div className="pd-card-placeholder" />}
      {badge && (
        <span
          className="pd-badge"
          style={{ background: BADGE_COLORS[badge] || '#FF6500' }}
        >
          {badge}
        </span>
      )}
    </div>
    <div className="pd-card-body">
      <div className="pd-card-header">
        <h3 className="pd-card-name">{name}</h3>
        <span className="pd-card-price">{price}</span>
      </div>
      <p className="pd-card-desc">{desc}</p>
      <ul className="pd-card-highlights">
        {highlights.map(h => (
          <li key={h}><CheckMini />{h}</li>
        ))}
      </ul>
    </div>
  </div>
);

const Product = () => (
  <div className="products-page">
    <div className="products-hero">
      <div className="products-hero-inner">
        <p className="products-hero-eyebrow">WHAT WE GROW & RAISE</p>
        <h1 className="products-hero-title">Our Products</h1>
        <p className="products-hero-sub">
          From fresh vegetables and eggs to quality livestock — everything straight from our farm to you.
        </p>
      </div>
    </div>

    <div className="products-grid-section">
      <div className="products-grid">
        {PRODUCTS.map(p => (
          <ProductDetailCard key={p.name} {...p} />
        ))}
      </div>
    </div>
  </div>
);

export default Product;
