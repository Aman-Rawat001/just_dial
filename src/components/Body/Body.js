import React, { Suspense, lazy } from "react";
import { Routes, Route } from "react-router-dom";
import Navbar from "../Navbar/Navbar";
import Footer from "../Footer/Footer";
import "./Body.css";
import Services from "../Services/Services";
// import Plumber from "../services_contacts/service_list.js/service_list";
// import Doctors from "../services_contacts/Doctors.js/Doctors";
const Plumber = lazy(() =>
  import("../services_contacts/service_list.js/service_list")
);

const Body = () => {
  return (
    <>
      <Navbar />
      <hr className="w-50 mx-auto" />
      <Suspense
        fallback={<div className="loading">Please Wait loading...</div>}
      >
        <Routes>
          <Route exact path="/" element={<Services />} />
          <Route exact path="/plumbers" element={<Plumber />} />
          <Route exact path="/doctors" element={<Plumber />} />
          <Route exact path="/electrician" element={<Plumber />} />
          <Route exact path="/interior_designers" element={<Plumber />} />
          <Route exact path="/repairs_&_services" element={<Plumber />} />
          <Route exact path="/gardner" element={<Plumber />} />
          <Route exact path="/wedding_planners" element={<Plumber />} />
          <Route exact path="/home_services" element={<Plumber />} />
          {/* <Route exact path="/doctors" element={<Doctors />} /> */}
        </Routes>
      </Suspense>
      <Footer />
    </>
  );
};

export default Body;
