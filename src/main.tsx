import * as React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";

import "styles/index.css";

const rootElement = document.getElementById("root");

if (!rootElement)
  throw new Error("There is no root element found in the `index.html`.");

const reactRoot = ReactDOM.createRoot(rootElement);

reactRoot.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
