import { useState, useEffect } from "react";
import axios from "axios";
import Config from "../../config";
import { toast } from "react-toastify";
import { useNavigate } from "react-router-dom";

const MyBookings = () => {
  const [bookings, setBookings] = useState([]);
  const navigate = useNavigate();
  useEffect(() => {
    getCurrentBookings();
  }, []);

  const getCurrentBookings = () => {
    axios
      .get(Config.URL + "/customer/getcurrentbookings/" + sessionStorage.token)
      .then((response) => {
        const result = response.data;
        if (result != null) {
          setBookings(result);
         // console.log(result);
        }
      })
      .catch((e) => {
        toast.error("No Booking Available!!");
      });
  };

  const cancelBooking = (bookId) => {
    axios
      .put(Config.URL + "/customer/cancelbooking/" + bookId)
      .then((response) => {
        const result = response.data;
       // console.log(result);
        if (result !== null) {
          toast.success("Booking Cancelled");
          getCurrentBookings();
        }
      })
      .catch((e) => {
        toast.error("Cancellation Period Over!!");
      });
  };

  return (
    <div style={{ marginTop: 30 }} className="container">
      {/* <Sidebar></Sidebar> */}
      <h2 style={{ color: "blue", textAlign: "center", margin: 20 }}>
        My Current Bookings
      </h2>
      <div>
        <table className=" table-responsive">
          <thead>
            <tr>
              <th>Booking Id</th>
              <th>Customer Name</th>
              <th>Car Name</th>
              <th>Car Image</th>
              <th>Registration No</th>
              <th>CarCategory Name</th>
              <th>pickUp Date</th>
              <th>return Date</th>
              <th>Pickup Location</th>
              <th>Booking Status</th>
              <th>Billing Date</th>
              <th>Late Fees</th>
              <th>Total Amount</th>
              <th>Billing Status</th>
              <th>Submit Car</th>
              <th>Cancel Car</th>
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
                  <td>{<img src={Config.URL+"/customer/"+booking[0].carId.carId} />}</td>
                  <td>{booking[0].carId.registrationNo}</td>
                  <td>{booking[0].carId.carCategoryId.carCategoryName}</td>
                  <td>{booking[0].pickUpDate}</td>

                  <td>{booking[1].actualReturnDate}</td>
                  <td>{booking[1].bookingId.carId.locationId.locationName}</td>
                  <td>{booking[0].bookingStatus}</td>
                  <td>{booking[1].billingDate}</td>
                  <td>{booking[1].lateFees}</td>
                  <td>{booking[1].totalAmount}</td>
                  <td>{booking[1].billingStatus}</td>
                  {/* <td><button onClick={()=>{submitCar(booking[0].bookingId)}} className="btn btn-sm btn-success">Submit</button></td> */}
                  <td>
                    <button
                      onClick={() => {
                        navigate("/user/finalBilling", {
                          state: { bookingId: booking[0].bookingId },
                        });
                      }}
                      className="btn btn-sm btn-success"
                    >
                      Submit
                    </button>
                  </td>
                  <td>
                    <button
                      onClick={() => {
                        cancelBooking(booking[0].bookingId);
                      }}
                      className="btn btn-sm btn-danger"
                    >
                      Cancel
                    </button>
                  </td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>
      <div className="col-md-12 text-center">
        <button
          onClick={() => navigate(-1)}
          style={styles.button}
          className="btn btn-sm btn-primary  "
        >
          Back 
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
export default MyBookings;
