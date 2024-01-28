/* eslint-disable no-param-reassign */
import { createSlice } from '@reduxjs/toolkit';
import type { PayloadAction } from '@reduxjs/toolkit';

export interface IUserState {
  isLoggedIn: boolean;
}

const initialState: IUserState = {
  isLoggedIn: !!localStorage.getItem('token'),
};

export const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {
    setIsLoggedIn: (state, action: PayloadAction<boolean>) => {
      state.isLoggedIn = action.payload;
    },
  },
});

// Action creators are generated for each case reducer function
export const { setIsLoggedIn } = userSlice.actions;

export default userSlice.reducer;
