import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import axiosApi from '../axiosApi';
import { IUser, PartialUser } from '../types';
import { RootState } from './store';

interface UserState {
  list: IUser[];
  user: IUser | null;
  loading: boolean;
  total_count: number;
  logout: boolean;
}

const initialState: UserState = {
  list: [],
  user: null,
  loading: false,
  total_count: 0,
  logout: false,
};

const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(getUser.pending, (state) => {
        state.loading = true;
      })
      .addCase(getUser.fulfilled, (state, { payload }) => {
        state.user = payload;
        state.loading = false;
      })
      .addCase(getUser.rejected, (state) => {
        state.loading = false;
      })
      .addCase(logoutUser.pending, (state) => {
        state.loading = true;
      })
      .addCase(logoutUser.fulfilled, (state) => {
        state.loading = false;
      })
      .addCase(logoutUser.rejected, (state) => {
        state.loading = false;
      })
      .addCase(searchUsers.pending, (state) => {
        state.loading = true;
      })
      .addCase(searchUsers.fulfilled, (state, { payload }) => {
        state.list = payload.users;
        state.total_count = payload.total_count;
        state.loading = false;
      })
      .addCase(searchUsers.rejected, (state) => {
        state.loading = false;
      });
  },
});

export const getUser = createAsyncThunk('/getSelf', async () => {
  try {
    const { data } = await axiosApi.get('/users/me');
    return data;
  } catch (error) {
    console.error(error);
  }
});

export const editUser = createAsyncThunk('/edit', async (user: PartialUser) => {
  try {
    await axiosApi.patch('/users/me', user);
  } catch (error) {
    console.error(error);
  }
});

export const logoutUser = createAsyncThunk('/logout', async () => {
  try {
    await axiosApi.delete('users/me');
  } catch (error) {
    console.error(error);
  }
});

export const searchUsers = createAsyncThunk('/search', async (value: string) => {
  try {
    const { data } = await axiosApi.get('/users/search', { params: { user: value } });
    return data;
  } catch (error) {
    console.error(error);
  }
});

export const selectUser = (state: RootState) => state.user.user;
export const selectUsers = (state: RootState) => state.user.list;
export const selectUserLoading = (state: RootState) => state.user.loading;
export const selectUsersTotalCount = (state: RootState) => state.user.total_count;
export default userSlice.reducer;
