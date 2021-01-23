import React from 'react';

export function Body(props){
    return (
        <div className="body">
            <Categories/>
            <div className="body__items">
                {
                    this.props.items.map((i) => <Item data={i} />)
                }
            </div>
            <div className="body__pagination">
                
            </div>
        </div>

    );
}