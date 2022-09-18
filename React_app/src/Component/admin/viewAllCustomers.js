import React from "react";
import axios from "axios";
import config from "../../config";
import { toast } from "react-toastify";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
const ViewAllCustomers = () => {
  const [customers, setCustomers] = useState([]);
  const navigate = useNavigate();
  useEffect(() => {
    // load all the homes created by the user
    getallCustomers();
  }, []);

  const getallCustomers = () => {
    axios
      .get(config.URL + "/admin/getallcustomers")
      .then((response) => {
        const result = response.data;
<<<<<<< HEAD
        //console.log(result);
=======
        console.log(result);
>>>>>>> d13a0575b95b67b281933dca66837d78c533137a
        setCustomers(result);
        if (result !== null) {
        } else {
          toast.error("Cars not available");
        }
      })
      .catch((e) => {
<<<<<<< HEAD
        //console.log(e);
=======
        console.log(e);
>>>>>>> d13a0575b95b67b281933dca66837d78c533137a
        toast.error("Cars not available");
      });
  };

  return (
    <div className="container">
      <h3 style={styles.h3}>Customers List</h3>
      <table className="table table-striped">
        <thead>
          <tr>
            {/* "custId": 1, "firstName": "Jay1", "lastName": "gupta", "middleName":
            "Pramod", "email": "rjay1@test.com", "mobileNo": 9123468423,
            "state": "", "district": "Satara", "city": "Kolhapur", "pincode":
            415112, "drivingLic": "CDCD56789123224" */}
            <th>Customer Id</th>
            <th>Name</th>
            <th>Email</th>
            <th>Mobile No </th>
            <th>State</th>
            <th>District</th>
            <th>City</th>
            <th>Pincode</th>
            <th>Driving Lic</th>
          </tr>
        </thead>
        <tbody>
          {customers.map((Customer) => {
            return (
              <tr key={Customer.custId}>
                <td>{Customer.custId}</td>
                <td>
                  {Customer.firstName +
                    " " +
                    Customer.lastName +
                    " " +
                    Customer.middleName}
                </td>
                <td>{Customer.email}</td>
                <td>{Customer.mobileNo}</td>
                <td>{Customer.state}</td>
                <td>{Customer.district}</td>
                <td>{Customer.city}</td>
                <td>{Customer.pincode}</td>
                <td>{Customer.drivingLic}</td>
              </tr>
            );
          })}
        </tbody>
      </table>
<<<<<<< HEAD
      <div className="col-md-12 text-center">
=======
      <div class="col-md-12 text-center">
>>>>>>> d13a0575b95b67b281933dca66837d78c533137a
        <button
          onClick={() => navigate(-1)}
          style={styles.button}
          className="btn btn-sm btn-primary  "
        >
          Back To Admin Page
        </button>
      </div>
    </div>
  );
};
const styles = {
  h3: {
    textAlign: "center",
    margin: 20,
    color: "blue",
  },
  button: {
    marginRight: 10,
  },
};

export default ViewAllCustomers;
