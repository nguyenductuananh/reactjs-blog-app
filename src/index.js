import React from "react";
import ReactDOM from "react-dom";
import "react-cookie";
import "./index.css";
import App from "./App.jsx";
import reportWebVitals from "./reportWebVitals";
import { CookiesProvider } from "react-cookie";

ReactDOM.render(
  <React.StrictMode>
    <CookiesProvider>
      <App />
    </CookiesProvider>
  </React.StrictMode>,
  document.getElementById("root")
);

let toggle = false;
//Event for search
let searchIcon = document.getElementsByClassName("search__icon")[0];
let searchInput = document.getElementsByClassName("search__input")[0];

document.addEventListener("click", (event) => {
  if (
    toggle &&
    !event.composedPath().includes(searchIcon) &&
    !event.composedPath().includes(searchInput)
  ) {
    document.getElementsByClassName("search")[0].classList.remove("active");
    toggle = !toggle;
  }
  if (!toggle && event.composedPath().includes(searchIcon)) {
    document.getElementsByClassName("search")[0].classList.add("active");
    toggle = !toggle;
  }
});
// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
