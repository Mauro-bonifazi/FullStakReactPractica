import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import reportWebVitals from "./reportWebVitals";

import PagesUsers from "./pages/PagesUsers";
import ComponetePadre from "./components/ComponetePadre";
import Header from "./components/Header";
import Footer from "./components/Footer";
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <Header />
    <ComponetePadre />

    <PagesUsers />
    <Footer />
     </React.StrictMode>
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import AdivineComponente from "./Components/AdivineComponente";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <AdivineComponente />
    <App />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
