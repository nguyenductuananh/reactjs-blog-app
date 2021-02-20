import "./scss/index.scss";
import React, { useEffect, useState } from "react";
import { default as Header } from "./components/Header";
import Body from "./components/body/Body";
import queryString from "query-string";
import Footer from "./components/Footer";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import StatusDetail from "./components/StatusDetail";

function App() {
  const [filters, setFilters] = useState({ page: 1, limit: 3 });
  const [max, setMax] = useState(0);
  const [isLoading, setIsLoading] = useState(false);
  const [categories, setCategories] = useState(null);
  const [items, setItems] = useState(null);
  const [isShowAll, setIsShowAll] = useState(true);
  let urlPattern = "http://localhost:1902/api/";

  async function handleFilterCategory(category) {
    let newFilter = {
      ...filters,
      page: 1,
      category: category === "All" ? "" : category,
    };
    setItems(null);
    setIsShowAll(true);
    setFilters(newFilter);
  }

  async function loadMore() {
    setIsLoading(true);
    let newFilters = { ...filters, page: filters.page + 1 };
    setFilters(newFilters);
  }

  async function fetchData() {
    let cateRes = await fetch(urlPattern + "category");
    let itemRes = await fetch(
      urlPattern + "status?" + queryString.stringify(filters)
    );
    let newCategories = await cateRes.json();
    newCategories.data.push({ _id: 0, name: "All" });
    let newItems = items ? [...items] : [];
    let itemsFetchedData = await itemRes.json();
    if (newItems) newItems = newItems.concat(itemsFetchedData.data);

    setCategories(newCategories.data);
    setItems(newItems);
    let newMax = itemsFetchedData.filters.max;
    setMax(newMax);
    if (newItems && newItems.length === newMax) {
      setIsShowAll(false);
    } else {
      setIsShowAll(true);
    }
    setIsLoading(false);
  }
  //onFilterChange
  useEffect(() => {
    fetchData();
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
      <Router>
        <Header onChangeInputValue={handleSearchInputValueChange} />
        <Switch>
          <Route exact path="/">
            <Body
              onFilterCategory={handleFilterCategory}
              onClickLoadBtn={loadMore}
              data={{ categories, items, isShowAll, isLoading }}
            />
          </Route>
          <Route path="/status/:id">
            <StatusDetail />
          </Route>
        </Switch>
      </Router>
      <Footer />
    </div>
  );
}

export default App;
