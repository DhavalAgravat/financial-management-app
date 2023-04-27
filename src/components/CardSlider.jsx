import React from "react";
import Card from "./Card";
import { useState } from "react";
import { useSelector } from "react-redux";
import "./styles/CardSlider.css";

const CardSlider = () => {
  const activeUser = useSelector((state) => state.users.activeUser);
  const [selectedIndex, setSelectedIndex] = useState(0);
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

export default CardSlider;
