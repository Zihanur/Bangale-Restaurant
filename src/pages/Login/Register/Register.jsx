import React from "react";
import { Button, Container, Form } from "react-bootstrap";
import { Link } from "react-router-dom";

const Register = () => {
  return (
    <Container className="my-5">
      <h3 className="text-center">Please Register Here</h3>
      <div className="row">
        <Form className="fs-4 col-md-9 col-lg-6 mx-auto">
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
            Register
          </Button>
          <div>
            <Form.Text className="text-secondary fs-5">
              You have an Account? <Link to="/login">Login</Link>
            </Form.Text>
          </div>
        </Form>
      </div>
    </Container>
  );
};

export default Register;
