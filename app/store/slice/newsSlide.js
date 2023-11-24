import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';
import { Api } from '@/components/api';
const backendURL =Api;

export const fetchNewsData = createAsyncThunk(
  'general/api/fetchNews',
  async (page, { rejectWithValue }) => {
    try {
      const response = await axios.get(
        `${backendURL}general/news/?page=${page}`,
      );

      return response;
    } catch (error) {
    
      return rejectWithValue(error);
    }
  },
);

const newsSlice = createSlice({
  name: 'news',
  initialState: {
    data: [],
    currentPage: 1,
    status: 'idle',
    error: null,
  },
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(fetchNewsData.pending, (state) => {
      state.status = 'loading';
    });
    builder.addCase(fetchNewsData.fulfilled, (state, action) => {
      state.status = 'succeeded';
      state.data = action.payload.data;
    });
    builder.addCase(fetchNewsData.rejected, (state, action) => {
      state.status = 'failed';
      state.error = action.payload;
    });
  },
});

export default newsSlice.reducer;
