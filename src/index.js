// index.js
import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import { AuthProvider } from "./context/AuthContext";
import { AnalyticsProvider } from "./context/AnalyticsContext";
import "bootstrap/dist/css/bootstrap.min.css";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <AuthProvider>
    <AnalyticsProvider>
      <App />
    </AnalyticsProvider>
  </AuthProvider>
);
