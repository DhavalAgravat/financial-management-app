import React, { useState } from "react";
import Sidebar from "../components/Sidebar";
import "./styles/Transactions.css";
import Topbar from "../components/Topbar";
import AddTransactionModal from "../components/AddTransactionModal";
import TransactionsList from "../components/TransactionsList";

const Transactions = () => {
  const [showModal, setShowModal] = useState(false);
  const closeModal = () => {
    setShowModal(false);
  };
  return (
    <div className="d-flex">
      <Sidebar />
      <div className="content">
        <div className="d-flex justify-content-between">
          <h3>Transactions</h3>
          <Topbar />
        </div>
        <button className="add-trans-btn" onClick={() => setShowModal(true)}>
          <i
            className="fa-sharp fa-solid fa-money-check-dollar me-2"
            style={{ marginRight: "10px" }}
          ></i>
          Add Transaction
        </button>
        {showModal && <AddTransactionModal closeModal={closeModal} />}
        <div className="row">
          <div className="col-10">
            <TransactionsList />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Transactions;
