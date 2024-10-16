import { Provider } from "react-redux";
import ReactDOM from "react-dom/client";
import store from "./store/store";
import React from "react";
import App from "./App";
import "./index.css";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <Provider store={store}>
    <App />
  </Provider>
);
