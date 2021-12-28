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
          <div
            class="collapse navbar-collapse registerYourService"
            id="navbarSupportedContent"
          >
            <ul class="navbar-nav me-auto mb-2 mb-lg-0 phoneDisplayNone"></ul>

            <button
              className="btn btn-outline-primary"
              data-bs-toggle="modal"
              data-bs-target="#registerYourService"
              data-bs-whatever="@mdo"
            >
              Register Your Service
            </button>
          </div>
        </div>
      </nav>
      <div className="headerNote">
        <p>
          Please attention, if you have any queries contact us on
          support@dunservices.com.
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

export default Navbar;
