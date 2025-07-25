 george/car-catalog
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import CarDetails from "./pages/CarDetails";
import './App.css'

import React, { useState, useEffect } from "react"
import Navbar from "./components/Navbar"
import RoutesComponent from "./components/RoutesComponent"
import "./App.css"
development

function App() {
  return (
 george/car-catalog
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/cars/:id" element={<CarDetails />} />
      </Routes>
    </Router>
  );
    <div className={`app ${darkMode ? "dark" : ""}`}>
      <Navbar darkMode={darkMode} setDarkMode={setDarkMode} />
      <RoutesComponent />
    </div>
  )
 development
}

export default App;
