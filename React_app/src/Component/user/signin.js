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
    <>
      <h2 style={{ color: "blue" }}>SignIn To Your Account</h2>
      <div style={{ marginTop: 50 }}>
        <div style={styles.container}>
          <div className="mb-3"></div>

          <span>
            <strong>Email</strong>
          </span>
          <Input
            Type="email"
            className="form-control"
            Onchange={(e) => setEmail(e.target.value)}
          />
          <span>
            <strong>Password</strong>
          </span>
          <Input
            className="form-control"
            Type="password"
            Onchange={(e) => setPassword(e.target.value)}
          />
          <h6>
            Don't have an Account ? <Link to="/user/signup">Signup</Link>
          </h6>
          <button style={styles.signinButton} onClick={signin}>
            signin
          </button>

          {/* <img src="https://t3.ftcdn.net/jpg/03/39/70/90/360_F_339709048_ZITR4wrVsOXCKdjHncdtabSNWpIhiaR7.jpg" /> */}
        </div>
        <div className="col-1"></div>
      </div>
    </>
  );
};
const styles = {
  container: {
    width: 400,
    height: 330,
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
};
export default SignIn;
