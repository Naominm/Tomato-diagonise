import React, { useState, useEffect } from 'react';
import { Container, Nav, Navbar, Dropdown } from 'react-bootstrap';
import daun from "../assets/daun1.png";
import { RiMoonLine } from 'react-icons/ri'; // Import the moon icon
import { RiLogoutCircleLine } from 'react-icons/ri'; // Import the logout icon
import { BsGearFill } from 'react-icons/bs'; // Import the settings icon
import './navigation.css';


const UserProfile = ({ email }) => {
  const initials = email.substring(0, 2).toUpperCase(); // Get the first two letters of the email
  return (
    <div className="user-profile">
      <span className="initials">{initials}</span>
    </div>
  );
};

export const Navigation = ({ darkMode, toggleDarkMode }) => {
  const [activeLink, setActiveLink] = useState('home');
  const [scrolled, setScrolled] = useState(false);

  const handleLogout = () => {
    // Clear user's authentication state from local storage
    localStorage.removeItem('isLoggedIn');
    // Redirect to the login page
    window.location.href = '/'; // Or use history.push('/login') if you're using React Router
  };

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
          <Nav className="ml-auto">
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
            {/* <div className="moon-icon gap-20px" onClick={toggleDarkMode}>
              <RiMoonLine size={24} color={darkMode ? 'white' : 'black'} />
            </div> */}
            <Dropdown align="end">
              <Dropdown.Toggle variant="link" id="dropdown-basic">
                <UserProfile email="user@example.com" /> {/* Pass the user's email */}
              </Dropdown.Toggle>
              <Dropdown.Menu>
                <Dropdown.Item>
                  <BsGearFill size={24} />
                  Settings
                </Dropdown.Item>
                <Dropdown.Item onClick={handleLogout}>
                  <RiLogoutCircleLine size={24} />
                  Logout
                </Dropdown.Item>
              </Dropdown.Menu>
            </Dropdown>
            
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};
