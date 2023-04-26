import React from "react";
import "./Card.css";

const Card = ({ number, expiry }) => {
  return (
    <div className="mt-3 bank-card">
      <h4>Bank</h4> <p>| XYZ Banking</p>
      <div className="d-flex justify-content-between">
        <i className="fa-thin fa fa-microchip"></i>
        <i className="fa-thin fa fa-wifi"></i>
      </div>
      <p className="mt-3">{number}</p>
      <p className="m-0">{expiry}</p>
    </div>
  );
};

export default Card;
