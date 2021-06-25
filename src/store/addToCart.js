import { createSlice } from "@reduxjs/toolkit";

const addToCartInitialState = { addItems: [] };

const addToCartSlice = createSlice({
  name: "additem",
  initialState: addToCartInitialState,
  reducers: {
    addToCart: (state, action) => {
      const existingItem = state.addItems.find(
        (item) => item.id === action.payload.id
      );
      if (existingItem) {
        existingItem.quantity += 1;
      } else {
        action.payload.quantity = 1;
        state.addItems.push(action.payload);
      }
    },
    increaseQuantity: (state, action) => {
      const currentItem = state.addItems.find(
        (item) => item.id === action.payload.id
      );

      currentItem.quantity += 1;
    },
    decreaseQuantity: (state, action) => {
      const currentItem = state.addItems.find(
        (item) => item.id === action.payload.id
      );

      currentItem.quantity -= 1;
      if (currentItem.quantity === 0) {
        state.addItems = state.addItems.filter((item) => item !== currentItem);
      }
    },
  },
});

const addToCartReducer = addToCartSlice.reducer;

export const addToCartActions = addToCartSlice.actions;
export default addToCartReducer;
