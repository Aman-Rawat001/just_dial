import React, { Suspense, lazy } from "react";
import { Routes, Route } from "react-router-dom";
import Navbar from "../Navbar/Navbar";
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
          {/* <Route exact path="/doctors" element={<Doctors />} /> */}
        </Routes>
      </Suspense>
    </>
  );
};

export default Body;
