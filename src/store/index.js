import { configureStore } from '@reduxjs/toolkit';

import scoreSlice from './scoreSlice';
import quizSlice from './quizSlice'


const store = configureStore({
  reducer: { store: scoreSlice.reducer , quiz : quizSlice.reducer},
});

export default store;