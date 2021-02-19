import React from "react";
import "../scss/loading.scss";

Loading.propTypes = {};

function Loading(props) {
  return (
    <div className="loading">
      <div className="loading__center">Loading...</div>
    </div>
  );
}

export default Loading;
