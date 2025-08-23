import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import App from "./App";
import DataScience from "./DataScience";
import IoT from "./IoT";
import "./index.css"; // your Tailwind/global styles
import './explore.css';
import { Analytics } from "@vercel/analytics/next"


ReactDOM.createRoot(document.getElementById("root")).render(
  <BrowserRouter>
    <Routes>
      <Route path="/" element={<App />} />
      <Route path="/data-science" element={<DataScience />} />
      <Route path="/iot" element={<IoT />} />
    </Routes>
  </BrowserRouter>
);
