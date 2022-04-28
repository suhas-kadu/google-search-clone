import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import "./global.css";
import { BrowserRouter } from "react-router-dom";
import { ResultContextProvider } from "./contexts/ResultContextProvider";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <ResultContextProvider>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </ResultContextProvider>
);
