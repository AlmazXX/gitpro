import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import { useSelector } from 'react-redux';
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
        state.logout = true;
      })
      .addCase(logoutUser.fulfilled, (state) => {
        state.logout = false;
      })
      .addCase(logoutUser.rejected, (state) => {
        state.logout = false;
      })
      .addCase(editUser.pending, (state) => {
        state.loading = true;
      })
      .addCase(editUser.fulfilled, (state) => {
        state.loading = false;
      })
      .addCase(editUser.rejected, (state) => {
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

export const useUser = () => useSelector((store: RootState) => store.user);
export default userSlice.reducer;
