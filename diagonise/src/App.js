import React from "react";
import { Routes, Route } from "react-router-dom";
import { Classify } from './pages/Classify';
import { Homepage } from './pages/Homepage';
import { Login } from "./pages/Login";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Login />} />
      <Route path="/Homepage" element={<Homepage />} />
      <Route path="/classify" element={<Classify />} />
    </Routes>
  );
}

export default App;
