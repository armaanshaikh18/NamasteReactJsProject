import React, { useContext, useState } from "react";
// import logo from "../images/food_img.jpg";
import { Link, useNavigate } from "react-router";
import useOnlineStatusHook from "./../utils/hooks/useOnlineHookStatus";
import About from "./About";
import UserLogin from "../utils/UserLogin";
import { useSelector } from "react-redux";

const Header = () => {
  const [loginBtn, setLoginBtn] = useState("Login");

  const onlineStatus = useOnlineStatusHook();

  const UserData = useContext(UserLogin);
  const navigate = useNavigate();

  const cartItem = useSelector((state) => state.cart.items);

  return (
    <div className="header-main">
      <div className="img-logo">
        <img className="logo" src={logo} alt="foodLogo" />
      </div>
      <div className="nav-items">
        <ul>
          <li>Online Status : {onlineStatus === true ? "🟢" : "🔴"}</li>
          <li>
            <Link to={"/"}>Home</Link>
          </li>
          <li>
            <Link to={"/about"}>About Us</Link>
          </li>
          <li>
            <Link to={"/contact"}>Contact Us</Link>
          </li>
          <li onClick={() => navigate("/cart")}>
            Cart - ({cartItem.length}) items
          </li>
          <li className="userText">Login User : {UserData?.userLogin}</li>
          <button
            onClick={() => {
              loginBtn === "Login"
                ? setLoginBtn("Logout")
                : setLoginBtn("Login");
            }}
          >
            {loginBtn}
          </button>
        </ul>
      </div>
    </div>
  );
};

export default Header;
