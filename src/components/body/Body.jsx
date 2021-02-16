import React, { useEffect, useState } from "react";
import queryString from "query-string";
import Categories from "./Categories";
import Item from "./Item";
import "../../scss/body.scss";
import Search from "./Search";

function Body() {
  const [filters, setFilters] = useState({ page: 1, limit: 6 });
  const [max, setMax] = useState(0);
  const [categories, setCategories] = useState([{ _id: 0, name: "All" }]);
  const [items, setItems] = useState([]);
  const [isShowAll, setIsShowAll] = useState(true);
  let urlPattern = "http://localhost:1902/api/";

  async function handleFilterCategory(category) {
    let newFilter = {
      ...filters,
      page: 1,
      category: category === "All" ? "" : category,
    };
    setItems([]);
    setIsShowAll(true);
    setFilters(newFilter);
  }

  async function loadMore() {
    let loadBtn = document.getElementsByClassName("load-btn")[0];
    loadBtn.textContent = "Loading...";
    let newFilters = { ...filters, page: filters.page + 1 };
    setFilters(newFilters);

    loadBtn.textContent = "More...";
  }

  async function fetchData() {
    let cateRes = await fetch(urlPattern + "category");
    let itemRes = await fetch(
      urlPattern + "status?" + queryString.stringify(filters)
    );
    let newCategories = await cateRes.json();
    newCategories.data.push({ _id: 0, name: "All" });
    let newItems = [...items];
    let itemsFetchedData = await itemRes.json();
    newItems = newItems.concat(itemsFetchedData.data);
    setCategories(newCategories.data);
    setItems(newItems);
    let newMax = itemsFetchedData.filters.max;
    setMax(newMax);
    if (newItems.length === newMax) {
      setIsShowAll(false);
    } else {
      setIsShowAll(true);
    }
  }
  //onFilterChange
  useEffect(() => {
    fetchData();
    return () => {};
  }, [filters]);

  function handleSearchInputValueChange(val) {
    let newFilters = { ...filters, page: 1 };
    newFilters.name = val.name;

    setItems([]);
    setIsShowAll(true);
    setFilters(newFilters);
  }
  return (
    <div className="body--bg">
      <div className="body">
        <div className="body__title">Explore</div>
        <div className="body__categories">
          {/* <Search onChangeValue={handleSearchInputValueChange} /> */}
          {/* <Categories
            onClickCategory={handleFilterCategory}
            data={categories ? categories : []}
          /> */}
        </div>
        <div className="body__title">Our Stories</div>
        <br />
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
