import React from "react";
import "./Contacts.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faStar, faPhoneAlt } from "@fortawesome/free-solid-svg-icons";

const Contacts = (props) => {
  return (
    <>
      <div className="">
        <div className="contacts px-2 py-1 my-3 ">
          <div className="row">
            <div className="col-lg-3  imgBox">
              <img className="serviceImg" src={props.img} />
            </div>
            <div className="col-lg-9  shopDetails">
              {/* <p>ID: {props.id}</p> */}
              <p className="shopName mb-2">{props.name}</p>
              <p className="shopStar mb-2">
                4/5
                <FontAwesomeIcon className="startSuccess ms-1" icon={faStar} />
                <FontAwesomeIcon className="startSuccess" icon={faStar} />
                <FontAwesomeIcon className="startSuccess" icon={faStar} />
                <FontAwesomeIcon className="startSuccess" icon={faStar} />
                <FontAwesomeIcon className="startFailure" icon={faStar} />
              </p>
              <p className="shopAddress mb-2">{props.address}</p>
              <small className="experienceTag px-2">
                {props.experience} YRS
              </small>
              {/* <p className="shopPhone">{props.phone}</p> */}
              <div className="callToActionBox my-2">
                <a href="tel:+1-555-555-1212">
                  <button className="btn btn-outline-primary w-100">
                    <FontAwesomeIcon icon={faPhoneAlt} className="me-2" />
                    Call Now
                  </button>
                </a>

                <p className="spacer">_</p>
                <button className="btn btn-primary ">Get Best Deal</button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Contacts;
