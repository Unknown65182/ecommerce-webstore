import React from "react";
import "./styles.scss";

import shopMens from "../../assets/shopMens.jpg";
import shopWomens from "../../assets/shopWomens.jpg";

const shopMensStyle = {
  backgroundImage: `url(${shopMens})`,
};

const shopWomensStyle = {
  backgroundImage: `url(${shopWomens})`,
};

const Directory = () => {
  return (
    <div className="directory">
      <div className="directory__item" style={shopMensStyle}>
        <a className="directory__title" href="/">
          <span className="directory__text">Shop Mens</span>
        </a>
      </div>
      <div className="directory__item" style={shopWomensStyle}>
        <a className="directory__title" href="/">
          <span className="directory__text">Shop Womens</span>
        </a>
      </div>
    </div>
  );
};

export default Directory;
