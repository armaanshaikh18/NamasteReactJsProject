import React, { useContext } from "react";
import { CDN_URL } from "../utils/contraints";
import UserLogin from "../utils/UserLogin";
import foodLogo from "../images/biryani.jpg";
import { useNavigate } from "react-router";
const RestaurantCard = ({ resData }) => {
  const UserLabel = useContext(UserLogin);
  const navigate = useNavigate();

  return (
    <div
      className="res-items"
      onClick={() => navigate(`/restaurant/${resData?.info?.id}`)}
    >
      <img className="foodLogo" src={foodLogo} alt="foods-items" />
      <h3>{resData?.info?.name}</h3>
      <h4 className="cuisine-item">{resData?.info?.cuisines.join(",")}</h4>
      <h4>{resData?.info?.avgRating}</h4>
      <h4>{UserLabel?.userLogin}</h4>
    </div>
  );
};

export const withRestaurantCardLabel = (RestaurantCard) => {
  return (props) => {
    return (
      <>
        <label htmlFor="promoted">Promoted</label>
        <RestaurantCard {...props} />
      </>
    );
  };
};

export default RestaurantCard;
