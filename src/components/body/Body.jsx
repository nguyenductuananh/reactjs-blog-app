import React, { useEffect, useState } from "react";
import queryString from "query-string";
import Categories from "./Categories";
import Item from "./Item";
import "../../scss/body.scss";

function Body() {
  const [filters, setFilters] = useState({ page: 1, limit: 4 });
  const [categories, setCategories] = useState([]);
  const [items, setItems] = useState([]);
  const [isShowAll, setIsShowAll] = useState(true);
  let urlPattern = "http://localhost:1902/api/";

  function formatPatternUrl(str, filters) {
    let url = `${urlPattern}${str}?${queryString.stringify(filters)}`;
    return url;
  }

  async function handleFilterCategory(category) {
    let newFilter = { ...filters, page: 1, category };
    //Fetch
    let itemRes = await fetch(formatPatternUrl("status", newFilter));
    let itemData = await itemRes.json();
    let newItems = [...itemData.data];

    newFilter.max = itemData.filters.max;
    //setState
    setFilters(newFilter);
    setItems(newItems);
    setIsShowAll(!(newItems.length === newFilter.max));
  }

  async function loadMore() {
    let loadBtn = document.getElementsByClassName("load-btn")[0];
    loadBtn.textContent = "Loading...";
    let newFilters = { ...filters, page: filters.page + 1 };

    setFilters(newFilters);

    let itemRes = await fetch(formatPatternUrl("status", newFilters));
    let itemData = await itemRes.json();
    let newItems = items.concat(itemData.data);

    if (newItems.length === filters.max) {
      setIsShowAll(false);
    }

    setItems(newItems);
    loadBtn.textContent = "More...";
  }

  async function fetchData() {
    let cateRes = await fetch(urlPattern + "category?");
    let itemRes = await fetch(
      urlPattern + "status?" + queryString.stringify(filters)
    );
    let newCategories = await cateRes.json();
    let newItems = await itemRes.json();
    let newFilters = { ...filters, max: newItems.filters.max };
    setFilters(newFilters);
    setCategories(newCategories.data);
    setItems(newItems.data);
  }

  useEffect(() => {
    fetchData();
    return () => {};
  }, []);

  return (
    <div className="body--bg">
      <div className="body">
        <div className="body__left">
          <input
            type="text"
            placeholder="Search"
            className="body__left--input"
          />
          <Categories
            onClickCategory={handleFilterCategory}
            data={categories ? categories : []}
          />
        </div>
        <div className="body__items">
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
          <button className="load-btn" onClick={loadMore}>
            More...
          </button>
        )}
      </div>
    </div>
  );
}

export default Body;
