import { configureStore } from '@reduxjs/toolkit';
import { TypedUseSelectorHook, useDispatch, useSelector } from 'react-redux';
import userReducer from './slices/userSlice';
import cartReducer from './slices/cartSlice';
import favouritesReducer from './slices/favouritesSlice';

export const store = configureStore({
  reducer: {
    user: userReducer,
    cart: cartReducer,
    favourites: favouritesReducer,
  },
});

// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>;
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch;
// Typed useAppSelector hook
export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector;

// Typed useAppDispatch hook
export const useAppDispatch = () => useDispatch<AppDispatch>();
