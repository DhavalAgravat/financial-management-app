import React from "react";
import Card from "./Card";
import { useState } from "react";
import "./CardSlider.css";

const CardSlider = () => {
  const activeUser = JSON.parse(localStorage.getItem("activeUser"));
  const [selectedIndex, setSelectedIndex] = useState(0);
  const handleNextClick = () => {
    setSelectedIndex((selectedIndex + 1) % activeUser.cards.length);
  };

  const handlePrevClick = () => {
    setSelectedIndex(
      (selectedIndex - 1 + activeUser.cards.length) % activeUser.cards.length
    );
  };

  return (
    <div>
      <div className="card-slider">
        {activeUser.cards.map((card, index) => (
          <div
            key={card.number}
            className={`card-item ${index === selectedIndex ? "active" : ""}`}
          >
            <Card number={card.number} expiry={card.expiryDate} />
          </div>
        ))}
      </div>
      <div className="slider-buttons">
        <button onClick={handlePrevClick}>Prev</button>
        <button onClick={handleNextClick}>Next</button>
      </div>
    </div>
  );
};

export default CardSlider;
