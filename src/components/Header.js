import React, { useContext, useState } from "react";
import logo from "../images/food_img.jpg";
import { Link } from "react-router";
import useOnlineStatusHook from "./../utils/hooks/useOnlineHookStatus";
import About from "./About";
import UserLogin from "../utils/UserLogin";
const Header = () => {
  const [loginBtn, setLoginBtn] = useState("Login");

  const onlineStatus = useOnlineStatusHook();

  const UserData = useContext(UserLogin);

  console.log(UserData?.userLogin, "login");

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
          <li>
            <Link to={"/restaurant"}>Restaurants</Link>
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
