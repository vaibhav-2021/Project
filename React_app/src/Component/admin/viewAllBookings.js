import React from "react";
import axios from "axios";
import config from "../../config";
import { toast } from "react-toastify";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
const ViewAllBookings = () => {
  const [bookings, setBookings] = useState([]);
  const [location, setLocation] = useState([]);
  const [billing, setBilling] = useState([]);
  const navigate = useNavigate();
  
  useEffect(() => {
    getallBookings();
  }, []);

  const getallBookings = () => {
    axios
      .get(config.URL + "/admin/getallbookings")
      .then((response) => {
        const result = response.data;
       // console.log(result);
        setBookings(result);
        if (result !== null) {
        } else {
          toast.error("Bookings not available");
        }
      })
      .catch((e) => {
       // console.log(e);
        toast.error("Bookings not available");
      });
  };

  return (
    <div className="container">
      <h3 style={styles.h3}>Booking List</h3>
      <table className="table table-striped">
        <thead>
          <tr>
            <th>Booking Id</th>
            <th>Customer Name</th>
            <th>Car Name</th>
            <th>Registration No</th>
            <th>Car Category Name</th>
            <th>pickUp Date</th>
            <th>Actual return Date</th>
            <th>Pickup Location</th>
            {/* <th>Drop Location</th> */}
            <th>Booking Status</th>
            <th>Billing Date</th>
            <th>Late Fees</th>
            <th>Total Amount</th>
            <th>Billing Status</th>
          </tr>
        </thead>
        <tbody>
          {bookings.map((booking) => {
            return (
              <tr key={booking[0].bookingId}>
                <td>{booking[0].bookingId}</td>
                <td>
                  {booking[0].customerId.firstName +
                    " " +
                    booking[0].customerId.lastName}
                </td>
                <td>{booking[0].carId.modelName}</td>
                <td>{booking[0].carId.registrationNo}</td>
                <td>{booking[0].carId.carCategoryId.carCategoryName}</td>
                <td>{booking[0].pickUpDate}</td>

                <td>{booking[1].actualReturnDate}</td>
                <td>{booking[1].bookingId.carId.locationId.locationName}</td>
                {/* <td>{location.actualReturnDate}</td> */}
                <td>{booking[0].bookingStatus}</td>
                <td>{booking[1].billingDate}</td>
                <td>{booking[1].lateFees}</td>
                <td>{booking[1].totalAmount}</td>
                <td>{booking[1].billingStatus}</td>
              </tr>
            );
          })}
        </tbody>
      </table>
      <div className="col-md-12 text-center">
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

export default ViewAllBookings;
