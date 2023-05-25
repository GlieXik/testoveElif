import { createSlice } from "@reduxjs/toolkit";

const initialState = [];

export const itemSlice = createSlice({
  name: "item",
  initialState,
  reducers: {
    setAllItems: (state, action) => {
      state.splice(0, state.length, ...action.payload);
    },
  },
});

// Action creators are generated for each case reducer function
export const { setAllItems } = itemSlice.actions;
export const itemReducer = itemSlice.reducer;
