import React from "react";
import Contacts from "../Contacts";
import plumberImg from "../../Images/plumberImg.jfif";

const plumberContacts = [
  {
    id: 1,
    img: plumberImg,
    name: "Gupta Plumber Sainik Colony",
    phone: 238790800,
    address: "Sainik colony balawala",
    experience: 8,
  },
  {
    id: 2,
    img: plumberImg,
    name: "Gupta Plumber Sainik Colony",
    phone: 238790800,
    address: "Sainik colony balawala",
    experience: 8,
  },
  {
    id: 3,
    img: plumberImg,
    name: "Gupta Plumber Sainik Colony",
    phone: 238790800,
    address: "Sainik colony balawala",
    experience: 8,
  },
  {
    id: 4,
    img: plumberImg,
    name: "Gupta Plumber Sainik Colony",
    phone: 238790800,
    address: "Sainik colony balawala",
    experience: 8,
  },
];

const Plumber = () => {
  return (
    <>
      <div>
        <div className="bgGray pt-3">
          <div className="container">
            {plumberContacts.map((item, index) => {
              return (
                <Contacts
                  name={item.name}
                  img={item.img}
                  phone={item.phone}
                  address={item.address}
                  id={item.id}
                  experience={item.experience}
                />
              );
            })}
          </div>
        </div>
      </div>
    </>
  );
};

export default Plumber;
