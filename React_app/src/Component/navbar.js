import { Link, useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import { custSignout } from "../slice/customerSlice";
import { adminSignout } from "../slice/adminSlice";
import {
  FcHome,
  FcFeedback,
  FcSynchronize,
  FcAddressBook,
  FcNook,
} from "react-icons/fc";

import { GrUpdate, GrUserAdmin, GrLocation } from "react-icons/gr";
import { GiCartwheel } from "react-icons/gi";
import { AiFillCar } from "react-icons/ai";
import { MdOutlineCategory } from "react-icons/md";
import { IoIosPeople } from "react-icons/io";
import { BiBookReader } from "react-icons/bi";
import { VscFeedback } from "react-icons/vsc";

import {
  HiOutlineLocationMarker,
  HiOutlineLogout,
  HiOutlineLogin,
} from "react-icons/hi";
import logo from "./img/logo.jpg";

const Navbar = () => {
  const userStatus = useSelector((state) => state.customerSlice.CustStatus);
  const adminStatus = useSelector((state) => state.adminSlice.AdminStatus);
  //console.log("User Status "+userStatus)
  console.log("admin Status " + adminStatus);
  const dispatch = useDispatch();
  const navigate = useNavigate();
  return (
    <nav className="navbar navbar-expand-lg bg-primary">
      <div className="container-fluid">
        <Link style={{ color: "white" }} className="navbar-brand" to="/">
          <img
            className="d-block mx-auto img-fluid "
            src={logo}
            alt="car"
            style={{ width: 80 }}
          />
        </Link>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav me-auto mb-2 mb-lg-0">
            {!userStatus && !adminStatus && (
              <li className="nav-item">
                <Link
                  style={{ color: "white" }}
                  className="nav-link active"
                  aria-current="page"
                  to="/user/signin"
                >
                  <HiOutlineLogin size={30} />
                  SignIn/SignUp
                </Link>
              </li>
            )}
            <li className="nav-item">
              <Link
                style={{ color: "white" }}
                className="nav-link active"
                aria-current="page"
                to="/"
              >
                <FcHome size={30} /> Home
              </Link>
            </li>
            {userStatus && (
              <li>
                <div className="dropdown">
                  <button
                    style={{ textDecoration: "none", color: "white" }}
                    className="btn btn-link"
                    aria-current="page"
                    type="button"
                    data-bs-toggle="dropdown"
                    aria-expanded="false"
                  >
                    Profile
                  </button>
                  <ul className="dropdown-menu">
                    <li>
                      <Link
                        style={{ color: "blue" }}
                        className="dropdown-item"
                        to="/user/update"
                      >
                        <FcSynchronize size={30} />
                        Update Profile
                      </Link>
                    </li>
                    <li>
                      <Link
                        style={{ color: "blue" }}
                        className="dropdown-item"
                        to="/user/myBookings"
                      >
                        <FcAddressBook size={30} />
                        My Current Bookings
                      </Link>
                    </li>
                    <li>
                      <Link
                        style={{ color: "blue" }}
                        className="dropdown-item"
                        to="/user/MyOldBookings"
                      >
                        <FcNook size={30} />
                        My Old Bookings
                      </Link>
                    </li>
                  </ul>
                </div>
              </li>
            )}
            {/* {userStatus && (
              <li>
                <Link
                  style={{ color: "white" }}
                  className="nav-link active"
                  aria-current="page"
                  to="/user/profile"
                >
                  <CgProfile size={30} />
                  User Profile
                </Link>
              </li>
            )} */}
            {/* {adminStatus && (
              <li className="nav-item">
                <Link
                  style={{ color: "white" }}
                  className="nav-link active"
                  aria-current="page"
                  to="/admin/adminProfile"
                >
                  <GrUserAdmin size={30} />
                  Admin Profile
                </Link>
              </li>
            )} */}
            {adminStatus && (
              <li>
                <div className="dropdown">
                  <button
                    style={{ textDecoration: "none", color: "white" }}
                    className="btn btn-link"
                    aria-current="page"
                    type="button"
                    data-bs-toggle="dropdown"
                    aria-expanded="false"
                  >
                    <GrUserAdmin size={30} />
                    Admin
                  </button>
                  <ul className="dropdown-menu">
                    <li>
                      <Link
                        style={{ color: "blue" }}
                        className="dropdown-item"
                        to="/admin/addCar"
                      >
                        <AiFillCar size={30} />
                        Add Car
                      </Link>
                    </li>
                    <li>
                      <Link
                        style={{ color: "blue" }}
                        className="dropdown-item"
                        to="/admin/addCarCategory"
                      >
                        <MdOutlineCategory size={30} />
                        Add Categopry
                      </Link>
                    </li>
                    <li>
                      <Link
                        style={{ color: "blue" }}
                        className="dropdown-item"
                        to="/admin/addLocation"
                      >
                        <HiOutlineLocationMarker size={30} />
                        Add Location
                      </Link>
                    </li>
                    <li>
                      <Link
                        style={{ color: "blue" }}
                        className="dropdown-item"
                        to="/admin/viewAllCars"
                      >
                        <GiCartwheel size={30} />
                        View All Cars
                      </Link>
                    </li>
                    <li>
                      <Link
                        style={{ color: "blue" }}
                        className="dropdown-item"
                        to="/admin/viewAllCustomers"
                      >
                        <IoIosPeople size={30} />
                        View All Customers
                      </Link>
                    </li>
                    <li>
                      <Link
                        style={{ color: "blue" }}
                        className="dropdown-item"
                        to="/admin/viewAllBookings"
                      >
                        <BiBookReader size={30} />
                        View All Bookings
                      </Link>
                    </li>
                    <li>
                      <Link
                        style={{ color: "blue" }}
                        className="dropdown-item"
                        to="/admin/ViewAllFeedbacks"
                      >
                        <VscFeedback size={30} />
                        View All FeedBacks
                      </Link>
                    </li>
                  </ul>
                </div>
              </li>
            )}

            {!adminStatus && !userStatus && (
              <li className="nav-item">
                <Link
                  style={{ color: "white" }}
                  className="nav-link active"
                  aria-current="page"
                  to="/admin/signin"
                >
                  <HiOutlineLogin size={30} />
                  AdminSignin
                </Link>
              </li>
            )}
            {/* {adminStatus && (
              <li className="nav-item">
                <Link
                  style={{ color: "white" }}
                  className="nav-link active"
                  aria-current="page"
                  to="/admin/addCar"
                >
                  Add Car
                </Link>
              </li>
            )} */}
            <li>
              {userStatus && (
                <button
                  style={{ textDecoration: "none", color: "white" }}
                  onClick={() => {
                    navigate("/user/signin");
                    dispatch(custSignout());
                  }}
                  className="btn btn-link"
                  aria-current="page"
                >
                  <HiOutlineLogout size={30} />
                  Signout
                </button>
              )}
            </li>
            {
              <li>
                {adminStatus && (
                  <button
                    style={{ textDecoration: "none", color: "white" }}
                    onClick={() => {
                      navigate("/admin/signin");
                      dispatch(adminSignout());
                    }}
                    className="btn btn-link"
                    aria-current="page"
                  >
                    <HiOutlineLogout size={30} />
                    Signout
                  </button>
                )}
              </li>
            }
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
