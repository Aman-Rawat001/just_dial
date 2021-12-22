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
import restaurantIcon from "../Images/restaurant.png";
import dairyIcon from "../Images/dairy-products.png";

const services_cards = [
  { service: "plumbers", icon: plumberIcon },
  { service: "doctors", icon: doctorIcon },
  { service: "restaurants", icon: restaurantIcon },
  { service: "electrician", icon: electricianIcon },
  { service: "interior_designers", icon: decorationIcon },
  { service: "repairs_&_services", icon: repairIcon },
  { service: "gardner", icon: gardnerIcon },
  { service: "wedding_planners", icon: weddingIcon },
  { service: "home_services", icon: householdIcon },
  { service: "dairy_services", icon: dairyIcon },
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
