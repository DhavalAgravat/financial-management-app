import { createSlice } from "@reduxjs/toolkit";

const userSlice = createSlice({
  name: "data",
  initialState: {
    users: [],
    activeUser: {},
    loggedIn: false,
  },

  reducers: {
    setUser(state, action) {
      state.users.push(action.payload);
    },
    addCard(state, action) {
      const { id, card } = action.payload;
      state.users[id].cards.push(card);
      state.activeUser?.cards?.push(card);
    },
    setLoggedIn(state, action) {
      state.loggedIn = action.payload;
    },
    setActiveUser(state, action) {
      state.activeUser = { ...action.payload };
    },
  },
});

export const { setUser, addCard, setLoggedIn, setActiveUser } =
  userSlice.actions;

export default userSlice.reducer;
