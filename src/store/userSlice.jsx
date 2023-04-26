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
    addCard(state, action) {
      const { id, card } = action.payload;
      state.users[id].cards.push(card);
    },
  },
});

export const { setUser, addCard } = userSlice.actions;

export default userSlice.reducer;
