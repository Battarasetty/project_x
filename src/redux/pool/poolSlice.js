// poolSlice.js

import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  showHighlights: false,
  isPoolFormOpen: false,
  // Add other initial state properties as needed
};

const poolSlice = createSlice({
  name: "pool",
  initialState,
  reducers: {
    setShowHighlights: (state, action) => {
      state.showHighlights = action.payload;
    },
    setPoolFormOpen: (state, action) => {
      state.isPoolFormOpen = action.payload;
    },
    // Add other reducers as needed
  },
});

export const { setShowHighlights, setPoolFormOpen } = poolSlice.actions;
export default poolSlice.reducer;
