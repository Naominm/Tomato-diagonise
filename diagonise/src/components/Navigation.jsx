import React, { useState, useEffect } from 'react';
import { Container, Nav, Navbar } from 'react-bootstrap';
import { BrowserRouter as Router } from 'react-router-dom';
import daun from "../assets/daun1.png";
import { RiMoonLine } from 'react-icons/ri'; // Import the moon icon

export const Navigation = ({ darkMode, toggleDarkMode }) => {
  const [activeLink, setActiveLink] = useState('home');
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => {
      if (window.scrollY > 50) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener('scroll', onScroll);

    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  const onUpdateActiveLink = (value) => {
    setActiveLink(value);
  };

  return (
    <Router>
      <Navbar expand="lg" className={scrolled ? 'scrolled' : ''}>
        <Container>
          <Navbar.Brand href="#Home">
            <img
              src={daun}
              alt="AgriDiagnose Logo"
              className="logo"
            />
            AgriDiagnose
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="ms-auto">
              <Nav.Link
                href="#home"
                className={
                  activeLink === 'home' ? 'navbar-link active' : 'navbar-link'
                }
                onClick={() => onUpdateActiveLink('home')}
              >
                Home
              </Nav.Link>
              <Nav.Link
                href="#about"
                className={
                  activeLink === 'about' ? 'navbar-link active' : 'navbar-link'
                }
                onClick={() => onUpdateActiveLink('about')}
              >
                About
              </Nav.Link>
              <Nav.Link
                href="#features"
                className={
                  activeLink === 'features'
                    ? 'navbar-link active'
                    : 'navbar-link'
                }
                onClick={() => onUpdateActiveLink('features')}
              >
                Features
              </Nav.Link>
              <div className="moon-icon" onClick={toggleDarkMode}>
                <RiMoonLine size={24} color={darkMode ? 'white' : 'black'} />
              </div>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </Router>
  );
};
