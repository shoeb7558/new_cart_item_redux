import { createSlice } from '@reduxjs/toolkit';

const cartSlice = createSlice({
  name: 'cart',
  initialState: {
    isVisible: false,
    notification: null,
    items: [],
  },
  reducers: {
    toggleCartVisibility(state)  {
      state.isVisible = !state.isVisible;
    },
    showNotification(state, action){
      state.notification = { status: action.payload.status, title: action.payload.title, message: action.payload.message}
    },
    setCartItems: (state, action) => {
      state.items = action.payload;
    },
  },
});

export const { toggleCartVisibility, showNotification ,setCartItems } = cartSlice.actions;
export default cartSlice.reducer;
