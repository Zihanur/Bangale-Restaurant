import React from "react";
import { Button, Container, Form } from "react-bootstrap";
import { Link } from "react-router-dom";

const Login = () => {
  return (
    <Container className="my-5">
      <h3 className="text-center">Please Login Here</h3>
      <div className="row">
      <Form className=" fs-4 col-md-9 col-lg-6 mx-auto">
        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Label>Email address</Form.Label>
          <Form.Control type="email" placeholder="Enter email" />
        </Form.Group>

        <Form.Group className="mb-3" controlId="formBasicPassword">
          <Form.Label>Password</Form.Label>
          <Form.Control type="password" placeholder="Password" />
        </Form.Group>
        <Form.Group className="mb-3" controlId="formBasicCheckbox">
          <Form.Check type="checkbox" label="Check me out" />
        </Form.Group>
        <Button variant="primary" type="submit" className="fs-5">
          Login
        </Button>
        <div>
          <Form.Text className="text-secondary fs-5">
            Don't Have an Account? <Link to="/register">Register</Link>
          </Form.Text>
        </div>
      </Form>
      </div>
    </Container>
  );
};

export default Login;
