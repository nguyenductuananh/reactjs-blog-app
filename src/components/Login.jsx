import React, { useState } from "react";
import PropTypes from "prop-types";
import "../scss/css/bootstrap.css";
import { Button, Col, Form, FormGroup, Input, Label } from "reactstrap";
Login.propTypes = { handleFormSubmit: PropTypes.func };

const colElementStyle = {
  margin: "20rem auto",
  fontSize: "1.6rem",
};
function Login(props) {
  const { handleFormSubmit } = props;
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  function handleChange(e, str) {
    let textContent = e.target.value;
    switch (str) {
      case "username": {
        setUsername(textContent);
        break;
      }
      case "password": {
        setPassword(textContent);
        break;
      }
    }
  }
  function handleSubmit(e) {
    const data = { username, password };
    handleFormSubmit(data);
    setUsername("");
    setPassword("");
    e.preventDefault();
  }
  return (
    <Col xs="3" style={colElementStyle}>
      <Form onSubmit={handleSubmit}>
        <FormGroup>
          <Label for="username">Username</Label>
          <Input
            value={username}
            onChange={(e) => handleChange(e, "username")}
            className="username"
            type="text"
          />
        </FormGroup>
        <FormGroup>
          <Label for="password">Password</Label>
          <Input
            value={password}
            onChange={(e) => handleChange(e, "password")}
            className="password"
            type="password"
          />
        </FormGroup>
        <FormGroup className="mt-3">
          <Button color="primary" type="submit">
            Login
          </Button>
        </FormGroup>
      </Form>
    </Col>
  );
}

export default Login;
