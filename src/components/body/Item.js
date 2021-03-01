import React, { Component } from "react";
import Skeleton from "react-loading-skeleton";
class Item extends Component {
  formatDate(dateString) {
    let date = new Date(dateString);
    date = date.toDateString().split(" ");
    let day = date[2];
    let month = date[1];
    let year = date[3];
    return `${month} ${day}, ${year}`;
  }
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
        {item && (
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
              <p className="item__author--created">
                {this.formatDate(item.created)}
              </p>
            </div>
            <p className="item__desc">{item.content.slice(0, 200)}</p>
            <p
              style={{ width: "fit-content" }}
              className="item__more"
              to={`/status/${item._id}`}
            >
              Read More
            </p>
          </div>
        )}
        {!item && (
          <div>
            <h5 className="item__categories">
              <Skeleton />
            </h5>
            <h5 className="item__title">
              <Skeleton />
            </h5>
            <div className="item__author">
              <div className="item__author--info">
                <img
                  className="item__author--avatar"
                  src="https://picsum.photos/600/600"
                />
                <p className="item__author--name">
                  <Skeleton />
                </p>
              </div>
              <p className="item__author--created">
                <Skeleton />
              </p>
            </div>
            <p className="item__desc">
              <Skeleton count={3} width="100%" />
            </p>
            <div className="item__more" style={{ width: "fit-content" }}>
              <Skeleton />
            </div>
          </div>
        )}
      </div>
    );
  }
}

export default Item;
