import React from "react";
import logo from "./../../assets/logo.png";

import "./styles.scss";

const Header = () => {
  return (
    <header className="header">
      <div className="header__wrapper">
        <div className="header__logo logo">
          <a href="/">
            <img className="logo__image" src={logo} alt="" />
          </a>
        </div>
        <div className="header__menu menu">
          <ul className="menu__body">
            <li className="menu__item">
              <a href="/">Home</a>
            </li>
            <li className="menu__item">
              <a href="/">About Us</a>
            </li>
            <li className="menu__item">
              <a href="/">Contacts</a>
            </li>
          </ul>
        </div>
      </div>
    </header>
  );
};

export default Header;
