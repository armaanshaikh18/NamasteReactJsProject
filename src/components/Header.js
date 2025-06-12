import React from "react";
import logo from "../images/food_img.jpg";
const Header = () => {
  return (
    <div className="header-main">
      <div className="img-logo">
        <img className="logo" src={logo} alt="foodLogo" />
      </div>
      <div className="nav-items">
        <ul>
          <li>Home</li>
          <li>About Us</li>
          <li>Contact Us</li>
          <li>Orders</li>
        </ul>
      </div>
    </div>
  );
};

export default Header;
