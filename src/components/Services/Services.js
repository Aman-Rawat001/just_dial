import React from "react";
import "./Services.css";
import { NavLink } from "react-router-dom";
import plumberIcon from "../Images/plumber.png";
import gardnerIcon from "../Images/agriculture.png";
import decorationIcon from "../Images/decorating.png";
import doctorIcon from "../Images/doctor.png";
import electricianIcon from "../Images/electrician.png";
import householdIcon from "../Images/household.png";
import repairIcon from "../Images/repair-tools.png";
import weddingIcon from "../Images/wedding-planner.png";

const services_cards = [
  { service: "plumbers", icon: plumberIcon },
  { service: "electrician", icon: electricianIcon },
  { service: "doctors", icon: doctorIcon },
  { service: "Interior Designers", icon: decorationIcon },
  { service: "Repairs & Services", icon: repairIcon },
  { service: "Gardner", icon: gardnerIcon },
  { service: "Wedding Planners", icon: weddingIcon },
  { service: "Home Services", icon: householdIcon },
];

const Services = () => {
  return (
    <>
      <div className="container pb-5">
        <div className="serviceLocText">
          <h3>Our Services In Your Location / आपके स्थान पर हमारी सेवाएं</h3>
        </div>
        <div className="row">
          {services_cards.map((item, index) => {
            return (
              <div className="col-lg-4 col-6 text-center service-box">
                <NavLink to={item.service}>
                  <div className="services_cards">
                    <div className="service_text">
                      <p className="mt-2">{item.service}</p>
                    </div>
                    <div className="icons">
                      <img src={item.icon} />
                    </div>
                  </div>
                </NavLink>
              </div>
            );
          })}
        </div>
      </div>
    </>
  );
};

export default Services;
