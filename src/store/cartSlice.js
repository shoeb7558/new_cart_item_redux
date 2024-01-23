import { createSlice } from '@reduxjs/toolkit';

const cartSlice = createSlice({
  name: 'cart',
  initialState: {
    isVisible: false,
    notification: null
  },
  reducers: {
    toggleCartVisibility(state)  {
      state.isVisible = !state.isVisible;
    },
    showNotification(state, action){
      state.notification = { status: action.payload.status, title: action.payload.title, message: action.payload.message}
    }
  },
});

export const { toggleCartVisibility, showNotification } = cartSlice.actions;
export default cartSlice.reducer;
