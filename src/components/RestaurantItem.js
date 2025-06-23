import React, { useState } from "react";
import { useParams } from "react-router";
import useResMenuHook from "../utils/hooks/useResMenuHook";

const RestaurantItem = () => {
  const { resId } = useParams();

  const resMenu = useResMenuHook(resId);

  const resName =
    resMenu?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards[2]?.card?.card
      ?.itemCards;

  return (
    <div className="main">
      <h1>{resMenu?.cards[2]?.card?.card?.info?.name}</h1>
      <p>{resMenu?.cards[2]?.card?.card?.info?.cuisines.join(", ")}</p>
      <ul>
        {resName?.map((item) => {
          return (
            <li key={item?.card?.info?.id}>
              {item?.card?.info?.name} - {"Rs "}
              {item?.card?.info?.defaultPrice / 100}
            </li>
          );
        })}
      </ul>
    </div>
  );
};

export default RestaurantItem;
