import { createSlice } from "@reduxjs/toolkit";

const toggleInitialValues = { toggle: true };

const toggleCartSlice = createSlice({
  name: "toggleCart",
  initialState: toggleInitialValues,
  reducers: {
    toggle: (state) => {
      state.toggle = !state.toggle;
    },
  },
});

export const toggleActions = toggleCartSlice.actions;

export default toggleCartSlice.reducer;
