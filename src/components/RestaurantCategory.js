import React, { useState } from "react";
import { CDN_URL } from "../utils/contraints";
import ItemsList from "./ItemsList";

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
          <ItemsList category={category} />
        </>
      )}
    </div>
  );
};

export default RestaurantCategory;
