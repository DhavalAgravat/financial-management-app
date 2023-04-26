import React from "react";
import "./Sidebar.css";
import { NavLink, useNavigate } from "react-router-dom";
import { Navigate } from "react-router-dom";

const Sidebar = () => {
  const navigate = useNavigate();
  function logOutHandler() {
    localStorage.removeItem("loggedIn");
    localStorage.removeItem("activeUser");
    navigate("/");
  }
  return (
    <div className="sidebar">
      <h4 className="my-5 mx-2">Bank</h4>

      <div className="main my-5 mx-2">
        <div className="options1">
          <ul className="p-0">
            <li>
              <NavLink to="/dashboard" className="nav-link">
                Dashboard
              </NavLink>
            </li>
            <li>
              <NavLink to="/transactions" className="nav-link">
                Transactions
              </NavLink>
            </li>
            <li>
              <NavLink to="/wallet" className="nav-link">
                Wallet
              </NavLink>
            </li>
            <li>
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
