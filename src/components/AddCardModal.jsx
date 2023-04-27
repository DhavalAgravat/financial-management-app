import React, { useRef, useState } from "react";
import "./styles/AddCardModal.css";
import { useSelector } from "react-redux";
import { addCard } from "../store/userSlice";
import { useDispatch } from "react-redux";

const AddCardModal = ({ closeModal }) => {
  const dispatch = useDispatch();
  const users = useSelector((state) => state.users.users);
  const cardNumberRef = useRef("");
  const cardCvvRef = useRef("");
  const cardExpiryRef = useRef("");
  const cardBalanceRef = useRef("");
  const [fieldsValid, setFieldsValid] = useState(true);
  const [cardNumberValid, setCardNumbeValid] = useState(true);
  const [cardCvvValid, setCvvValid] = useState(true);

  const activeUser = useSelector((state) => state.users.activeUser);
  console.log(activeUser);

  const addCardHandler = (e) => {
    e.preventDefault();

    if (
      !cardNumberRef.current.value ||
      !cardCvvRef.current.value ||
      !cardExpiryRef.current.value ||
      !cardBalanceRef.current.value
    ) {
      setCardNumbeValid(true);
      setFieldsValid(false);
      setCvvValid(true);
    } else if (cardNumberRef.current.value < 12) {
      setFieldsValid(true);
      setCardNumbeValid(false);
      setCvvValid(true);
    } else if (
      activeUser?.cards
        ?.map((e) => e.number)
        ?.includes(cardNumberRef.current.value)
    ) {
      setFieldsValid(true);
      setCardNumbeValid(false);
      setCvvValid(true);
    } else if (cardCvvRef.current.value < 3) {
      setFieldsValid(true);
      setCardNumbeValid(true);
      setCvvValid(false);
    } else {
      const card = {
        number: cardNumberRef.current.value,
        cvv: cardCvvRef.current.value,
        expiryDate: cardExpiryRef.current.value,
        balance: cardBalanceRef.current.value,
      };
      const index = users.findIndex((e) => e.email === activeUser.email);
      dispatch(addCard({ id: index, card: card }));
      closeModal();
    }
  };
  return (
    <>
      <div className="modal-overlay" onClick={closeModal}></div>
      <div className="modal-container">
        <h4>Add a Card</h4>
        <form className="mt-4">
          <label htmlFor="card-number" className="form-label">
            Card Number
          </label>
          <input
            type="tel"
            className="form-control"
            maxLength="12"
            id="card-number"
            placeholder="Enter Your Card Number"
            ref={cardNumberRef}
          ></input>
          <p className={`alert-text  ${cardNumberValid ? "hidden" : ""}`}>
            Enter Valid Card Number !
          </p>

          <label htmlFor="cvv" className="form-label">
            Card Cvv
          </label>
          <input
            type="tel"
            pattern="\d{3}"
            maxLength="3"
            className="form-control"
            id="cvv"
            placeholder="Enter Card's Cvv"
            ref={cardCvvRef}
          ></input>
          <p className={`alert-text  ${cardCvvValid ? "hidden" : ""}`}>
            Enter Valid Cvv !
          </p>

          <label htmlFor="card-expiry-date" className="form-label">
            Card expiry
          </label>
          <input
            type="date"
            className="form-control"
            id="card-expiry-date"
            placeholder="Enter Card's Expiry Date"
            ref={cardExpiryRef}
          ></input>
          <label htmlFor="card-balance" className="form-label">
            Card Balance
          </label>

          <input
            type="number"
            className="form-control"
            id="card-balance"
            placeholder="Enter Balance"
            ref={cardBalanceRef}
          ></input>
          <p className={`alert-text  ${fieldsValid ? "hidden" : ""}`}>
            All Fields must be filled !
          </p>
          <div style={{ marginRight: "30px" }}>
            <button onClick={closeModal}>Close</button>
            <button className="add-card-btn-modal" onClick={addCardHandler}>
              Add Card
            </button>
          </div>
        </form>
      </div>
    </>
  );
};

export default AddCardModal;
