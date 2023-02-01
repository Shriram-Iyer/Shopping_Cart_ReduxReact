import React from "react";
import App from "./Components/App";
import { configureStore } from "@reduxjs/toolkit";
import { logger } from "redux-logger";
import { Provider } from "react-redux";
import allreducer from "./Components/Reducer";
import { createRoot } from "react-dom/client";
const store = configureStore({
  reducer: allreducer,
  middleware: [logger]
});
const container = document.getElementById("root");
const root = createRoot(container);
root.render(
  <Provider store={store}>
    <App />
  </Provider>
);
