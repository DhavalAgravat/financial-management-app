import React from "react";
import { useSelector } from "react-redux";
import { deleteCard } from "../store/userSlice";
import { useDispatch } from "react-redux";

const DeleteCardModal = ({ closeModal }) => {
  const dispatch = useDispatch();
  const users = useSelector((state) => state.users.users);
  const activeUser = useSelector((state) => state.users.activeUser);

  function deleteCardHandler() {
    const index = users.findIndex((e) => e.email === activeUser.email);
    dispatch(deleteCard(index));
    closeModal();
  }

  return (
    <>
      <div className="modal-overlay" onClick={closeModal}></div>
      <div className="modal-container">
        <h4>Are You Sure ?? </h4>
        <div>
          <p>Are You Really Want To Delete This Card ? </p>
          <span className="red-text">
            Note : All balance will be lost & Transaction history will not be
            deleted of deleted card
          </span>

          <div style={{ marginRight: "30px" }}>
            <button onClick={closeModal}>Close</button>
            <button
              className="update-card-btn-modal"
              onClick={deleteCardHandler}
            >
              Delete Card
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default DeleteCardModal;
