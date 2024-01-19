import { createSlice } from '@reduxjs/toolkit';

const cartSlice = createSlice({
  name: 'cart',
  initialState: {
    isVisible: false,
  },
  reducers: {
    toggleCartVisibility(state)  {
      state.isVisible = !state.isVisible;
    },
  },
});

export const { toggleCartVisibility } = cartSlice.actions;
export default cartSlice.reducer;
