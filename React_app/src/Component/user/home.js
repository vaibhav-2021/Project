import { useState, useEffect } from "react";
import axios from "axios";
import Config from "../../config";
import { toast } from "react-toastify";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { adminSignin } from "../../slice/adminSlice";
import { custSignin } from "../../slice/customerSlice";

const Home = () => {
  const navigate = useNavigate();
  const [locationId, setLocationId] = useState("");
  sessionStorage.locId=locationId;
  const [locations, setLocations] = useState([]);
  const dispatch=useDispatch();
  //selector=useSelector()
  const userStatus = useSelector((state) => state.customerSlice.CustStatus);
  const adminStatus = useSelector((state) => state.adminSlice.AdminStatus);


  useEffect(() => {
 
    getLocations();
    keepSignedIN();
    
  }, []);

  const keepSignedIN=()=>{
    console.log(sessionStorage.token>0)
    console.log(userStatus)
    
      if (sessionStorage.token==="Admin"){
        dispatch(adminSignin(sessionStorage.token))
      }
      if(sessionStorage.token>0){
       if(!userStatus){
        dispatch(custSignin(sessionStorage.token))
      }
    }
  }

  const getLocations = () => {
    axios.get(Config.URL + "/admin/getalllocations").then((response) => {
      const result = response.data;
      if (result !== null) {
        //console.log(result);
        setLocations(result);
      }
    });
  };

  return (
    <div
    className="row"
    style={{
      margin: "auto",
      height: 350,
      width: "90%",
      marginTop: 50,
      boxShadow: "1px 1px 20px 5px gray",
    }}
   
    >
      <h2 style={{ color: "blue", textAlign: "center", margin: 20 }}>
        Search Cars
      </h2>

    <div className="row-4">
    <label style={{ marginRight: 20 }}>Car Location</label>
     
     <select
        className="mb-3"
        onChange={(e) => {
          setLocationId(e.target.value);
        }}
      >
        <option>select</option>
        {locations.map((loc) => {
          return (
            <option value={loc.locationId}>
              {loc.city + "- " + loc.street + "- " + loc.locationName}
            </option>
          );
        })}
      </select>
    </div>

      <div className="row-4">
        <button
          onClick={() =>
            navigate("/customer/searchcar", {
              state: { locationId: locationId },
              
            })
            
          }
        >
          Find Car
        </button>
        
      </div>
      <div className='row-4'></div>
      <br />
    </div>
  );
};
export default Home;
