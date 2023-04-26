import React from "react";
import { Link, useNavigate } from "react-router-dom";
import "./Signin.css";
import { useState } from "react";
import { useSelector } from "react-redux";
import { setUser } from "../store/userSlice";
import { useDispatch } from "react-redux";

const Signin = () => {
  const users = useSelector((state) => state.users.users);
  const navigate = useNavigate();

  const [email, setEmail] = useState("");
  const [userName, setUserName] = useState("");
  const [password, setPassword] = useState("");
  const [emailValid, setEmailValid] = useState(true);
  const [userNameValid, setUserNameValid] = useState(true);
  const [passwordValid, setPasswordValid] = useState(true);
  const [fieldsValid, setFieldsValid] = useState(true);

  const dispatch = useDispatch();
  console.log("keep ", users);

  let regularExpression =
    /^(?=.*[0-9])(?=.*[!@#$%^&*])[a-zA-Z0-9!@#$%^&*]{6,16}$/;

  const signUpHandler = () => {
    console.log(userName, email, password);
    if (!userName || !email || !password) {
      setFieldsValid(false);
    } else if (users?.map((e) => e?.username)?.includes(userName)) {
      setFieldsValid(true);
      setUserNameValid(false);
      setEmailValid(true);
      setPasswordValid(true);
    } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(email)) {
      setFieldsValid(true);
      setUserNameValid(true);
      setEmailValid(false);
      setPasswordValid(true);
    } else if (users?.map((e) => e.email).includes(email)) {
      setFieldsValid(true);
      setUserNameValid(true);
      setEmailValid(false);
      setPasswordValid(true);
    } else if (!regularExpression.test(password)) {
      setFieldsValid(true);
      setUserNameValid(true);
      setEmailValid(true);
      setPasswordValid(false);
    } else {
      setFieldsValid(true);
      setUserNameValid(true);
      setEmailValid(true);
      setPasswordValid(true);

      const user = {
        username: userName,
        email: email,
        password: password,
        cards: [],
        transactions: [],
        loggedIn: true,
      };

      dispatch(setUser(user));
      localStorage.setItem("loggedIn", true);
      localStorage.setItem("activeUser", JSON.stringify(user));
      navigate("/dashboard");
    }
  };

  return (
    <div className="row">
      <div className="col-6 p-0">
        <h1 className="logo"> Bank </h1>
        <section id="signin-container">
          <div>
            <h3 className="welcome-text">Create New Account</h3>
            <p>Welcome Please Enter Your Deatils</p>
          </div>
          <form className="mt-4 form-box-signin">
            <label htmlFor="signin-username" className="form-label">
              Username
            </label>
            <input
              type="text"
              className="form-control signin-inputs"
              id="signin-username"
              placeholder="Enter Your Username"
              onChange={(e) => setUserName(e.target.value)}
            ></input>
            <p className={`alert-text  ${userNameValid ? "hidden" : ""}`}>
              userName already exist choose another one
            </p>

            <label htmlFor="signin-email" className="form-label">
              Email
            </label>
            <input
              type="email"
              className="form-control signin-inputs"
              id="signin-email"
              placeholder="Enter Your email"
              onChange={(e) => setEmail(e.target.value)}
            ></input>
            <p className={`alert-text  ${emailValid ? "hidden" : ""}`}>
              Please Enter Valid Email
            </p>

            <label htmlFor="signin-password" className="form-label">
              Password
            </label>
            <input
              type="password"
              className="form-control signin-inputs"
              id="signin-password"
              onChange={(e) => setPassword(e.target.value)}
            ></input>
            <p className={`alert-text  ${passwordValid ? "hidden" : ""}`}>
              Password must conatin 1 character, number and a special number
            </p>
            <p className={`alert-text  ${fieldsValid ? "hidden" : ""}`}>
              All Fields must be filled !
            </p>
          </form>
          <button className="create-acc-btn" onClick={signUpHandler}>
            Create Account
          </button>
          <p className="signup-link ms-5 mt-3">
            Alredy have an account ? <Link to="/">Log In</Link>
          </p>
        </section>
      </div>
      <div className="col-6 p-0">kk</div>
    </div>
  );
};

export default Signin;
