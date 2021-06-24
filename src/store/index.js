import { configureStore } from "@reduxjs/toolkit";

import toggleReducer from "./toggleCart";
import addToCartReducer from "./addToCart";

const store = configureStore({
  reducer: { toggleCart: toggleReducer, addToCart: addToCartReducer },
});

export default store;
