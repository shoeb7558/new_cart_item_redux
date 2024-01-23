import { createSlice } from "@reduxjs/toolkit";

const cartItemSlice = createSlice({
  name: 'cart',
  initialState: {
    items: [],
    totalQuantity: 0,
  },
  reducers: {
    replaceCart(state, action) {
      state.totalQuantity = action.payload.reduce((acc, item) => acc + item.quantity, 0);
      state.items = action.payload;
    },

    addItemToCart: (state, action) => {
      const newItem = action.payload;

      const existingItem = state.items.find(item => item.id === newItem.id);

      if (!existingItem) {
        // If the item is not in the cart, add it
        state.items.push({ id: newItem.id, price: newItem.price, quantity: newItem.quantity || 1, totalPrice: newItem.totalPrice || newItem.price });
      } else {
        // If the item is already in the cart, update its quantity and totalPrice
        existingItem.quantity += newItem.quantity || 1;
        existingItem.totalPrice += newItem.totalPrice || newItem.price;
      }

      state.totalQuantity += newItem.quantity || 1;
    },
    removeItemFromCart: (state, action) => {
      const id = action.payload;
      const existingItemIndex = state.items.findIndex(item => item.id === id);

      if (existingItemIndex !== -1) {
        // If the item is in the cart, update its quantity and totalPrice
        const existingItem = state.items[existingItemIndex];
        state.totalQuantity -= existingItem.quantity;

        // Create a new array without the item to be removed
        state.items = state.items.filter(item => item.id !== id);
      }
    },
  },
});

export const CartActions = cartItemSlice.actions;
export default cartItemSlice.reducer;
