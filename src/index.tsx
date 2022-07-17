import React from "react";
import ReactDOM from "react-dom/client";
import App from "./app/App";
import reportWebVitals from "./reportWebVitals";
import { Global, css } from "@emotion/react";
import { fonts } from "./fonts/styles";

const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement
);
root.render(
  <React.StrictMode>
    <Global
      styles={[fonts,css`
      body {
        margin: 0;
        padding: 0;
      }
    `]}
    />
    <App />
  </React.StrictMode>
);

reportWebVitals();
