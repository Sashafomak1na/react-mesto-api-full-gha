import React from "react";
import BadImg from "../images/avtoriz.svg";
import goodImg from "../images/avtorizz.svg";

export default function InfoTooltip({ isOpen, onClose, isSuccessRegister }) {

  return (
    <div className={`popup popup__name_authentication ${isOpen ? 'popup_opened' : ''}`}>
      <div className="popup__container">

        <button type="button" onClick={onClose} className="popup__close" />
        <img
          className="popup__img"
          src={isSuccessRegister ? goodImg : BadImg}
          alt={isSuccessRegister ? "Вы успешно зарегистрировались!" : "Что-то пошло не так! Попробуйте ещё раз"}
        />
        <h2 className="popup__title_authentication">
          {isSuccessRegister ? "Вы успешно зарегистрировались!" : "Что-то пошло не так! Попробуйте ещё раз"}
        </h2>

      </div>
    </div>
  );
}
