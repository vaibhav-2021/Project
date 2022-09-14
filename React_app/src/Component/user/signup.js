import { useState } from "react";
import Input from "../Input";
import { toast } from "react-toastify";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";
import Config from "../../config";

const SignUp = () => {
  const [drivingLic, setDrivLic] = useState("");
  const [firstName, setFname] = useState("");
  const [lastName, setLname] = useState("");
  const [middleName, setMname] = useState("");
  const [mobileNo, setMobile] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPass] = useState("");
  const [city, setCity] = useState("");
  const [district, setDist] = useState("");
  const [pincode, setPin] = useState("");
  const [state, setState] = useState("");

  const navigate = useNavigate();

  const signup = () => {
    if (firstName.length === 0) {
      toast.error("Please Enter First Name");
    } else if (lastName.length === 0) {
      toast.error("Please Enter Last Name");
    } else if (
      mobileNo.length === 0 ||
      mobileNo.length > 13 ||
      mobileNo.length < 10
    ) {
      toast.error("Please Enter Correct Mobile NO");
    } else if (state.length === 0) {
      toast.error("Please Enter State");
    } else if (pincode.length === 0 || pincode.length !== 6) {
      toast.error("Please Enter Correct Pincode");
    } else if (drivingLic.length === 0) {
      toast.error("Please Enter Driving Lic");
    } else if (password.length === 0) {
      toast.error("Please Enter Password");
    } else {
      const body = {
        drivingLic,
        firstName,
        lastName,
        middleName,
        mobileNo,
        email,
        password,
        city,
        pincode,
        state,
        district,
      };

      axios
        .post(Config.URL + "/customer/add", body)
        .then((response) => {
          const result = response.data;
          if (result.custId != null) {
            toast.success("Successful Signup");
            // navigate('/custSignin')
          } else {
            toast.error(result.error);
          }
        })
        .catch((e) => {
          console.log(e);
          toast.error("Please Enter Proper Details");
        });
    }
  };
  return (
    <div className="row">
      <h2 style={{ color: "blue", textAlign: "center", margin: 20 }}>SignUp</h2>
      <div className="col-4">
        <Input Label="First Name" Onchange={(e) => setFname(e.target.value)} />
        <Input Label="Last Name" Onchange={(e) => setLname(e.target.value)} />
        <Input Label="Middle Name" Onchange={(e) => setMname(e.target.value)} />
        <Input
          Label="Email"
          Type="email"
          Onchange={(e) => setEmail(e.target.value)}
        />
      </div>
      <div className="col-4">
        <Input Label="Mobile" Onchange={(e) => setMobile(e.target.value)} />
        <Input Label="City" Onchange={(e) => setCity(e.target.value)} />
        <Input Label="District" Onchange={(e) => setDist(e.target.value)} />
        <h6>
          Already have an Account ? <Link to="/user/signin">SignIn</Link>
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
          onClick={signup}
        >
          SignUp
        </button>
      </div>
      <div className="col-4">
        <Input Label="Pincode" Onchange={(e) => setPin(e.target.value)} />
        <Input
          Label="Driving Lic"
          Onchange={(e) => setDrivLic(e.target.value)}
        />
        <Input Label="Password" Onchange={(e) => setPass(e.target.value)} />
        <Input Label="State" Onchange={(e) => setState(e.target.value)} />
      </div>
    </div>
  );
};
export default SignUp;
