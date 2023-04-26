import React, { useState } from "react";
import Sidebar from "../components/Sidebar";
import Topbar from "../components/Topbar";
import "./Wallet.css";
import Card from "../components/Card";
import AddCardModal from "../components/AddCardModal";

const Wallet = () => {
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
        <button
          className="add-card-btn mt-3"
          onClick={() => setShowModal(true)}
        >
          <i className="fa-sharp fa-solid fa-money-check-dollar me-2"></i>Add
          Card
        </button>
        {showModal && <AddCardModal closeModal={closeModal} />}

        <div className="row">
          <div className="col-4">
            <Card />
          </div>
          <div className="col-8">gggg</div>
        </div>
      </div>
    </div>
  );
};

export default Wallet;
