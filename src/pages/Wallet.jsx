import React, { useState } from "react";
import Sidebar from "../components/Sidebar";
import Topbar from "../components/Topbar";
import "./styles/Wallet.css";

import { useSelector } from "react-redux";
import AddCardModal from "../components/AddCardModal";
import CardSlider from "../components/CardSlider";
import Info from "../components/Info";
import UpdateCardModal from "../components/UpdateCardModal";
import DeleteCardModal from "../components/DeleteCardModal";

const Wallet = () => {
  const activeUser = useSelector((state) => state.users.activeUser);
  const currentCard = useSelector((state) => state.users.currentCard);
  const [showModal, setShowModal] = useState(false);
  const [showUpdateCardModal, setUpdateCardModal] = useState(false);
  const [showDeleteModal, setShowDeleteModal] = useState(false);

  const closeModal = () => {
    setShowModal(false);
    setUpdateCardModal(false);
    setShowDeleteModal(false);
  };

  const cardTransactions = activeUser?.transactions?.filter(
    (e) => e.card === currentCard.number
  );

  return (
    <div className="d-flex">
      <Sidebar />
      <div className="content">
        <div className="d-flex justify-content-between">
          <h3>My Wallet</h3>
          <Topbar />
        </div>
        {/* {showUpdateCardModal && } */}
        {showModal && <AddCardModal closeModal={closeModal} />}
        {showUpdateCardModal && <UpdateCardModal closeModal={closeModal} />}
        {showDeleteModal && <DeleteCardModal closeModal={closeModal} />}
        <div className="row main-wallet">
          <div className="col-3">
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
              <i class="fa-light fa-plus" style={{ marginRight: "5px" }}></i>
              Add Card
            </button>
            {activeUser.cards.length > 0 && (
              <button
                className="update-card-btn"
                onClick={() => setUpdateCardModal(true)}
              >
                <i
                  class="fa-light fa fa-pen-nib"
                  style={{ marginRight: "5px" }}
                ></i>
                Update Card
              </button>
            )}

            {activeUser.cards.length > 0 && (
              <button
                className="delete-card-btn"
                onClick={() => setShowDeleteModal(true)}
              >
                <i class="fa-solid fa-trash" style={{ marginRight: "5px" }}></i>
                Delete Card
              </button>
            )}
          </div>
          <div className="col-6" style={{ marginLeft: "80px" }}>
            <div className="row card-transaction-box">
              <div className="col-8">
                <h4 className="payment-heading">Card Transactions</h4>
                <div>
                  {cardTransactions?.map((transaction, i) => (
                    <div
                      className="d-flex justify-content-between card-transactions-wrapper"
                      key={i}
                    >
                      <div>
                        <h6>{transaction.name}</h6>
                        <h6 className="text-lightgrey">
                          <span>{transaction.date}</span>
                        </h6>
                      </div>
                      <div>
                        <td
                          className={`text-green ${
                            transaction.status === "Expense" ? "red-text" : ""
                          }`}
                        >
                          <b>{transaction.amount}</b>
                        </td>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Wallet;
