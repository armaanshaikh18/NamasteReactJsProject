import React from "react";
import foodLogo from "../images/biryani.jpg";
import { useDispatch } from "react-redux";
import { addItems } from "../redux/cartSlice";
const ItemsList = ({ category }) => {
  console.log(category, "Main data");

  if (!category || !category.itemCards) return <p>No items found</p>;
  const dispatch = useDispatch();

  const handleAddItem = (item) => {
    dispatch(addItems(item));
  };
  return (
    <div className="mainData">
      {category?.itemCards?.map((item) => {
        return (
          <div key={item?.card?.info?.id} className="catBody">
            <div className="categoryName">
              <span>{item?.card?.info?.name} </span>
              <span>
                - ₹
                {item?.card?.info?.price
                  ? item?.card?.info?.price / 100
                  : item?.card?.info?.defaultPrice / 100}
              </span>
              <p>{item?.card?.info?.description}</p>
            </div>
            <div className="foodCategory">
              <div className="btnMain">
                <button className="btnAdd" onClick={() => handleAddItem(item)}>
                  Add +
                </button>
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
    </div>
  );
};

export default ItemsList;
