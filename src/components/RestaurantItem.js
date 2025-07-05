import React, { useState } from "react";
import { useParams } from "react-router";

import useResMenuHook from "../utils/hooks/useResMenuHook";
import RestaurantCategory from "./RestaurantCategory";

const RestaurantItem = () => {
  const [toggle, setToggle] = useState(null);

  const { resId } = useParams();

  const resMenu = useResMenuHook(resId);

  const resName =
    resMenu?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards[2]?.card?.card
      ?.itemCards;

  const categoryItems =
    resMenu?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards?.filter(
      (c) =>
        c?.card?.card?.["@type"] ===
        "type.googleapis.com/swiggy.presentation.food.v2.ItemCategory"
    );

  return (
    <div className="mainItem">
      <h1>{resMenu?.cards[2]?.card?.card?.info?.name}</h1>
      <span>{resMenu?.cards[2]?.card?.card?.info?.cuisines.join(", ")}</span>

      {categoryItems?.map((category, index) => (
        <RestaurantCategory
          key={category?.card?.card?.title}
          category={category?.card?.card}
          showIndex={index === toggle ? true : false}
          setToggleFunc={() => setToggle(index)}
        />
      ))}
      {/* <ul>
        {resName?.map((item) => {
          return (
            <li key={item?.card?.info?.id}>
              {item?.card?.info?.name} - {"Rs "}
              {item?.card?.info?.defaultPrice / 100}
            </li>
          );
        })}
      </ul> */}
    </div>
  );
};

export default RestaurantItem;
