import React, { useState } from "react";
import Sidebar from "../components/Sidebar";
import "./styles/Transactions.css";
import Topbar from "../components/Topbar";
import AddTransactionModal from "../components/AddTransactionModal";

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
            <table className="trans-table mt-4">
              <tr>
                <th>Name</th>
                <th>Category</th>
                <th>Date</th>
                <th>Amount</th>
                <th>Status</th>
                <th>View</th>
              </tr>

              {/* <tr>
                <td>kfiufuifuh</td>
                <td>kfiufuifuh</td>
                <td>kfiufuifuh</td>
                <td>kfiufuifuh</td>
                <td>kfiufuifuh</td>
              </tr> */}
            </table>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Transactions;
