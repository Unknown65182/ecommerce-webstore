import React from "react";
import { Link } from "react-router-dom";
import logo from "./../../assets/logo.png";

import "./styles.scss";

const Header = () => {
  return (
    <header className="header">
      <div className="header__wrapper">
        <div className="header__logo logo">
          <Link to="/">
            <img className="logo__image" src={logo} alt="" />
          </Link>
        </div>
        <div className="header__menu menu">
          <ul className="menu__body">
            <li className="menu__item">
              <Link to="/">Home</Link>
            </li>
            <li className="menu__item">
              <Link to="/registration">Register</Link>
            </li>
          </ul>
        </div>
      </div>
    </header>
  );
};

export default Header;
