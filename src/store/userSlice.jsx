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
    addTransaction(state, action) {
      const { id, trans, cardNum } = action.payload;
      state.users[id].transactions.push(trans);
      state.activeUser?.transactions.push(trans);
      state.users[id].cards.forEach((e) => {
        if (e.number === cardNum) {
          e.balance = Number(e.balance) + Number(trans.amount);
        }
        state.activeUser.cards.forEach((e) => {
          if (e.number === cardNum) {
            e.balance = Number(e.balance) + Number(trans.amount);
          }
        });
      });
    },
  },
});

export const { setUser, addCard, setLoggedIn, setActiveUser, addTransaction } =
  userSlice.actions;

export default userSlice.reducer;
