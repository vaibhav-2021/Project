import React from "react";
import axios from "axios";
import config from "../../config";
import { toast } from "react-toastify";
import { useEffect, useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";
import Config from "../../config";
const SearchCars = () => {
  const userStatus = useSelector((state) => state.customerSlice.CustStatus);
  const [cars, setCars] = useState([]);
  const navigate = useNavigate();
  useEffect(() => {
    // load all the homes created by the user
    getallcars();
  }, []);
  const location = useLocation();
  const { locationId } = location.state;
  // console.log(locationId);

  const getallcars = () => {
    axios
      .get(config.URL + "/customer/getavailablecars/" + locationId)
      .then((response) => {
        const result = response.data;
        console.log(result);
        setCars(result);
        if (result !== null) {
        } else {
          toast.error("Cars not available");
        }
      })
      .catch((e) => {
        console.log(e);
        toast.error("Cars not available");
      });
  };

  return (
    <div className="container">
      <h3 style={styles.h3}>CarList</h3>
      {!userStatus && (
        <h4 style={{ color: "Red" }}> Please Login For Booking</h4>
      )}
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
            <th>Select</th>
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
                <td>
                  <div className="col-4">
                    {userStatus && (
                      <button
                        className="btn btn-success"
                        onClick={
                          ((sessionStorage.carCatId =
                            Car.carCategoryId.carCategoryId),
                          () =>
                            navigate("/customer/bookingCart", {
                              state: { carId: Car.carId },
                            }))
                        }
                      >
                        Select Car
                      </button>
                    )}
                  </div>
                </td>
              </tr>
            );
          })}
        </tbody>
      </table>
      <div class="col-md-12 text-center">
        <button
          onClick={() => navigate(-1)}
          style={styles.button}
          className="btn btn-sm btn-primary  "
        >
          Back To Admin Page
        </button>
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

export default SearchCars;
