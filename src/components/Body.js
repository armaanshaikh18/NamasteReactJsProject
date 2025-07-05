import React, { useContext, useEffect, useState } from "react";
import RestaurantCard, { withRestaurantCardLabel } from "./RestaurantCard";
import restaurantList from "../utils/mockData";
import Shimmer from "./Shimmer";
import { Link, useNavigate } from "react-router";
import useOnlineStatusHook from "../utils/hooks/useOnlineHookStatus";
import UserLogin from "../utils/UserLogin";
const Body = () => {
  const [searchText, setSearchText] = useState("");
  const [restaurantListItem, setRestaurantListItem] = useState([]);
  const [restaurantSearchListItem, setRestaurantSearchListItem] = useState([]);

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    const data = await fetch(
      "https://www.swiggy.com/dapi/restaurants/list/v5?lat=12.9351929&lng=77.62448069999999&page_type=DESKTOP_WEB_LISTING"
    );

    const json = await data?.json();

    setRestaurantListItem(
      json?.data?.cards[4]?.card?.card?.gridElements?.infoWithStyle?.restaurants
    );
    setRestaurantSearchListItem(
      json?.data?.cards[4]?.card?.card?.gridElements?.infoWithStyle?.restaurants
    );
  };

  const LabelComponent = withRestaurantCardLabel(RestaurantCard);

  const onlineStatus = useOnlineStatusHook();

  const { setShowContextData, userLogin } = useContext(UserLogin);

  if (onlineStatus === false) {
    return <h1>Please Check your internet connection!</h1>;
  }

  return restaurantListItem?.length === 0 ? (
    <Shimmer />
  ) : (
    <div className="body">
      <div className="filter">
        <div className="search-input">
          <input
            type="text"
            className="search-text"
            value={searchText}
            onChange={(e) => {
              setSearchText(e.target.value);
              console.log(searchText);
            }}
          />
          <button
            onClick={() => {
              const filteredResName = restaurantListItem.filter((item) => {
                return item?.info?.name
                  .toLowerCase()
                  .includes(searchText.toLowerCase());
              });
              setRestaurantSearchListItem(filteredResName);
            }}
          >
            Search
          </button>
          <button
            onClick={() => {
              setSearchText("");
            }}
          >
            Clear
          </button>
        </div>
        <div className="loginInput">
          <label htmlFor="label">Login User : </label>
          <input
            type="text"
            value={userLogin}
            onChange={(e) => setShowContextData(e.target.value)}
          />
        </div>

        <button
          className="filter-btn"
          onClick={() => {
            const filterItem = restaurantListItem.filter((item) => {
              return item?.info?.avgRating > 4;
            });
            setRestaurantListItem(filterItem);
          }}
        >
          Top Rated Restaurant
        </button>
      </div>
      <div className="res-container">
        {restaurantSearchListItem?.map((item) => {
          return (
            <>
              {item?.info?.promoted ? (
                <LabelComponent resData={item} />
              ) : (
                <RestaurantCard resData={item} />
              )}
            </>
          );
        })}
      </div>
    </div>
  );
};

export default Body;
