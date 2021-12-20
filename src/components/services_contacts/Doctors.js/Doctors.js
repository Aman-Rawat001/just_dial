import React from "react";
import Contacts from "../Contacts";
import DoctorsImg from "../../Images/docterImg.jfif";

const DoctorsContacts = [
  {
    id: 1,
    img: DoctorsImg,
    name: "Gupta Doctors Sainik Colony",
    phone: 238790800,
    address: "Sainik colony balawala",
    experience: 8,
  },
  {
    id: 2,
    img: DoctorsImg,
    name: "Gupta Doctors Sainik Colony",
    phone: 238790800,
    address: "Sainik colony balawala",
    experience: 8,
  },
  {
    id: 3,
    img: DoctorsImg,
    name: "Gupta Doctors Sainik Colony",
    phone: 238790800,
    address: "Sainik colony balawala",
    experience: 8,
  },
  {
    id: 4,
    img: DoctorsImg,
    name: "Gupta Doctors Sainik Colony",
    phone: 238790800,
    address: "Sainik colony balawala",
    experience: 8,
  },
];

const Doctors = () => {
  return (
    <>
      <div>
        <div className="bgGray pt-3">
          <div className="container">
            {DoctorsContacts.map((item, index) => {
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

export default Doctors;
