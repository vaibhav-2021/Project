import { ToastContainer } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'
import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Navbar from './Component/navbar';
import SignUp from "./Component/user/signup"
import SignIn from "./Component/user/signin"
import Update from "./Component/user/updateCustomer"
import Profile from "./Component/user/profile"
import AdminSignIn from './Component/admin/adminSignin';
import AddCar from "./Component/admin/addCar"

function App() {
  return (
    <div className="App">
      <BrowserRouter>
      <Navbar/>
      <Routes>
        <Route path="/user/signup" element={<SignUp/>}/>
        <Route  path="/user/signin" element={<SignIn/>}/>
        <Route  path="/user/profile" element={<Profile/>}/>
        <Route path="/user/update" element={<Update/>}/>
        <Route path="/admin/signin" element={<AdminSignIn/>}/>
        <Route path="/admin/addCar" element={<AddCar/>}/>
      </Routes>
      <ToastContainer/>
      </BrowserRouter>
    
    </div>
  );
}

export default App;
