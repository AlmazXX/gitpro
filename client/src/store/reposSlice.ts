import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import { useSelector } from 'react-redux';
import axiosApi from '../axiosApi';
import { IRepo } from '../types';
import { RootState } from './store';

interface ReposState {
  list: IRepo[];
  loading: boolean;
}

const initialState: ReposState = {
  list: [],
  loading: false,
};

const reposSlice = createSlice({
  name: 'repos',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(getOwnRepos.pending, (state) => {
        state.loading = true;
      })
      .addCase(getOwnRepos.fulfilled, (state, { payload }) => {
        state.list = payload;
        state.loading = false;
      })
      .addCase(getOwnRepos.rejected, (state) => {
        state.loading = false;
      })
      .addCase(getRepos.pending, (state) => {
        state.loading = true;
      })
      .addCase(getRepos.fulfilled, (state, { payload }) => {
        state.list = payload;
        state.loading = false;
      })
      .addCase(getRepos.rejected, (state) => {
        state.loading = false;
      });
  },
});

export const getOwnRepos = createAsyncThunk('/getOwn', async (isPrivate: boolean) => {
  try {
    const { data } = await axiosApi.get('/repos/own', {
      params: { ...(isPrivate && { visibility: 'private' }) },
    });
    return data;
  } catch (error) {
    console.error(error);
  }
});

export const getRepos = createAsyncThunk('/get', async (user: string) => {
  try {
    const { data } = await axiosApi.get('/repos', { params: { user } });
    return data;
  } catch (error) {
    console.error(error);
  }
});

export const useRepo = () => useSelector((store: RootState) => store.repos);

export default reposSlice.reducer;
