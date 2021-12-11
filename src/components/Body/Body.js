import React from "react";
import Navbar from "../Navbar/Navbar";
import "./Body.css";
import Services from "../Services/Services";

const Body = () => {
  return (
    <>
      <Navbar />
      <hr className="w-50 mx-auto" />
      <Services />
    </>
  );
};

export default Body;
