import { createSlice } from "@reduxjs/toolkit";

const CartSlice = createSlice({
  name: "cart",
  initialState: {
    items: [],
  },

  reducers: {
    addItems: (state, action) => {
      state.items.push(action.payload);
    },

    removeItems: (state, action) => {
      state.items.pop();
    },

    clearItems: (state) => {
      state.items.length = 0;
    },
  },
});

export const { addItems, removeItems, clearItems } = CartSlice.actions;

export default CartSlice.reducer;
