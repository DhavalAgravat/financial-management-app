import React from "react";
import "./Login.css";
import { Link } from "react-router-dom";
import { useState, useRef } from "react";
import { useSelector } from "react-redux";

const Login = () => {
  const emailRef = useRef("");
  const passwordRef = useRef("");

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
    console.log(currentuser);
    if (!emailRef.current.value || !passwordRef.current.value) {
      setFieldsValid(false);
      setEmailValid(true);
      setPasswordValid(true);
    } else if (!users?.map((e) => e.email).includes(emailRef.current.value)) {
      setFieldsValid(false);
      setEmailValid(false);
      setPasswordValid(true);
    } else if (passwordRef.current.value === currentuser.password) {
      console.log("jegfiek");
    }
  };

  return (
    <div className="row">
      <div className="col-6">
        <h1 className="logo"> Bank </h1>
        <section id="login-container">
          <div>
            <h3 className="welcome-text">Welcome Back</h3>
            <p>Welcome back please enter your Deatils</p>
          </div>
          <form className="mt-4 form-box">
            <label htmlFor="login-email" className="form-label">
              Email
            </label>
            <input
              type="email"
              className="form-control login-inputs"
              id="login-email"
              placeholder="Enter Your email"
              ref={emailRef}
            ></input>
            <p className={`alert-text  ${emailValid ? "hidden" : ""}`}>
              Please enter valid email id!
            </p>

            <label htmlFor="login-password" className="form-label">
              Password
            </label>
            <input
              type="password"
              className="form-control login-inputs"
              id="login-password"
              ref={passwordRef}
            ></input>
            <p className={`alert-text  ${passwordValid ? "hidden" : ""}`}>
              Incorrect Password !
            </p>
            <p className={`alert-text  ${fieldsValid ? "hidden" : ""}`}>
              All field must be filled !
            </p>
          </form>
          <button className="sign-in-btn" onClick={signInHandler}>
            Sign in
          </button>
          <p className="signup-link ms-5 mt-3">
            Don't have an account ? <Link to="/signin">Sign Up For Free</Link>
          </p>
        </section>
      </div>
      <div className="col-6">kk</div>
    </div>
  );
};

export default Login;
