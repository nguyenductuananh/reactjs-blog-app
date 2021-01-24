import React, { Component } from 'react';
import "../../scss/categories.scss"
class Categories extends Component {
    render() { 
        return (
            <div className="categories">
                <h3 className="categories__title">Categories</h3>
                <ul className="categories__list">
                    <li className="categories__item">Blog</li>
                    <li className="categories__item">Review</li>
                    <li className="categories__item">Note</li>
                </ul>
            </div>
        );
    }
}
 
export default Categories;