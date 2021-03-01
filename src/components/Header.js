import React from "react";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";
import Search from "./body/Search";

Header.propTypes = {
  username: PropTypes.string,
  onChangeInputValue: PropTypes.func,
};

Header.defaultProps = {
  username: null,
  onChangeInputValue: null,
};

function Header(props) {
  const { onChangeInputValue, username } = props;
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
          <Link to={username ? "/post-status" : "/login"}>
            <li className="header__nav--item">Write a blog</li>
          </Link>
        </ul>
        <Search onChangeValue={onChangeInputValue} />
        {username ? (
          <h3 className="header__username">Hello, {`${username}`}</h3>
        ) : (
          <Link className="header__nav--item" to="/login">
            Login now!
          </Link>
        )}
      </header>
    </div>
  );
}

export default Header;
