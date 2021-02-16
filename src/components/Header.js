import React from "react";
import "../scss/header.scss";
function Header() {
  return (
    <div className="header">
      <header>
        <h1 className="header__logo">Yukine</h1>
        <ul className="header__nav">
          <li className="header__nav--item">
            <a href="./">Home</a>
          </li>
          <li className="header__nav--item">
            <a href="./">About Me</a>
          </li>
        </ul>
      </header>
    </div>
  );
}

export default Header;
