import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import axiosApi from '../services/axiosApi';
import { IUser } from '../types';
import { RootState } from './store';

interface UserState {
  user: IUser | null;
  loading: boolean;
}

const initialState: UserState = {
  user: null,
  loading: false,
};

const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(getUserData.pending, (state) => {
        state.loading = true;
      })
      .addCase(getUserData.fulfilled, (state, { payload }) => {
        state.user = payload;
        state.loading = false;
      });
  },
});

export const getUserData = createAsyncThunk('user/getUserData', async () => {
  try {
    const { data } = await axiosApi.get('/users/me');

    return data;
  } catch (error) {
    console.error(error);
  }
});

export const selectUser = (state: RootState) => state.user.user;
export default userSlice.reducer;
