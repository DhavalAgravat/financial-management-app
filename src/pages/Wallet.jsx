import React, { useState } from "react";
import Sidebar from "../components/Sidebar";
import Topbar from "../components/Topbar";
import "./styles/Wallet.css";
import { useSelector } from "react-redux";
import AddCardModal from "../components/AddCardModal";
import CardSlider from "../components/CardSlider";
import Info from "../components/Info";

const Wallet = () => {
  const activeUser = useSelector((state) => state.users.activeUser);
  const [showModal, setShowModal] = useState(false);

  const closeModal = () => {
    setShowModal(false);
  };

  return (
    <div className="d-flex">
      <Sidebar />
      <div className="content">
        <div className="d-flex justify-content-between">
          <h3>My Wallet</h3>
          <Topbar />
        </div>
        {showModal && <AddCardModal closeModal={closeModal} />}
        <div className="row main-wallet">
          <div className="col-2">
            {activeUser.cards.length > 0 ? <CardSlider /> : <Info />}
            <div className="account-box">
              <div>
                <h6 className="grey-text">Balance</h6>
                <p className="black-text" style={{ fontSize: "24px" }}>
                  $ 09999
                </p>
              </div>
              <div style={{ marginTop: "40px" }} className="d-flex ">
                <div>
                  <h6 className="grey-text">Currency</h6>
                  <p className="black-text">USD | US Dollar</p>
                </div>
                <div style={{ marginLeft: "55px" }}>
                  <h6 className="grey-text">Status</h6>
                  <p className="black-text">Active</p>
                </div>
              </div>
            </div>
            <button className="add-card-btn" onClick={() => setShowModal(true)}>
              {/* <i className="fa-sharp fa-solid fa-money-check-dollar me-2"></i> */}
              <i class="fa-light fa-plus" style={{ marginRight: "5px" }}></i>
              Add Card
            </button>
          </div>
          <div className="col-7">gggg</div>
        </div>
      </div>
    </div>
  );
};

export default Wallet;
