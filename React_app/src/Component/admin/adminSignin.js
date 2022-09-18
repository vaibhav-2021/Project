import { useState } from "react";
import Input from "../../Component/Input";
import { toast } from "react-toastify";
import axios from "axios";
import { Link, useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import Config from "../../config";
import { custSignin } from "../../slice/customerSlice";
import { adminSignin } from "../../slice/adminSlice";

const AdminSignIn = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const signin = () => {
    if (email.length === 0) {
      toast.error("Please Enter Email");
    } else if (password.length === 0) {
      toast.error("Please Enter Password");
    } else {
      axios
        .post(Config.URL + "/admin/signin", { email, password })
        .then((response) => {
          const result = response.data;
          //console.log(result)
          if (result !== null) {
            toast.success("Welcome as Admin");
            dispatch(adminSignin(result.adminId));
            // navigate('/')
          } else {
            toast.error("Invalid Email or Password");
          }
        })
        .catch((e) => {
         // console.log(e);
          toast.error("Invalid Email or Password");
        });
    }
  };
  return (
    // <div className="row">
    //   <h2 style={{ color: "blue", textAlign: "center", margin: 20 }}>
    //     Admin SignIn
    //   </h2>
    //   <div className="col-4"></div>
    //   <div
    //     style={{ height: 300, boxShadow: "1px 1px 20px 5px #C9C9C9" }}
    //     className="col-4"
    //   ><h3 style={styles.h3}>Admin Login</h3>
    <>
      <h3 style={styles.h3}>Admin Login</h3>
      <div style={{ marginTop: 100 }}>
        <div style={styles.container}>
          <div className="mb-3">
            <span>
              <strong>Email</strong>
            </span>
            <Input Type="email" Onchange={(e) => setEmail(e.target.value)} />
            <span>
              <strong>Password</strong>
            </span>
            <Input
              Type="password"
              Onchange={(e) => setPassword(e.target.value)}
            />
            <button
              style={styles.signinButton}
              // style={{
              //   backgroundColor: "blue",
              //   border: "none",
              //   borderRadius: 5,
              //   color: "white",
              // }}
              onClick={signin}
            >
              Signin
            </button>
          </div>
          <div className="col-4"></div>
        </div>
      </div>
    </>
  );
};
const styles = {
  container: {
    width: 400,
    height: 300,
    padding: 20,
    position: "relative",
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    margin: "auto",
    borderColor: "#0d6efd",
    borderRadius: 10,
    broderWidth: 1,
    borderStyle: "solid",
    boxShadow: "1px 1px 20px 5px #C9C9C9",
  },
  signinButton: {
    position: "relative",
    width: "100%",
    height: 40,
    backgroundColor: "#0d6efd",
    color: "white",
    borderRadius: 5,
    border: "none",
    marginTop: 10,
  },
  h3: {
    textAlign: "center",
    margin: 20,
    color: "blue",
  },
};
export default AdminSignIn;
