import { useState } from "react";
import Input from "../../Component/Input";
import { toast } from "react-toastify";
import axios from "axios";
import { Link, useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import Config from "../../config";
import { custSignin } from "../../slice/customerSlice";

const SignIn = () => {
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
        .post(Config.URL + "/customer/signin", { email, password })
        .then((response) => {
          const result = response.data;
          //console.log(result.custId)
          if (result.custId !== null) {
            toast.success("Welcome " + result.firstName);
            dispatch(custSignin(result.custId));
            navigate("/");
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
      {/* <h1 style={{ color: "blue", textAlign: "center", margin: 20 }}>SignIn</h1>
      <hr /> */}

      <div className="col-1"></div>
      <div
        className="col-10"
        style={{
          margin: "auto",
          // width: 500,
          // height: 400,
          boxShadow: "1px 1px 20px 5px #C9C9C9",
        }}
      >
        <img src="https://t3.ftcdn.net/jpg/03/39/70/90/360_F_339709048_ZITR4wrVsOXCKdjHncdtabSNWpIhiaR7.jpg" />
        <h2 style={{ color: "blue" }}>SignIn To Your Account</h2>
        <span>
          <strong>Email</strong>
        </span>
        <Input Type="email" Onchange={(e) => setEmail(e.target.value)} />
        <span>
          <strong>Password</strong>
        </span>
        <Input Type="password" Onchange={(e) => setPassword(e.target.value)} />
        <h6>
          Don't have an Account ? <Link to="/user/signup">Signup</Link>
        </h6>
        <button
          style={{
            backgroundColor: "blue",
            border: "none",
            borderRadius: 5,
            height: 40,
            width: "50%",
            color: "white",
          }}
          onClick={signin}
        >
          signin
        </button>
      </div>
      <div className="col-1"></div>
    </div>
  );
};
export default SignIn;
