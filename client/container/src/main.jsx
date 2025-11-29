import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import './index.css';
import "./shared/eventBus.js";  // This runs once and attaches to window

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
