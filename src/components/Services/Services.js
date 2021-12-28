import React from "react";
import "./Services.css";
import FeaturedServices from "../FeaturedServices/FeaturedServices";
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
import carpenterIcon from "../Images/carpenter.png";
import pestControlIcon from "../Images/insecticide.png";
import painterIcon from "../Images/painter.png";
import saloonIcon from "../Images/saloon.png";

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
  { service: "carpenter", icon: carpenterIcon },
  { service: "pest_control", icon: pestControlIcon },
  { service: "painter", icon: painterIcon },
  { service: "saloon", icon: saloonIcon },
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
      <div className="hideAtLargeScreen mb-5">
        <FeaturedServices />
      </div>
      <div className="hideAtLargeScreen mb-5 noteWindow container">
        <div className="card">
          <p className="pt-3 px-3">
            Note: Right Now Our Service Is Available Only In Dehradun Region.
          </p>

          <button
            className="btn btn-outline-primary"
            data-bs-toggle="modal"
            data-bs-target="#registerYourService"
            data-bs-whatever="@mdo"
          >
            Register Your Services
          </button>
        </div>
      </div>

      {/* register your service modal */}
      <div
        class="modal fade"
        id="registerYourService"
        tabindex="-1"
        aria-labelledby="exampleModalLabel"
        aria-hidden="true"
      >
        <div class="modal-dialog">
          <div class="modal-content">
            <div class="modal-header">
              <h5 class="modal-title" id="exampleModalLabel">
                Register Your Service
              </h5>
              <button
                type="button"
                class="btn-close"
                data-bs-dismiss="modal"
                aria-label="Close"
              ></button>
            </div>
            <div class="modal-body">
              <form>
                <div class="mb-3">
                  <label for="recipient-name" class="col-form-label">
                    Your Name
                  </label>
                  <input type="text" class="form-control" id="recipient-name" />
                </div>
                <div class="mb-3">
                  <label for="message-text" class="col-form-label">
                    Address
                  </label>
                  <input type="text" class="form-control" id="recipient-name" />
                </div>
                <div class="mb-3">
                  <label for="message-text" class="col-form-label">
                    Your Service
                  </label>
                  <input type="text" class="form-control" id="recipient-name" />
                </div>
                <div class="mb-3">
                  <label for="message-text" class="col-form-label">
                    Experience
                  </label>
                  <input
                    type="number"
                    class="form-control"
                    id="recipient-name"
                  />
                </div>
                <div class="mb-3">
                  <label for="message-text" class="col-form-label">
                    Phone
                  </label>
                  <input type="tel" class="form-control" id="recipient-name" />
                </div>
              </form>
            </div>
            <div class="modal-footer">
              <button
                type="button"
                class="btn btn-primary"
                data-bs-dismiss="modal"
              >
                Submit
              </button>
              {/* <button type="button" class="btn btn-primary">
                Submit
              </button> */}
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Services;
