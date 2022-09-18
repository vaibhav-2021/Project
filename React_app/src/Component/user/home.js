import { useState, useEffect } from "react";
import axios from "axios";
import Config from "../../config";
import { toast } from "react-toastify";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { adminSignin } from "../../slice/adminSlice";
import { custSignin } from "../../slice/customerSlice";
import { FcSearch } from "react-icons/fc";
const Home = () => {
  const navigate = useNavigate();
  const [locationId, setLocationId] = useState("");
  sessionStorage.locId = locationId;
  const [locations, setLocations] = useState([]);
  const dispatch = useDispatch();
  //selector=useSelector()
  const userStatus = useSelector((state) => state.customerSlice.CustStatus);
  const adminStatus = useSelector((state) => state.adminSlice.AdminStatus);

  useEffect(() => {
    getLocations();
    keepSignedIN();
  }, []);

  const keepSignedIN = () => {
    console.log(sessionStorage.token > 0);
    console.log(userStatus);

    if (sessionStorage.token === "Admin") {
      dispatch(adminSignin(sessionStorage.token));
    }
    if (sessionStorage.token > 0) {
      if (!userStatus) {
        dispatch(custSignin(sessionStorage.token));
      }
    }
  };

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
        width: "90%",
      }}
    >
      <div
        className="row-4"
        // style={{
        //   height: "100vh",
        //   width: 900,
        //   // backgroundSize: "cover",
        //   backgroundRepeat: "no-repeat",
        //   backgroundImage:
        //     "url('https://zoomcar-assets.zoomcar.com/images/original/9cecdb00e88fa2175d00e9d2b36c6bffd0e54207.jpg?1661348340')",
        // }}
      >
        <img
          src="https://zoomcar-assets.zoomcar.com/images/original/9cecdb00e88fa2175d00e9d2b36c6bffd0e54207.jpg?1661348340"
          style={{
            width: "100%",
            height: "50%",
            marginTop: -70,
            borderRadius: 15,
          }}
        ></img>

        <h1 style={{ color: "blue", textAlign: "center", marginTop: 30 }}>
          Search Cars <FcSearch size={30} />
        </h1>
        <label style={{ marginTop: 10, marginRight: 20, fontSize: "30px" }}>
          Car Location
        </label>

        <select
          style={{ width: 400, height: 35 }}
          className="mb-6"
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
        <button
          style={{ marginLeft: 30 }}
          className="btn btn-lg btn-primary"
          onClick={() =>
            navigate("/customer/searchcar", {
              state: { locationId: locationId },
            })
          }
        >
          Find Car
        </button>
      </div>

      <div className="row-4"></div>

      <br />
    </div>
  );
};
export default Home;
