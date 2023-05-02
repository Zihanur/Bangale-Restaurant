import React, { useContext } from "react";
import { Button, Container, Form } from "react-bootstrap";
import { Link } from "react-router-dom";
import { AuthContext } from "../../../Providers/AuthProviders/AuthProviders";
import { FaGithubSquare, FaGooglePlusSquare } from "react-icons/fa";

const Login = () => {
  
  const {logIn} = useContext(AuthContext);

  const handleLogin = event =>{
    event.preventDefault();
    const form = event.target;
    const email = form.email.value;
    const password = form.password.value;
    console.log(email,password)
    logIn(email,password)
    .then((result)=>{
      console.log(result.user)
    })
    .catch((error)=>{
      console.log(error)
    })
  }

  return (
    <Container className="my-5">
      <h3 className="text-center">Please Login Here</h3>
      <div className="row">
      <Form onSubmit={handleLogin} className=" fs-4 col-md-9 col-lg-6 mx-auto">
        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Label>Email address</Form.Label>
          <Form.Control type="email" name="email" placeholder="Enter email" required/>
        </Form.Group>

        <Form.Group className="mb-3" controlId="formBasicPassword">
          <Form.Label>Password</Form.Label>
          <Form.Control type="password" name="password" placeholder="Password" required/>
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
      <div className="mt-5 d-flex gap-3 justify-content-center">
      <Button variant="btn btn-outline-dark" type="submit" className="fs-5">
        <FaGooglePlusSquare className="fs-2 text-warning me-1"></FaGooglePlusSquare>
          Google Sign-in
        </Button>
      <Button variant="btn btn-outline-dark" type="submit" className="fs-5">
        <FaGithubSquare className="fs-2 me-1"></FaGithubSquare>
          GitHub Sign-in
        </Button>
      </div>
    </Container>
  );
};

export default Login;
