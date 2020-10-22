import React from "react";
import { Link } from "react-router-dom";
import { auth } from "../../firebase/utils";
import logo from "./../../assets/logo.png";

import "./styles.scss";

const Header = ({ currentUser }) => {
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
            {!currentUser && (
              <>
                <li className="menu__item">
                  <Link to="/registration">Register</Link>
                </li>
                <li className="menu__item">
                  <Link to="/login">Login</Link>
                </li>
              </>
            )}
            {currentUser && (
              <>
                <li className="menu__item">
                  <span onClick={() => auth.signOut()}>Logout</span>
                </li>
              </>
            )}
          </ul>
        </div>
        {currentUser && <img src={currentUser.photoURL} alt="" />}
      </div>
    </header>
  );
};

Header.defaultProps = {
  currentUser: null,
};

export default Header;
