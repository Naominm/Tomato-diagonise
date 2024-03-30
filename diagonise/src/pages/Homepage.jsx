import React, { useState } from 'react';
import { Home } from '../components/Home';
import { About } from '../components/About';
import { Features } from '../components/Features';
import { Navigation } from '../components/Navigation';
import { Footer } from '../components/Footer';
import 'bootstrap/dist/css/bootstrap.min.css';

export const Homepage = () => {
  const [darkMode, setDarkMode] = useState(false);

  const toggleDarkMode = () => {
    setDarkMode(!darkMode);
  };

  return (
    <>
      <div className={`App ${darkMode ? 'dark' : ''}`}>
        <Navigation darkMode={darkMode} toggleDarkMode={toggleDarkMode} />
        <Home />
        <Features />
        <About />
        <Footer />
      </div>
    </>
  );
};
