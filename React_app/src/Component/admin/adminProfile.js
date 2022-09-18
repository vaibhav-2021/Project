import React from "react";
<<<<<<< HEAD
import { Link } from "react-router-dom";
=======
import { Link, useNavigate } from "react-router-dom";
>>>>>>> d13a0575b95b67b281933dca66837d78c533137a

const adminProfile = () => {
  return (
    <div>
      <div>
        <h2 style={{ color: "blue", textAlign: "center", margin: 20 }}>
          AdminProfile
        </h2>
      </div>
      <Link className="nav-link active" to="/admin/addCar">
        Add Car
      </Link>
      <Link className="nav-link active" to="/admin/addCarCategory">
        Add Car Category
      </Link>
      <Link className="nav-link active" to="/admin/addLocation">
        Add Location
      </Link>
      <Link className="nav-link active" to="/admin/viewAllCars">
        View All Cars
      </Link>
      <Link className="nav-link active" to="/admin/viewAllCustomers">
        View All Customers
      </Link>
      <Link className="nav-link active" to="/admin/viewAllBookings">
        View All Bookings
      </Link>
      <Link className="nav-link active" to="/admin/ViewAllFeedbacks">
        View All FeedBacks
      </Link>
    </div>
  );
};

export default adminProfile;
