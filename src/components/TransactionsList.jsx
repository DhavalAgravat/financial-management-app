import React, { useState } from "react";
import { useSelector } from "react-redux";
import ViewTransactionModal from "./ViewTransactionModal";

const TransactionsList = () => {
  const activeUser = useSelector((state) => state?.users?.activeUser);
  const [showModal, setShowModal] = useState(false);
  const [trans, setTrans] = useState("");

  const viewBtnHandler = (trans) => {
    console.log(trans);
    setShowModal(true);
    setTrans(trans);
  };

  const closeModal = () => {
    setShowModal(false);
    setTrans("");
  };

  return (
    <>
      {showModal ? (
        <ViewTransactionModal closeModal={closeModal} trans={trans} />
      ) : null}

      <table className="trans-table">
        <thead>
          <tr>
            <th>Name</th>
            <th>Category</th>
            <th>Date</th>
            <th>Amount</th>
            <th>Paid By</th>
            <th>Status</th>
            <th>View</th>
          </tr>
        </thead>

        <tbody>
          {activeUser?.transactions?.map((transaction, i) => (
            <tr key={i}>
              <td>{transaction.name}</td>
              <td className="text-lightgrey">{transaction.category}</td>
              <td>{transaction.date}</td>
              <td>{transaction.amount}</td>
              <td>{transaction.card}</td>
              <td
                className={`status-text ${
                  transaction.status === "Expense" ? "expense-text" : ""
                }`}
              >
                <span>{transaction.status}</span>
              </td>
              <td>
                <button
                  className="view-trans-btn"
                  onClick={() => viewBtnHandler(transaction)}
                >
                  View
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </>
  );
};

export default TransactionsList;
