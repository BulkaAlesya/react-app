import { configureStore } from '@reduxjs/toolkit';
import { movieSlice } from './reducer';

export const store = configureStore({ 
  reducer: movieSlice, 
  middleware: (getDefaultMiddleware) =>
  getDefaultMiddleware(),
});

