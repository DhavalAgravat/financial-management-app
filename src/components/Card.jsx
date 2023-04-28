import React from "react";
import "./styles/Card.css";

const Card = ({ number, expiry }) => {
  const expiryDate = expiry.slice(0, 7);
  return (
    <div className="bank-card">
      <div className="d-flex bank-title">
        <p className="bank-name">Bank </p>
        <p className="bank-text"> | XYZ Banking</p>
      </div>
      <div className="d-flex justify-content-between bank-icons">
        <i className="fa-thin fa fa-microchip"></i>
        <i className="fa-thin fa fa-wifi"></i>
      </div>
      <p className="mt-3">{number}</p>
      <p className="m-0">{expiryDate}</p>
    </div>
  );
};

export default Card;
