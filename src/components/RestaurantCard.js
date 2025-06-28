import React from "react";
import { CDN_URL } from "../utils/contraints";
import foodLogo from "../images/biryani.jpg";

const RestaurantCard = ({ resData }) => {
  return (
    <div className="res-items">
      <img className="foodLogo" src={CDN_URL} alt="foods-items" />
      <h3>{resData?.info?.name}</h3>
      <h4 className="cuisine-item">{resData?.info?.cuisines.join(",")}</h4>
      <h4>{resData?.info?.avgRating}</h4>
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
