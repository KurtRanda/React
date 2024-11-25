import React from "react";
import ReactDOM from "react-dom/client"; // Updated for React 18+
import "./index.css";
import "bootstrap/dist/css/bootstrap.min.css";
import App from "./App";
import * as serviceWorker from "./serviceWorker";

serviceWorker.register();

// Create a root and render the App
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
