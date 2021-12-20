import React from "react";
import "./Navbar.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMapMarkerAlt } from "@fortawesome/free-solid-svg-icons";
import { NavLink } from "react-router-dom";

const Navbar = () => {
  return (
    <>
      <nav class="navbar navbar-expand-lg navbar-light  bg-light">
        <div class="container">
          <NavLink className="navbar-brand" to="/">
            <div className="logo">
              Dun<span>Services</span>
            </div>
          </NavLink>
          <a
            className="nav-link list-services px-2"
            aria-current="page"
            href="#"
          >
            <FontAwesomeIcon className="me-2" icon={faMapMarkerAlt} />
            Dehradun
          </a>

          <button
            class="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span class="navbar-toggler-icon"></span>
          </button>
          <div class="collapse navbar-collapse" id="navbarSupportedContent">
            <ul class="navbar-nav me-auto mb-2 mb-lg-0"></ul>

            <button className="btn btn-outline-primary">Login / Sign In</button>
          </div>
        </div>
      </nav>
      <div className="headerNote">
        <p>
          Please attention, if you have any queries contact us on 9058153667.
        </p>
      </div>
      {/* <br></br> */}
      {/* search bar */}
      <nav class="navbar">
        <div class="container">
          <form class="d-flex w-100">
            <input
              class="form-control me-2 searchBar"
              type="search"
              placeholder="Search Services..."
              aria-label="Search"
            />
            <button class="btn btn-outline-success submitBtn" type="submit">
              Search
            </button>
          </form>
        </div>
      </nav>
    </>
  );
};

export default Navbar;
