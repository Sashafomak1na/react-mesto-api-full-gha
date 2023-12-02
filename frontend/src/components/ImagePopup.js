import React from "react";

export default function ImagePopup({ card, onClose }) {
  return (
    <div className={`popup popup-full-image ${card ? "popup_opened" : ""}`}>
      <div className="popup__container-full-image">
        <button className="popup__close" type="button" onClick={onClose}></button>
        <img
          className="popup__pic"
          src={card ? card.link : ''}
          alt={card ? card.name : ''}
        />
        <h2 className="popup__pic-directory">{card ? card.name : ''}</h2>
      </div>
    </div>
  )
}