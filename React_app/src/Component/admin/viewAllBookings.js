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

  const getLocationsById = (locationid) => {
    axios
      .get(config.URL + "/admin/getlocationbyid/" + locationid)
      .then((response) => {
        const result = response.data;
        if (result !== null) {
          console.log(result);
          //   setLocation(result);
        }
      });
  };
  const getBillById = (id) => {
    axios.get(config.URL + "/admin/getbillbyid/" + id).then((response) => {
      const result = response.data;
      if (result !== null) {
        console.log(result.actualReturnDate);
        // setBilling(result);
      }
    });
  };
  const getallBookings = () => {
    axios
      .get(config.URL + "/admin/getallbookings")
      .then((response) => {
        const result = response.data;
        console.log(result);
        setBookings(result);
        if (result !== null) {
        } else {
          toast.error("Bookings not available");
        }
      })
      .catch((e) => {
        console.log(e);
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
            <th>Drop Location</th>
            <th>Booking Status</th>
            <th>Billing Date</th>
            <th>Late Fees</th>
            <th>Total Amount</th>
            <th>Billing Status</th>
          </tr>
        </thead>
        <tbody>
          {bookings.map((booking) => {
            const bill = getBillById(booking.bookingId);
            const loc = getLocationsById(booking.pickUpLocId);
            return (
              <tr key={booking.bookingId}>
                <td>{booking.bookingId}</td>
                <td>
                  {booking.customerId.firstName +
                    " " +
                    booking.customerId.lastName}
                </td>
                <td>{booking.carId.registrationNo}</td>
                <td>{booking.carId.carCategoryId.carCategoryName}</td>
                <td>{booking.pickUpDate}</td>
                {/* <td>{getBillById(booking.bookingId).actualReturnDate}</td> */}
                <td>{loc.}</td>
                <td>{loc}</td>
                <td>{booking.bookingStatus}</td>
                <td>{bill.billingDate}</td>
                <td>{bill.lateFees}</td>
                <td>{bill.totalAmount}</td>
                <td>{bill.billingStatus}</td>
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

export default ViewAllBookings;
