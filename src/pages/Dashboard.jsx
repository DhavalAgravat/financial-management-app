import React from "react";
import Sidebar from "../components/Sidebar";
import "./styles/Dashboard.css";
import Card from "../components/Card";
import Topbar from "../components/Topbar";
import { clearAllListeners } from "@reduxjs/toolkit";
import CardSlider from "../components/CardSlider";
import Info from "../components/Info";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";
import TransactionsList from "../components/TransactionsList";

const Dashboard = () => {
  const activeUser = useSelector((state) => state.users.activeUser);
  const balance = activeUser?.cards?.reduce(
    (total, e) => total + (Number(e.balance) ?? 0),
    0
  );

  let spending = activeUser?.transactions
    ?.filter((e) => e.status === "Expense")
    .reduce((total, e) => total + e.amount, 0);

  let savings = activeUser?.transactions
    ?.filter((e) => e.status === "Income")
    .reduce((total, e) => total + e.amount, 0);

  return (
    <div className="d-flex">
      <Sidebar />
      <div className="content">
        {/* Header */}
        <div className="d-flex justify-content-between">
          <h3 className="heading">Dashboard</h3>
          <Topbar />
        </div>
        {/* main section */}
        <div className="row justify-content-between">
          <div className="col-7">
            <div className="row balance-container">
              <div className="balance-box">
                <div className="icon-wrapper" style={{ background: "#4E5257" }}>
                  <i
                    className="fa-solid fa-wallet icons"
                    style={{ color: "#c8ee44" }}
                  ></i>
                </div>
                <div>
                  <h6>Total Balance</h6>
                  <p className="amounts" style={{ color: "white" }}>
                    ${balance}
                  </p>
                </div>
              </div>
              <div className=" balance-box" style={{ background: "#F8F8F8" }}>
                <div className="icon-wrapper ">
                  <i
                    className="fa-solid fa-wallet icons"
                    style={{ color: "black" }}
                  ></i>
                </div>
                <div>
                  <h6 className="ms-3">Total Spending</h6>
                  <p className="amounts">${-spending}</p>
                </div>
              </div>
              <div className="balance-box" style={{ background: "#F8F8F8" }}>
                <div className="icon-wrapper">
                  <i
                    className="fa-solid fa-wallet icons"
                    style={{ color: "black" }}
                  ></i>
                </div>
                <div>
                  <h6 className="ms-3">Total Saved</h6>
                  <p className="amounts">${savings}</p>
                </div>
              </div>
            </div>
            <div className="transactions-box">
              <div className="row justify-content-between">
                <h4>Recent Transcations</h4>
                <Link to="/transactions" className="view-trans-link">
                  View All <i class="fa-thin fa fa-arrow-right"></i>
                </Link>
              </div>
              <table className="trans-table">
                <thead>
                  <tr>
                    <th>Name</th>
                    <th>Category</th>
                    <th>Date</th>
                    <th>Amount</th>
                  </tr>
                </thead>

                <tbody>
                  {activeUser?.transactions?.map((transaction, i) => (
                    <tr key={i}>
                      <td>{transaction.name}</td>
                      <td className="text-lightgrey">{transaction.category}</td>
                      <td>{transaction.date}</td>
                      <td>{transaction.amount}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
          <div className="col-3">
            <h4 className="side-heading">Wallet</h4>
            {activeUser.cards.length > 0 ? <CardSlider /> : <Info />}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
