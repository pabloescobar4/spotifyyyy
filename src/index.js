import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import { BrowserRouter } from "react-router-dom";
import { Provider as ReduxProvider } from "react-redux";
import { Store } from "./components/redux/store";

ReactDOM.render(
  <ReduxProvider store={Store}>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </ReduxProvider>,

  document.getElementById("root")
);
