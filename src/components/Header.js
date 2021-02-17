import React from "react";
import PropTypes from "prop-types";

import "../scss/header.scss";
import Search from "./body/Search";

Header.propTypes = {
  onChangeInputValue: PropTypes.func,
};

Header.defaultProps = {
  onChangeInputValue: null,
};

function Header(props) {
  const { onChangeInputValue } = props;
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
        <Search onChangeValue={onChangeInputValue} />
      </header>
    </div>
  );
}

export default Header;
