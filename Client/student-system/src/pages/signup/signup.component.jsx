import React, { useState } from "react";
import "./signup.styles.css";
import SignImg from "../../assets/images/signup-base.svg";
import Form from "../../components/form/form.components";
import Button from "../../components/button/button.component";
import { Link } from "react-router-dom";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const SignUp = () => {
  let navigate = useNavigate();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [type, setType] = useState("");

  const [regState, setRegState] = useState("");

  console.log(email);
  const handleClick = async (e) => {
    e.preventDefault();
    const res = await axios.post("http://localhost:3000/register", {
      email: email,
      password: password,
      type: type,
    });
    setRegState(res.data);
    if (type === "student") {
      localStorage.setItem('type', type);
      navigate("/student-dataform", {
        state: {
          email: res.data.email,
        },
      });
      window.location.reload(false);
    } else {
      localStorage.setItem('type', type);
      navigate("/faculty-dataform", {
        state: {
          email: res.data.email,
        },
      });
      window.location.reload(false);
    }
  };

  return (
    <div className="signup">
      <div className="sign-img">
        <img src={SignImg} alt="Sign" />
      </div>
      <div className="sign-wrap">
        <form className="form-wrap-sign" onSubmit={handleClick}>
          <p className="signup-title">SignUp</p>
          <div className="form-div">
            <Form
              label={"Email Address"}
              type={"text"}
              name={"email"}
              setterFunction={setEmail}
              placeholder={"something@email.com"}
            />
          </div>
          <div className="form-div">
            <Form
              label={"Password"}
              type={"password"}
              setterFunction={setPassword}
              name={"pass"}
            />
          </div>
          <div className="form-div">
            <Form
              label={"Confirm Password"}
              type={"password"}
              setterFunction={setConfirmPassword}
              name={"confirm pass"}
            />
          </div>
          <form className="sign-check">
            <div className="col-check">
              <input
                type="radio"
                className="sign-radio"
                value="student"
                name="type"
                onChange={(e) => setType(e.target.value)}
              />
              <p className="user-check">student</p>
            </div>
            <div className="col-check">
              <input
                type="radio"
                className="sign-radio"
                value="faculty"
                name="type"
                onChange={(e) => setType(e.target.value)}
              />
              <p className="user-check">faculty</p>
            </div>
          </form>
          <div className="btn-div">
            <Button>Sign Up</Button>
          </div>
          <div className="have-account">
            <p>Already have an account? </p>
            <Link to={"/login"} className="link-log">
              <p>Login</p>
            </Link>
          </div>
        </form>
      </div>
    </div>
  );
};

export default SignUp;
