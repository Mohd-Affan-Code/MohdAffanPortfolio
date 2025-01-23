import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./utils/i18.jsx";
import "./index.css";
import App from "./App.jsx";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <App />
  </StrictMode>
);
