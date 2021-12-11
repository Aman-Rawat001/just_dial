import React from "react";
import "./Services.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCoffee } from "@fortawesome/free-solid-svg-icons";

const services_cards = [
  { service: "plumber", icon: faCoffee },
  { service: "plumber", icon: faCoffee },
  { service: "plumber", icon: faCoffee },
  { service: "plumber", icon: faCoffee },
];

const Services = () => {
  return (
    <>
      <div className="container">
        <div className="row">
          {services_cards.map((item, index) => {
            return (
              <div className="col-lg-4 text-center">
                <div className="services_cards">
                  <p>dsd {item.service}</p>
                  <FontAwesomeIcon icon={item.icon} />
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </>
  );
};

export default Services;
