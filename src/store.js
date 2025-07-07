import { configureStore } from "@reduxjs/toolkit";
import CartSlice from "./redux/cartSlice";

const store = configureStore({
  reducer: {
    cart: CartSlice,
  },
});

export default store;
