import React, { Component } from "react";
import Slider from "react-slick";
import "./FeaturedServices.css";
import carpenterPoster from "../Images/cPoster.jpg";
import ElectrictionPoster from "../Images/ePoster.jpg";
import HomeServicePoster from "../Images/hPoster.jpg";
import resturantPoster from "../Images/rPoster.jpg";
import plumberPoster from "../Images/pPoster.jpg";
import { NavLink } from "react-router-dom";

export default class FeaturedServices extends Component {
  render() {
    const settings = {
      dots: true,
      infinite: true,
      speed: 500,
      slidesToShow: 2,
      slidesToScroll: 2,
    };
    return (
      <div className="featuredCarousel py-5">
        <h2 className="text-center pb-3">Most Used Services</h2>
        <Slider {...settings}>
          <NavLink to="/restaurants">
            <div className="posterCard">
              <img className="posterImg" src={resturantPoster} />
              <h6 className="mt-2">Resturants</h6>
            </div>
          </NavLink>
          <NavLink to="/carpenter">
            <div className="posterCard">
              <img className="posterImg" src={carpenterPoster} />
              <h6 className="mt-2">Carpenters</h6>
            </div>
          </NavLink>
          <NavLink to="/electrician">
            <div className="posterCard">
              <img className="posterImg" src={ElectrictionPoster} />
              <h6 className="mt-2">Electrician</h6>
            </div>
          </NavLink>
          <NavLink to="/repairs_&_services">
            <div className="posterCard">
              <img className="posterImg" src={HomeServicePoster} />
              <h6 className="mt-2">Repair & Services</h6>
            </div>
          </NavLink>
          <NavLink to="/plumbers">
            <div className="posterCard">
              <img className="posterImg" src={plumberPoster} />
              <h6 className="mt-2">Plumbers</h6>
            </div>
          </NavLink>
        </Slider>
      </div>
    );
  }
}
