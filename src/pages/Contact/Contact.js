import React, { useState } from 'react';
import './Contact.css';

const PhoneIcon = () => (
  <svg viewBox="0 0 24 24" width="20" height="20" fill="none">
    <path fill="#FF6500" d="M6.6 10.8c1.4 2.8 3.8 5.1 6.6 6.6l2.2-2.2c.3-.3.7-.4 1-.2 1.1.4 2.3.6 3.6.6.6 0 1 .4 1 1V20c0 .6-.4 1-1 1C10.6 21 3 13.4 3 4c0-.6.4-1 1-1h3.5c.6 0 1 .4 1 1 0 1.3.2 2.5.6 3.6.1.3 0 .7-.2 1L6.6 10.8z"/>
  </svg>
);

const EmailIcon = () => (
  <svg viewBox="0 0 24 24" width="20" height="20" fill="none">
    <path fill="#FF6500" d="M20 4H4c-1.1 0-2 .9-2 2v12c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 4l-8 5-8-5V6l8 5 8-5v2z"/>
  </svg>
);

const PinIcon = () => (
  <svg viewBox="0 0 24 24" width="20" height="20" fill="none">
    <path fill="#FF6500" d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5c-1.38 0-2.5-1.12-2.5-2.5s1.12-2.5 2.5-2.5 2.5 1.12 2.5 2.5-1.12 2.5-2.5 2.5z"/>
  </svg>
);

const ClockIcon = () => (
  <svg viewBox="0 0 24 24" width="20" height="20" fill="none">
    <path fill="#FF6500" d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm.5 5v5.25l4.5 2.67-.75 1.23L11 13V7h1.5z"/>
  </svg>
);

const CONTACT_DETAILS = [
  { icon: <PhoneIcon />, label: 'Phone', value: '+27 82 962 4650' },
  { icon: <EmailIcon />, label: 'Email', value: 'fefisco@gmail.com' },
  { icon: <PinIcon />, label: 'Address', value: 'Plot 17 Modderfontein, Bronkhorstspruit, 1020, Tshwane Metropolitan Municipality, South Africa' },
  { icon: <ClockIcon />, label: 'Hours', value: 'Mon – Sat: 6:00 AM – 6:00 PM' },
];

const EMPTY = { name: '', email: '', phone: '', subject: '', message: '' };

const Contact = () => {
  const [form, setForm] = useState(EMPTY);
  const [submitted, setSubmitted] = useState(false);
  const [error, setError] = useState('');

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
    setError('');
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!form.name || !form.email || !form.message) {
      setError('Please fill in your name, email and message.');
      return;
    }
    setSubmitted(true);
  };

  return (
    <div className="contact-page">
      <div className="contact-hero">
        <div className="contact-hero-inner">
          <h1 className="contact-hero-title">Get In Touch</h1>
          <p className="contact-hero-sub">
            Whether you're looking to place a bulk order, ask a question, or build a long-term partnership — we'd love to hear from you.
          </p>
        </div>
      </div>

      <div className="contact-map-section">
        <div className="contact-map-inner">
          <div className="contact-map-header">
            <PinIcon />
            <div>
              <h2 className="contact-map-title">Find Us</h2>
              <p className="contact-map-address">Plot 17 Modderfontein, Bronkhorstspruit, 1020, Tshwane Metropolitan Municipality, Gauteng, South Africa</p>
            </div>
          </div>
          <div className="contact-map-frame">
            <iframe
              title="Mantella Farms Location"
              src="https://www.google.com/maps?q=-25.718983,28.786579&hl=en&z=14&output=embed"
              width="100%"
              height="400"
              style={{ border: 0 }}
              allowFullScreen=""
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            />
          </div>
        </div>
      </div>

      <div className="contact-body">
        <div className="contact-col-left">
          <div className="contact-step-label">
            <span className="contact-step-num">1</span>
            <span className="contact-step-text">Our Details</span>
          </div>

          <div className="contact-info-card">
            <h2 className="contact-info-heading">Mantella Mixed Farming</h2>
            <p className="contact-info-sub">
              Reach us directly through any of the channels below. We respond to all enquiries within one business day.
            </p>

            <ul className="contact-detail-list">
              {CONTACT_DETAILS.map(({ icon, label, value }) => (
                <li key={label} className="contact-detail-item">
                  <div className="contact-detail-icon">{icon}</div>
                  <div>
                    <span className="contact-detail-label">{label}</span>
                    <span className="contact-detail-value">{value}</span>
                  </div>
                </li>
              ))}
            </ul>

            <div className="contact-social-strip">
              <span>Connect with us</span>
              <div className="contact-social-dots">
                <span className="contact-social-dot" />
                <span className="contact-social-dot contact-social-dot--accent" />
                <span className="contact-social-dot" />
              </div>
            </div>
          </div>
        </div>

        <div className="contact-col-right">
          <div className="contact-step-label">
            <span className="contact-step-num">2</span>
            <span className="contact-step-text">Send a Message</span>
          </div>

          {submitted ? (
            <div className="contact-success">
              <div className="contact-success-icon">✓</div>
              <h3>Message Sent!</h3>
              <p>Thank you for reaching out. We'll get back to you within one business day.</p>
              <button className="contact-btn" onClick={() => { setSubmitted(false); setForm(EMPTY); }}>
                Send Another Message
              </button>
            </div>
          ) : (
            <form className="contact-form" onSubmit={handleSubmit} noValidate>
              <div className="contact-form-row">
                <div className="contact-field">
                  <label>Full Name <span>*</span></label>
                  <input
                    type="text"
                    name="name"
                    placeholder="e.g. Sipho Dlamini"
                    value={form.name}
                    onChange={handleChange}
                  />
                </div>
                <div className="contact-field">
                  <label>Email Address <span>*</span></label>
                  <input
                    type="email"
                    name="email"
                    placeholder="e.g. sipho@example.com"
                    value={form.email}
                    onChange={handleChange}
                  />
                </div>
              </div>

              <div className="contact-form-row">
                <div className="contact-field">
                  <label>Phone Number</label>
                  <input
                    type="tel"
                    name="phone"
                    placeholder="e.g. +27 82 000 0000"
                    value={form.phone}
                    onChange={handleChange}
                  />
                </div>
                <div className="contact-field">
                  <label>Subject</label>
                  <input
                    type="text"
                    name="subject"
                    placeholder="e.g. Bulk egg order enquiry"
                    value={form.subject}
                    onChange={handleChange}
                  />
                </div>
              </div>

              <div className="contact-field contact-field--full">
                <label>Message <span>*</span></label>
                <textarea
                  name="message"
                  rows={5}
                  placeholder="e.g. Specific quantities, delivery dates, recurring order needs..."
                  value={form.message}
                  onChange={handleChange}
                />
              </div>

              {error && <p className="contact-error">{error}</p>}

              <button type="submit" className="contact-btn">
                Submit Message
              </button>
            </form>
          )}
        </div>
      </div>
    </div>
  );
};

export default Contact;
