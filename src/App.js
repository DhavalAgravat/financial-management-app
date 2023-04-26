import { Route, BrowserRouter, Routes } from "react-router-dom";
import "./App.css";
import Login from "./pages/Login";
import Signin from "./pages/Signin";
import { Provider } from "react-redux";
import store, { persistor } from "./store/store";
import { PersistGate } from "redux-persist/integration/react";
import Dashboard from "./pages/Dashboard";
import Protected from "./components/Protected";
import { Profiler } from "react";
import Transactions from "./pages/Transactions";
import Wallet from "./pages/Wallet";
import Profile from "./pages/Profile";

function App() {
  return (
    <div className="App">
      <Provider store={store}>
        <PersistGate persistor={persistor}>
          <BrowserRouter>
            <Routes>
              <Route path="/" element={<Login />} />
              <Route path="/signin" element={<Signin />} />
              <Route
                path="/dashboard"
                element={<Protected Component={Dashboard} />}
              />
              <Route
                path="/transactions"
                element={<Protected Component={Transactions} />}
              />
              <Route
                path="/wallet"
                element={<Protected Component={Wallet} />}
              />
              <Route
                path="/profile"
                element={<Protected Component={Profile} />}
              />
            </Routes>
          </BrowserRouter>
        </PersistGate>
      </Provider>
    </div>
  );
}

export default App;
