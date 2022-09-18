// city | district | location_name | pincode | state | street;

import axios from "axios";
import React from "react";
import { useState } from "react";
import Config from "../../config";
import { toast } from "react-toastify";
import Input from "../Input";

const AddLocation = () => {
  const [city, setCity] = useState("");
  const [district, setDistrict] = useState("");
  const [locationName, setLocationName] = useState("");
  const [pincode, setPincode] = useState("");
  const [state, setState] = useState("");
  const [street, setStreet] = useState("");

  const addLocation = () => {
    const body = {
      city,
      district,
      locationName,
      pincode,
      state,
      street,
    };
    axios
      .post(Config.URL + "/admin/addlocation", body)
      .then((response) => {
        const result = response.data;
        if (result !== null) {
          toast.success("Location Added");
        } else {
          toast.error("Adding failed");
        }
      })
      .catch((e) => {
<<<<<<< HEAD
        //console.log(e);
=======
        console.log(e);
>>>>>>> d13a0575b95b67b281933dca66837d78c533137a
        toast.error("Adding failed");
      });
  };

  return (
    <div
      className="row"
      style={{
        margin: "auto",
        height: 350,
        width: "50%",
        marginTop: 50,
        boxShadow: "1px 1px 20px 5px gray",
      }}
    >
      <h2 style={{ color: "blue", textAlign: "center", margin: 20 }}>
        Add Location
      </h2>
      <div className="col">
        <Input
          Label="City"
          Onchange={(e) => {
            setCity(e.target.value);
          }}
        />
        <Input
          Label="District"
          Onchange={(e) => {
            setDistrict(e.target.value);
          }}
        />
        <Input
          Label="Location Name"
          Onchange={(e) => {
            setLocationName(e.target.value);
          }}
        />
      </div>
      <div className="col">
        <Input
          Label="Pincode"
          Onchange={(e) => {
            setPincode(e.target.value);
          }}
        />
        <Input
          Label="State"
          Onchange={(e) => {
            setState(e.target.value);
          }}
        />
        <Input
          Label="Street"
          Onchange={(e) => {
            setStreet(e.target.value);
          }}
        />
      </div>
      <div className="">
        <button
          style={{
            backgroundColor: "blue",
            border: "none",
            borderRadius: 5,
            color: "white",
            width: 100,
          }}
          onClick={addLocation}
        >
          Add
        </button>
      </div>
    </div>
  );
};

export default AddLocation;
