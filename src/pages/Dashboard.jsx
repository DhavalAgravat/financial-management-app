import React from "react";
import Sidebar from "../components/Sidebar";
import "./Dashboard.css";
import Card from "../components/Card";
import Topbar from "../components/Topbar";
import { clearAllListeners } from "@reduxjs/toolkit";
import CardSlider from "../components/CardSlider";

const Dashboard = () => {
  return (
    <div className="d-flex">
      <Sidebar />
      <div className="content">
        {/* Header */}
        <div className="d-flex justify-content-between">
          <h3>Dashboard</h3>
          <Topbar />
        </div>
        {/* main section */}
        <div className="row my-4 g-0">
          <div className="col-8">
            <div className="row balance-container g-0">
              <div className="col-4 balance-box">
                <div className="icon-wrapper">
                  <i className="fa-solid fa-wallet icons"></i>
                </div>
                <h6 className="ms-3">Total Balance</h6>
              </div>
              <div
                className="col-4 balance-box"
                style={{ background: "#F8F8F8" }}
              >
                <div className="icon-wrapper ">
                  <i
                    className="fa-solid fa-wallet icons"
                    style={{ color: "black" }}
                  ></i>
                </div>
                <h6 className="ms-3">Total Spending</h6>
              </div>
              <div
                className="col-4 balance-box"
                style={{ background: "#F8F8F8" }}
              >
                <div className="icon-wrapper">
                  <i
                    className="fa-solid fa-wallet icons"
                    style={{ color: "black" }}
                  ></i>
                </div>
                <h6 className="ms-3">Total Saved</h6>
              </div>
            </div>
            <div className="row g-0 mt-3">
              <h4>Recent Transcations</h4>
            </div>
          </div>
          <div className="col-3 ms-5">
            <h4>Wallet</h4>
            {/* {activeUser.cards.map((e) => {
              return <Card number={e.number} expiry={e.expiryDate}></Card>;
            })} */}
            <CardSlider />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
