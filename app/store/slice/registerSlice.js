import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';
import { handleTabClick } from './modalSlice';
import { Api } from '@/components/api';

const backendURL =Api;

export const registerUser = createAsyncThunk(
  'users/register',
  async (data, { rejectWithValue, dispatch }) => {
    const number = data.phone.replace(/\D/g, '');
    try {
      const config = {
        headers: {
          'Content-Type': 'application/json',
        },
      };
      const user = await axios.post(
        `${backendURL}users/register/`,
        {
          phone: number,
          full_name: data.full_name,
          password: data.password,
        },
        config,
      );
      const phone = data.phone;
      dispatch(autoRegister(phone));
      dispatch(handleTabClick(4));
      return user;
    } catch (error) {
      return rejectWithValue(error.response);
    }
  },
);

const registerSlice = createSlice({
  name: 'signup',
  initialState: {
    isUser: false,
    loading: false,
    phone: '',
    error: null,
    success: false,
  },
  reducers: {
    autoRegister: (state, action) => {
      state.phone = action.payload;
    },
  },
  extraReducers: (builder) => {
    builder.addCase(registerUser.pending, (state) => {
      state.loading = true;
      state.error = null;
    });
    builder.addCase(registerUser.fulfilled, (state, action) => {
      state.loading = false;
      state.userInfo = action.payload;
    });
    builder.addCase(registerUser.rejected, (state, action) => {
      state.loading = false;
      state.error = action.payload.data;
    });
  },
});
export const { autoRegister } = registerSlice.actions;
export default registerSlice.reducer;
