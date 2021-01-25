import React, { Component } from 'react';
import "../../scss/body.scss";
import Categories from "./Categories";
import Item from './Item';
export default class Body extends Component{
    state = {}
    async componentDidMount(){
        console.log("Did Mount")
        let res = await fetch("http://localhost:1902/api/category");
        let data  = await res.json();
        this.setState({categories : data});
    }
    render(){
        console.log("Render")
        return (
            <div className="body--bg">
                <div className="body">
                    <div className="body__left">
                        <input type='text' placeholder="Search" className="body__left--input"/>
                        <Categories data={this.state.categories ? this.state.categories : [] } />
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
}