/* eslint-disable no-param-reassign */
import { createSlice } from '@reduxjs/toolkit';
import type { PayloadAction } from '@reduxjs/toolkit';
import { IProduct } from 'types/productTypes';

export interface ICartItem extends IProduct {
  quantity: number;
}

export interface IUserState {
  cartItems: ICartItem[];
}

const initialState: IUserState = {
  cartItems: [],
};

export const cartSlice = createSlice({
  name: 'cart',
  initialState,
  reducers: {
    setCartItems: (state, action: PayloadAction<ICartItem>) => {
      state.cartItems.push(action.payload);
    },
    addToCart: (state, action: PayloadAction<ICartItem>) => {
      const { id, quantity } = action.payload;
      // Check if the item is already in the cart
      const existingItem = state.cartItems.find((item) => item.id === id);

      if (existingItem) {
        // If it exists, increase the quantity
        existingItem.quantity = (existingItem.quantity || 0) + quantity;
      } else {
        // If it doesn't exist, add the item to the cart with quantity of 1
        state.cartItems.push({ ...action.payload, quantity });
      }
    },
    removeFromCart: (state, action: PayloadAction<number>) => {
      // Find the index of the item in the cart
      const index = state.cartItems.findIndex(
        (item) => item.id === action.payload,
      );

      if (index !== -1) {
        // If the item exists and quantity is greater than 1, reduce it by 1
        if (
          state.cartItems[index].quantity &&
          state.cartItems[index].quantity > 1
        ) {
          state.cartItems[index].quantity -= 1;
        } else {
          // If the quantity is 1, remove the item from the cart
          state.cartItems.splice(index, 1);
        }
      }
    },
  },
});

// Action creators are generated for each case reducer function
export const { setCartItems, addToCart, removeFromCart } = cartSlice.actions;

export default cartSlice.reducer;
