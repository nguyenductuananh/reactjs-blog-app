import React from "react";
import Categories from "./Categories";
import Item from "./Item";
import "../../scss/body.scss";
import PropTypes from "prop-types";

Body.propTypes = {
  onFilterCategory: PropTypes.func,
  data: PropTypes.object, // all data
  onClickLoadBtn: PropTypes.func,
};

Body.defaultProps = {
  onFilterCategory: null,
  data: {},
  onClickLoadBtn: null,
};
function Body(props) {
  const { onFilterCategory, onClickLoadBtn } = props;
  const { categories, items, isShowAll } = props.data;
  return (
    <div className="body--bg">
      <div className="body">
        <div className="body__title">Explore</div>
        <div className="body__categories">
          {/* <Search onChangeValue={handleSearchInputValueChange} /> */}
          <Categories
            onClickCategory={onFilterCategory}
            data={categories ? categories : []}
          />
        </div>
        <div className="body__title">Our Stories</div>
        <br />
        <div className="body__items" id="list">
          {items ? (
            items.length === 0 ? (
              <h1>Nothing to show</h1>
            ) : (
              items.map((i) => <Item key={i._id} data={i} />)
            )
          ) : (
            <h1>Loading...</h1>
          )}
        </div>
      </div>
      <div className="pagination">
        {isShowAll && (
          <button className="load-btn" onClick={onClickLoadBtn}>
            More...
          </button>
        )}
      </div>
    </div>
  );
}

export default Body;
