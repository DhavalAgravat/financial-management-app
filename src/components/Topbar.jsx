import React from "react";

const Topbar = () => {
  return (
    <>
      <div className="d-flex">
        <span style={{ marginTop: "16px" }}>
          <i className="fa-solid fa fa-magnifying-glass top-bar-icons"></i>
          <i className="fa-solid fa-bell top-bar-icons"></i>
        </span>
        <div className="profile-banner"> firstname Lastname</div>
      </div>
    </>
  );
};

export default Topbar;
