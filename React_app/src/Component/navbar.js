import { Link, useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import { custSignout } from "../slice/customerSlice";
import { adminSignout } from "../slice/adminSlice";

const Navbar = () => {
  const userStatus = useSelector((state) => state.customerSlice.CustStatus);
  const adminStatus = useSelector((state) => state.adminSlice.AdminStatus);
  //console.log("User Status "+userStatus)
  console.log("admin Status " + adminStatus);
  const dispatch = useDispatch();
  const navigate = useNavigate();
  return (
    <nav className="navbar navbar-expand-lg bg-dark">
      <div className="container-fluid">
        <Link style={{ color: "white" }} className="navbar-brand" to="/">
          Navbar
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
                Home
              </Link>
            </li>


            {/* {userStatus && (
              <li>
                <Link
                  style={{ color: "white" }}
                  className="nav-link active"
                  aria-current="page"
                  to="/user/profile"
                >
                  User Profile
                </Link>
              </li>
            )} */}


            {userStatus &&  <li>
                  <div className="dropdown">
                  <button style={{ textDecoration: "none", color: "white" }} className="btn btn-link" aria-current="page" type="button" data-bs-toggle="dropdown" aria-expanded="false">
                  Profile
                  </button>
                  <ul className="dropdown-menu">
                  <li><Link style={{color:"blue"}} className="dropdown-item" to="/user/update">Update Profile</Link></li>
                  <li><Link style={{color:"blue"}} className="dropdown-item" to="/user/myBookings">My Bookings</Link></li>
                  <li><Link style={{color:"blue"}} className="dropdown-item" to="/user/MyOldBookings">My Old Bookings</Link></li>
                  </ul>
                  </div>
                  </li>

            }

            {/* {adminStatus && (
              <li className="nav-item">
                <Link
                  style={{ color: "white" }}
                  className="nav-link active"
                  aria-current="page"
                  to="/admin/adminProfile"
                >
                  Admin Profile
                </Link>
              </li>
            )} */}

               {adminStatus &&  <li>
                  <div className="dropdown">
                  <button style={{ textDecoration: "none", color: "white" }} className="btn btn-link" aria-current="page" type="button" data-bs-toggle="dropdown" aria-expanded="false">
                  Admin
                  </button>
                  <ul className="dropdown-menu">
                  <li><Link style={{color:"blue"}} className="dropdown-item" to="/admin/addCar">Add Car</Link></li>
                  <li><Link style={{color:"blue"}} className="dropdown-item" to="/admin/addCarCategory">Add Categopry</Link></li>
                  <li><Link style={{color:"blue"}} className="dropdown-item" to="/admin/addLocation">Add Location</Link></li>
                  <li><Link style={{color:"blue"}} className="dropdown-item" to="/admin/viewAllCars">View All Cars</Link></li>
                  <li><Link style={{color:"blue"}} className="dropdown-item" to="/admin/viewAllCustomers">View All Customers</Link></li>
                  <li><Link style={{color:"blue"}} className="dropdown-item" to="/admin/viewAllBookings">View All Bookings</Link></li>
                  <li><Link style={{color:"blue"}} className="dropdown-item" to="/admin/ViewAllFeedbacks">View All FeedBacks</Link></li>
                  </ul>
                  </div>
                  </li>

            }



            {!adminStatus && !userStatus && (
              <li className="nav-item">
                <Link
                  style={{ color: "white" }}
                  className="nav-link active"
                  aria-current="page"
                  to="/admin/signin"
                >
                  AdminSignin
                </Link>
              </li>
            )}
            
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
