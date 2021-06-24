import { createSlice } from "@reduxjs/toolkit";

const addToCartInitialState = { addItems: [] };

const addToCartSlice = createSlice({
  name: "additem",
  initialState: addToCartInitialState,
  reducers: {
    addToCart: (state, action) => {
      state.addItems.unshift(action.payload);
    },
  },
});

const addToCartReducer = addToCartSlice.reducer;

export const addToCartActions = addToCartSlice.actions;
export default addToCartReducer;
