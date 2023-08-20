import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import MeasurementContextProvider from "./hooks/MeasurementContextProvider";

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <MeasurementContextProvider>
      <App />
    </MeasurementContextProvider>
  </React.StrictMode>
);
