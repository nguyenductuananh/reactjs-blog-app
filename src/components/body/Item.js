import React, { Component } from 'react';
import "../../scss/item.scss";
class Item extends Component {
    render() { 
        return (
            <div className="item">
                <img alt="cover-pic" className="item__cover-img" src="./img/cover.jpg" />
                <div>
                    <h5 className="item__categories">Food</h5>
                    <h5 className="item__title">This is title</h5>
                    <p className="item__desc">This is a first status to test and demo about this website This is a first status to test and demo about this website This is a first status to test and demo about this website</p>
                </div>
            </div>
        );
    }
}
 
export default Item;