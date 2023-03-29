import { createSlice } from '@reduxjs/toolkit';

const isLoginSlice = createSlice({
  name: 'isLogin',
  initialState: {
    value: false
  },
  reducers: {
    login: state => {
      state.value = true;
    },
    logut: state => {
      state.value = false;
    }
  }
});

export const { login, logut } = isLoginSlice.actions;

export default isLoginSlice.reducer;
