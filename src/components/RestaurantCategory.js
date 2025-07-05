import React, { useState } from "react";
import { CDN_URL } from "../utils/contraints";
import foodLogo from "../images/biryani.jpg";

const RestaurantCategory = ({ category, setToggleFunc, showIndex }) => {
  const handleToggle = () => {
    setToggleFunc();
  };

  return (
    <div className="categoryRes" onClick={handleToggle}>
      <div className="categoryTitle">
        <span>
          {category?.title} ({category.itemCards.length})
        </span>
        <span>🔽</span>
      </div>

      {showIndex && (
        <>
          {category?.itemCards.map((item) => {
            return (
              <div key={item?.card?.info?.id} className="catBody">
                <div className="categoryName">
                  <span>{item?.card?.info?.name} </span>
                  <span>
                    - ₹
                    {item.card.info.price
                      ? item.card.info.price / 100
                      : item.card.info.defaultPrice / 100}
                  </span>
                  <p>{item?.card?.info?.description}</p>
                </div>
                <div className="foodCategory">
                  <div className="btnMain">
                    <button className="btnAdd">Add +</button>
                  </div>
                  <img
                    src={foodLogo}
                    className="imgFood"
                    //   src={CDN_URL + item?.card?.info?.cloudinaryImageId}
                  />
                </div>
              </div>
            );
          })}
        </>
      )}
    </div>
  );
};

export default RestaurantCategory;
