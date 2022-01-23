import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import { BrowserRouter } from "react-router-dom";
import { Provider as ReduxProvider } from "react-redux";
import { store } from "./components/redux/store";
import { TokenContextProvider } from "./components/Contexts/TokenContext";

ReactDOM.render(
  <React.StrictMode>
    <ReduxProvider store={store}>
      <TokenContextProvider>
        <BrowserRouter>
          <App />
        </BrowserRouter>
      </TokenContextProvider>
    </ReduxProvider>
  </React.StrictMode>,

  document.getElementById("root")
);
