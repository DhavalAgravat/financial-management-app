import React, { useRef, useState } from "react";
import "./styles/UpdateCardModal.css";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import { updateCard } from "../store/userSlice";

const UpdateCardModal = ({ closeModal }) => {
  const users = useSelector((state) => state.users.users);
  const activeUser = useSelector((state) => state.users.activeUser);
  const currentCard = useSelector((state) => state.users.currentCard);

  const dispatch = useDispatch();
  const cardCvvRef = useRef();
  const cardExpiryRef = useRef();
  const [fieldsValid, setFieldsValid] = useState(true);

  function updateCardHandler(e) {
    e.preventDefault();
    if (!cardCvvRef.current.value || !cardExpiryRef.current.value) {
      setFieldsValid(false);
    } else {
      setFieldsValid(true);
      const index = users.findIndex((e) => e.email === activeUser.email);
      dispatch(
        updateCard({
          id: index,
          cvv: cardCvvRef.current.value,
          expiry: cardExpiryRef.current.value,
        })
      );
      closeModal();
    }
  }
  return (
    <>
      <div className="modal-overlay" onClick={closeModal}></div>
      <div className="modal-container">
        <h4>Update Your Card Details</h4>
        <form action="">
          <label className="form-label">Card Number</label>
          <input
            type="text"
            className="form-control"
            value={currentCard.number}
            disabled
          ></input>
          <label htmlFor="cvv" className="form-label">
            Card Cvv
          </label>
          <input
            type="tel"
            maxLength="3"
            className="form-control"
            id="cvv"
            placeholder="Enter New CVV"
            ref={cardCvvRef}
          ></input>

          <label htmlFor="card-expiry-date" className="form-label">
            Card expiry
          </label>
          <input
            type="date"
            className="form-control"
            id="card-expiry-date"
            placeholder="Enter New Expiry Date"
            ref={cardExpiryRef}
          ></input>
          <p className={`alert-text  ${fieldsValid ? "hidden" : ""}`}>
            All Fields Must Be Filled !
          </p>

          <div style={{ marginRight: "30px" }}>
            <button onClick={closeModal}>Close</button>
            <button
              className="update-card-btn-modal"
              onClick={updateCardHandler}
            >
              Update Card
            </button>
          </div>
        </form>
      </div>
    </>
  );
};

export default UpdateCardModal;
