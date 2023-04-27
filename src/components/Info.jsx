import React from "react";
import { useNavigate } from "react-router-dom";

const Info = () => {
  const navigate = useNavigate();
  return (
    <div className="info-box" onClick={(e) => navigate("/wallet")}>
      <h3>Please Add Card First !</h3>
    </div>
  );
};

export default Info;
