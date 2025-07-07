import React from "react";
import { useDispatch, useSelector } from "react-redux";
import foodLogo from "../images/biryani.jpg";
import { removeItems, clearItems } from "../redux/cartSlice";
import ItemsList from "./ItemsList";

const Cart = () => {
  const items = useSelector((state) => state.cart.items);

  const dispatch = useDispatch();

  const handleRemove = () => {
    dispatch(removeItems());
  };
  return (
    <div className="items">
      <div className="itemList">
        <h1>Cart - {items?.length}</h1>
        <span>
          <button onClick={() => dispatch(clearItems())}>Remove All</button>
        </span>
        <div className="mainItemData">
          {items?.map((item) => {
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
                    <button className="btnAdd" onClick={() => handleRemove()}>
                      Remove
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
      </div>
    </div>
  );
};

export default Cart;
