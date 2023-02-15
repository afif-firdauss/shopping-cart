import { createSlice } from '@reduxjs/toolkit';
import { data } from 'data';

const cartSlice = createSlice({
  name: 'cart',
  initialState: {
    cart: data
  },
  reducers: {
    removeItem: (state, action) => {
      const removeItem = state.cart.filter((item) => item.id !== action.payload);
      state.cart = removeItem;
    },
    addQuantity: (state, action) => {
      const item = state.cart.find((item) => item.id === action.payload);
      item.quantity++;
    },
    reduceQuantity: (state, action) => {
      const item = state.cart.find((item) => item.id === action.payload);
      if (item.quantity === 1) {
        item.quantity = 1
      } else {
        item.quantity--;
      }
    }
  },
});

export const {
  removeItem,
  addQuantity,
  reduceQuantity
} = cartSlice.actions;
export const cartReducer = cartSlice.reducer;