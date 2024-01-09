// whitelistSlice.js
import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  whitelist: [],
};

const whitelistSlice = createSlice({
  name: 'whitelist',
  initialState,
  reducers: {
    addToWhitelist: (state, action) => {
      state.whitelist.push(action.payload);
    },
    // Add other whitelist-related reducers as needed
  },
});

export const { addToWhitelist } = whitelistSlice.actions;
export default whitelistSlice.reducer;
