import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import { StockProvider } from "./context/StockContext";

ReactDOM.createRoot(document.getElementById("root")).render(
  <StockProvider>
    <App />
  </StockProvider>
);