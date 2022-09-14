import { useState, useEffect } from "react";
import axios from "axios";
import Config from "../../config";
import { toast } from "react-toastify";
import { useLocation, useNavigate } from "react-router-dom";
import Input from "../Input";

const BookingCart = () => {
  const navigate = useNavigate();
  const [locationId, setLocationId] = useState("");
  const [totalAmount, setTotalAmount] = useState("");
  const [Car, setCar] = useState([]);

  const [locations, setLocations] = useState([]);
  const location = useLocation();
  const { carId } = location.state;
  console.log(carId);
  useEffect(() => {
    getLocations();
    getcarById();
  }, []);

  const getLocations = () => {
    axios.get(Config.URL + "/admin/getalllocations").then((response) => {
      const result = response.data;
      if (result !== null) {
        //console.log(result);
        setLocations(result);
      }
    });
  };
  const getcarById = () => {
    axios.get(Config.URL + "/customer/getcarbyid/" + carId).then((response) => {
      const result = response.data;
      if (result !== null) {
        console.log(result);
        setCar(result);
      }
    });
  };
  const getTotalAmount = () => {
    axios
      .get(
        Config.URL + "/customer/getTotalAmount/" + Car.carCategoryId.costPerDay
      )
      .then((response) => {
        const result = response.data;
        if (result !== null) {
          console.log(result);
          setTotalAmount(result);
        }
      });
  };

  return (
    <div
      className="row"
      style={{
        margin: "auto",
        height: 450,
        width: "70%",
        marginTop: 50,
        boxShadow: "1px 1px 20px 5px gray",
      }}
    >
      <h2 style={{ color: "blue", textAlign: "center", margin: 20 }}>
        Booking Cart
      </h2>
      <table className="table table-striped">
        <thead>
          <tr>
            <th>Car Id</th>
            <th>car_image</th>
            <th>company</th>
            <th>Model Name</th>
            <th>Car Category Name</th>
            <th>Seats</th>
            <th>Cost per day</th>
            <th>Milage</th>
            <th>Location City</th>
            <th>Location Name</th>
            <th>Registration No</th>
            <th>Total Amount</th>
            <th>Select</th>
          </tr>
        </thead>
        <tbody>
          <tr key={Car.carId}>
            <td>{Car.carId}</td>
            <td>{Car.carImage}</td>
            <td>{Car.company}</td>
            <td>{Car.modelName}</td>
            {/* <td>{Car.carCategoryId.carCategoryName}</td>
            <td>{Car.carCategoryId.seat}</td> */}
            <td>{Car["carCategoryId"]["costPerDay"]}</td>
            <td>{Car.milage}</td>
            {/* <td>{Car.locationId.city}</td>
            <td>{Car.locationId.locationName}</td> */}
            <td>{Car.registrationNo}</td>

            <td>{}</td>
          </tr>
        </tbody>
      </table>
      <Input Type="date" Label="Return Date">
        Return Date
      </Input>
      <label style={{ marginRight: 20 }}>Car Location</label>
      <select
        className="mb-3"
        onChange={(e) => {
          setLocationId(e.target.value);
        }}
      >
        <option>select</option>
        {locations.map((loc) => {
          return (
            <option value={loc.locationId}>
              {loc.city + "- " + loc.street + "- " + loc.locationName}
            </option>
          );
        })}
      </select>
      <div className="col text-center ">
        <button
          className="btn btn-primary "
          onClick={() =>
            navigate("/customer/searchcar", {
              state: { locationId: locationId },
            })
          }
        >
          Book Car
        </button>
      </div>
      <br />
    </div>
  );
};
export default BookingCart;
