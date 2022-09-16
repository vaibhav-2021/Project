import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navbar from "./Component/navbar";
import SignUp from "./Component/user/signup";
import SignIn from "./Component/user/signin";
import Update from "./Component/user/updateCustomer";
import Profile from "./Component/user/profile";
import AdminSignIn from "./Component/admin/adminSignin";
import AddCar from "./Component/admin/addCar";
import AdminProfile from "./Component/admin/adminProfile";
import AddCarCategory from "./Component/admin/addCarCategory";
// import "bootstrap/dist/css/bootstrap.min.css";
import AddLocation from "./Component/admin/addLocation";
import ViewAllCars from "./Component/admin/viewAllCars";
import ViewAllCustomers from "./Component/admin/viewAllCustomers";
import ViewAllBookings from "./Component/admin/viewAllBookings";
import SearchCars from "./Component/user/searchCar";
import Home from "./Component/user/home";
import BookingCart from "./Component/user/bookingCart";
import BillingDetails from "./Component/user/billingDetails";
import MyBookings from "./Component/user/myBookings";
import FinalBill from "./Component/user/finalBillDetails";
import OldBookings from "./Component/user/oldBookings";
import Addfeedback from "./Component/user/addFeedBack";
function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path="/user/signup" element={<SignUp />} />
          <Route path="/user/signin" element={<SignIn />} />
          <Route path="/user/profile" element={<Profile />} />
          <Route path="/user/update" element={<Update />} />
          <Route path="/admin/signin" element={<AdminSignIn />} />
          <Route path="/admin/addCar" element={<AddCar />} />
          <Route path="/admin/adminProfile" element={<AdminProfile />} />
          <Route path="/admin/addCarCategory" element={<AddCarCategory />} />
          <Route path="/admin/addLocation" element={<AddLocation />} />
          <Route path="/admin/viewallcars" element={<ViewAllCars />} />
          <Route path="/admin/viewallbookings" element={<ViewAllBookings />} />
          <Route path="/customer/searchcar" element={<SearchCars />} />
          <Route path="/customer/bookingcart" element={<BookingCart />} />
          <Route path="/" element={<Home />} />
          <Route path="/admin/viewallcustomers"element={<ViewAllCustomers />}/>
          <Route path="/user/bookingDetails"element={<BillingDetails/>}/>
          <Route path="/user/myBookings"element={<MyBookings/>}/>
          <Route path="/user/finalBilling"element={<FinalBill/>}/>
          <Route path="/user/MyOldBookings"element={<OldBookings/>}/>
          <Route path="/user/AddFeedBack"element={<Addfeedback/>}/>




        </Routes>
        <ToastContainer />
      </BrowserRouter>
    </div>
  );
}

export default App;
