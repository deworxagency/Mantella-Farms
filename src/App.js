import React, { useState } from 'react';
import './App.css';
import Navbar from './components/Navbar/Navbar';
import ContactBanner from './components/ContactBanner/ContactBanner';
import Footer from './components/Footer/Footer';
import Home from './pages/Home/Home';
import About from './pages/About/About';
import Product from './pages/Product/Product';
import Contact from './pages/Contact/Contact';

function App() {
  const [currentPage, setCurrentPage] = useState('home');

  const navigate = (page) => {
    setCurrentPage(page);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const renderPage = () => {
    switch (currentPage) {
      case 'home':     return <Home navigate={navigate} />;
      case 'about':    return <About />;
      case 'products': return <Product />;
      case 'contact':  return <Contact />;
      default:         return <Home navigate={navigate} />;
    }
  };

  return (
    <div className="App">
      <Navbar currentPage={currentPage} navigate={navigate} />
      <main>{renderPage()}</main>
      <ContactBanner />
      <Footer navigate={navigate} />
    </div>
  );
}

export default App;
