// store.js

import { configureStore } from '@reduxjs/toolkit';
import poolReducer from './pool/poolSlice';
import poolFormReducer from './poolFormSection/poolFormSectionSlice'

const store = configureStore({
  reducer: {
    pool: poolReducer,
    poolForm: poolFormReducer
    // Add other reducers here if needed
  },
});

export default store;
