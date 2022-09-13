import { ToastContainer } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'
import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Navbar from './Component/navbar';
import SignUp from "./Component/user/signup"
function App() {
  return (
    <div className="App">
      <BrowserRouter>
      <Navbar/>
      <Routes>
        <Route path="/user/signup" element={<SignUp/>}/>
      </Routes>
      <ToastContainer/>
      </BrowserRouter>
    
    </div>
  );
}

export default App;
