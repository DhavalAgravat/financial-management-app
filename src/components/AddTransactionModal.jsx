import React from "react";
import "./styles/AddTransactionModal.css";
import { useFormik } from "formik";
import { useSelector } from "react-redux";
import * as Yup from "yup";

const TransactionSchema = Yup.object({
  name: Yup.string().max(25).required("Enter Name First"),
  category: Yup.string().required("Please Enter Category"),
  amount: Yup.number()
    .positive("Amount must be positive")
    .required("Please Enter Amount"),
  date: Yup.date().required("Select Date"),
  card: Yup.string().required("Select Card"),
  status: Yup.string().required("Select Status"),
});

const initialValues = {
  name: "",
  category: "",
  amount: "",
  date: "",
  card: "",
  status: "",
};

const AddTransactionModal = ({ closeModal }) => {
  const activeUser = useSelector((state) => state.users.activeUser);

  const { values, touched, errors, handleBlur, handleChange, handleSubmit } =
    useFormik({
      initialValues: initialValues,
      validationSchema: TransactionSchema,
      onSubmit: (values) => {
        let card = activeUser.cards.find((e) => {
          if (e.number === values.card) {
            return e;
          }
        });

        if (values.amount <= card.balance) {
          console.log("working");
        }
      },
    });

  return (
    <>
      <div className="modal-overlay" onClick={closeModal}></div>
      <div className="modal-container">
        <h4>Add a Transaction</h4>
        <form className="form-modal-box" onSubmit={handleSubmit}>
          <label htmlFor="trans-name" className="form-label">
            Name
          </label>
          <input
            type="text"
            maxLength="12"
            name="name"
            id="trans-name"
            placeholder="Enter Transaction Name"
            value={values.name}
            onChange={handleChange}
            onBlur={handleBlur}
          ></input>
          {errors.name && touched.name ? (
            <p className="alert-text">{errors.name}</p>
          ) : null}

          <label htmlFor="category" className="form-label">
            Category
          </label>
          <input
            type="text"
            name="category"
            id="category"
            placeholder="Enter Category"
            value={values.category}
            onChange={handleChange}
            onBlur={handleBlur}
          ></input>
          {errors.category && touched.category ? (
            <p className="alert-text">{errors.category}</p>
          ) : null}

          <label htmlFor="amount" className="form-label">
            Amount
          </label>
          <input
            type="number"
            name="amount"
            id="amount"
            placeholder="Enter Amount"
            value={values.amount}
            onChange={handleChange}
            onBlur={handleBlur}
          ></input>
          {errors.amount && touched.amount ? (
            <p className="alert-text">{errors.amount}</p>
          ) : null}

          <label htmlFor="date" className="form-label">
            Date
          </label>
          <input
            type="date"
            name="date"
            id="date"
            placeholder="Enter Date"
            value={values.date}
            onChange={handleChange}
            onBlur={handleBlur}
          ></input>
          {errors.date && touched.date ? (
            <p className="alert-text">{errors.date}</p>
          ) : null}

          <label htmlFor="cards">Choose a card:</label>
          <select
            name="card"
            id="cards"
            value={values.card}
            onChange={handleChange}
            onBlur={handleBlur}
          >
            {activeUser?.cards?.map((card) => (
              <option key={card.id} value={card.number}>
                {card.number}
              </option>
            ))}
          </select>
          {errors.card && touched.card ? (
            <p className="alert-text">{errors.card}</p>
          ) : null}

          <label htmlFor="status">Select Status</label>
          <select
            name="status"
            id="status"
            value={values.status}
            onChange={handleChange}
            onBlur={handleBlur}
          >
            <option value="Income">Income</option>
            <option value="Expense">Expense</option>
          </select>
          {errors.status && touched.status ? (
            <p className="alert-text">{errors.status}</p>
          ) : null}

          <div style={{ marginRight: "30px" }}>
            <button onClick={closeModal}>Close</button>
            <button className="add-trans-btn-modal" type="submit">
              Add Transaction
            </button>
          </div>
        </form>
      </div>
    </>
  );
};

export default AddTransactionModal;
