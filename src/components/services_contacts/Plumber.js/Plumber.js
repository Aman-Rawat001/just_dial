import React from "react";
import "./Plumber.css";
import Contacts from "../Contacts";

const plumberContacts = [
  { name: "aman arawt", phone: 238790800 },
  { name: "aman arawt", phone: 238790800 },
  { name: "aman arawt", phone: 238790800 },
  { name: "aman arawt", phone: 238790800 },
];

const Plumber = () => {
  return (
    <>
      <div>
        {plumberContacts.map((item, index) => {
          return <Contacts name={item.name} phone={item.phone} />;
        })}
      </div>
    </>
  );
};

export default Plumber;
