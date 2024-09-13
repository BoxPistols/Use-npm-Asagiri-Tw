import React from "react";
import ReactDOM from "react-dom/client";
import { ThemeProvider, theme } from "@asagiri-design/tw-mui";
import App from "./App";
import "./index.css";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <ThemeProvider theme={theme}>
      <App />
    </ThemeProvider>
  </React.StrictMode>
);
