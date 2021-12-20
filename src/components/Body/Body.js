import React from "react";
import { Routes, Route } from "react-router-dom";
import Navbar from "../Navbar/Navbar";
import "./Body.css";
import Services from "../Services/Services";
import Plumber from "../services_contacts/Plumber.js/Plumber";
import Doctors from "../services_contacts/Doctors.js/Doctors";

const Body = () => {
  return (
    <>
      <Navbar />
      <hr className="w-50 mx-auto" />
      <Routes>
        <Route exact path="/" element={<Services />} />
        <Route exact path="/plumbers" element={<Plumber />} />
        <Route exact path="/doctors" element={<Doctors />} />
      </Routes>
    </>
  );
};

export default Body;
