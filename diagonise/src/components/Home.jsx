import React, { useState, useEffect } from 'react';
import { Container } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import vector from '../assets/t.png';
import image6 from '../assets/tom/tom5.jpeg';
import image7 from '../assets/tom/tom9.jpg';
import image8 from '../assets/tom/tom10.jpg';

export const Home = () => {
  const [typedText, setTypedText] = useState('');
  const [typingComplete, setTypingComplete] = useState(false);
  const [backgroundImageIndex, setBackgroundImageIndex] = useState(0);

  const tagline =
    'Welcome Back to Smart farmer website, Glad to have you onBoard. Hush..! Dont tell the lablel. Drop them file in AgriDiagnose by clicking the link below.';

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
    if (backgroundImageIndex === 6 || backgroundImageIndex === 7 || backgroundImageIndex === 8) {
      return '#FFFFFF'; 
    } else {
      return '#FFFFFF'; 
    }
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
