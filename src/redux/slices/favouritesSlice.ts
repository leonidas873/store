/* eslint-disable no-param-reassign */
import { createSlice } from '@reduxjs/toolkit';
import type { PayloadAction } from '@reduxjs/toolkit';

export interface IFavourites {
  favourites: number[];
}

const initialState: IFavourites = {
  favourites: [],
};

export const cartSlice = createSlice({
  name: 'favourites',
  initialState,
  reducers: {
    toggleFavourite: (state, action: PayloadAction<number>) => {
      const id = action.payload;
      if (state.favourites.includes(id)) {
        state.favourites = state.favourites.filter((item) => item !== id);
      } else {
        state.favourites = [...state.favourites, id];
      }
    },
  },
});

export const { toggleFavourite } = cartSlice.actions;

export default cartSlice.reducer;
