import React, { Component } from "react";
import "../../scss/categories.scss";
class Categories extends Component {
  render() {
    return (
      <div className="categories">
        <h3 className="categories__title">Categories</h3>
        <ul className="categories__list">
          {this.props.data.map((c) => (
            <li
              key={c._id}
              onClick={() => this.props.onClickCategory(c.name)}
              className="categories__item"
            >
              {c.name}
            </li>
          ))}
        </ul>
      </div>
    );
  }
}

export default Categories;
