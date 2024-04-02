import React, { createContext, useContext, useState } from 'react';

// Create a context for dark mode
const DarkModeContext = createContext();

// Create a provider component to wrap your entire application
export const DarkModeProvider = ({ children }) => {
  const [darkMode, setDarkMode] = useState(false);

  const toggleDarkMode = () => {
    setDarkMode(!darkMode);
  };

  return (
    <DarkModeContext.Provider value={{ darkMode, toggleDarkMode }}>
      {children}
    </DarkModeContext.Provider>
  );
};

// Custom hook to consume the dark mode context
export const useDarkMode = () => useContext(DarkModeContext);
