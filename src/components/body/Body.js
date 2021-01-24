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
                </div>
            </div>
            <div className="body__pagination">
                
            </div>
        </div>
    );
}