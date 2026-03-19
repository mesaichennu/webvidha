import React from "react";
import ReactDOM from "react-dom/client";
import App from "./app/App";              // <- adjust if your App is in another folder
import "./styles/index.css";              // <- path to your main css (tailwind directives)
// import "./styles/fonts.css";              // optional - if you have font file

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);