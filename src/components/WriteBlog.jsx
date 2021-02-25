import React, { useEffect, useState } from "react";
import PropTypes from "prop-types";
import {
  Row,
  Button,
  Form,
  FormGroup,
  Input,
  Label,
  Container,
} from "reactstrap";
import "../scss/css/bootstrap.css";
WriteBlog.propTypes = {
  categories: PropTypes.array,
  onAddCategory: PropTypes.func,
  onAddStatus: PropTypes.func,
};
WriteBlog.defaultProps = {
  categories: [],
  onAddCategory: null,
  onAddStatus: null,
};
function WriteBlog(props) {
  const { categories, onAddCategory, onAddStatus } = props;
  const [title, setTitle] = useState("");
  const [imgPath, setImgPath] = useState("");
  const [category, setCategory] = useState("");
  const [choosedCategories, setChoosedCategories] = useState([]);
  const [content, setContent] = useState([]);
  const [showInput, setShowInput] = useState(false);
  function handleInputChangeValue(value, str) {
    switch (str) {
      case "title":
        setTitle(value);
        break;
      case "content":
        setContent(value);
        break;
      case "imgPath":
        setImgPath(value);
        break;
      case "category":
        setCategory(value);
        break;
    }
  }
  useEffect(() => {
    if (showInput) {
      document.querySelector("#add-btn").textContent = "Cancel";
    } else {
      document.querySelector("#add-btn").textContent = "Add";
    }
  }, [showInput]);
  function handleClickAddCategoryBtn() {
    setShowInput(!showInput);
  }
  function handleCheckBox(target) {
    let newCategories = [...choosedCategories];
    let value = target.value;
    if (target.checked) {
      newCategories.push(value);
    } else {
      let index = newCategories.indexOf(value);
      if (index >= 0) newCategories.splice(index, 1);
    }
    setChoosedCategories(newCategories);
  }

  function handleAddCategory(e) {
    if (e.code === "Enter") {
      const data = { name: category };
      onAddCategory(data);
      setShowInput(!showInput);
    }
  }

  function handleFormSubmit(e) {
    const data = {
      categories: choosedCategories,
      content,
      imgPath,
      title,
      created: new Date().toISOString(),
    };
    onAddStatus(data);
    e.preventDefault();
  }
  const containerStyle = { fontSize: "1.6rem", marginBottom: "4rem" };
  return (
    <Container style={containerStyle}>
      <Row className="justify-content-center" xs="2">
        <Row>
          <h1 className="text-center mb-5 fs-1">Write about you want😊</h1>
        </Row>
        <div className="w-100"></div>
        <Form onSubmit={(e) => handleFormSubmit(e)}>
          <FormGroup>
            <Label className="fw-bold" for="title">
              Title <span className="fw-normal">(Max : 100 characters)</span>
            </Label>
            <Input
              className="title fs-4"
              value={title}
              onChange={(e) => handleInputChangeValue(e.target.value, "title")}
              maxLength="100"
            />
          </FormGroup>
          <FormGroup>
            <Label className="fw-bold" for="imgPath">
              Cover Pic URL
            </Label>
            <Input
              type="url"
              className="imgPath fs-4"
              value={imgPath}
              onChange={(e) =>
                handleInputChangeValue(e.target.value, "imgPath")
              }
              rows="10"
            />
          </FormGroup>
          <FormGroup>
            <Label className="fw-bold" for="content">
              Content
            </Label>
            <Input
              type="textarea"
              className="content fs-4"
              value={content}
              onChange={(e) =>
                handleInputChangeValue(e.target.value, "content")
              }
              rows="10"
            />
          </FormGroup>
          <FormGroup>
            <Label className="fw-bold">Categories</Label>{" "}
            <Button
              id="add-btn"
              className="fs-4"
              onClick={handleClickAddCategoryBtn}
              type="button"
              color="light"
            >
              Add
            </Button>
            <br></br>
            <div id="bonus-area">
              {showInput && (
                <Input
                  className="category fs-4 mb-3 mt-3"
                  value={category}
                  onChange={(e) => {
                    handleInputChangeValue(e.target.value, "category");
                  }}
                  onKeyUp={(e) => handleAddCategory(e)}
                  placeholder="Eg : World, Toy,...."
                />
              )}
            </div>
            {categories &&
              categories.map((c, index) => (
                <Row key={index} className="mb-2">
                  <Label key={c._id}>
                    <Input
                      type="checkbox"
                      value={c.name.toLowerCase()}
                      onChange={(e) => handleCheckBox(e.target)}
                      disabled={c.name === "All"}
                    />
                    {`${c.name}`}
                  </Label>
                </Row>
              ))}
            {!categories && <h1>Loading</h1>}
          </FormGroup>
          <FormGroup className="d-flex justify-content-center">
            <Button className="fs-4" color="info" type="submit">
              Post
            </Button>
          </FormGroup>
        </Form>
      </Row>
    </Container>
  );
}

export default WriteBlog;
