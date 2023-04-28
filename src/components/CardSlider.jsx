import React, { useState, useEffect } from "react";
import Card from "./Card";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import { setCurrentCard } from "../store/userSlice";
import "./styles/CardSlider.css";

const CardSlider = () => {
  const dispatch = useDispatch();
  const activeUser = useSelector((state) => state.users.activeUser);
  const [selectedIndex, setSelectedIndex] = useState(0);

  useEffect(() => {
    const card = activeUser?.cards[selectedIndex];
    dispatch(setCurrentCard(card));
  }, [selectedIndex, activeUser]);

  const handleNextClick = () => {
    setSelectedIndex((selectedIndex + 1) % activeUser.cards.length);
  };

  const handlePrevClick = () => {
    setSelectedIndex(
      (selectedIndex - 1 + activeUser.cards.length) % activeUser.cards.length
    );
  };

  const { number, expiryDate } = activeUser?.cards[selectedIndex];

  return (
    <div>
      <div>
        <div className="card-item">
          <Card
            key={number}
            className="active"
            number={number}
            expiry={expiryDate}
          />
        </div>
      </div>
      <div className="slider-buttons">
        <button onClick={handlePrevClick}>Prev</button>
        <button onClick={handleNextClick}>Next</button>
      </div>
    </div>
  );
};

export default React.memo(CardSlider);
