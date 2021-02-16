import React, { useRef, useState } from "react";
import PropTypes from "prop-types";

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
    <input
      type="text"
      placeholder="Search"
      value={value}
      onChange={handleInputChange}
      className="body__left--input"
    />
  );
}

export default Search;
