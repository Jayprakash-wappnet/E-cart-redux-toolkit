import { createSlice } from "@reduxjs/toolkit";

const CartSlie = createSlice({
  name: "cart",
  initialState: [],
  reducers: {
    addToCart: (state, action) => {
      // return [...state, action.payload];
      state.push(action.payload);
    },

    removeToCart: (state, action) => {
      return state.filter((items) => items.id !== action.payload.id);
    }
  }
});

export const { addToCart, removeToCart } = CartSlie.actions;
export default CartSlie.reducer;
