import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import ModalProvider from "./ModalContext";
import reportWebVitals from "./reportWebVitals";

ReactDOM.render(
  <ModalProvider>
    <App />
  </ModalProvider>,
  document.getElementById("root")
);

reportWebVitals();
