import React from "react";
import "./Contacts.css";

const Contacts = (props) => {
  return (
    <>
      <div className="container">
        <div>
          <p>Name: {props.name}</p>
          <p>Phone: {props.phone}</p>
        </div>
      </div>
    </>
  );
};

export default Contacts;
