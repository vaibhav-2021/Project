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
          console.log(e);
          toast.error("Invalid Email or Password");
        });
    }
  };
  return (
    <div className="row">
      <h2 style={{ color: "blue", textAlign: "center", margin: 20 }}>
        Admin SignIn
      </h2>
      <div className="col-4"></div>
      <div
        style={{ height: 300, boxShadow: "1px 1px 20px 5px #C9C9C9" }}
        className="col-4"
      >
        <span>
          <strong>Email</strong>
        </span>
        <Input Type="email" Onchange={(e) => setEmail(e.target.value)} />
        <span>
          <strong>Password</strong>
        </span>
        <Input Type="password" Onchange={(e) => setPassword(e.target.value)} />
        <button
          style={{
            backgroundColor: "blue",
            border: "none",
            borderRadius: 5,
            color: "white",
          }}
          onClick={signin}
        >
          Signin
        </button>
      </div>
      <div className="col-4"></div>
    </div>
  );
};
export default AdminSignIn;
