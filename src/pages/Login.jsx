import React from "react";
import "./styles/Login.css";
import { Link } from "react-router-dom";
import { useState, useRef } from "react";
import { useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import { setLoggedIn, setActiveUser } from "../store/userSlice";

const Login = () => {
  const dispatch = useDispatch();
  const emailRef = useRef("");
  const passwordRef = useRef("");
  const navigate = useNavigate();

  const [fieldsValid, setFieldsValid] = useState(true);
  const [emailValid, setEmailValid] = useState(true);
  const [passwordValid, setPasswordValid] = useState(true);

  const users = useSelector((state) => state.users.users);

  const signInHandler = (e) => {
    let currentuser = users?.find((e) => {
      if (e?.email === emailRef.current.value) {
        return e;
      }
    });

    if (!emailRef.current.value || !passwordRef.current.value) {
      setFieldsValid(false);
      setEmailValid(true);
      setPasswordValid(true);
    } else if (!users?.map((e) => e.email).includes(emailRef.current.value)) {
      setFieldsValid(true);
      setEmailValid(false);
      setPasswordValid(true);
    } else if (passwordRef.current.value === currentuser.password) {
      dispatch(setLoggedIn(true));
      dispatch(setActiveUser(currentuser));
      navigate("/dashboard");
    } else {
      setPasswordValid(false);
      setFieldsValid(true);
      setEmailValid(true);
    }
  };

  return (
    <div className="row">
      <div className="col-5">
        <h1 className="logo"> Bank </h1>
        <section id="login-container">
          <div>
            <h3 className="welcome-text">Welcome Back</h3>
            <p>Welcome back please enter your Deatils</p>
          </div>
          <form className="form-box">
            <label htmlFor="login-email" className="form-labels">
              Email
            </label>
            <input
              type="email"
              className="login-inputs"
              id="login-email"
              placeholder="Enter Your email"
              ref={emailRef}
            ></input>
            <p className={`alert-text  ${emailValid ? "hidden" : ""}`}>
              Please enter valid email id!
            </p>

            <label htmlFor="login-password" className="form-labels">
              Password
            </label>
            <input
              type="password"
              className="login-inputs"
              id="login-password"
              ref={passwordRef}
            ></input>
            <p className={`alert-text  ${passwordValid ? "hidden" : ""}`}>
              Incorrect Password !
            </p>
            <p className={`alert-text  ${fieldsValid ? "hidden" : ""}`}>
              All field must be filled !
            </p>

            <button className="sign-in-btn" onClick={signInHandler}>
              Sign in
            </button>
            <p className="signup-login-link">
              Don't have an account ?{" "}
              <Link to="/signin" className="link-text">
                Sign Up For Free
              </Link>
            </p>
          </form>
        </section>
      </div>
      <div className="col-5">kk</div>
    </div>
  );
};

export default Login;
