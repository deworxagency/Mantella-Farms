import React, { useState } from 'react';
import './Home.css';
import Values from '../../components/Values/Values';
import Statistics from '../../components/Statistics/Statistics';
import ProductCard from '../../components/ProductCard/ProductCard';

const ArrowRight = ({ color = '#fff' }) => (
  <svg viewBox="0 0 24 24" width="16" height="16" fill="none">
    <path d="M5 12h14M13 6l6 6-6 6" stroke={color} strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"/>
  </svg>
);

const CheckIcon = () => (
  <svg viewBox="0 0 24 24" width="18" height="18" fill="none">
    <path d="M20 6L9 17l-5-5" stroke="#FF6500" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"/>
  </svg>
);

const LeafDecor = () => (
  <svg viewBox="0 0 72.61 97.64" className="leaf-decor">
    <path fill="#FF6500" d="M40.67,97.58c-2.79-16.36-2.74-16.42,10.3-24.67,3.71-2.35,7.29-4.9,10.93-7.36-.45-.82-.91-1.64-1.36-2.46-6.57,3.35-13.14,6.7-19.61,10-6.96-14,2.83-20.21,13.29-26.1-.65-.59-1.3-1.18-1.94-1.77-3.97,1.65-7.94,3.31-13.32,5.55-.4-8.25-.77-16.03-1.14-23.82-.97,0-1.94-.02-2.92-.03-.33,7.56-.67,15.12-1.04,23.6-4.85-1.89-9.01-3.51-13.18-5.13l-1.89,1.65c10.21,5.87,19.77,12.04,13.02,26.04-6.15-3.12-12.75-6.46-19.34-9.8-.52.79-1.05,1.58-1.57,2.36,3.64,2.46,7.21,5.02,10.92,7.37,12.89,8.17,13.07,8.54,10.26,24.64-25.76-3.66-39.85-28.64-27.6-52.11C12.64,29.88,24.2,15.99,35.13,0c15.08,17.45,29.72,32.22,35.94,52.64,6.47,21.23-8.23,42.58-30.41,44.94Z"/>
  </svg>
);

const EXCELLENCE_FEATURES = [
  ['Bulk Orders', 'High Quality Produce'],
  ['Competitive Pricing', 'Ethical Farming'],
  ['Long-Term Partnerships', 'Trusted By Community'],
];

const PRODUCTS = [
  {
    name: 'Fresh Vegetables',
    image: '/images/vegetables.jpg',
    details: {
      price: 'From R25 / bag',
      desc: 'Hand-picked seasonal vegetables grown right on our farm. Available in mixed bags or by single variety — spinach, butternut, beetroot, green peppers, and more.',
      highlights: ['Mixed seasonal varieties', 'Bulk orders welcome', 'Delivery available'],
    },
  },
  {
    name: 'Fresh Tomatoes',
    image: '/images/tomatoes.jpg',
    details: {
      price: 'From R30 / kg',
      desc: 'Vine-ripened and full of flavour. Our tomatoes are picked at peak freshness and available year-round in various grades for retailers and restaurants.',
      highlights: ['Sold per kg or per box (10 kg)', 'Minimum bulk order: 5 kg', 'Available year-round'],
    },
  },
  {
    name: 'Fresh Cabbage',
    image: '/images/cabbage.jpg',
    details: {
      price: 'From R15 / head',
      desc: 'Crisp, dense cabbages grown in our open fields. Sold per head or by the crate — ideal for retailers, restaurants, and community buyers.',
      highlights: ['Per head or per crate (12 heads)', 'Firm, dense heads', 'Great for bulk buyers'],
    },
  },
  {
    name: 'Soy Beans',
    image: '/images/IMG_1683.JPG',
    details: {
      price: 'Contact for pricing',
      desc: 'High-protein soy beans grown on our fields. Available in bulk for feed suppliers, processors, and wholesalers.',
      highlights: ['Sold per bag or per tonne', 'High protein content', 'Bulk orders welcome'],
    },
  },
  {
    name: 'Free-Range Chicken',
    image: '/images/Chicken%20image.png',
    details: {
      price: 'Contact for pricing',
      desc: 'Farm-raised free-range chickens — healthy, naturally fed, and available live or dressed for retailers and households.',
      highlights: ['Free-range and naturally fed', 'Available live or dressed', 'Bulk orders available'],
    },
  },
  {
    name: 'Field Crops',
    image: '/images/Crop%20%20.png',
    details: {
      price: 'Contact for pricing',
      desc: 'Seasonal field crops grown across our farmland — maize, sunflower, and more. Sold in bulk direct from the farm.',
      highlights: ['Multiple crop varieties', 'Sold per bag or tonne', 'Direct from farm pricing'],
    },
  },
  {
    name: 'Cattle',
    image: '/images/Cows%20.png',
    details: {
      price: 'Contact for pricing',
      desc: 'Healthy, well-reared cattle available for purchase. Ideal for feedlot operations, butcheries, and commercial buyers.',
      highlights: ['Grass and feed-reared', 'Available in various sizes', 'Contact for current stock'],
    },
  },
];

const Home = ({ navigate }) => {
  const [expandedCard, setExpandedCard] = useState(null);

  const toggleCard = (name) =>
    setExpandedCard(prev => (prev === name ? null : name));

  return (
  <div className="home">
    {/* ── Hero ── */}
    <section className="hero" style={{ backgroundImage: "url('/images/hero-bg.jpg')" }}>
      <div className="hero-overlay" />
      <div className="hero-inner">
        <div className="hero-content">
          <p className="hero-eyebrow">FRESH. RELIABLE. COMMUNITY-GROWN</p>
          <h1 className="hero-heading">
            Quality Produce.<br />Healthy Livestock.
          </h1>
          <p className="hero-sub">
            With over a decade of experience,<br />ensuring food security for Mzanzi.
          </p>
          <div className="hero-actions">
            <button className="btn-primary" onClick={() => navigate('products')}>
              Our Products <ArrowRight />
            </button>
            <button className="btn-outline" onClick={() => navigate('contact')}>
              Contact Us
            </button>
          </div>
        </div>
      </div>
    </section>

    {/* ── Values bar ── */}
    <Values />

    {/* ── What We Do ── */}
    <section className="what-we-do">
      <div className="what-we-do-inner">
        <h2 className="section-heading">What we do</h2>
        <div className="section-underline" />
        <p className="what-we-do-text">
          We are a driven mixed black-owned farming operation providing top-quality products
          while building community through our agricultural practices and shared values.
        </p>
        <Statistics />
      </div>
    </section>

    {/* ── Featured Product – XL Eggs ── */}
    <section className="featured-product">
      <div className="featured-product-inner">
        <div className="featured-product-image-wrap">
          <span className="top-rated-badge">Top<br />Rated</span>
          <img src="/images/eggs.png" alt="XL Eggs" className="featured-product-img" />
        </div>
        <div className="featured-product-content">
          <h2 className="featured-product-title">XL Eggs for R60</h2>
          <p className="featured-product-desc">
            Freshly laid quality eggs, produced to perfection, with high amount of
            protein. Which come in large size giving you the best for less.
          </p>
          <button className="btn-primary" onClick={() => navigate('products')}>
            Special Offer <ArrowRight />
          </button>
        </div>
      </div>
    </section>

    {/* ── Featured Catalogue ── */}
    <section className="catalogue">
      <div className="catalogue-inner">
        <h2 className="section-heading">Featured Catalogue</h2>
        <div className="section-underline" />
        <div className="catalogue-grid">
          {PRODUCTS.map(({ name, image, details }) => (
            <ProductCard
              key={name}
              name={name}
              image={image}
              details={details}
              expanded={expandedCard === name}
              onArrowClick={() => toggleCard(name)}
              onClick={() => navigate('products')}
              size="normal"
            />
          ))}
        </div>
      </div>
    </section>

    {/* ── Excellence ── */}
    <section className="excellence">
      <div className="excellence-inner">
        <div className="excellence-left">
          <h2 className="excellence-heading">Over a decade of farming excellence</h2>
          <LeafDecor />
        </div>
        <div className="excellence-right">
          {EXCELLENCE_FEATURES.map(([left, right]) => (
            <React.Fragment key={left}>
              <div className="excellence-feature">
                <CheckIcon /> <span>{left}</span>
              </div>
              <div className="excellence-feature">
                <CheckIcon /> <span>{right}</span>
              </div>
            </React.Fragment>
          ))}
        </div>
      </div>
    </section>
  </div>
  );
};

export default Home;
