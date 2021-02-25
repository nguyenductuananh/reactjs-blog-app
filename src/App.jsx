import "./scss/index.scss";
import React, { useEffect, useState } from "react";
import { default as Header } from "./components/Header";
import Body from "./components/body/Body";
import queryString from "query-string";
import Footer from "./components/Footer";
import {
  BrowserRouter as Router,
  Redirect,
  Route,
  Switch,
  withRouter,
} from "react-router-dom";
import StatusDetail from "./components/StatusDetail";
import Login from "./components/Login";
import { useCookies } from "react-cookie";
import WriteBlog from "./components/WriteBlog";

function App() {
  const [filters, setFilters] = useState({ page: 1, limit: 3 });
  const [max, setMax] = useState(0);
  const [isLoading, setIsLoading] = useState(false);
  const [categories, setCategories] = useState(null);
  const [items, setItems] = useState(null);
  const [isShowAll, setIsShowAll] = useState(true);
  const [cookies, setCookie] = useCookies(["id", "name"]);
  let urlPattern = "http://localhost:1902/api";

  //Post Object
  const postObjectFormat = (data) => ({
    method: "POST", // *GET, POST, PUT, DELETE, etc.
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(data), // body data type must match "Content-Type" header
  });

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
    let cateRes = await fetch(urlPattern + "/category");
    let itemRes = await fetch(
      urlPattern + "/status?" + queryString.stringify(filters)
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
  async function handleLogin(data) {
    const postObject = postObjectFormat(data);
    fetch(`${urlPattern}/account`, postObject)
      .then((res) => res.json())
      .then((resData) => {
        if (resData._id) {
          setCookie("name", resData.name);
          setCookie("id", resData._id);
        } else {
          let err = "Wrong username or password!";
          alert(err);
        }
      });
  }

  async function handleAddCategory(data) {
    const postObject = postObjectFormat(data);
    fetch(`${urlPattern}/category`, postObject)
      .then((res) => res.json())
      .then((resData) => {
        if (resData._id) {
          let newCategories = [...categories];
          let lastCate = newCategories.pop();
          newCategories.push({ _id: resData._id, name: data.name });
          newCategories.push(lastCate);
          setCategories(newCategories);
        }
      });
  }

  async function handleAddStatus(data) {
    //Add user's info to the data
    const user = { $id: cookies.id, $db: "User" };
    data.user = user;
    //Format date to post object
    const postObject = postObjectFormat(data);

    //Fetch with POST method
    const response = await fetch(`${urlPattern}/status`, postObject);
    const { _id } = await response.json();
    //Add id to object
    data._id = _id;
    //Add new status and setState
    let newItems = [...items];
    newItems.push(data);
    setItems(newItems);
  }
  return (
    <div className="App">
      <Router>
        <Header
          username={cookies.name}
          onChangeInputValue={handleSearchInputValueChange}
        />
        <div style={{ marginTop: "16rem" }}></div>
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
          <Route path="/post-status">
            <WriteBlog
              categories={categories}
              onAddCategory={handleAddCategory}
              onAddStatus={handleAddStatus}
            />
          </Route>
          <Route exact path="/login">
            {cookies.id ? (
              <Redirect to="./" />
            ) : (
              <Login handleFormSubmit={handleLogin} />
            )}
          </Route>
        </Switch>
      </Router>
      <Footer />
    </div>
  );
}

export default App;
