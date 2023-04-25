import { configureStore } from "@reduxjs/toolkit";
import userReducer from "./userSlice";
import { persistStore, persistReducer } from "redux-persist";
import storage from "redux-persist/lib/storage";

const perssistConfig = {
  key: "root",
  storage,
};

// //*  Configure store and add exported reducer to store reducers
// const store = configureStore({
//   reducer: {
//     users: userReducer,
//   },
// });

const persistedReducer = persistReducer(perssistConfig, userReducer);

//*  Configure store and add exported reducer to store reducers
const store = configureStore({
  reducer: {
    users: persistedReducer,
  },
});

//! Setting persistor using persist store
const persistor = persistStore(store);

export default store;

export { persistor };
