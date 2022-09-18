import React from "react";
import axios from "axios";
import config from "../../config";
import { toast } from "react-toastify";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import Config from "../../config";
const ViewAllCars = () => {
  const [cars, setCars] = useState([]);
  const navigate = useNavigate();
  useEffect(() => {
    // load all the homes created by the user
    getallcars();
  }, []);

  const getallcars = () => {
    axios
      .get(config.URL + "/admin/getallcars")
      .then((response) => {
        const result = response.data;
        //console.log(result);
        setCars(result);
        if (result !== null) {
        } else {
          toast.error("Cars not available");
        }
      })
      .catch((e) => {
       // console.log(e);
        toast.error("Cars not available");
      });
  };

  return (
    <div className="container">
      <h3 style={styles.h3}>CarList</h3>
      <table className="table table-striped">
        <thead>
          <tr>
            <th>Car Id</th>
            <th>car_image</th>
            <th>Available Status</th>
            <th>company</th>
            <th>Model Name</th>
            <th>Car Category Name</th>
            <th>Seats</th>
            <th>Cost per day</th>
            <th>Milage</th>
            <th>Model Type</th>
            <th>Model Year</th>
            <th>Location City</th>
            <th>Location Name</th>
            <th>Registration No</th>
          </tr>
        </thead>
        <tbody>
          {cars.map((Car) => {
            return (
              <tr key={Car.carId}>
                <td>{Car.carId}</td>
                <td>{<img src={Config.URL+"/customer/"+Car.carId} />}</td>
                <td>{Car.availableFlag ? "Available" : "Booked"}</td>
                <td>{Car.company}</td>
                <td>{Car.modelName}</td>
                <td>{Car.carCategoryId.carCategoryName}</td>
                <td>{Car.carCategoryId.seat}</td>
                <td>{Car.carCategoryId.costPerDay}</td>
                <td>{Car.milage}</td>
                <td>{Car.modelType}</td>
                <td>{Car.modelYear}</td>
                <td>{Car.locationId.city}</td>
                <td>{Car.locationId.locationName}</td>
                <td>{Car.registrationNo}</td>
              </tr>
            );
          })}
        </tbody>
      </table>
      <div className="col-md-12 text-center">
      </div>
    </div>
  );
};

const styles = {
  h3: {
    textAlign: "center",
    margin: 20,
    color: "blue",
  },
  button: {
    marginRight: 10,
  },
};

export default ViewAllCars;
