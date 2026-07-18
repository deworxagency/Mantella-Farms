import React from 'react';
import './ContactBanner.css';

const ContactBanner = () => (
  <section className="contact-banner">
    <div className="contact-banner-inner">
      <div className="contact-col">
        <div className="contact-icon-circle">
          <svg viewBox="0 0 45.08 25.72" fill="none">
            <path fill="#fff" d="M13.45,17.13c-2.81-3.8-8.85-3.05-10.76,1.29-.35.79-.52,1.61-.55,2.46-.02.72-.45,1.18-1.09,1.17-.64-.01-1.08-.49-1.05-1.21.13-3.15,1.55-5.55,4.24-7.19.18-.11.38-.21.57-.32-2.57-2.39-2.32-6.05-.2-8.11,2.12-2.05,5.46-2.08,7.62-.08,2.13,1.98,2.51,5.71-.04,8.1.94.73,1.89,1.47,2.84,2.2.98-.58,2.04-1.21,3.12-1.85-2.21-1.72-3.31-4.01-3.05-6.88.18-2,1.08-3.65,2.61-4.95,3.09-2.64,7.74-2.29,10.45.74,2.76,3.07,2.61,8.27-1.2,11.1,1.05.62,2.11,1.25,3.12,1.85.91-.71,1.86-1.46,2.83-2.22-1.36-1.3-2-2.96-1.71-4.92.21-1.44.92-2.61,2.07-3.51,2.21-1.72,5.44-1.46,7.35.56,1.92,2.03,2.21,5.53-.29,7.91.67.49,1.4.93,2.02,1.5,1.8,1.64,2.68,3.72,2.73,6.15.01.58-.34,1.01-.84,1.11-.51.1-1.02-.15-1.2-.63-.07-.19-.08-.4-.09-.6-.08-2.59-1.77-4.9-4.22-5.76-2.46-.87-5.2-.15-6.9,1.83-.06.07-.12.15-.19.24.32.47.66.93.96,1.42,1.14,1.85,1.69,3.87,1.73,6.03.01.65-.42,1.14-1.02,1.16-.62.03-1.08-.41-1.11-1.1-.08-2.46-.88-4.62-2.53-6.46-4.84-5.39-13.87-3.56-16.23,3.29-.36,1.03-.51,2.09-.56,3.18-.03.68-.49,1.13-1.11,1.1-.59-.03-1.04-.52-1.02-1.17.03-1.22.21-2.42.6-3.59.46-1.4,1.17-2.67,2.11-3.83Z"/>
          </svg>
        </div>
        <div>
          <h3 className="contact-col-title">Let's work together</h3>
          <p className="contact-col-text">
            Looking for a reliable supplier of fresh produce, eggs and livestock? We're here to help!
          </p>
        </div>
      </div>

      <div className="contact-divider" />

      <div className="contact-col">
        <div className="contact-icon-circle">
          <svg viewBox="0 0 24 24" fill="none">
            <path fill="#fff" d="M6.6 10.8c1.4 2.8 3.8 5.1 6.6 6.6l2.2-2.2c.3-.3.7-.4 1-.2 1.1.4 2.3.6 3.6.6.6 0 1 .4 1 1V20c0 .6-.4 1-1 1C10.6 21 3 13.4 3 4c0-.6.4-1 1-1h3.5c.6 0 1 .4 1 1 0 1.3.2 2.5.6 3.6.1.3 0 .7-.2 1L6.6 10.8z"/>
          </svg>
        </div>
        <div>
          <h3 className="contact-col-title">Contact Information</h3>
          <ul className="contact-info-list">
            <li>
              <svg viewBox="0 0 24 24" width="14" height="14"><path fill="currentColor" d="M6.6 10.8c1.4 2.8 3.8 5.1 6.6 6.6l2.2-2.2c.3-.3.7-.4 1-.2 1.1.4 2.3.6 3.6.6.6 0 1 .4 1 1V20c0 .6-.4 1-1 1C10.6 21 3 13.4 3 4c0-.6.4-1 1-1h3.5c.6 0 1 .4 1 1 0 1.3.2 2.5.6 3.6.1.3 0 .7-.2 1L6.6 10.8z"/></svg>
              +27 82 962 4650
            </li>
            <li>
              <svg viewBox="0 0 24 24" width="14" height="14"><path fill="currentColor" d="M20 4H4c-1.1 0-2 .9-2 2v12c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 4l-8 5-8-5V6l8 5 8-5v2z"/></svg>
              info@gmail.com
            </li>
            <li>
              <svg viewBox="0 0 24 24" width="14" height="14"><path fill="currentColor" d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5c-1.38 0-2.5-1.12-2.5-2.5s1.12-2.5 2.5-2.5 2.5 1.12 2.5 2.5-1.12 2.5-2.5 2.5z"/></svg>
              Plot 17 Modderfontein, Bronkhorstspruit
            </li>
            <li>
              <svg viewBox="0 0 24 24" width="14" height="14"><path fill="currentColor" d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5c-1.38 0-2.5-1.12-2.5-2.5s1.12-2.5 2.5-2.5 2.5 1.12 2.5 2.5-1.12 2.5-2.5 2.5z"/></svg>
              1020, South Africa
            </li>
          </ul>
        </div>
      </div>
    </div>
  </section>
);

export default ContactBanner;
