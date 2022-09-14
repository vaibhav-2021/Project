import React from "react";
import { Link, useNavigate } from "react-router-dom";

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
    </div>
  );
};

export default adminProfile;
