import React, { Component } from 'react';
import "../../scss/item.scss";
class Item extends Component {
    render() { 
        let item = this.props.data;
        console.log(item);
        return (
            <div className="item">
                <img alt="cover-pic" className="item__cover-img" src="./img/cover.jpg" />
                <div>
                    <h5 className="item__categories">{
                        item.categories.join(", ")
                    }</h5>
                    <h5 className="item__title">{item.title}</h5>
                    <p className="item__desc">{item.content.slice(0, 200)}</p>
                </div>
            </div>
        );
    }
}
 
export default Item;