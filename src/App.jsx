import "./scss/index.scss";
import React, { useEffect, useState } from "react";
import { default as Header } from "./components/Header";
import Body from "./components/body/Body";
import queryString from "query-string";
import Footer from "./components/Footer";
function App() {
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
    <div className="App">
      <Header onChangeInputValue={handleSearchInputValueChange} />
      <Body
        onFilterCategory={handleFilterCategory}
        onClickLoadBtn={loadMore}
        data={{ categories, items, isShowAll }}
      />
      <Footer />
    </div>
  );
}

export default App;
