import { useState, useEffect } from "react";
import axios from "axios";
import Config from "../../config";
import { toast } from "react-toastify";
import Input from "../Input";
import { useNavigate } from "react-router-dom";

const AddCar = () => {
  const [registrationNo, setRegisNo] = useState("");
  const [modelName, setModel] = useState("");
  const [company, setCompany] = useState("");
  const [modelYear, setModelYear] = useState("");
  const [milage, setMilage] = useState("");
  const [modelType, setModelType] = useState("");
  const [carCategoryId, setCarCatId] = useState("");
  const [locationId, setLocationId] = useState("");

  const [locations, setLocations] = useState([]);
  const [carCat, setCarCat] = useState([]);
  const navigate=useNavigate();

  useEffect(() => {
    getLocations();
    getCarCat();
  }, []);
  

  const getLocations = () => {
    axios.get(Config.URL + "/admin/getalllocations").then((response) => {
      const result = response.data;
      if (result !== null) {
        //console.log(result);
        setLocations(result);
      }
    });
  };

  const getCarCat = () => {
    axios.get(Config.URL + "/admin/getcarcategories").then((response) => {
      const result = response.data;
      if (result !== null) {
        //console.log(result);
        setCarCat(result);
      }
    });
  };

  const addcar = () => {
    const body = {
      registrationNo,
      modelName,
      company,
      modelYear,
      milage,
      modelType,
      carCategoryId,
      locationId,
    };

    axios
      .post(Config.URL + "/admin/addcar", body)
      .then((response) => {
        const result = response.data;
        if (result !== null) {
          toast.success("Car Added");

          navigate("/admin/uploadCarImage",{state:{carId:result}});
        } else {
          toast.error("Adding failed");
        }
      })
      .catch((e) => {
       // console.log(e);
        toast.error("Adding failed");
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
        Add Car Details
      </h2>
      <div className="col-4">
        <Input
          Label="Registration No"
          Onchange={(e) => {
            setRegisNo(e.target.value);
          }}
        />
        <Input
          Label="Model Name"
          Onchange={(e) => {
            setModel(e.target.value);
          }}
        />
        <Input
          Label="Company"
          Onchange={(e) => {
            setCompany(e.target.value);
          }}
        />
      </div>
      <div className="col-4">
        <Input
          Label="Year"
          Onchange={(e) => {
            setModelYear(e.target.value);
          }}
        />
        <Input
          Label="Model Type"
          Onchange={(e) => {
            setModelType(e.target.value);
          }}
        />
        <Input
          Label="Milage"
          Onchange={(e) => {
            setMilage(e.target.value);
          }}
        />

        <button
          style={{
            backgroundColor: "blue",
            border: "none",
            borderRadius: 5,
            color: "white",
            width: 100,
          }}
          onClick={addcar}
        >
          Add
        </button>
      </div>
      <div className="col-4">
        <br />
        <label style={{ marginRight: 20 }}>Car Category</label>
        <select
          className="mb-3"
          onChange={(e) => {
            setCarCatId(e.target.value);
          }}
        >
          <option>select</option>
          {carCat.map((category) => {
            return (
              <option key={category.carCategoryId} value={category.carCategoryId}>
                {category.carCategoryName}
              </option>
            );
          })}
        </select>
        <br />
        <br />
        <br />

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
              <option key={loc.locationId} value={loc.locationId}>
                {loc.city + "- " + loc.street + "- " + loc.locationName}
              </option>
            );
          })}
        </select>
        <br />
      </div>
    </div>
  );
};
export default AddCar;
