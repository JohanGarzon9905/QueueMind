import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import App from "./App";
import { AuthProviderWrapper } from "./auth/AuthProvider";

ReactDOM.createRoot(document.getElementById("root")).render(
  <BrowserRouter>
    <AuthProviderWrapper>
      <App />
    </AuthProviderWrapper>
  </BrowserRouter>
);