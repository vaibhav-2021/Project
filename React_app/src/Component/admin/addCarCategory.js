import axios from "axios";
import React from "react";
import { useState } from "react";
import Config from "../../config";
import { toast } from "react-toastify";
import Input from "../Input";
//  car_category_name | cost_per_day | seat;
const AddCarCategory = () => {
  const [carCategoryName, setCarCat] = useState("");
  const [costPerDay, setCostPerDay] = useState("");
  const [seat, setSeat] = useState("");

  const addCategory = () => {
    const body = {
      carCategoryName,
      costPerDay,
      seat,
    };
    axios
      .post(Config.URL + "/admin/addcategory", body)
      .then((response) => {
        const result = response.data;
        if (result !== null) {
          toast.success("Car Category Added");
        } else {
          toast.error("Adding failed");
        }
      })
      .catch((e) => {
        console.log(e);
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
        Add Car Category
      </h2>
      <div className="col">
        <Input
          Label="Car category name"
          Onchange={(e) => {
            setCarCat(e.target.value);
          }}
        />
        <Input
          Label="Cost per day"
          Onchange={(e) => {
            setCostPerDay(e.target.value);
          }}
        />
        <Input
          Label="Seats"
          Onchange={(e) => {
            setSeat(e.target.value);
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
          onClick={addCategory}
        >
          Add
        </button>
      </div>
    </div>
  );
};

export default AddCarCategory;
