import React, { useState, useEffect } from 'react';
import { Container } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { useDarkMode } from '../DarkModeContext';
import vector from '../assets/t.png';
import image6 from '../assets/tom/tom5.jpeg';
import image7 from '../assets/tom/tom9.jpg';
import image8 from '../assets/tom/tom10.jpg';

export const Home = () => {
  const { darkMode, toggleDarkMode } = useDarkMode();
  const [typedText, setTypedText] = useState('');
  const [typingComplete, setTypingComplete] = useState(false);
  const [backgroundImageIndex, setBackgroundImageIndex] = useState(0);

  const tagline =
    'Welcome Back! Am an AI Model for Tomato Crop Disease Diagnosis and Guidance, Glad to have you onBoard..! To get started with Agri-Diagonise click the Button below.';

  const images = [image6, image7, image8];

  useEffect(() => {
    const taglineLength = tagline.length;
    let currentLength = 0;

    const typingInterval = setInterval(() => {
      if (currentLength <= taglineLength) {
        setTypedText(tagline.substring(0, currentLength));
        currentLength += 1;
      } else {
        clearInterval(typingInterval);
        setTypingComplete(true); // Set typing complete once it's finished
      }
    }, 20);

    const backgroundTransitionInterval = setInterval(() => {
      setBackgroundImageIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, 5000);

    return () => {
      clearInterval(typingInterval);
      clearInterval(backgroundTransitionInterval);
    };
  }, []);

  const getTaglineColor = () => {
    return darkMode ? '#FFFFFF' : '#ffffff'; // White text color for dark mode, black text color for light mode
  };

  const getBackgroundColor = () => {
    return darkMode ? '#000000' : '#FFFFFF'; // Dark background color for dark mode, light background color for light mode
  };

  const getTransitionStyles = () => {
    return {
      transition: 'background-image 5s ease-in-out',
    };
  };

  return (
    <section
      className="home"
      id="home"
      style={{
        ...getTransitionStyles(),
        backgroundImage: `url(${images[backgroundImageIndex]})`,
        backgroundColor: getBackgroundColor(), // Dynamically set background color based on darkMode
      }}
    >
      <Container>
        <div className="d-flex">
          <div className="wrap-text">
            <span className="tagline" style={{ color: getTaglineColor() }}>
              {typedText}
            </span>

            {typingComplete && (
              <>
                <Link to="/classify" className="btn-success btn">
                  Detect My Plant
                </Link>
              </>
            )}
          </div>
          <div className="image">
            <img src={vector} alt="hero" />
          </div>
        </div>
      </Container>
    </section>
  );
};
