import { useState, useEffect } from "react";
import axios from "axios";
import Config from "../../config";
import { toast } from "react-toastify";
import { useLocation, useNavigate } from "react-router-dom";

const BookingCart = () => {
  const navigate = useNavigate();
  const [locationId, setLocationId] = useState("");
  const [totalAmount, setTotalAmount] = useState(0);
  const [Car, setCar] = useState([]);
  const [returnDate, setRetuDate] = useState("");
  const [loc, setLoc] = useState([]);
  const [carCAt, setCarCat] = useState([]);
  const [locations, setLocations] = useState([]);
  const location = useLocation();
  const { carId } = location.state;
  const day = new Date().getDate();
  const month = new Date().getMonth() + 1;
  const year = new Date().getFullYear();
  let CarId;
  //const [bookingId, setBookingId] = useState("");
  let bookingId;
  useEffect(() => {
    getLocations();
    getcarById();
    getLocationById();
    getCarCAtById();
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
        //console.log(result.carId);
        setCar(result);
        CarId=result.carId;
      }
    });
  };
  const getTotalAmount = () => {
    const body = {
      returnDate: returnDate,
    };
    axios
      .post(Config.URL + "/customer/getTotalAmount/" + carCAt.costPerDay, body)
      .then((response) => {
        const result = response.data;

        if (result !== 0) {
          //console.log("total amt" + result)
          setTotalAmount(result);
        } else {
          toast.error("Invalid Return Date");
        }
      })
      .catch((e) => [toast.error("Invalid Return Date")]);
  };

  const getLocationById = () => {
    axios
      .get(Config.URL + "/customer/getlocationbyid/" + sessionStorage.locId)
      .then((response) => {
        const result = response.data;
        if (result !== null) {
         // console.log(result);
          setLoc(result);
        }
      });
  };

  const getCarCAtById = () => {
    axios
      .get(Config.URL + "/customer/getcarcatbyid/" + sessionStorage.carCatId)
      .then((response) => {
        const result = response.data;
        if (result !== null) {
         // console.log(result);
          setCarCat(result);
        }
      });
  };

  const booking = () => {
    const body = {
      returnDate: returnDate,
      dropLocId: locationId,
    };

    axios
      .post(
        Config.URL + "/customer/booking/" + sessionStorage.token + "/" + carId,
        body
      )
      .then((response) => {
        const result = response.data;
        if (result != null) {
          //setBookingId(result);
          bookingId = result;
          toast.success("Car Booked ");
          // console.log("inside booking");
          // console.log(result);
          // console.log(bookingId);
          navigate("/user/bookingDetails", {
            state: { bookingId: bookingId },
          });
        }
      });
  };

  return (
    <div
      className="row"
      style={{
        margin: "auto",
        height: 550,
        width: "90%",
        marginTop: 50,
        boxShadow: "1px 1px 20px 5px gray",
      }}
    >
      <h2 style={{ color: "blue", textAlign: "center", margin: 20 }}>
        Booking Cart
      </h2>
      <hr style={{ color: "blue" }} />
      <table className="table table-bordered">
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
          </tr>
        </thead>
        <tbody>
          <tr key={Car.carId}>
            <td>{Car.carId}</td>
            <td>{<img src={Config.URL+"/customer/"+Car.carId} />}</td>
            <td>{Car.company}</td>
            <td>{Car.modelName}</td>

            <td>{carCAt.carCategoryName}</td>
            <td>{carCAt.seat}</td>
            <td>{carCAt.costPerDay}</td>
            <td>{Car.milage}</td>
            <td>{loc.city}</td>
            <td>{loc.locationName}</td>
            <td>{Car.registrationNo}</td>
            <td>{totalAmount}</td>
          </tr>
        </tbody>
      </table>

      <div>
        <label>Pick Up Date - </label>

        <input defaultValue={day + "/" + month + "/" + year} />
      </div>

      <div>
        <label>Return Date - </label>
        <input
          type="date"
          onChange={(e) => {
            setRetuDate(e.target.value);
          }}
        />
      </div>

      <div>
        <label style={{ color: "red" }}>Total Amount - </label>
        <input
          style={{ margin: "auto", width: 100 }}
          type="number"
          
           readOnly value={totalAmount}
           
        />
        <button
          style={{ marginLeft: 20 }}
          onClick={getTotalAmount}
          className={"btn btn-sm btn-primary"}
        >
          Calculate
        </button>
      </div>

      <div>
        <label style={{ marginRight: 20 }}>Drop Location</label>
        <select
          className="mb-3"
          onChange={(e) => {
            setLocationId(e.target.value);
          }}
        >
          <option>select</option>
          {locations.map((loc) => {
            return (
              <option key={loc.locationId} value={loc.locationId}>
                {loc.city + "- " + loc.street + "- " + loc.locationName}
              </option>
            );
          })}
        </select>
      </div>
      <div className="col text-center ">
        <button className="btn btn-primary " onClick={booking}>
          Payment
        </button>
      </div>

      <br />
    </div>
  );
};
export default BookingCart;
