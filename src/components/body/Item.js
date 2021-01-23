import React, { Component } from 'react';

class Item extends Component {
    render() { 
        return (
            <div className="item">
                <img className="item__cover-img" src="" />
                <h5 className="item__categories">Food</h5>
                <h5 className="item__title">This is title</h5>
                <p className="item__desc"></p>
            </div>
        );
    }
}
 
export default Item;