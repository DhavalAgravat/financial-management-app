import { createSlice, current } from "@reduxjs/toolkit";

const userSlice = createSlice({
  name: "data",
  initialState: {
    users: [],
    activeUser: {},
    loggedIn: false,
    currentCard: {},
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
    setCurrentCard(state, action) {
      state.currentCard = { ...action.payload };
    },
    updateCard(state, action) {
      const { cvv, expiry, id } = action.payload;
      state.currentCard.cvv = cvv;
      state.currentCard.expiryDate = expiry;

      state.activeUser?.cards?.forEach((e) => {
        if (e.number === state.currentCard.number) {
          e.cvv = cvv;
          e.expiryDate = expiry;
        }
      });

      state.users[id]?.cards?.forEach((e) => {
        if (e.number === state.currentCard.number) {
          e.cvv = cvv;
          e.expiryDate = expiry;
        }
      });
    },
    deleteCard(state, action) {
      state.activeUser?.cards?.forEach((e, i) => {
        if (e.number === state.currentCard.number) {
          state.activeUser.cards.splice(i, 1);
        }
      });

      state.users[action.payload]?.cards?.forEach((e, i) => {
        if (e.number === state.currentCard.number) {
          state.users[action.payload]?.cards.splice(i, 1);
        }
      });

      state.currentCard = {};
    },
  },
});

export const {
  setUser,
  addCard,
  setLoggedIn,
  setActiveUser,
  addTransaction,
  setCurrentCard,
  updateCard,
  deleteCard,
} = userSlice.actions;

export default userSlice.reducer;
