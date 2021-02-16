import React, { Component } from "react";
import "../../scss/categories.scss";
class Categories extends Component {
  render() {
    return (
      <div className="categories">
        <ul className="categories__list">
          {this.props.data.map((c) => (
            <li key={c._id} onClick={() => this.props.onClickCategory(c.name)}>
              <div className="categories__item">
                <div className="categories__item--title">{c.name}</div>
              </div>
            </li>
          ))}
        </ul>
      </div>
    );
  }
}

export default Categories;
