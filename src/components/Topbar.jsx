import React from "react";

const Topbar = () => {
  return (
    <>
      <div className="d-flex">
        <span className="mt-2">
          <i className="fa-solid fa fa-magnifying-glass  mx-5 fs-5"></i>
          <i className="fa-solid fa-bell mx-5 fs-5"></i>
        </span>
        <div className="profile-banner"> firstname Lastname</div>
      </div>
    </>
  );
};

export default Topbar;
