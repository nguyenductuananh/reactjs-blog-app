import React, { Component } from 'react';
import "../../scss/body.scss";
import Categories from "./Categories";
import Item from './Item';
export default function Body(props){
    return (
        <div className="body--bg">
            <div className="body">
                <div className="body__left">
                    <input type='text' placeholder="Search" className="body__left--input"/>
                    <Categories />
                </div>
                <div className="body__items">
                    <Item />
                    <Item />
                    <Item />
                    <Item />
                    <Item />
                    <Item />
                </div>
            </div>
            <div className="pagination">
                <div className="pagination__before">1</div>
                <div className="pagination__current">2</div>
                <div className="pagination__after">3</div>
            </div>
        </div>
    );  
}