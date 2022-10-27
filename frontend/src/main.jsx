import React from "react";
import ReactDOM from "react-dom/client";
import AgeGate from "@pages/AgeGate";
import App from "./App";

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(
  <React.StrictMode>
    <App />
    <AgeGate />
  </React.StrictMode>
);
