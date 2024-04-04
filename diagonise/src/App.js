import React, { useState } from "react";
import { Routes, Route } from "react-router-dom";
import { Classify } from './pages/Classify';
import { Homepage } from './pages/Homepage';
import { Login } from "./pages/Login";
import { DarkModeProvider } from "./DarkModeContext";
import Team from "./pages/Dashboard";

function App() {
  const [darkMode, setDarkMode] = useState(false);

  const toggleDarkMode = () => {
    setDarkMode(!darkMode);
  };

  return (
    // <Team/>
    <DarkModeProvider toggleDarkMode={toggleDarkMode} darkMode={darkMode}> 
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/Homepage" element={<Homepage />} />
        <Route path="/classify" element={<Classify />} />
        <Route path="/admin" element={<Team />} />

      </Routes>
    </DarkModeProvider>
  );
}

export default App;