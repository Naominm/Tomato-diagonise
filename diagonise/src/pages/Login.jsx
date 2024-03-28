import React, { useState, useEffect } from 'react';
import axios from 'axios';
import './login.css';
import { useNavigate } from 'react-router-dom';
import daun from "../assets/daun1.png";

export const Login = () => {
  const [showSignup, setShowSignup] = useState(false);
  const [formData, setFormData] = useState({
    email: '',
    password: '',
    username: ''
  });
  const [message, setMessage] = useState('');
  const [error, setError] = useState('');
  const navigate = useNavigate();

  const handleToggle = () => {
    setShowSignup(!showSignup);
    setMessage('');
    setError('');
  };

  const handleSubmit = async () => {
    try {
      if (showSignup) {
        await axios.post('http://localhost:4000/users/create', formData);
        setMessage('User signed up successfully');
      } else {
        await axios.post('http://localhost:4000/auth/login', formData);
        navigate("/Homepage"); 
        setMessage('User logged in successfully');
        // Redirect to homepage or navigate to homepage here
       
      }
    } catch (error) {
      setError('Error: ' + error.message);
    }
  };

  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormData({ ...formData, [name]: value });
  };

  const validateForm = () => {
    return formData.email.trim() !== '' && formData.password.trim() !== '';
  };

  const handleFormSubmit = async (event) => {
    event.preventDefault();
    if (validateForm()) {
      await handleSubmit();
    } else {
      setError('Please fill in all fields.');
    }
  };

  // Function to clear messages after a timeout (optional)
  const clearMessage = () => {
    setTimeout(() => {
      setMessage('');
      setError('');
    }, 2000); // Timeout in milliseconds (3 seconds here)
  };

  // Use useEffect to clear messages on component update (optional)
  useEffect(() => {
    if (message || error) {
      clearMessage(); // Clear messages after a timeout
    }
  }, [message, error]);

  return (
    <div className="behind-container">
      <div className="container min-h-screen">
        <div className="right-container mt-10">
          {showSignup ? (
            <div>
              <h2 className="heading">Sign Up</h2>
              <form onSubmit={handleFormSubmit}>
                <input
                  type="text"
                  placeholder="Username"
                  name="username"
                  value={formData.username}
                  onChange={handleChange}
                  className={`input-field ${error && formData.username.trim() === '' ? 'error' : ''}`}
                  autoComplete="username" // Add autocomplete attribute for username
                />
                <input
                  type="email"
                  placeholder="Email Address"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  className={`input-field ${error && formData.email.trim() === '' ? 'error' : ''}`}
                  autoComplete="email" // Add autocomplete attribute for email
                />
                <input
                  type="password"
                  placeholder="Password"
                  name="password"
                  value={formData.password}
                  onChange={handleChange}
                  className={`input-field ${error && formData.password.trim() === '' ? 'error' : ''}`}
                  autoComplete="current-password" // Add autocomplete attribute for password
                />
                <input
                  type="password"
                  placeholder="Confirm Password"
                  className="input-field"
                  autoComplete="new-password" // Add autocomplete attribute for new password
                />
                <button
                  className="submit-button"
                  type="submit"
                >
                  Sign Up
                </button>
              </form>
              <p className="register-text">
                Already have an account?{' '}
                <button className="register-button" onClick={handleToggle}>
                  Log in
                </button>
              </p>
              <p className="message">{message}</p>
              <p className="error">{error}</p>
            </div>
          ) : (
            <div>
              <div className="div-1">
                <img
                  src={daun}
                  alt="AgriDiagnose Logo"
                  className="logo"
                />
                <h2 className="heading">Fresh Farm</h2>
              </div>
              <p className="text-gray-600 mb-4">Please Enter Your Login Details</p>
              <form onSubmit={handleFormSubmit}>
                <input
                  type="email"
                  placeholder="Enter Email Address"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  className={`input-field ${error && formData.email.trim() === '' ? 'error' : ''}`}
                />
                <input
                  type="password"
                  placeholder="Enter Password"
                  name="password"
                  value={formData.password}
                  onChange={handleChange}
                  className={`input-field ${error && formData.password.trim() === '' ? 'error' : ''}`}
                />
                <button
                  className="submit-button"
                  type="submit"
                >
                  Login
                </button>
                <p className="register-text">
                  Don't have an account?{' '}
                  <button className="register-button" onClick={handleToggle}>
                    Register
                  </button>
                  <p className="forgot-password-text">
                    <a href="/forgot-password">Forgot Password?</a>
                  </p>
                </p>
              </form>
              <p className="message color-red">{message}</p>
              <p className="error">{error}</p>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};