// This represents our User reducer/slice. Each reducer gets its own file inside of /featu

import { createSlice } from "@reduxjs/toolkit";

//   for initialState, we need to pass a value, inside of which we pass the actual value of our state. Since state is for "User," put the three user params and set them to initialState

// Reducers are for functions that will alter the values of our state

const initialStateValue = { name: "", age: 0, email: "" };

export const userSlice = createSlice({
  name: "user",
  initialState: { value: initialStateValue },
  reducers: {
    login: (state, action) => {
      state.value = action.payload;
    },

    logout: (state) => {
      state.value = initialStateValue;
    },
  },
});

export const { login, logout } = userSlice.actions;

export default userSlice.reducer;
