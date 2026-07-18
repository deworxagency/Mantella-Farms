import React, { useState } from 'react';
import './About.css';

const FARM_PHOTOS = [
  { src: '/images/cabbage.jpg',      alt: 'Cabbage fields' },
  { src: '/images/Tractor.png',      alt: 'Farm tractor' },
  { src: '/images/Cows%20.png',      alt: 'Cattle' },
  { src: '/images/vegetables.jpg',   alt: 'Vegetable rows' },
];

const PRODUCE = [
  {
    name: 'Soy Beans',
    tag: 'Produce',
    desc: 'Our premium soybeans are grown with care to deliver exceptional quality, freshness, and nutritional value. Rich in protein and essential nutrients, they are perfect for food production, animal feed, and various agricultural uses. We are committed to sustainable farming practices that ensure healthy crops and reliable harvests.',
  },
  {
    name: 'Fresh Tomatoes',
    tag: 'Produce',
    desc: 'Our farm-fresh tomatoes are carefully grown to deliver outstanding flavor, vibrant color, and superior quality. Packed with vitamins and antioxidants, they are perfect for salads, cooking, sauces, and fresh market sales. We use sustainable farming practices to ensure every harvest meets the highest standards.',
  },
  {
    name: 'Fresh Cabbage',
    tag: 'Produce',
    desc: 'Our premium cabbages are cultivated with care to provide crisp texture, rich flavor, and excellent nutritional value. Ideal for fresh consumption, cooking, coleslaws, and food processing, they are harvested at peak freshness. We are dedicated to producing healthy, high-quality crops through responsible farming methods.',
  },
  {
    name: 'Fresh Spinach',
    tag: 'Produce',
    desc: 'Our nutrient-rich spinach is grown under optimal conditions to ensure freshness, tenderness, and exceptional quality. Loaded with essential vitamins, minerals, and antioxidants, it is perfect for salads, smoothies, and healthy meals. We follow sustainable farming practices to deliver spinach you can trust.',
  },
  {
    name: 'Premium Maize',
    tag: 'Produce',
    desc: 'Our high-quality maize is grown using proven farming practices to ensure strong yields, excellent grain quality, and dependable supply. Rich in essential nutrients and versatile in use, it is ideal for human consumption, animal feed, milling, and commercial agriculture. Every harvest is carefully managed to deliver clean, healthy, and market-ready maize.',
  },
  {
    name: 'Farm Fresh Eggs',
    tag: 'Eggs',
    desc: 'Our farm-fresh eggs are the cornerstone of our business, produced daily to deliver exceptional freshness, quality, and nutritional value. Available in convenient 30-tray bulk quantities, they are ideal for retailers, wholesalers, restaurants, bakeries, and households seeking a reliable supply. Our hens are carefully raised in a healthy environment to ensure consistently clean, nutritious, and great-tasting eggs.',
  },
  {
    name: 'Cattle',
    tag: 'Livestock',
    desc: 'Our healthy, well-raised cattle are bred and cared for to ensure excellent quality, strong growth, and outstanding productivity. Whether you\'re looking to expand your herd, improve breeding stock, or source quality livestock, our cattle are a dependable choice. Raised with proper nutrition and responsible farming practices, they are strong, healthy, and market-ready.',
  },
  {
    name: 'Sheep',
    tag: 'Livestock',
    desc: 'Our premium sheep are carefully raised to deliver excellent health, hardiness, and productivity. Ideal for breeding, meat production, or flock expansion, they are well-managed and suited to a variety of farming operations. We prioritize animal welfare and quality husbandry to ensure strong and healthy livestock.',
  },
  {
    name: 'Pigs',
    tag: 'Livestock',
    desc: 'Our farm-raised pigs are bred for quality, healthy growth, and superior performance. With excellent genetics and proper care, they are ideal for breeding programs, pork production, or expanding your livestock operation. We are committed to raising strong, healthy animals through responsible farming practices.',
  },
];

const TAG_COLORS = {
  Produce:   { bg: '#e8f5e9', color: '#2e7d32' },
  Eggs:      { bg: '#fff3e0', color: '#e65100' },
  Livestock: { bg: '#f3e5f5', color: '#6a1b9a' },
};

const AboutProductCard = ({ name, tag, desc }) => {
  const [expanded, setExpanded] = useState(false);
  const { bg, color } = TAG_COLORS[tag];
  return (
    <div className="ap-card">
      <div className="ap-card-top">
        <span className="ap-tag" style={{ background: bg, color }}>{tag}</span>
        <h3 className="ap-card-name">{name}</h3>
      </div>
      <p className={`ap-card-desc${expanded ? ' ap-card-desc--full' : ''}`}>{desc}</p>
      <button className="ap-read-more" onClick={() => setExpanded(e => !e)}>
        {expanded ? 'Show less ↑' : 'Read more ↓'}
      </button>
    </div>
  );
};

const About = () => (
  <div className="about">
    {/* ── Hero ── */}
    <section className="about-hero">
      <div className="about-hero-inner">
        <h1 className="about-hero-title">About Us</h1>
        <p className="about-hero-sub">
          For over 15 years, our farm has proudly served the community with fresh produce,
          quality livestock, and farm-fresh eggs raised with care and dedication
        </p>
      </div>
    </section>

    {/* ── Farm Photos ── */}
    <section className="farm-photos">
      <div className="farm-photos-inner">
        {FARM_PHOTOS.map(({ src, alt }, i) => (
          <div
            key={alt}
            className={`farm-photo-wrap farm-photo-wrap--${i % 2 === 0 ? 'low' : 'high'}`}
          >
            {src
              ? <img src={src} alt={alt} className="farm-photo" />
              : <div className="farm-photo-placeholder" />}
          </div>
        ))}
      </div>
    </section>

    {/* ── Quality section ── */}
    <section className="about-quality">
      <div className="about-quality-inner">
        <h2 className="section-heading">Premium-Quality Eggs, Livestock &amp; Veg</h2>
        <div className="section-underline" />
        <div className="about-quality-cols">
          <p>
            We specialize in producing premium-quality eggs, healthy sheep and cattle livestock,
            and fresh seasonal vegetables grown with care and consistency. Every product that
            leaves our farm reflects our commitment to quality, reliability, and honest hard work…
          </p>
          <p>
            We value strong relationships, collaboration, and treating every customer like family.
            Whether you are buying fresh produce, livestock, or partnering with us, we want every
            interaction to feel warm, personal, and trustworthy. We also offer convenient delivery
            services to ensure our products reach homes, businesses, and communities fresh and on time.
          </p>
        </div>
      </div>
    </section>

    {/* ── Product Showcase ── */}
    <section className="about-products">
      <div className="about-products-inner">
        <h2 className="section-heading">What We Grow &amp; Raise</h2>
        <div className="section-underline" />
        <p className="about-products-intro">
          From the soil to your table — every product we grow or raise reflects our commitment
          to quality, sustainability, and the communities we serve.
        </p>
        <div className="about-products-grid">
          {PRODUCE.map(p => <AboutProductCard key={p.name} {...p} />)}
        </div>
      </div>
    </section>

    {/* ── Opportunities ── */}
    <section className="about-opportunities">
      <div className="about-opportunities-inner">
        <div className="about-opportunities-text">
          <h2 className="opportunities-heading">Creating Opportunities </h2>
          <blockquote className="opportunities-quote">
            We believe in creating opportunities, empowering young people, and giving back to
            the community that supports us. Through skills sharing and employment opportunities,
            we aim to inspire the next generation and help build a brighter future through agriculture.
          </blockquote>
        </div>
        <div className="about-opportunities-image">
          <img src="/images/Chicken%20image.png" alt="Farm chicken" />
        </div>
      </div>
    </section>

    {/* ── Mission tagline ── */}
    <section className="about-tagline">
      <div className="about-tagline-inner">
        <h2 className="about-tagline-heading">
          Quality Produce. Healthy Livestock.<br />Strong Community.
        </h2>
        <p className="about-tagline-text">
          What started as a family-driven passion for agriculture has grown into a trusted local
          farm committed to feeding families, supporting livelihoods, and building a stronger
          community for future generations.
        </p>
      </div>
    </section>
  </div>
);

export default About;
