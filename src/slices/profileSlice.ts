import {createSlice} from '@reduxjs/toolkit';

export const initialState = {
  userData: undefined,
};
export const profileSlice = createSlice({
  name: 'profile',
  initialState,
  reducers: {
    setUserData: (state, {payload}) => {
      state.userData = payload;
    },
  },
});

export const {setUserData} = profileSlice.actions;

export default profileSlice.reducer;
