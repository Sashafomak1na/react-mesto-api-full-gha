import React, { useContext } from "react";
import { CurrentUserContext } from "../contexts/CurrentUserContext";

export default function Card({ card, onCardClick, onCardLike, onCardDelete }) {
  const handleCardClick = () => onCardClick(card);
  const handleLikeClick = () => onCardLike(card);
  const handleDeleteClick = () => onCardDelete(card);

  const currentUser = useContext(CurrentUserContext);
  const isOwn = card.owner === currentUser._id;
  const isLiked = card.likes.some((card) => card === currentUser._id);
  const cardLikeButtonClassName = (`element__like ${isLiked && 'element__likes_active'}`);

  return (
    <CurrentUserContext.Provider value={currentUser}>
      <div className="element">
        <img
          src={card.link}
          alt={card.name}
          className="element__image"
          onClick={handleCardClick}
        />
        {isOwn && (
          <button
            type="button"
            className="element__delete"
            onClick={handleDeleteClick}
          />
        )}
        <div className="element__content">
          <h2 className="element__title">{card.name}</h2>
          <div className="element__likes">
            <button
              type="button"
              className={cardLikeButtonClassName}
              onClick={handleLikeClick}
            ></button>
            <span className="element__likes-quantity">
              {card.likes.length}
            </span>
          </div>
        </div>
      </div>
    </CurrentUserContext.Provider>
  );
}









