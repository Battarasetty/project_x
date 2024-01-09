// store.js

import { configureStore } from '@reduxjs/toolkit';
import poolReducer from './pool/poolSlice';
import poolFormReducer from './poolFormSection/poolFormSectionSlice'
import whitelistReducer from './whitelistSlice/whitelistSlice'


const store = configureStore({
  reducer: {
    pool: poolReducer,
    poolForm: poolFormReducer,
    whitelist: whitelistReducer,
    // Add other reducers here if needed
  },
});

export default store;
