import React from "react";

export default function PopupWithForm({ title, name, isOpen, onClose, children, onSubmit }) {
	return (
		<div className={`popup popup_${name} ${isOpen ? "popup_opened" : ""}`} >
      <div className="popup__container">
        <form
          className="popup__container-input"
          autoComplete="off"
          name={`form-${name}`}
          onSubmit={onSubmit}
        >
          <button type="button" className="popup__close" onClick={onClose}></button>
          <h2 className="popup__title">{title}</h2>
          <span className={`input-${name}-error input-error`}></span> 
          {children}
          <button className="popup__save" type="submit">Сохранить</button>
        </form>
      </div>
		</div>
	)
}

//span