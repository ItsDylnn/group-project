import React from "react";
import { Routes, Route } from "react-router-dom";

import Home from "./Home";
import Register from "../pages/RegisterPage";
import Login from "../pages/LoginPage";
import Favorites from "../pages/FavoritesPage";
import CarList from "./CarList";
import ChooseCar from "./ChooseCar";
import Contact from "./Contact";
import About from "./About";

function RoutesComponent({
  bookingConfirmed,
  BookingPage,
  SuccessPage,
  setSelectedCar,
  isLoggedIn,
  setIsLoggedIn,
}) {
  return (
    <Routes>
      <Route path="/" element={<Login setIsLoggedIn={setIsLoggedIn} />} />
      <Route path="/register" element={<Register />} />
      <Route path="/login" element={<Login setIsLoggedIn={setIsLoggedIn} />} />
      {isLoggedIn && (
        <>
          <Route path="/favorites" element={<Favorites />} />
          <Route path="/cars" element={<CarList />} />
          <Route
            path="/choose-car"
            element={<ChooseCar setSelectedCar={setSelectedCar} />}
          />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
        </>
      )}
      <Route
        path="/book"
        element={bookingConfirmed ? <SuccessPage /> : <BookingPage />}
      />
    </Routes>
  );
}

export default RoutesComponent;
