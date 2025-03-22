// src/redux/authSlice.js
import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  token: localStorage.getItem('authToken') || null,
  isAuthenticated: !!localStorage.getItem('authToken'),
  userInfo: {
    username: '',
    email: '',
  },
};

const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    loginSuccess(state, action) {
      state.token = action.payload.token;
      state.isAuthenticated = true;
      localStorage.setItem('authToken', action.payload.token);
    },
    logout(state) {
      state.token = null;
      state.isAuthenticated = false;
      state.userInfo = { username: '', email: '' }; // Clear user info on logout
      localStorage.removeItem('authToken');
    },
    setUserInfo(state, action) {
      state.userInfo = action.payload;
    },
  },
});

export const { loginSuccess, logout, setUserInfo } = authSlice.actions;
export default authSlice.reducer;
