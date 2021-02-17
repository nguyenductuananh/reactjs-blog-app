import React, { useRef, useState } from "react";
import PropTypes from "prop-types";

import "../../scss/search.scss";
Search.propTypes = {
  onChangeValue: PropTypes.func,
};
Search.defaultProps = {
  onChangeValue: null,
};
function Search(props) {
  const [value, setValue] = useState("");
  const { onChangeValue } = props;
  const typingTimeOut = useRef(null);
  function handleInputChange(e) {
    let search = {
      name: e.target.value,
    };
    setValue(search.value);

    if (typingTimeOut.current) {
      clearTimeout(typingTimeOut.current);
    }
    typingTimeOut.current = setTimeout(() => {
      //Prop passing from body to process a onChange event
      onChangeValue(search);
    }, 400);
  }
  return (
    <div className="search">
      <img alt="magnifier" className="search__icon" src="./magnifier.svg" />
      <input
        type="text"
        placeholder="Search"
        className="search__input"
        value={value}
        onChange={handleInputChange}
      />
    </div>
  );
}

export default Search;
