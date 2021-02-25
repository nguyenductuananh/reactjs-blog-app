import React, { useState } from "react";
import PropTypes from "prop-types";
import "../scss/css/bootstrap.css";
import { Alert, Button, Col, Form, FormGroup, Input, Label } from "reactstrap";
Login.propTypes = { handleFormSubmit: PropTypes.func, errors: PropTypes.array };

Login.defaultProps = {
  handleFormSubmit: null,
  errors: null,
};
const colElementStyle = {
  margin: "20rem auto",
  fontSize: "1.6rem",
};

const loginBtnStyle = {
  fontSize: "1.6rem",
};
function Login(props) {
  const { handleFormSubmit, errors } = props;
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
      {errors && errors.map((err) => <Alert color="warning">{err}</Alert>)}
      <Form className="fs-4" onSubmit={handleSubmit}>
        <FormGroup>
          <Label for="username">Username</Label>
          <Input
            value={username}
            onChange={(e) => handleChange(e, "username")}
            className="username fs-3"
            type="text"
            required
          />
        </FormGroup>
        <FormGroup>
          <Label for="password">Password</Label>
          <Input
            value={password}
            onChange={(e) => handleChange(e, "password")}
            className="password fs-3"
            type="password"
            required
          />
        </FormGroup>
        <FormGroup className="d-flex justify-content-center mt-3">
          <Button style={loginBtnStyle} color="primary" type="submit">
            Login
          </Button>
        </FormGroup>
      </Form>
    </Col>
  );
}

export default Login;
