import React from "react";
import { Link, useLocation } from "react-router-dom";
import logo from "../images/logo.svg";



export default function Header({ email, loggedIn, isSign }) {
  const location = useLocation();

  return (
    <header className="header">
      <img className="logo" src={logo} alt="логотип" />
      {loggedIn ? (
        <div className="header__authentication">
          <p>{email}</p>
          <Link className="header__link" to="/signin" onClick={isSign}>
            Выйти
          </Link>
        </div>
      ) : (
        <Link
          className="header__button"
          to={location.pathname === "/signin" ? "/signup" : "/signin"}
        >
          {location.pathname === "/signin" ? "Регистрация" : "Войти"}
        </Link>
      )}
    </header>
  );
}
