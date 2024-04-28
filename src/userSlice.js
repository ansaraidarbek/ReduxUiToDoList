import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  isRegistered: false,
  username: ''
};

export const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {
    registerUser: (state, action) => {
      state.isRegistered = true;
      state.username = action.payload;
    }
  }
});

export const { registerUser } = userSlice.actions;

export default userSlice.reducer;
