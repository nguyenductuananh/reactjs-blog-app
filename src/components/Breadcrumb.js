import React, { Component } from 'react';

class Breadcrumb extends Component {
    render() { 
        return (
            <div className="breadcrumb">
                <h1 className="breadcrumb__title">Blog</h1>
                <h4 className="breadcrumb__detail">Home = Blog</h4>
            </div>
        );
    }
}
 
export default Breadcrumb;