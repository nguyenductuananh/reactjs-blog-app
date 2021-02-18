import React from "react";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";
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
        <Link to="/">
          <h1 className="header__logo">Yukine</h1>
        </Link>
        <ul className="header__nav">
          <Link to="/">
            <li className="header__nav--item">Home</li>
          </Link>
          <Link to="/about">
            <li className="header__nav--item">About Me</li>
          </Link>
        </ul>
        <Search onChangeValue={onChangeInputValue} />
      </header>
    </div>
  );
}

export default Header;
