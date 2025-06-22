import React, { useState } from "react";
import { RES_MENU } from "../utils/contraints";
import { useEffect } from "react";
import { useParams } from "react-router";

const RestaurantItem = () => {
  const [resMenu, setResMenu] = useState(null);

  const { resId } = useParams();

  useEffect(() => {
    fetchMenu();
  }, []);

  const fetchMenu = async () => {
    const data = await fetch(RES_MENU + resId);

    const json = await data.json();
    console.log(json?.data);
    setResMenu(json?.data);
  };

  const resName =
    resMenu?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards[2]?.card?.card
      ?.itemCards;

  console.log(resName, "menu");

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
