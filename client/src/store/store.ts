import { configureStore } from '@reduxjs/toolkit';
import userReducer from './userSlice';
import reposReducer from './reposSlice';

const store = configureStore({
  reducer: {
    user: userReducer,
    repos: reposReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

export default store;
