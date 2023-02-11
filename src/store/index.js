import { configureStore } from '@reduxjs/toolkit';

import scoreSlice from './scoreSlice';


const store = configureStore({
  reducer: { store: scoreSlice.reducer},
});

export default store;