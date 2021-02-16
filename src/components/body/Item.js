import React, { Component } from "react";
import "../../scss/item.scss";
class Item extends Component {
  render() {
    let item = this.props.data;
    return (
      <div className="item">
        <div className="item__cover-img">
          <img
            alt="cover-pic"
            className=""
            src="https://picsum.photos/600/600"
          />
        </div>
        <div>
          <h5 className="item__categories">{item.categories.join(", ")}</h5>
          <h5 className="item__title">{item.title}</h5>
          <div className="item__author">
            <div className="item__author--info">
              <img
                className="item__author--avatar"
                src="https://picsum.photos/600/600"
              />
              <p className="item__author--name">Yukine</p>
            </div>
            <p>-</p>
            <p className="item__author--created">19/02/1999</p>
          </div>
          <p className="item__desc">{item.content.slice(0, 200)}</p>
          <a className="item__more" href="./">
            Read More
          </a>
        </div>
      </div>
    );
  }
}

export default Item;
