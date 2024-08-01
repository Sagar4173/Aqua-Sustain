// src/index.js
import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import AboutUs from "./components/AboutUs";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <AboutUs />
  </React.StrictMode>
);
