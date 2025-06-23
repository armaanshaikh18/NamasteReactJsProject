import React, { useEffect, useState } from "react";
import RestaurantCard from "./RestaurantCard";
import restaurantList from "../utils/mockData";
import Shimmer from "./Shimmer";
import { Link } from "react-router";
import useOnlineStatusHook from "../utils/hooks/useOnlineHookStatus";
const Body = () => {
  const [searchText, setSearchText] = useState("");
  const [restaurantListItem, setRestaurantListItem] = useState([]);
  const [restaurantSearchListItem, setRestaurantSearchListItem] = useState([]);

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    const data = await fetch(
      "https://www.swiggy.com/dapi/restaurants/list/v5?lat=19.1553355&lng=72.943842&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING"
    );

    const json = await data?.json();

    setRestaurantListItem(
      json?.data?.cards[1]?.card?.card?.gridElements?.infoWithStyle?.restaurants
    );
    setRestaurantSearchListItem(
      json?.data?.cards[1]?.card?.card?.gridElements?.infoWithStyle?.restaurants
    );
  };

  const onlineStatus = useOnlineStatusHook();

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
            <Link
              key={item?.info?.parentId}
              to={`/restaurant/${item?.info?.parentId}`}
            >
              <RestaurantCard resData={item} />
            </Link>
          );
        })}
      </div>
    </div>
  );
};

export default Body;
