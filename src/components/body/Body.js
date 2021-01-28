import React, { Component } from 'react';
import "../../scss/body.scss";
import Categories from "./Categories";
import Item from './Item';
export default class Body extends Component{
    state = {}
    async componentDidMount(){
        let data = {};
        let res = await fetch("http://localhost:1902/api/category");
        let categories  = await res.json();
        data.categories = categories;
        await fetch("http://localhost:1902/api/status").then(res => res.json()).then(d => data.items = d);
        this.setState(data);
    }
    render(){
        return (
            <div className="body--bg">
                <div className="body">
                    <div className="body__left">
                        <input type='text' placeholder="Search" className="body__left--input"/>
                        <Categories data={this.state.categories ? this.state.categories : [] } />
                    </div>
                    <div className="body__items">
                        {
                            this.state.items ? (this.state.items.length === 0 ? <h1>Nothing to show</h1> : this.state.items.map(i => <Item key={i._id} data={i} />)) : <h1>Loading...</h1>
                        }
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