import React, { useState, useEffect } from 'react';
import axios from 'axios';
import './login.css';
import { useNavigate } from 'react-router-dom';
import daun from "../assets/daun1.png";

export const Login = () => {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    email: '',
    password: '',
  });
  const [error, setError] = useState('');

  // Check if the user is already logged in on component mount
  useEffect(() => {
    const isLoggedIn = localStorage.getItem('isLoggedIn');
    if (isLoggedIn) {
      navigate('/homepage'); // Redirect to homepage if already logged in
    }
  }, [navigate]);

  const handleLogin = async () => {
    try {
      const response = await axios.post('http://localhost:4000/auth/login', formData);
      localStorage.setItem('isLoggedIn', true); // Set logged in status in local storage
      navigate('/homepage'); // Redirect to homepage on successful login
    } catch (error) {
      setError('Error: ' + error.message);
    }
  };

  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleFormSubmit = async (event) => {
    event.preventDefault();
    await handleLogin();
  };

  return (
    <div className="behind-container">
      <div className="container min-h-screen">
        <div className="right-container mt-10">
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
              <p className="error">{error}</p>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};
