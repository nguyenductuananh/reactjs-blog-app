import React, { Component } from "react";
import Skeleton from "react-loading-skeleton";
import "../../scss/categories.scss";
class Categories extends Component {
  render() {
    let categories = this.props.data;
    return (
      <div className="categories">
        <ul className="categories__list">
          {categories &&
            categories.map((c) => (
              <li key={c._id} onClick={() => this.props.onClickCategory(c._id)}>
                <div className="categories__item">
                  <div className="categories__item--title">{c.name}</div>
                </div>
              </li>
            ))}
          {!categories &&
            [1, 2, 3].map((i) => {
              return (
                <li key={i}>
                  <div className="categories__item">
                    <div className="categories__item--title">
                      <Skeleton height={20} width={100} />
                    </div>
                  </div>
                </li>
              );
            })}
        </ul>
      </div>
    );
  }
}

export default Categories;
