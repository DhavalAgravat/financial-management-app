import { createSlice } from "@reduxjs/toolkit";

const userSlice = createSlice({
  name: "users",
  initialState: {
    users: [],
  },

  reducers: {
    setUser(state, action) {
      state.users.push(action.payload);
    },
  },
});

export const { setUser } = userSlice.actions;

export default userSlice.reducer;
