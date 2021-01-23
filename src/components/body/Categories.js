import React, { Component } from 'react';

class Categories extends Component {
    render() { 
        return (
            <div className="categories">
                <h3>Categories</h3>
                <ul className="categories__list">
                {
                    this.props.categories.map((c) => <li>{c}</li>)
                }
                </ul>
            </div>
        );
    }
}
 
export default Categories;