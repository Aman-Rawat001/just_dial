import React, { useEffect, useState } from "react";
import Contacts from "../Contacts";
import { storage } from "../../../firebase";

const Plumber = () => {
  const [plumberContacts, setPlummberContacts] = useState([]);
  var path = "";
  const fetchUrl = () => {
    path = window.location.pathname;
    fetchPlumbers();
  };
  const fetchPlumbers = () => {
    // console.log(path);
    storage
      .collection(path + "_list")
      .get()
      .then((querySnapshot) => {
        querySnapshot.forEach((element) => {
          var data = element.data();
          setPlummberContacts((arr) => [...arr, data]);
        });
      });
  };
  useEffect(() => {
    fetchUrl();
  }, []);

  return (
    <>
      <div>
        {plumberContacts[0] == null ? (
          <div className="text-center my-3 textBold">
            Fetching Services Near You...
          </div>
        ) : (
          <div className="bgGray py-3">
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
        )}
      </div>
    </>
  );
};

export default Plumber;
