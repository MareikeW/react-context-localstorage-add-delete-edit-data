import React from "react";
import ReactDOM from "react-dom";
import App from "./App.js";
import { ContextProvider } from "./context.js";

ReactDOM.render(
  <ContextProvider>
    <App />
  </ContextProvider>,
  document.getElementById("root")
);
