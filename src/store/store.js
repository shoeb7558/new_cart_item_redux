// store.js
import { configureStore } from '@reduxjs/toolkit';
import cartReducer from './cartSlice'; // Assuming this is the correct import
import cartItemReducer from './cartitemSlice';

const store = configureStore({
  reducer: {
    cart: cartReducer,
    cartItem: cartItemReducer,
  },
});

export default store;
