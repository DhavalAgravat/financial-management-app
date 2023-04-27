import React from "react";
import "./styles/Sidebar.css";
import { NavLink, useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { setLoggedIn, setActiveUser } from "../store/userSlice";

const Sidebar = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  function logOutHandler() {
    dispatch(setLoggedIn(false));
    dispatch(setActiveUser(""));
    navigate("/");
  }
  return (
    <div className="sidebar">
      <h4 className="sidebar-logo">Bank</h4>
      <div className="main">
        <div className="options1">
          <ul>
            <li className="nav-items">
              <NavLink to="/dashboard" className="nav-link">
                Dashboard
              </NavLink>
            </li>
            <li className="nav-items">
              <NavLink to="/transactions" className="nav-link">
                Transactions
              </NavLink>
            </li>
            <li className="nav-items">
              <NavLink to="/wallet" className="nav-link">
                Wallet
              </NavLink>
            </li>
            <li className="nav-items">
              <NavLink to="/profile" className="nav-link">
                Profile
              </NavLink>
            </li>
          </ul>
        </div>
      </div>
      <button className="log-out-btn" onClick={logOutHandler}>
        Log Out
      </button>
    </div>
  );
};

export default Sidebar;
