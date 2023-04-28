import React from "react";
import "./styles/ViewTransactionModal.css";
import { useNavigate } from "react-router-dom";

const ViewTransactionModal = ({ closeModal, trans }) => {
  const navigate = useNavigate();
  return (
    <div>
      <div className="modal-overlay" onClick={closeModal}></div>
      <div className="modal-container">
        <h4>Transaction Details</h4>
        <table className="view-trans-table">
          <tbody>
            <tr>
              <td>Name </td>
              <td>
                <span>{trans.name}</span>
              </td>
            </tr>
            <tr>
              <td>Category</td>
              <td>
                <span>{trans.category}</span>
              </td>
            </tr>
            <tr>
              <td>Date</td>
              <td>
                <span>{trans.date}</span>
              </td>
            </tr>
            <tr>
              <td>Amount</td>
              <td>
                <span
                  className={`status-text-view-modal ${
                    trans.status === "Expense" ? "expense-text-view-modal" : ""
                  }`}
                >
                  {trans.amount}
                </span>
              </td>
            </tr>
            <tr>
              <td>Paid Using</td>
              <td>
                <span>{trans.card}</span>
              </td>
            </tr>
            <tr>
              <td>Status</td>
              <td>{trans.status}</td>
            </tr>
          </tbody>
        </table>

        <div style={{ marginRight: "30px" }}>
          <button onClick={closeModal}>Close</button>
          <button
            className="add-card-btn-modal"
            onClick={(e) => navigate("/wallet")}
          >
            View
          </button>
        </div>
      </div>
    </div>
  );
};

export default ViewTransactionModal;
