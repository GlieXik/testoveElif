import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  allTypes: [],
  activeType: null,
};

export const typeSlice = createSlice({
  name: "type",
  initialState,
  reducers: {
    setAllTypes: (state, action) => {
      state.allTypes = action.payload;
    },
    setActiveType: (state, action) => {
      state.activeType = action.payload;
    },
  },
});

// Action creators are generated for each case reducer function
export const { setAllTypes, setActiveType } = typeSlice.actions;
export const typeReducer = typeSlice.reducer;
